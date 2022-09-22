import logo from '../images/Cloudax_Light 2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faBars } from '@fortawesome/free-solid-svg-icons'


const Layout = ({ children }) => {
    return (
        <section>
            <nav className="bg-[#16162D] h-16 md:h-24 w-full text-white">
                <div className="flex justify-between w-11/12 mx-auto h-full items-center">
                    <img className=' w-32 h-6 sm:w-52 sm:h-10' src={logo} alt='logo' />
                    <ul className='hidden lg:flex items-center w-auto gap-10 text-lg'>
                        <li>Home</li>
                        <li>About</li>
                        <li>RoadMap</li>
                        <li>Token Info</li>
                        <li>Team</li>
                        <li>Community <FontAwesomeIcon className='ml-1' icon={faAngleDown} /> </li>
                    </ul>
                    <button className='block lg:hidden text-lg'> <FontAwesomeIcon icon={faBars} /></button>
                </div>
            </nav>

            <main>
                {children}
            </main>

            <footer>

            </footer>
        </section>
    )
}

export default Layout