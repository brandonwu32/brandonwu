import styles from '../page.css';
import Image from "next/image";
import Proj2 from "./proj2.jpg"
import Proj3 from "./proj3.png"

export default function Page() {
    return (
        <div className='page-container'>
            <div className='overview'>
                <li className='overview-item'><a href='#overview'><i>Overview</i></a></li>
                <li className='overview-item'><a href='#course-highlights'><i>Course Highlights</i></a></li>
                <li className='overview-item'><a href='#takeaways'><i>Takeaways</i></a></li>
            </div>
            <div className='contents'>
                <div className='scroll-content'>
                    <h1 className='title'>CS 168: Introduction to Internet Architecture</h1>
                    <h3 className='description'>Grade Received: A</h3>
                    <h3 className='description'>Routing | Transport | Applications | End to End | Datacenters</h3>
                    <i>Link: <a className='project-link' href='https://sp25.cs168.io/'>Course Website</a> </i>
                </div>

                <div className='scroll-content'>
                    <h2 className='header' id='overview'>Overview</h2>
                </div>

                <div className='regular-content'>
                    <h3>Introduction</h3>
                </div>
                <div className='regular-content'>
                    <p>This course introduces the basic ideas and techniques underlying the design of intelligent computer systems. A specific emphasis is on the statistical and decision-theoretic modeling paradigm.</p>
                </div>

                <div className='regular-content'>
                    <h3>Key Topics Covered</h3>
                </div>
                <div className='regular-content'>
                    <p><strong>1. Routing:</strong> How routers discover the best path to send packets across networks, Distance Vector, Link State, BGP.</p>
                    <p><strong>2. Transport:</strong> The protocols that hosts use to communicate to other hosts, TCP, UDP</p>
                    <p><strong>3. Application:</strong> TBD</p>
                </div>

                <div className='scroll-content'>
                    <h2 className='header' id="course-highlights">Coursework Highlights</h2>
                </div>

                <div className='regular-content'>
                    <h3>Project 2: Routing</h3>
                </div>
                <div className='regular-content'>
                    <div className='demonstration'>
                        <Image className='image' alt='Project Visualization' src={Proj2}></Image>
                    </div>
                </div>
                <div className='regular-content'>
                    <p>Implemented Distance Vector Protocol with poisoning.</p>
                </div>

                <div className='regular-content'>
                    <h3>Project 3: Transport</h3>
                </div>
                <div className='regular-content'>
                    <div className='demonstration'>
                        <Image className='image' alt='Project Visualization' src={Proj3}></Image>
                    </div>
                </div>
                <div className='regular-content'>
                    <p>Implemented TCP with congestion control.</p>
                </div>

                <div className='scroll-content'>
                    <h2 className='header' id='takeaways'>Takeaways</h2>
                </div>
                <div className='regular-content'>
                    <p>After having taken CS 161, this course was like a deep dive into the implementations of layers of the internet.</p>
                    <p>This course demystified things I was curious about such as how wifi worked, why I needed a router to have connection, and hotspot.</p>
                </div>
            </div>
        </div>
    );
}
