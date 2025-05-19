import styles from '../page.css';
import Image from "next/image";
import Proj1 from "./proj1.png"
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
                    <h1 className='title'>CS 188: Introduction to Artificial Intelligence</h1>
                    <h3 className='description'>Grade Received: A</h3>
                    <h3 className='description'>Search | MDP | RL | BNs | ML</h3>
                    <i>Link: <a className='project-link' href='https://inst.eecs.berkeley.edu/~cs188/sp25/'>Course Website</a> </i>
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
                    <p><strong>1. Uninformed Search:</strong> A*, Heuristics, BFS, DFS, UCS</p>
                    <p><strong>2. Constraint Satisfaction Problems:</strong> Learning how computers solve CSPs</p>
                    <p><strong>3. Game Trees:</strong> Learning how artificial intelligence can play games</p>
                    <p><strong>4. Markov Decision Processes:</strong> How computers choose the next best action using information about a state space</p>
                    <p><strong>5. Reinforcement Learning:</strong> Topics building from MDPs, Q-Learning, Policy Iteration, Epsilon Greedy</p>
                    <p><strong>6. Bayes Nets:</strong> Data driven outcome models based on laws of probability</p>
                </div>

                <div className='scroll-content'>
                    <h2 className='header' id="course-highlights">Coursework Highlights</h2>
                </div>

                <div className='regular-content'>
                    <h3>Project 1: Search</h3>
                </div>
                <div className='regular-content'>
                    <div className='demonstration'>
                        <Image className='image' alt='Project Visualization' src={Proj1}></Image>
                    </div>
                </div>
                <div className='regular-content'>
                    <p>Implemented DFS, BFS, UCS, and A* with customized heuristic for A* passing benchmarks of performance</p>
                    <p>Developed a game state that could capture necessary requirements for the pacman game A* heuristic</p>
                    <p>Achieved 98.5% accuracy in email classification, placing me 15th on the leaderboard of 1120 submissions</p>
                </div>

                <div className='regular-content'>
                    <h3>Project 3: Reinforcement Learning</h3>
                </div>
                <div className='regular-content'>
                    <div className='demonstration'>
                        <Image className='image' alt='Project Visualization' src={Proj3}></Image>
                    </div>
                </div>
                <div className='regular-content'>
                    <p>Implemented value iteration with Bellman equations, Policy Iteration, and various Q Learning based evaluation functions.</p>
                    <p>Evaluation functions used for pacman to capture food given multiple ghosts / objectives.</p>
                    <p>Produced an observable process of pacman learning a state space and improving on its policies with each iteration.</p>
                </div>

                <div className='scroll-content'>
                    <h2 className='header' id='takeaways'>Takeaways</h2>
                </div>
                <div className='regular-content'>
                    <p>This was an eye opening course that showed me the importance of data structures and probability in Artifical Intelligence.</p>
                    <p>I had originally thought that all of AI was just Math and CS Theory applied but I was able to see AI in all of its different aspects than just ML.</p>
                </div>
            </div>
        </div>
    );
}
