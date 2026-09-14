'use client';

import { useState } from 'react';
import { Film, Play } from 'lucide-react';
import styles from './help-video.module.scss';

// 가이드 상단의 16:9 영상 카드.
//
// 가이드의 메인 visual 이라 본문보다 먼저 온다. 규칙 두 가지:
//  1) 자동재생하지 않는다. 사용자가 Play 를 눌렀을 때만 player 를 mount 한다.
//  2) 영상 URL 이 아직 없으면 "영상 준비 중" placeholder 로 그린다 —
//     나중에 lib/help-guides.js 의 video.videoUrl 만 채우면 그대로 재생된다.
//
// 새 dependency 없이 iframe(YouTube / Vimeo) 또는 <video>(mp4 등)만 사용한다.

/** YouTube / Vimeo 주소를 embed 주소로 바꾼다. 지원하지 않는 형식이면 null. */
function buildEmbedSrc(videoUrl) {
  if (!videoUrl) return null;

  let url;
  try {
    url = new URL(videoUrl, 'https://plan-sasu.example');
  } catch {
    return null;
  }
  const host = url.hostname.replace(/^www\./, '');

  // 재생 버튼을 누른 뒤에만 이 src 를 mount 하므로 autoplay=1 은 자동재생이 아니라
  // "사용자가 누른 재생"이다.
  if (host === 'youtu.be') {
    const id = url.pathname.replace(/^\//, '');
    return id ? `https://www.youtube.com/embed/${id}?autoplay=1&rel=0` : null;
  }
  if (host.endsWith('youtube.com')) {
    const id = url.searchParams.get('v') || url.pathname.split('/').filter(Boolean).pop();
    return id ? `https://www.youtube.com/embed/${id}?autoplay=1&rel=0` : null;
  }
  if (host.endsWith('vimeo.com')) {
    const id = url.pathname.split('/').filter(Boolean).pop();
    return id ? `https://player.vimeo.com/video/${id}?autoplay=1` : null;
  }
  return null;
}

function isFileVideo(videoUrl) {
  return /\.(mp4|webm|ogg|mov)(\?|#|$)/i.test(videoUrl || '');
}

export function HelpVideo({ video }) {
  const [isPlaying, setIsPlaying] = useState(false);
  if (!video) return null;

  const { title, videoUrl, thumbnail, duration } = video;
  const embedSrc = buildEmbedSrc(videoUrl);
  const canPlay = Boolean(embedSrc) || isFileVideo(videoUrl);

  return (
    <figure className={styles.figure}>
      <div className={styles.frame}>
        {!canPlay && (
          <div className={styles.placeholder}>
            <Film aria-hidden="true" />
            <span>영상 준비 중</span>
          </div>
        )}

        {canPlay && !isPlaying && (
          <button
            type="button"
            className={styles.cover}
            style={thumbnail ? { backgroundImage: `url(${thumbnail})` } : undefined}
            onClick={() => setIsPlaying(true)}
            aria-label={`${title} 영상 재생`}
          >
            <span className={styles.playButton}>
              <Play aria-hidden="true" />
            </span>
            <span className={styles.coverLabel}>사용법 영상 보기</span>
          </button>
        )}

        {canPlay && isPlaying && embedSrc && (
          <iframe
            className={styles.player}
            src={embedSrc}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}

        {canPlay && isPlaying && !embedSrc && (
          <video className={styles.player} src={videoUrl} title={title} controls autoPlay playsInline />
        )}
      </div>

      <figcaption className={styles.caption}>
        <span className={styles.captionTitle}>{title}</span>
        {duration && <span className={styles.duration}>{duration}</span>}
      </figcaption>
    </figure>
  );
}

export default HelpVideo;
