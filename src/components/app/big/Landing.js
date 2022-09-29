import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy, faPaperPlane, faCloud } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faTwitter, faGithub, faYoutube, faTelegram } from '@fortawesome/free-brands-svg-icons'
import Element from '../small/Element'
import Icons from '../small/icons'

const Landing = () => {


    /*<FontAwesomeIcon className='block text-center w-full text-5xl md:text-6xl 2xl:text-7xl mb-4' icon={faCloud} /> */
    return (
        <section id='home' className="bg-cover-pic bg-center bg-cover h-screen relative flex items-center justify-center">
            <div className='text-white w-full mt-[-5rem]' >
                <h1 className=' text-3xl md:text-5xl  lg:text-6xl font-bold mb-4 text-center'>
                    <span className='block mb-2 md:mb-4'>Integrated Web3</span>
                    <span className='block mb-2'>Ecosystem Built To Scale</span>
                </h1>
                <p className='text-[#ffffffd9] w-3/4 mx-auto sm:w-full leading-relaxed  font-normal text-lg md:text-2xl md:leading-loose lg:text-3xl break-all text-center sm:leading-loose lg:leading-relaxed'>
                    Cloudax is a collaborative enterprise and Web3 ecosystem built to
                    <span className='sm:block'> power the faith - based community and wholesome content.</span>
                </p>
                <div className='mx-auto mt-8 w-fit flex flex-col md:flex-row gap-6'>
                    <button className='transition h-[48px] md:h-[50px] text-base md:text-2xl w-[220px] rounded-lg bg-gradient-to-r from-[#2F79F9] to-[#3DAEFA] hover:to-[#2F79F9] hover:from-[#3DAEFA] '> <FontAwesomeIcon className='mr-2' icon={faCopy} />Join Presale</button>
                    <button className='transition border-2 border-white h-[48px] md:h-[50px] text-base md:text-2xl w:[193px] md:w-[220px] rounded-lg hover:bg-[#2F79F9] hover:border-none '>
                        <FontAwesomeIcon className='mr-2' icon={faPaperPlane} />
                        Whitepaper</button>
                </div>
            </div>

            <div className='bg-[#4D53DD] h-20 md:h-24 py-3 md:py-4 w-full text-white absolute bottom-0 top-auto "'>
                <div className="w-11/12 mx-auto h-full flex justify-between items-center">
                    <div className=" hidden md:flex gap-2 h-full items-center">
                        <Element tag='Public Price' content='$0.0025' />
                        <Element tag='Total Supply' content='10 Billion' />
                        <Element tag='Initial Circulating Supply' content='173 Million' />
                    </div>
                    <div className="flex  justify-center mx-auto md:mx-0 sm:gap-2  gap-5">
                        <Icons icons={faTelegram} link='https://t.me/cloudaxofficial' />
                        <Icons icons={faTwitter} link='https://twitter.com/CloudaxHQ' />
                        <Icons icons={faInstagram} />
                        <Icons icons={faGithub} />
                        <Icons icons={faYoutube} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Landing