import Card from "../small/Card"
import { faDropbox } from "@fortawesome/free-brands-svg-icons";
import { faHourglass, faQrcode, faShieldHeart } from "@fortawesome/free-solid-svg-icons";

const Intro = () => {
    return (
        <section id="roadMap" className="my-20">
            <h3 className="text-center font-bold text-transparent text-base sm:text-xl bg-clip-text bg-gradient-to-r from-[#2F79F9] to-[#3DAEFA]">INTRODUCING CLOUDAX</h3>
            <p className=" text-center text-3xl md:text-5xl w-full lg:w-[872px] mx-auto font-bold mt-2"> <span className="block mb-1 md:mb-2 lg:mb-3">An Integrated Web3</span>
                <span> Ecosystem For Billions of users</span> </p>
            <p className="text-left md:text-center w-11/12 md:w-full lg:w-[872px] mx-auto md:text-xl mt-4 md:leading-relaxed">Cloudax is a blockchain ecosystem with blockchain-intrinsic products and services with the goal of permeating the globe and driving blockchain adoption.</p>
            <div className="w-11/12 mx-auto my-10 flex p-5 flex-wrap justify-center gap-y-10">
                <Card
                    icon={faDropbox}
                    h1='Community Governance'
                    p1='Ecosystem Participants are empowered to govern and shape the future of the ecosystem through a DAO protocol.'
                />
                <Card
                    icon={faHourglass}
                    h1='Built To Last'
                    p1='Ecosystem Participants are empowered to govern and shape the future of the ecosystem through a DAO protocol.'
                />
                <Card
                    icon={faQrcode}
                    h1='Designed To Scale'
                    p1='Cloudax is a rapidly expanding and scalable ecosystem. Our system is optimized to innovate and power billions of global users'
                />
                <Card
                    icon={faShieldHeart}
                    h1='Military Grade Security'
                    p1='Our protocol is audited and secured by industry leading security standard to keep the ecosystem safe.'
                />
            </div>
        </section>
    )
}

export default Intro