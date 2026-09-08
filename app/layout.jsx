import { Analytics } from '@vercel/analytics/next';
import './globals.css';

export const metadata = {
  title: '플랜 사수 | AI 사업계획서 작성부터 VC 분석까지',
  description:
    '아이디어만 있어도 AI와 사업계획서를 작성하고, VC 관점으로 분석받고, 플랜비서와 대화하며 계획서를 수정합니다. 일정과 정부지원사업 준비까지 이어가는 AI 사업 준비 플랫폼, 플랜 사수.',
  generator: 'v0.app',
  keywords: ['플랜 사수', 'PLAN SASU', '사업계획서', 'AI 사업계획서', 'VC 분석', '플랜비서', 'AI 사업계획서 작성', '창업지원사업', '예비창업패키지', '창업', '스타트업'],
  openGraph: {
    title: '플랜 사수 | AI 사업계획서 작성부터 VC 분석까지',
    description:
      '아이디어만 있어도 AI와 사업계획서를 작성하고, VC 관점으로 분석받고, 플랜비서와 대화하며 계획서를 수정합니다. 일정과 정부지원사업 준비까지 이어가는 AI 사업 준비 플랫폼, 플랜 사수.',
    type: 'website',
    locale: 'ko_KR',
    siteName: '플랜 사수',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
};

export const viewport = {
  themeColor: '#4757F3',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  );
}
