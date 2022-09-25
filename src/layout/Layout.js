import logo from '../images/Cloudax_Light 2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faBars } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons';
import List from '../components/layout/List';

const home=(data)=>{
    document.getElementById(data).scrollIntoView({behavior : 'smooth'})
}

const Layout = ({ children }) => {
    return (
        <section>
            <nav className="bg-[#16162D] sticky top-0 z-10 h-16 md:h-24 w-full text-white">
                <div className="flex justify-between w-11/12 mx-auto h-full items-center">
                    <img className=' w-32 h-6 sm:w-52 sm:h-10' src={logo} alt='logo' />
                    <ul className='hidden cursor-pointer lg:flex items-center w-auto gap-10 text-lg'>
                        <li onClick={()=>home('home')}>Home</li>
                        <li onClick={()=> home('about')}>About</li>
                        <li onClick={()=>home('token info')}>Token Info</li>
                        <li onClick={()=> home('tree')}>RoadMap</li>
                        <l onClick={()=> home('team')}>Team</l>
                        <li>Community <FontAwesomeIcon className='ml-1' icon={faAngleDown} /> </li>
                    </ul>
                    <button className='block lg:hidden text-lg'> <FontAwesomeIcon icon={faBars} /></button>
                </div>
            </nav>

            <main>
                {children}
            </main>

            <footer className='bg-[#16162D] w-full text-white flex justify-center items-center'>
                <div className=' my-5 md:my-20 flex flex-col xl:flex-row gap-y-10 items-start justify-between w-11/12'>
                    <img className=' w-52 h-10' src={logo} alt='logo' />
                    <div className='flex flex-col-reverse gap-y-10 lg:flex-row items-start w-full xl:w-3/4 justify-between '>
                        <div className='mx-auto lg:mx-0'>
                            <div className='mb-5 mt-2  text-center lg:text-left'>
                                <FontAwesomeIcon className='text-3xl mr-4' icon={faDiscord} />
                                <FontAwesomeIcon className='text-3xl mr-4' icon={faInstagram} />
                                <FontAwesomeIcon className='text-3xl mr-4' icon={faFacebook} />
                                <FontAwesomeIcon className='text-3xl mr-4' icon={faTwitter} />
                            </div>
                            <p className='text-[#e0eeffc9] sm:text-xl'>All rights reserved @Cloudax 2022</p>
                        </div>
                        <div className='flex w-full flex-col md:flex-row gap-y-5 lg:w-3/5 justify-between'>
                            <List h1='Ecosystem' p='Join Presale' p1='Dex' p2='Whitepaper' p3='Token Info' />
                            <List h1='Discover' p='Latest News' p1='Getting Started' p2='Privacy Policy' p3='Press Kit'/>
                            <List h1='Explore' p='Coinmarket cap' p1='Coingecko' p2='BscScan' p3='Blog'/>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    )
}

export default Layout