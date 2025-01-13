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

export const projects = [
    {
        thumbnail: FBGEMM,
        name: 'Facebook-GEMM',
        link: 'projects/fbgemm',
        description: 'Low Precision Auto-vectorization',
        skills: 'C++ | OpenMP | Parallel Computing',
        index: 2,
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
        link: 'tbd',
        description: 'Dense Passage Retriever Benchmarking',
        skills: 'Haystack DPR | Python | RAGs',
        index: 4,
    },
    {
        thumbnail: Benford,
        name: 'Covid-19 Benford Analysis',
        link: 'tbd',
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
        link: 'tbd',
        description: 'Introduction to Artificial Intelligence',
        skills: 'TBD',
        index: 4,
    },
    {
        thumbnail: CS168,
        name: 'CS 168',
        link: 'tbd',
        description: 'Introduction to Internet Architecture',
        skills: 'TBD',
        index: 5,
    },
    {
        thumbnail: GEOG188,
        name: 'GEOG C188',
        link: 'tbd',
        description: 'Geographic Information Systems',
        skills: 'TBD',
        index: 6,
    }
]