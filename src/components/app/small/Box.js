import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Box = ({ icon, h1, l1 }) => {
    return (
        <div className=" bg-[#ffffff0f] border-t border-l p-[2rem] border-[#ffffff51] w-11/12 sm:w-[22rem] rounded-[2rem]">
            <FontAwesomeIcon className="text-3xl text-[#2F79F9]" icon={icon} />
            <p className=" text-xl lg:text-3xl my-5 font-bold">{h1}</p>
            <ul className="list-disc ml-5 text-[#ffffffb6]">
                { l1 && l1.map(item => <li>{item}</li>)}
            </ul>
        </div>
    )
}

export default Box