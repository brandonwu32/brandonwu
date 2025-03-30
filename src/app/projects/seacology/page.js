import '../page.css';
import PlaceholderImage from './main.png';
import Responsive from './Responsive.png';
import SSR from './SSR.png';
import Vercel from './Vercel.png';
import Image from "next/image";
import ImageSkeleton from '@/app/components/skeletons/skeleton';
import { Suspense } from 'react';

export default function Page() {
    return (
        <div className='page-container'>
            <div className='overview'>
                <li className='overview-item'><a href='#overview'><i>Overview</i></a></li>
                <li className='overview-item'><a href='#technical-features'><i>Technical Features</i></a></li>
                <li className='overview-item'><a href='#takeaways'><i>Takeaways</i></a></li>
            </div>
            <div className='contents'>
                <div className='scroll-content'>
                    <h1 className='title'>Seacology Website Development</h1>
                    <h3 className='description'>Next.js and Vercel Implementation</h3>
                    <h3 className='description'>Next.js | Vercel</h3>
                    <i>Link: <a className='project-link' href='https://github.com/brandonwu32/seacologywebsite'>GitHub Repository</a></i>
                </div>

                <div className='scroll-content'>
                    <h2 className='header' id='overview'>Overview</h2>
                </div>

                <div className='regular-content'>
                    <h3>Introduction</h3>
                </div>
                <div className='regular-content'>
                    <p>Collaborated with Seacology, a nonprofit organization dedicated to preserving island habitats and cultures worldwide, to develop a modern, responsive website. The project aimed to enhance Seacology's online presence, providing an intuitive platform to showcase their initiatives and engage with supporters.</p>
                </div>

                <div className='regular-content'>
                    <h3>Solution</h3>
                </div>
                <div className='regular-content'>
                    <p>Utilized Next.js for its robust React-based framework capabilities, enabling server-side rendering and static site generation. Deployed the application on Vercel for seamless integration and optimized performance, ensuring a scalable and efficient web solution for Seacology.</p>
                </div>

                <div className='scroll-content'>
                    <h2 className='header' id='technical-features'>Technical Features</h2>
                </div>

                <div className='regular-content'>
                    <h3>Responsive Design</h3>
                </div>
                <div className='regular-content'>
                    <p>Implemented a responsive design to ensure optimal user experience across various devices, enhancing accessibility and engagement.</p>
                </div>

                <div className='regular-content'>
                    <div className='demonstration'>
                        <Image className='image' alt='Responsive Design' src={Responsive}></Image>
                    </div>
                </div>

                <div className='regular-content'>
                    <h3>Server-Side Rendering (SSR)</h3>
                </div>
                <div className='regular-content'>
                    <p>Leveraged Next.js's SSR capabilities to improve page load times and SEO performance, providing dynamic content rendering on the server.</p>
                </div>

                <div className='regular-content'>
                    <div className='demonstration'>
                        <Suspense fallback={<ImageSkeleton/>}>
                            <Image className='image' alt='Server-Side Rendering' src={SSR}></Image>
                        </Suspense>
                    </div>
                </div>

                <div className='regular-content'>
                    <h3>Vercel Deployment</h3>
                </div>
                <div className='regular-content'>
                    <p>Deployed the application on Vercel, benefiting from its seamless integration with Next.js, automatic scaling, and global CDN for optimized delivery.</p>
                </div>

                <div className='regular-content'>
                    <div className='demonstration'>
                        <Image className='image' alt='Vercel Deployment' src={Vercel}></Image>
                    </div>
                </div>

                <div className='scroll-content'>
                    <h2 className='header' id='takeaways'>Takeaways...</h2>
                </div>
                <div className='regular-content'>
                    <p>This project provided valuable insights into modern web development practices and collaboration with nonprofit organizations. Key learnings include:</p>
                    <li><strong>Effective use of Next.js:</strong> Harnessing the power of SSR and SSG to build performant and SEO-friendly web applications.</li>
                    <li><strong>Deployment with Vercel:</strong> Understanding the benefits of deploying applications on Vercel for seamless integration and scalability.</li>
                    <li><strong>Responsive design principles:</strong> Implementing designs that adapt to various devices to enhance user experience.</li>
                    <li><strong>Collaboration with nonprofits:</strong> Gaining experience in developing solutions that align with the mission and goals of nonprofit organizations.</li>
                    <p>Overall, this experience enriched my skills in full-stack development and provided a deeper understanding of creating impactful digital solutions for mission-driven organizations.</p>
                </div>
            </div>
        </div>
    );
}
