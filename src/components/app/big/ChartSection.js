import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import image from '../../../images/BTC.png'
import Tabs from "../small/Tabs";
import Charts from "../small/Charts";

const ChartSection = () => {
    return (
        <>
            <section className="w-11/12 mx-auto my-20  flex flex-col-reverse lg:flex-row justify-between items-center gap-y-5">
                <div>
                    <h4 className="text-3xl md:text-5xl font-bold">How to get CLDX Token</h4>
                    <p className="md:text-xl md:leading-normal my-5">Cloudax (CLDX) is the native token of the Cloudax blockchain. It is used to interact with dApps, pay for fees, secure the network through staking, and provide a basic accounting unit on the Cloudax platform.</p>
                    <a href="/" className="bg-clip-text text-transparent text-xl bg-gradient-to-r from-[#2F79F9] to-[#3DAEFA]">Learn more <FontAwesomeIcon className="text-[#2F79F9]" icon={faArrowRight} /> </a>
                </div>
                <img className="w-[60%] lg:w-[100%]" src={image} alt='btc' />
            </section>

            <section className=" bg-gradient-to-r from-[#3744C2] to-[#724DDD] rounded-[2rem] p-[2rem] w-11/12 mx-auto text-white flex flex-col md:flex-row gap-y-10 justify-between items-center my-10">
                <div className=" w-full md:w-2/4">
                    <h3 className="text-3xl lg:text-5xl mb-5 font-bold">Tokenomics</h3>
                    <Tabs h1='$0.0025' p1='Public Sale Price' />
                    <Tabs h1='5 Billion' p1='Total Supply' />
                    <Tabs h1='173 Million' p1='Initial Circulating Supply' />
                    <Tabs h1='$434,000' p1='Initial Market Cap' />
                </div>
                <div className=" w-full md:w-[45%]">
                    <Charts />
                </div>
            </section>
        </>
    )
}

export default ChartSection