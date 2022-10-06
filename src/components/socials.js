import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function Socials({location, name, logo}) {
    return (
        <a className="px-3 p-2 rounded bg-blue-400 text-white shadow text-3xl mx-1 mt-6 flex anim-delay-700 focus:ring transition" href={`${location}`} target="_blank" rel='noreferrer'>
            <FontAwesomeIcon className='my-auto px-2' icon={logo} />
            {name}
        </a>
    )
}