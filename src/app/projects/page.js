import './page.css'
import Brandon from '@/app/static/Brandon.jpg';
import FBGEMM from '@/app/static/FBGEMM.png';
import DoordashMLOps from '@/app/static/Doordash.png';
import DPR from '@/app/static/DPR.png'
import Benford from '@/app/static/Benford.png'
import NGordnet from '@/app/static/NGordnet.png'
import ProjectCard from '@/app/components/projects/project/project';


export default function Projects() {
    const projects = [
        {
            thumbnail: FBGEMM,
            name: 'Facebook-GEMM',
            link: 'fbgemm',
            description: 'Low Precision Auto-vectorization',
            skills: 'C++ | OpenMP | Parallel Computing',
            index: 2,
        },
        {
            thumbnail: DoordashMLOps,
            name: 'Doordash-MLOps',
            link: 'doordash',
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
    return (
        <div className='projects-container'>
            <div className='projects-table'>
                {projects.map((project) => <ProjectCard key = {project.index} index = {project.index} thumbnail={project.thumbnail} name={project.name} link={project.link} description = {project.description} skills={project.skills}/>)}
            </div>
        </div>
    )
}