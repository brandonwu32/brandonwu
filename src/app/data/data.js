import FBGEMM from '@/app/static/FBGEMM.png';
import DoordashMLOps from '@/app/static/Doordash.png';
import DPR from '@/app/static/DPR.png';
import Benford from '@/app/static/Benford.png';
import NGordnet from '@/app/static/NGordnet.png';
import DATA100 from '@/app/static/data100.png';
import CS161 from '@/app/static/cs161.png';
import EECS127 from '@/app/static/eecs127.jpeg';
import CS188 from '@/app/static/cs188.png';
import CS168 from '@/app/static/cs168.png';
import GEOG188 from '@/app/static/geog188.jpeg';
import PlayAI from '@/app/static/playai.png';
import Seacology from '@/app/static/seacology.jpeg';
import Insight from '@/app/static/insight.jpg';
import Gusto from '@/app/static/Gusto.svg'
import AWS from '@/app/static/aws.jpeg'

export const projects = [
    {
        thumbnail: AWS,
        name: 'Amazon Web Services',
        link: 'tbd',
        description: 'Software Development Engineering Intern Project',
        skills: 'AWS CDK | AWS AppConfig | Java | Typescript',
        index: 1,
    },
    {
        thumbnail: Gusto,
        name: 'Gusto',
        link: 'tbd',
        description: 'Software Engineering Intern Project',
        skills: 'TBD',
        index: 2,
    },
    {
        thumbnail: FBGEMM,
        name: 'Facebook-GEMM',
        link: 'projects/fbgemm',
        description: 'Low Precision Auto-vectorization',
        skills: 'C++ | OpenMP | Parallel Computing',
        index: 10,
    },
    {
        thumbnail: DoordashMLOps,
        name: 'Doordash-MLOps',
        link: 'projects/doordash',
        description: 'Model Profiling',
        skills: 'PyTorch | Python | Tensorflow',
        index: 3,
    },
    {
        thumbnail: DPR,
        name: 'UC Berkeley EECS',
        link: 'projects/conditional',
        description: 'Dense Passage Retriever Benchmarking',
        skills: 'Haystack DPR | Python | RAGs',
        index: 4,
    },
    {
        thumbnail: Benford,
        name: 'Covid-19 Benford Analysis',
        link: 'projects/benford',
        description: 'My name is Brandon Wu',
        skills: 'R | Data Analysis',
        index: 5,
    },
    {
        thumbnail: NGordnet,
        name: 'NGordnet',
        link: 'tbd',
        description: 'NGrams Graph with BFS',
        skills: 'Data Structures | Algorithms',
        index: 6,
    },
    {
        thumbnail: PlayAI,
        name: 'Play.AI',
        link: 'projects/playai',
        description: 'NGrams Graph with BFS',
        skills: 'Full Stack | APIs | GenAI Speech',
        index: 9,
    },
    {
        thumbnail: Insight,
        name: 'Insight Housing',
        link: 'projects/insight',
        description: 'Full Stack Development',
        skills: 'React | Express | Postgres',
        index: 7,
    },
    {
        thumbnail: Seacology,
        name: 'Seacology',
        link: 'projects/seacology',
        description: 'Full Stack Development',
        skills: 'Next | Vercel',
        index: 8,
    }
]

export const courses = [
    {
        thumbnail: CS161,
        name: 'CS 161',
        link: 'courses/cs161',
        description: 'Computer Security',
        skills: 'Go | Cryptography | Hacking',
        index: 1,
    },
    {
        thumbnail: EECS127,
        name: 'EECS 127',
        link: 'courses/eecs127',
        description: 'Optimization Models in Engineering',
        skills: 'CVX | PCA | SVD | Convex Optimization',
        index: 2,
    },
    {
        thumbnail: DATA100,
        name: 'Data C100',
        link: 'courses/data100',
        description: 'Principles and Techniques of Data Science',
        skills: 'OLS | Logistic Regression | PCA',
        index: 3,
    },
    {
        thumbnail: CS188,
        name: 'CS 188',
        link: 'courses/cs188',
        description: 'Introduction to Artificial Intelligence',
        skills: 'Search, MDP, RL, BNs, ML',
        index: 4,
    },
    {
        thumbnail: CS168,
        name: 'CS 168',
        link: 'courses/cs168',
        description: 'Introduction to Internet Architecture',
        skills: 'Routing',
        index: 5,
    },
    {
        thumbnail: GEOG188,
        name: 'GEOG C188',
        link: 'tbd',
        description: 'Geographic Information Systems',
        skills: 'ArcGIS',
        index: 6,
    }
]