import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Icons = ({ icons, link }) => {
    /* this could be wrapped in a link tag but there no provided hrefs yet */
    return <a href={link} target='blank'>
        <FontAwesomeIcon className='p-2 border text-2xl border-[#ffffff70] rounded-full transition-all hover:text-3xl hover:bg-white hover:text-[#4D53DD]' icon={icons} />
    </a>
}

export default Icons