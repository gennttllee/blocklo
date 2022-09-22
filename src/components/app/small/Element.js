

const Element = ({ content, tag }) => {
    if (tag === 'Initial Circulating Supply') {
        return (
            <div className=" hidden md:flex w-fit items-center gap-2 rounded-lg h-4/5  border border-[#ffffff79]">
                <p className="whitespace-pre-wrap leading-none text-right">{tag}</p>
                <p className="text-3xl font-bold w-3/4">{content}</p>
            </div>
        )
    } else {
        return (
            <div className="flex w-fit items-center gap-2 rounded-lg h-4/5  border border-[#ffffff79]">
                <p className="whitespace-pre-wrap leading-none text-right">{tag}</p>
                <p className="text-xl sm:text-3xl font-bold w-3/4">{content}</p>
            </div>
        )
    }
}

export default Element