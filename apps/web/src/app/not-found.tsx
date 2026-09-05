import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
 title: 'VidSpark - 音视频转录与智能总结',
};

export default function NotFound() {
 return (
 <div id="app">
 <div className="wscn-http404-container">
 <div className="wscn-http404">
 <div className="pic-404">
 <img src="/static/img/404.a57b6f31.png" alt="404" className="pic-404__parent" />
 <img src="/static/img/404_cloud.0f4bc32b.png" alt="404" className="pic-404__child left" />
 <img src="/static/img/404_cloud.0f4bc32b.png" alt="404" className="pic-404__child mid" />
 <img src="/static/img/404_cloud.0f4bc32b.png" alt="404" className="pic-404__child right" />
 </div>
 <div className="bullshit">
 <div className="bullshit__oops">OOPS!</div>
 <div className="bullshit__info">
 All rights reserved{' '}
 <a href="https://wallstreetcn.com" target="_blank" rel="noreferrer" style={{ color: 'rgb(32, 160, 255)' }}>
 wallstreetcn
 </a>
 </div>
 <div className="bullshit__headline">The webmaster said that you can not enter this page...</div>
 <div className="bullshit__info">
 Please check that the URL you entered is correct, or click the button below to return to the homepage.
 </div>
 <Link href="/" className="bullshit__return-home">
 Back to home
 </Link>
 </div>
 </div>
 </div>
 </div>
 );
}
