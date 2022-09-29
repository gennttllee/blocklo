import Card from "../small/Card"
import { faQrcode, faShieldHeart, faPeopleArrows } from "@fortawesome/free-solid-svg-icons";

const Intro = () => {
    return (
        <section id="about" className="my-20">
            <h3 className="text-center font-bold text-transparent text-lg sm:text-xl md:text-3xl  bg-clip-text bg-gradient-to-r from-[#2F79F9] to-[#3DAEFA]">WHY CLOUDAX?</h3>
            <p className="text-left md:text-center w-11/12 md:w-full lg:w-[872px] mx-auto md:text-xl mt-4 md:leading-loose">Cloudax will provide a platform for impact and profit-driven faith-based wholesome content businesses to earn money by enabling users have autonomy over their finances.
                Cloudax is an ever-expanding and scalable decentralised ecosystem built to power the next generation of user-friendly web3 applications and products with the goal of permeating the globe and driving blockchain adoption. In Cloudax, our ecosystem provides core products that include a Decentralized Exchange, NE-Commerce, Launchpad, Wallet and an NFT Marketplace. Our features and products are built to be innovative, and scalable blockchain solution
            </p>
            <div className="w-11/12 mx-auto my-20 flex p-5 flex-wrap justify-center gap-y-10">
                <Card
                    icon={faPeopleArrows}
                    h1='Community Governance'
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