import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Icons = ({ icons }) => {
    /* this could be wrapped in a link tag but there no provided hrefs yet */
    return <FontAwesomeIcon className='p-2 border text-2xl border-[#ffffff70] rounded-full' icon={icons} />
}

export default Icons