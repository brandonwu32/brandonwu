import '../page.css';
import Main from './main.png';
import PlayAI from './playai.png'
import Image from "next/image";
import ImageSkeleton from '@/app/components/skeletons/skeleton'
import {Suspense} from 'react';

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
                    <h1 className='title'>Play AI</h1>
                    <h3 className='description'>Utilizing Play AI Gen AI voice intelligence API for file reading</h3>
                    <h3 className='description'>Full Stack | APIs | GenAI</h3>
                    <i>Link: <a className='project-link' href='https://playai-kohl.vercel.app/'>Project</a> </i>
                </div>


                <div className='scroll-content'>
                    <h2 className='header' id='overview'>Overview</h2>
                </div>


                <div className='regular-content'>
                    <h3>Introduction</h3>
                </div>
                <div className='regular-content'>
                    <p>
                        I developed a web application that enables users to have PDF documents read aloud.
                        The application allows users to select a PDF file, which is then processed and converted into speech.
                        This project was built using Next.js and is deployed on Vercel. This project was originally designed to be
                        an assessment from Play AI to observe my proficiency in full stack.
                    </p>
                </div>


                <div className='regular-content'>
                    <div className='demonstration'>
                        <Image className='image' alt='none' src={PlayAI}></Image>
                    </div>
                </div>

                <div className='scroll-content'>
                    <h2 className='header' id="technical-features">Technical Features</h2>
                </div>

                <div className='regular-content'>
                    <div className='demonstration'>
                        <Suspense fallback={<ImageSkeleton/>}>
                            <Image className='image' alt='none' src={Main}></Image>
                        </Suspense>
                    </div>
                </div>

                <div className='regular-content'>
                    <h3>File Upload and Gen AI Voice read</h3>
                </div>
                <div className='regular-content'>
                    <p>Upload a file with text and click "read". The API will process the file in real time and provide a voice recording of the passage.</p>
                </div>

                <div className='regular-content'>
                    <h3>Agentic Voice Chatbot</h3>
                </div>
                <div className='regular-content'>
                    <p>By clicking on the microphoe, you should be able to talk to a chatbot and query about the file you've uploaded.</p>
                </div>

                <div className='scroll-content'>
                    <h2 className='header' id='takeaways'>Takeaways...</h2>
                </div>
                <div className='regular-content'>
                    <p>I became familiar with constructing an agent and providing context. I was just combining the pre-existing full stack knowledge I had to provide an interface for it.</p>
                </div>
            </div>
        </div>
    )
}