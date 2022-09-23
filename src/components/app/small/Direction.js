import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import SmallBox from "./SmallBox";
import Box from "./Box";

const Direction = ({ row, icon, y1, z1, l1, h1 }) => {
    if (row) {
        return (
            <>
                <div className="hidden  lg:flex gap-10 items-center justify-center mx-auto my-[-1px] min-h-[20rem] max-h-[27rem] h-[22rem] ">
                    <Box icon={icon} h1={h1} l1={l1} />
                    <div className='bg-gradient-to-b from-[#2F79F9] to-[#3DAEFA] w-[1rem] h-full flex items-center'>
                        <FontAwesomeIcon className="text-[#3DAEFA] text-7xl ml-[-1rem]" icon={faCaretLeft} />
                    </div>
                    <SmallBox h1={y1} p1={z1} row={row} />
                </div>

                <div className=" flex lg:hidden gap-7 items-center mx-auto w-11/12 ">
                    <div className='bg-gradient-to-b from-[#2F79F9] to-[#3DAEFA] w-[1rem] h-[28rem] flex items-center '>
                        <FontAwesomeIcon className="text-[#3DAEFA] text-7xl mr-[-1rem]" icon={faCaretRight} />
                    </div>
                    <div className="flex flex-col gap-y-7">
                        <SmallBox h1={y1} p1={z1} row={true} />
                        <Box icon={icon} h1={h1} l1={l1} />
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className="hidden  lg:flex gap-10 items-center justify-center mx-auto my-[-1px] min-h-[20rem] max-h-[27rem] h-[22rem]  ">
                    <SmallBox h1={y1} p1={z1} row={row} />
                    <div className='bg-gradient-to-b from-[#2f79f939] to-[#3daefa34] w-[1rem] h-full flex items-center'>
                        <FontAwesomeIcon className="text-[#3daefa34] text-7xl mr-[-1rem]" icon={faCaretRight} />
                    </div>
                    <Box icon={icon} h1={h1} l1={l1} />
                </div>

                <div className=" flex lg:hidden gap-7 items-center mx-auto  w-11/12">
                    <div className='bg-gradient-to-b from-[#2f79f939] to-[#3daefa34] w-[1rem] h-[28rem] flex items-center'>
                        <FontAwesomeIcon className="text-[#3daefa34] text-7xl mr-[-1rem]" icon={faCaretRight} />
                    </div>
                    <div className="flex flex-col gap-y-7">
                        <SmallBox h1={y1} p1={z1} row={true} />
                        <Box icon={icon} h1={h1} l1={l1} />
                    </div>
                </div>
            </>
        )
    }
}

export default Direction