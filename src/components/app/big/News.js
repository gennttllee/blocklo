import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import NewsCard from "../small/NewsCard";
import image from './../../../images/final-dl.beatsnoop.com-JUnvLkQBVW 1 (1).png'
import image1 from '../../../images/final-dl.beatsnoop.com-JUnvLkQBVW 1 (2).png'
import image2 from '../../../images/final-dl.beatsnoop.com-JUnvLkQBVW 1.png'

const News = () => {
    return (
        <>
            <section className="w-11/12 mx-auto my-20">
                <h3 className="text-4xl lg:text-6xl font-bold mb-3 sm:mb-5">Latest News</h3>
                <p className="mb-6 md:mb-[3rem]">Explore The Cloudax Ecosystem, Learn & Discover Latest News.</p>
                <div className="flex justify-between flex-wrap gap-y-10">
                    <NewsCard h1='Introduction To Cloudax Ecosystem' p1='Cloudax is an integrated blockchain ecosystem that consists of 4 core products: A Crypto banking wallet, NFT Marketplace, Web3 Launchpad, and A decentralized exchange.' image={image1} />
                    <NewsCard h1='Cloudax Presale –Guide to Participate' p1='Cloudax presale is here, and you are here indicating that you have decided to invest in your future by taking part in the CLDX token sale. ' image={image2} />
                    <NewsCard h1='Cloudax IDO' p1='To be announced soon. It would be the biggest token launch of the year' image={image} />
                </div>
            </section>

            <section className='bg-gradient-to-r from-[#3744C2] to-[#724DDD] rounded-[2rem] mx-auto w-11/12 h-[450px] flex justify-center items-center text-white mb-10'>
                <div>
                    <h1 className="text-center font-bold text-4xl lg:text-6xl capitalize mb-5">Subscribe to our  Newsletter</h1>
                    <p className="w-3/4 text-center mx-auto text-xl">Keep up with our community and get the latest update and exclusive news delivered straight to your inbox</p>
                    <div className="w-3/4 md:w-2/4 mx-auto flex flex-col md:flex-row items-center gap-y-3 mt-10 relative">
                        <input className="bg-[#ffffff2f] h-[3rem] border-none pl-12 w-full md:w-3/4 rounded-lg focus:outline-0 capitalize" type='email' placeholder='your email' />
                        <FontAwesomeIcon className="absolute md:left-4 top-4 left-4" icon={faEnvelope} />
                        <button className="bg-white text-[#3744C2] h-[3rem] w-full md:w-1/4 rounded-lg">Subscribe</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default News