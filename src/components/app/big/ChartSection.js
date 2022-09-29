import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import image from '../../../images/BTC.png'
import Tabs from "../small/Tabs";
import Charts from "../small/Charts";

const ChartSection = () => {
    return (
        <>
            <section className="w-11/12 mx-auto my-20  flex flex-col-reverse md:flex-row justify-between items-center gap-y-12">
                <div>
                    <h4 className="text-3xl md:text-4xl lg:text-5xl lg:leading-tight font-bold md:leading-tight" >How to get CLDX Token</h4>
                    <p className="md:text-xl sm:leading-normal md:leading-relaxed lg:leading-loose my-5">Cloudax (CLDX) is the native token of the Cloudax blockchain. There would be a private and public sale on cloudax launchpad. Additional IDO would be done on partner Launchpads. Private sale Participants would be randomly selected from our whitelist event held on our telegram. The public sale would be based on FCFS (First Come, First Serve). Our sale method focuses on fairness for the entire community.</p>
                    <a href="/" className="bg-clip-text text-transparent text-xl bg-gradient-to-r from-[#2F79F9] to-[#3DAEFA]">Learn more <FontAwesomeIcon className="text-[#2F79F9]" icon={faArrowRight} /> </a>
                </div>
                <img className="w-[60%] lg:w-[100%]" src={image} alt='btc' />
            </section>

            <section className=" bg-gradient-to-r from-[#3744C2] to-[#724DDD] rounded-[2rem] p-[3rem] lg:p-[6rem] w-11/12 mx-auto text-white flex flex-col md:flex-row gap-y-10 justify-between items-center my-10">
                <div className=" w-full md:w-2/4">
                    <h3 className="text-3xl lg:text-5xl mb-5 font-bold">Tokenomics</h3>
                    <Tabs h1='$0.0025' p1='Public Sale Price' />
                    <Tabs h1='10 Billion' p1='Total Supply' />
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