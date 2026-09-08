import { existsSync, openSync, readSync, closeSync } from 'node:fs';
import path from 'node:path';

function resolve(fileName) {
  const relative = fileName.startsWith('/') ? fileName.slice(1) : fileName;
  return { relative, absolute: path.join(process.cwd(), 'public', relative) };
}

// /public 에 실제 파일이 있을 때만 경로를 돌려준다.
// 파일이 없으면 null 을 반환해 각 섹션이 fallback UI 를 렌더하도록 한다.
// (없는 이미지를 참조해 깨진 이미지가 노출되는 것을 막는다.)
// 서버 컴포넌트에서만 호출할 것. 빌드 시점에 한 번 평가된다.
export function publicAsset(fileName) {
  const { relative, absolute } = resolve(fileName);
  return existsSync(absolute) ? `/${relative}` : null;
}

// PNG 헤더(IHDR)에서 원본 크기를 읽는다.
// next/image 에 정확한 width/height 를 넘겨 비율 왜곡과 레이아웃 시프트를 막기 위함이며,
// 이미지 크기를 읽으려고 별도 의존성을 추가하지 않는다.
export function publicImage(fileName) {
  const { relative, absolute } = resolve(fileName);
  if (!existsSync(absolute)) return null;

  let fd;
  try {
    fd = openSync(absolute, 'r');
    const header = Buffer.alloc(24);
    if (readSync(fd, header, 0, 24, 0) < 24) return null;

    const isPng = header.toString('hex', 0, 8) === '89504e470d0a1a0a' && header.toString('ascii', 12, 16) === 'IHDR';
    if (!isPng) return null;

    const width = header.readUInt32BE(16);
    const height = header.readUInt32BE(20);
    if (!width || !height) return null;

    return { src: `/${relative}`, width, height };
  } catch {
    return null;
  } finally {
    if (fd !== undefined) closeSync(fd);
  }
}

export default publicAsset;
