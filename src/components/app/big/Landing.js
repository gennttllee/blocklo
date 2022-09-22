import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy, faPaperPlane, faCloud } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faTwitter, faFacebookF, faDiscord, faTiktok, faYoutube, faSnapchat } from '@fortawesome/free-brands-svg-icons'
import Element from '../small/Element'
import Icons from '../small/icons'

const Landing = () => {
    return (
        <section className="bg-cover-pic bg-center bg-cover h-[42rem] lg:h-[100vh] relative flex items-center justify-center">
            <div className='text-white block w-4/5  2xl:w-2/4' >
                <FontAwesomeIcon className='block text-center w-full text-5xl 2xl:text-7xl mb-4' icon={faCloud} />
                <h1 className=' text-3xl lg:text-5xl xl:text-7xl font-bold mb-4'>
                    <span className='block text-center mb-3'>Integrated Web3</span>
                    <span className='text-center block'>Ecosystem Built To Scale</span>
                </h1>
                <p className='font-normal text-lg lg:text-3xl break-all text-center leading-relaxed'>Cloudax is a decentralized and scalable ecosystem built to power the next generation of innovative web3 products</p>
                <div className='mx-auto mt-10 w-fit flex flex-col md:flex-row gap-4'>
                    <button className='h-[58px] md:h-[68px] text-base md:text-2xl w-[240px] rounded-lg bg-gradient-to-r from-[#2F79F9] to-[#3DAEFA]'> <FontAwesomeIcon className='mr-2' icon={faCopy} />Join Presale</button>
                    <button className='border-2 border-white h-[58px] md:h-[68px] text-base md:text-2xl w:[193px] md:w-[240px] rounded-lg '>
                        <FontAwesomeIcon className='mr-2' icon={faPaperPlane} />
                        Whitepaper</button>
                </div>
            </div>

            <div className='bg-[#4D53DD] h-16 md:h-24 w-full text-white absolute bottom-0 top-auto "'>
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