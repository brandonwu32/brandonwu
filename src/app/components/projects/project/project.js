
import './project.css';
import Image from "next/image";

export default function Project(props) {
    function boxShadow(index) {
        if (index % 4 === 0) {
            return {boxShadow: '5px 5px 5px white'}
        } else if (index % 3 === 0) {
            return {boxShadow: '5px 5px 5px white'}
        } else if (index % 2 === 0) {
            return {boxShadow: '5px 5px 5px white'}
        } else if (index % 1 === 0) {
            return {boxShadow: '5px 5px 5px white'}
        }
    }
    return (
        <div>
            <a href = {'./projects/'  + props.link}>
                <div className='project-container' style={boxShadow(props.index)}>
                    <Image className='thumbnail' src={props.thumbnail} alt={'none'}/>
                    <div className='project-text'>
                        <h2 className='project-name'>{props.name}</h2>
                        <p className='project-description'>{props.description}</p>
                        <p className='project-description'>{props.skills}</p>
                    </div>
                </div>
            </a>
        </div>
    )
}