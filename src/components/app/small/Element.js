

const Element = ({ content, tag }) => {
    if (tag === 'Initial Circulating Supply') {
        return (
            <div className=" hidden md:flex w-fit items-center gap-2 rounded-xl h-4/5  border border-[#ffffff49]">
                <p className="whitespace-pre-wrap leading-none text-right">{tag}</p>
                <p className="text-3xl font-bold w-3/4">{content}</p>
            </div>
        )
    } else {
        return (
            <div className="flex w-fit items-center gap-2 rounded-xl h-4/5  border border-[#ffffff49]">
                <p className="whitespace-pre-wrap leading-none text-right">{tag}</p>
                <p className="text-xl sm:text-2xl lg:text-3xl font-bold w-3/4">{content}</p>
            </div>
        )
    }
}

export default Element