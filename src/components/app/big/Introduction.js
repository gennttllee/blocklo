import image from '../../../images/AXS.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faCopy } from '@fortawesome/free-solid-svg-icons'

const Introduction = () => {
  return (
    <section id='about' className=" bg-gradient-to-r from-[#2F79F9] to-[#3DAEFA] rounded-[2.5rem] w-11/12 text-white p-12 mx-auto flex items-center flex-col-reverse md:flex-row justify-between my-24 gap-y-10">
      <div className=" w-full md:pr-3 lg:w-[48%]">
        <h4 className="xl:text-6xl 2xl:text-7xl xl:leading-tight 2xl:leading-tight text-3xl sm:text-3xl md:text-4xl lg:text-5xl  font-bold md:leading-tight lg:leading-snug">Introduction to Cloudax Token</h4>
        <p className=" text-xl md:leading-relaxed lg:leading-loose mt-6">A BEP-20 utility and governance token that powers our rapidly expanding ecosystem. Cloudax token ($CLDX) would serve several purposes such as Payments and Access to our Launchpad, NFT Marketplace, Fees Payments, ecommerce shopping, in-game purchases, Network incentivization and so much more.</p>
        <div>
          <div className=' mt-10 w-fit flex flex-col md:flex-row gap-4 flex-wrap'>
            <button className='transition-all h-[58px] md:h-[68px] text-base md:text-2xl w-[240px] text-[#2F79F9] rounded-lg bg-[white] hover:bg-transparent hover:text-[white] hover:border-2 hover:border-[white]'> <FontAwesomeIcon className='mr-2' icon={faCopy} />Join Presale</button>
            <button className='transition-all border-2 border-white h-[58px] md:h-[68px] text-base md:text-2xl w:[193px] md:w-[240px] rounded-lg hover:bg-white hover:text-[#2F79F9] '>
              <FontAwesomeIcon className='mr-2' icon={faPaperPlane} />
              Whitepaper</button>
          </div>
        </div>
      </div>
      <div className="h-[20rem] md:h-[35rem] lg:h-[37rem]  bg-[#3DAEFA] w-full lg:w-2/4 flex justify-end items-end rounded-[2.5rem]">
        <img className="h-4/5" src={image} alt='images' />
      </div>
    </section>
  )
}

export default Introduction