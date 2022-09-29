import logo from '../images/Cloudax_Light 2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faBars, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faTwitter, faDiscord, faTelegram, faMedium, faGithub } from '@fortawesome/free-brands-svg-icons';
import List from '../components/layout/List';
import { useState, useEffect } from 'react';


const Layout = ({ children }) => {
    const [menu, setMenu] = useState(false)
    const [show, setShow] = useState(true)

    const controlNavbar = () => {
        if (window.scrollY > 500) {
            setShow(false)
        } else { setShow(true) }
    }

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    },[]);

    return (
        <section>
            <nav id='nav' className={`transition-all ${show ? 'bg-[#16162d4f]' : 'bg-[#16162D]'} ${show ? 'absolute' : 'fixed'} top-0 z-10 h-16 md:h-20 w-full text-white`}>
                <div className="flex justify-between w-11/12 mx-auto h-full items-center">
                    <img className=' w-32 h-6 sm:w-58 sm:h-9' src={logo} alt='logo' />
                    <ul className='hidden cursor-pointer lg:flex items-center w-auto h-full gap-10 text-lg mr-[5rem]'>
                        <a href='#home' className='h-full flex items-center hover:border-b-2 hover:border-[white]' >Home</a>
                        <a href='#about' className='h-full flex items-center hover:border-b-2 hover:border-[white]' >About</a>
                        <a href='#token info' className='h-full flex items-center hover:border-b-2 hover:border-[white]'>Token Info</a>
                        <a href='#tree' className='h-full flex items-center hover:border-b-2 hover:border-[white]'>RoadMap</a>
                        <a href='/' className='h-full flex items-center hover:border-b-2 hover:border-[white]' >Team</a>
                        <div onMouseEnter={() => setMenu(true)} className='relative transition-all'>
                            <li onClick={() => setMenu(!menu)} className=' hover:text-[#2F79F9]'>Community <FontAwesomeIcon className='ml-1' icon={menu ? faAngleDown : faAngleUp} /> </li>
                            {menu && <div onMouseLeave={() => setMenu(false)} className='py-2 absolute top-14 left-[-4rem] bg-[#16162D] w-[15rem]'>
                                <a className=' py-3 px-5 flex items-center gap-3 hover:bg-[#ffffff14] hover:text-[#2F79F9]' target='blank' href='https://t.me/cloudaxofficial'>
                                    <FontAwesomeIcon icon={faTelegram} /> Telegram</a>
                                <a className='py-3 px-5 flex items-center gap-3 hover:bg-[#ffffff14]  hover:text-[#2F79F9]' target='blank' href='https://twitter.com/CloudaxHQ'
                                > <FontAwesomeIcon icon={faTwitter} /> Twitter</a>
                                <a className='py-3 px-5 flex items-center gap-3 hover:bg-[#ffffff14]  hover:text-[#2F79F9]' target='blank' href='https://cloudax.medium.com/'>
                                    <FontAwesomeIcon icon={faMedium} />Medium</a>
                                <a className='py-3 px-5 flex items-center gap-3 hover:bg-[#ffffff14]  hover:text-[#2F79F9]' target='blank' href='/'>
                                    <FontAwesomeIcon icon={faGithub} /> Github</a>
                            </div>}
                        </div>
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
                                <a href='/' className='hover:text-[#2F79F9]'>
                                    <FontAwesomeIcon className='text-3xl mr-4' icon={faDiscord} /></a>
                                <a href='/' className='hover:text-[#2F79F9]'>
                                    <FontAwesomeIcon className='text-3xl mr-4' icon={faInstagram} /></a>
                                <a href='/' className='hover:text-[#2F79F9]'>
                                    <FontAwesomeIcon className='text-3xl mr-4' icon={faFacebook} /> </a>
                                <a className='hover:text-[#2F79F9]' target='blank' href='https://twitter.com/cloudaxofficial'>
                                    <FontAwesomeIcon className='text-3xl mr-4' icon={faTwitter} /></a>
                            </div>
                            <p className='text-[#e0eeffc9] sm:text-xl'>All rights reserved @Cloudax 2022</p>
                        </div>
                        <div className='flex w-full flex-col md:flex-row gap-y-5 lg:w-3/5 justify-between'>
                            <List h1='Ecosystem' p='Join Presale' p1='Dex' p2='Whitepaper' p3='Token Info' />
                            <List h1='Discover' p='Latest News' p1='Getting Started' p2='Privacy Policy' p3='Press Kit' />
                            <List h1='Explore' p='Coinmarket cap' p1='Coingecko' p2='BscScan' p3='Blog' />
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    )
}

export default Layout