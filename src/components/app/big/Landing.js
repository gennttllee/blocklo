import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy, faPaperPlane, faCloud } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faTwitter, faFacebookF, faDiscord, faTiktok, faYoutube, faSnapchat } from '@fortawesome/free-brands-svg-icons'
import Element from '../small/Element'
import Icons from '../small/icons'

const Landing = () => {
    return (
        <section id='home' className="bg-cover-pic bg-[#4D53DD] animate-makers bg-center bg-cover h-screen relative flex items-center justify-center">
            <div className='text-white w-full mt-[-10rem]' >
                <FontAwesomeIcon className='block text-center w-full text-5xl md:text-6xl 2xl:text-7xl mb-4' icon={faCloud} />
                <h1 className=' text-3xl md:text-5xl  lg:text-6xl font-bold mb-4 text-center'>
                    <span className='block mb-2 md:mb-4'>Integrated Web3</span>
                    <span className='block mb-2'>Ecosystem Built To Scale</span>
                </h1>
                <p className='text-[#ffffffd9] w-11/12 leading-relaxed sm:w-3/4 2xl:w-2/4 mx-auto font-normal text-lg md:text-2xl md:leading-loose lg:text-3xl break-all text-center sm:leading-loose xl:leading-relaxed'>Cloudax is a decentralized and scalable ecosystem built to power the next generation of innovative web3 products</p>
                <div className='mx-auto mt-10 w-fit flex flex-col md:flex-row gap-6'>
                    <button className='h-[58px] md:h-[68px] text-base md:text-2xl w-[240px] rounded-lg bg-gradient-to-r from-[#2F79F9] to-[#3DAEFA]'> <FontAwesomeIcon className='mr-2' icon={faCopy} />Join Presale</button>
                    <button className='border-2 border-white h-[58px] md:h-[68px] text-base md:text-2xl w:[193px] md:w-[240px] rounded-lg '>
                        <FontAwesomeIcon className='mr-2' icon={faPaperPlane} />
                        Whitepaper</button>
                </div>
            </div>

            <div className='bg-[#4D53DD] h-20 md:h-28 py-3 md:py-4 w-full text-white absolute bottom-0 top-auto "'>
                <div className="w-11/12 mx-auto h-full flex justify-between items-center">
                    <div className="flex gap-2 h-full items-center">
                        <Element tag='Public Price' content='$0.0025' />
                        <Element tag='Total Supply' content='5 Billion' />
                        <Element tag='Initial Circulating Supply' content='173 Million' />
                    </div>
                    <div className="hidden xl:flex gap-2">
                        <Icons icons={faTwitter} />
                        <Icons icons={faDiscord} />
                        <Icons icons={faInstagram} />
                        <Icons icons={faTiktok} />
                        <Icons icons={faFacebookF} />
                        <Icons icons={faYoutube} />
                        <Icons icons={faSnapchat} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Landing