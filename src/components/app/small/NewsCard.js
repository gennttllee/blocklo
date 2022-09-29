import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const NewsCard = ({ image, h1, p1 }) => {
    return (
        <div className="w-[27rem] shrink-0">
            <img className="rounded-[1.5rem]  w-full h-[20rem]" src={image} alt='images' />
            <div className="flex justify-between items-start my-4">
                <p className="text-2xl w-4/5 font-bold">{h1}</p>
                <p className="text-[blue] py-2 px-3 whitespace-nowrap bg-[#0000ff15]">05 Sep</p>
            </div>
            <p className="mb-4">{p1}</p>
            <a href="/" className="bg-clip-text text-transparent text-xl bg-gradient-to-r from-[#2F79F9] to-[#3DAEFA] ">Learn more <FontAwesomeIcon className="text-[#2F79F9]" icon={faArrowRight} /> </a>
        </div>
    )
}

export default NewsCard