import './page.css';
import DataSynth from './DataSynth.png';
import Profiler from './Profiler.png';
import Drift from './Drift.png'
import Image from "next/image";
import ImageSkeleton from '@/app/components/skeletons/skeleton'
import {Suspense} from 'react';

export default function Page() {

    return (
        <div className='page-container'>
            <div className='overview'>
                <li className='overview-item'><i>Overview</i></li>
                <li className='overview-item'><i>Technical Features</i></li>
                <li className='overview-item'><i>Takeaways</i></li>
            </div>
            <div className='contents'>
                <div className='scroll-content'>
                    <h1 className='title'>Doordash MLOps</h1>
                    <h3 className='description'>Model Profiling using Pytorch</h3>
                    <h3 className='description'>PyTorch | Python</h3>
                    <a className='project-link'>Github</a>
                </div>


                <div className='scroll-content'>
                    <h2 className='header'>Overview</h2>
                </div>


                <div className='regular-content'>
                    <h3>Introduction</h3>
                </div>
                <div className='regular-content'>
                    <p>DoorDash is an online food delivery and ordering service. DoorDash wants us to build an ML environment where models can be tested and run by ML Engineers to ensure they work properly without risking production!</p>
                    <p>Our DoorDash team built a testing platform from scratch to empower engineers to comprehensively evaluate ML models. The platform was rigorously tested for invalid outputs and out of range values to indicate model drift. We also caught issues in production early using predictive insights and evaluation of systemic behavior.</p>
                </div>

                <div className='regular-content'>
                    <h3>Solution</h3>
                </div>
                <div className='regular-content'>
                    <p>DoorDash is an online food delivery and ordering service. DoorDash wants us to build an ML environment where models can be tested and run by ML Engineers to ensure they work properly without risking production!</p>
                    <p>Our DoorDash team built a testing platform from scratch to empower engineers to comprehensively evaluate ML models. The platform was rigorously tested for invalid outputs and out of range values to indicate model drift. We also caught issues in production early using predictive insights and evaluation of systemic behavior.</p>
                </div>

                <div className='regular-content'>
                    <h3>Deliverable</h3>
                </div>
                <div className='regular-content'>
                    <div className='demonstration'>
                        <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTm7cwaUU1tJjKqTAYC5kw8AcHxxSTqDeBIoCcUxmrW5NWzkGkTc1op7_qHTsYcslB3tVps4AQGkIaZ/embed?start=true&loop=true&delayms=3000" frameBorder="0" width="620" height="400" allowFullScreen={true} mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                    </div>
                </div>
                <div className='regular-content'>
                    <p>DoorDash is an online food delivery and ordering service. DoorDash wants us to build an ML environment where models can be tested and run by ML Engineers to ensure they work properly without risking production!</p>
                    <p>Our DoorDash team built a testing platform from scratch to empower engineers to comprehensively evaluate ML models. The platform was rigorously tested for invalid outputs and out of range values to indicate model drift. We also caught issues in production early using predictive insights and evaluation of systemic behavior.</p>
                </div>

                <div className='scroll-content'>
                    <h2 className='header'>Technical Features</h2>
                </div>
                <div className='regular-content'>
                    <h3>Synthetic Data Generation</h3>
                </div>
                <div className='regular-content'>
                    <p>DoorDash is an online food delivery and ordering service. DoorDash wants us to build an ML environment where models can be tested and run by ML Engineers to ensure they work properly without risking production!</p>
                    <p>Our DoorDash team built a testing platform from scratch to empower engineers to comprehensively evaluate ML models. The platform was rigorously tested for invalid outputs and out of range values to indicate model drift. We also caught issues in production early using predictive insights and evaluation of systemic behavior.</p>
                </div>
                <div className='regular-content'>
                    <div className='demonstration'>
                        <Suspense fallback={<ImageSkeleton/>}>
                            <Image className='image' alt='none' src={DataSynth}></Image>
                        </Suspense>
                    </div>
                </div>

                <div className='regular-content'>
                    <h3>Model Profiling</h3>
                </div>
                <div className='regular-content'>
                    <p>DoorDash is an online food delivery and ordering service. DoorDash wants us to build an ML environment where models can be tested and run by ML Engineers to ensure they work properly without risking production!</p>
                    <p>Our DoorDash team built a testing platform from scratch to empower engineers to comprehensively evaluate ML models. The platform was rigorously tested for invalid outputs and out of range values to indicate model drift. We also caught issues in production early using predictive insights and evaluation of systemic behavior.</p>
                </div>
                <div className='regular-content'>
                    <div className='demonstration'>
                        <Image className='image' alt='none' src={Profiler}></Image>
                    </div>
                </div>

                <div className='regular-content'>
                    <h3>Model Drift Detection</h3>
                </div>
                <div className='regular-content'>
                    <p>DoorDash is an online food delivery and ordering service. DoorDash wants us to build an ML environment where models can be tested and run by ML Engineers to ensure they work properly without risking production!</p>
                    <p>Our DoorDash team built a testing platform from scratch to empower engineers to comprehensively evaluate ML models. The platform was rigorously tested for invalid outputs and out of range values to indicate model drift. We also caught issues in production early using predictive insights and evaluation of systemic behavior.</p>
                </div>
                <div className='regular-content'>
                    <div className='demonstration'>
                        <Image className='image' alt='none' src={Drift}></Image>
                    </div>
                </div>

                <div className='scroll-content'>
                    <h2 className='header'>Takeaways...</h2>
                </div>
                <div className='regular-content'>
                    <p>DoorDash is an online food delivery and ordering service. DoorDash wants us to build an ML environment where models can be tested and run by ML Engineers to ensure they work properly without risking production!</p>
                    <p>Our DoorDash team built a testing platform from scratch to empower engineers to comprehensively evaluate ML models. The platform was rigorously tested for invalid outputs and out of range values to indicate model drift. We also caught issues in production early using predictive insights and evaluation of systemic behavior.</p>
                </div>
            </div>
        </div>
    )
}