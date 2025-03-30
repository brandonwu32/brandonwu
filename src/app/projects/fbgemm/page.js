import '../page.css';
import Enhancements from './enhancements.png';
import ThreadLevel from './threadlevel.png';
import Compiler from './compiler.png'
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
                    <h1 className='title'>Facebook General Matrix Multiplication</h1>
                    <h3 className='description'>Optimizations in C++</h3>
                    <h3 className='description'>C++ | OpenMP</h3>
                    <i>Link: <a className='project-link' href='https://github.com/codebase-berkeley/FBGEMM'>Github</a> </i>
                </div>


                <div className='scroll-content'>
                    <h2 className='header' id='overview'>Overview</h2>
                </div>


                <div className='regular-content'>
                    <h3>Introduction</h3>
                </div>
                <div className='regular-content'>
                    <p>This project focused on optimizing the FBGEMM (Facebook General Matrix Multiplication) library,
                        a high-performance kernel library designed for machine learning workloads.
                        By extending auto-vectorization capabilities, I aimed to maximize data
                        parallelism and enhance computational efficiency for table batched embedding
                        operations, which are vital in recommendation systems and other ML applications.
                        </p>
                </div>

                <div className='regular-content'>
                    <h3>Solution</h3>
                </div>
                <div className='regular-content'>
                    <p>The work involved close collaboration with low-level programming in C/C++ and
                        parallel processing frameworks, resulting in significant runtime improvements
                        while maintaining high accuracy.</p>
                </div>

                <div className='regular-content'>
                    <h3>Deliverable</h3>
                </div>
                <div className='regular-content'>
                    <div className='demonstration'>
                        <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vR5RBMoPPX3-9ojC9fGCYDpTRQJBRxVRgCDwyXClYxYMBgvvwHsjcxl-a-2kfQ4UQsrzzzBQWlcogeh/embed?start=false&loop=false&delayms=3000" width="620" height="400" allowFullScreen={true} mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                    </div>
                </div>
                <div className='regular-content'>
                    <p>Our deliverable was presented to the applied scientists and engineers at Meta's Sunnyvale headquarters.</p>
                </div>

                <div className='scroll-content'>
                    <h2 className='header' id="technical-features">Technical Features</h2>
                </div>
                <div className='regular-content'>
                    <h3>Auto-Vectorization Enhancements</h3>
                </div>
                <div className='regular-content'>
                    <p>Extended compiler support to auto-vectorize operations for a range of data types, including 32-bit and 8-bit floats and 4-bit and 8-bit integers, unlocking substantial performance gains.</p>
                </div>

                <div className='regular-content'>
                    <h3>Unit Testing for Accuracy Validation</h3>
                </div>
                <div className='regular-content'>
                    <p>Designed and implemented 10 unit tests to compare results from parallelized embedding operations against ground truth outputs, ensuring a high accuracy rate of 98%.</p>
                </div>

                <div className='regular-content'>
                    <div className='demonstration'>
                        <Image className='image' alt='none' src={Enhancements}></Image>
                    </div>
                </div>

                <div className='regular-content'>
                    <h3>Compiler Optimizations</h3>
                </div>
                <div className='regular-content'>
                    <p>Composed and fine-tuned compiler flags for Meta's internal compiler system to optimize runtime performance, achieving up to a 16x speedup in certain scenarios.</p>
                </div>

                <div className='regular-content'>
                    <div className='demonstration'>
                        <Suspense fallback={<ImageSkeleton/>}>
                            <Image className='image' alt='none' src={Compiler}></Image>
                        </Suspense>
                    </div>
                </div>

                <div className='regular-content'>
                    <h3>Thread-Level Parallelism with OpenMP</h3>
                </div>
                <div className='regular-content'>
                    <p>Leveraged the OpenMP library to distribute workloads effectively across threads, enhancing scalability and computational efficiency for multi-core systems.</p>
                </div>

                <div className='regular-content'>
                    <div className='demonstration'>
                        <Image className='image' alt='none' src={ThreadLevel}></Image>
                    </div>
                </div>

                <div className='scroll-content'>
                    <h2 className='header' id='takeaways'>Takeaways...</h2>
                </div>
                <div className='regular-content'>
                    <p>This project underscored the importance of combining algorithmic optimization with hardware-aware programming to achieve impactful results. I learned:</p>
                    <li><strong>The power of auto-vectorization:</strong> How modern compilers can automatically parallelize data operations with the right configurations and code patterns.</li>
                    <li><strong>The balance of performance and accuracy:</strong> Achieving near-perfect accuracy while pushing runtime improvements demands rigorous testing and validation.</li>
                    <li><strong>The utility of OpenMP:</strong> Thread-level parallelism is a crucial tool for scaling workloads, particularly in memory-intensive applications like embeddings.</li>
                    <li><strong>Compiler flags as a performance lever:</strong> Fine-tuning these settings can significantly influence runtime performance in large-scale systems.</li>
                    <p>This experience enriched my understanding of parallel computing and low-level optimizations, skills that continue to influence my approach to solving performance-critical problems.</p>
                </div>
            </div>
        </div>
    )
}