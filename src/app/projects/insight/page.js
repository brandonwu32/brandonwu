import '../page.css';
import Image from "next/image";
import ImageSkeleton from '@/app/components/skeletons/skeleton';
import PSQL from './PSQL.png';
import Insight from './insight.png';
import { Suspense } from 'react';

export default function Page() {
    return (
        <div className='page-container'>
            <div className='overview'>
                <li className='overview-item'><a href='#overview'><i>Overview</i></a></li>
                <li className='overview-item'><a href='#technical-features'><i>Technical Features</i></a></li>
                <li className='overview-item'><a href='#takeaways'><i>Takeaways</i></a></li>
                <i>Link: <a className='project-link' href='https://insighthousing.org/'>Home Page</a></i>
            </div>
            <div className='contents'>
                <div className='scroll-content'>
                    <h1 className='title'>Insight Housing Dashboard</h1>
                    <h3 className='description'>Full-Stack Development for Nonprofit</h3>
                    <h3 className='description'>PostgreSQL | React.js | OAuth | Express.js</h3>
                </div>

                <div className='scroll-content'>
                    <h2 className='header' id='overview'>Overview</h2>
                </div>

                <div className='regular-content'>
                    <h3>Introduction</h3>
                </div>
                <div className='regular-content'>
                    <p>This project involved building a full-stack dashboard for Insight Housing, a nonprofit organization.
                        The goal was to improve donor tracking and tax receipt management, ensuring a seamless and efficient workflow.
                        The system integrates a PostgreSQL database, Express.js backend, and React.js frontend, with Google OAuth support
                        for authentication and scheduling.</p>
                </div>

                <div className='regular-content'>
                    <h3>Solution</h3>
                </div>
                <div className='regular-content'>
                    <p>By implementing optimized database queries and Express.js endpoints, we significantly reduced processing time.
                        The system also integrates Google Calendar API to facilitate scheduling and translation into donor-facing tools.</p>
                </div>

                <div className='scroll-content'>
                    <h2 className='header' id='technical-features'>Technical Features</h2>
                </div>

                <div className='regular-content'>
                    <h3>Optimized Database Queries</h3>
                </div>
                <div className='regular-content'>
                    <p>Designed and connected a PostgreSQL database to Express.js endpoints, reducing data retrieval time by 80%.</p>
                </div>

                <div className='regular-content'>
                    <div className='demonstration'>
                        <Image className='image' alt='none' src={PSQL}></Image>
                    </div>
                </div>

                <div className='regular-content'>
                    <h3>Full-Stack Dashboard Development</h3>
                </div>
                <div className='regular-content'>
                    <p>Developed a MERN dashboard for tracking donor statistics, tax receipt management, and user-friendly reporting.</p>
                </div>

                <div className='regular-content'>
                    <div className='demonstration'>
                        <Suspense fallback={<ImageSkeleton/>}>
                            <Image className='image' alt='none' src={Insight}></Image>
                        </Suspense>
                    </div>
                </div>

                <div className='regular-content'>
                    <h3>Google OAuth and Calendar API Integration</h3>
                </div>
                <div className='regular-content'>
                    <p>Implemented authentication and scheduling functionalities using Google OAuth and Calendar API,
                        streamlining donor appointment management.</p>
                </div>

                <div className='scroll-content'>
                    <h2 className='header' id='takeaways'>Takeaways...</h2>
                </div>
                <div className='regular-content'>
                    <p>This project reinforced key software engineering principles and the importance of performance optimization in real-world applications. I learned:</p>
                    <li><strong>Database optimization:</strong> Efficiently structuring queries can significantly impact processing speed.</li>
                    <li><strong>Scalability of full-stack applications:</strong> A well-architected MERN stack application can support growing data needs.</li>
                    <li><strong>OAuth authentication:</strong> Integrating third-party authentication enhances security and usability.</li>
                    <li><strong>Real-world nonprofit impact:</strong> Technical improvements in donor tracking directly support organizational goals.</li>
                    <p>Through this experience, I gained a deeper appreciation for how technical solutions can drive operational efficiency in mission-driven organizations.</p>
                </div>
            </div>
        </div>
    );
}
