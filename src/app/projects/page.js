import './page.css'
import Card from '@/app/components/card/card';
import { projects } from '@/app/data/data';

export default function Projects() {
    return (
        <div className='projects-container'>
            <div className='projects-table'>
                {projects.map((project) => <Card key = {project.index} index = {project.index} thumbnail={project.thumbnail} name={project.name} link={project.link} description = {project.description} skills={project.skills}/>)}
            </div>
        </div>
    )
}