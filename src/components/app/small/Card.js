import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = ({ p1, h1, icon }) => {
    return (
        <div className="w-[23rem] h-fit px-2 mx-auto">
            {h1 === 'Community Governance' && <FontAwesomeIcon className="mx-auto block hover:border-2 border-[blue] text-3xl text-[#0088ff] rounded-xl p-4 bg-[#69a8ff2c]" icon={icon} />}

            {h1 === 'Built To Last' && <FontAwesomeIcon className="mx-auto block hover:border-2 border-[blue] text-3xl p-4 rounded-xl text-[blue] bg-[#0000ff15]" icon={icon} />}

            {h1 === 'Designed To Scale' && <FontAwesomeIcon className="mx-auto block hover:border-2 border-[blue] text-3xl p-4 rounded-xl text-[orange] bg-[#ffa60016]" icon={icon} />}

            {h1==='Military Grade Security' && <FontAwesomeIcon className="mx-auto block hover:border-2 border-[blue] text-3xl p-4 rounded-xl text-[#2AC769] bg-[#2ac7691d]" icon={icon}/>}

            <p className="mt-5 text-3xl font-bold text-center leading-relaxed mb-2">{h1}</p>
            <p className="leading-loose text-center">{p1}</p>
        </div>
    )
}

export default Card
