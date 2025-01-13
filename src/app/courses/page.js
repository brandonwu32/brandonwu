import './page.css'
import Card from '@/app/components/card/card';
import { courses } from '@/app/data/data';

export default function Courses() {
    return (
        <div className='projects-container'>
            <div className='projects-table'>
                {courses.map((project) => <Card key = {project.index} index = {project.index} thumbnail={project.thumbnail} name={project.name} link={project.link} description = {project.description} skills={project.skills}/>)}
            </div>
        </div>
    )
}