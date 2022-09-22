

const Tabs = ({ h1, p1 }) => {
    return (
        <div className="w-full px-[1rem] py-[8px] md:p-[1rem] mt-5 bg-[#ffffff18] rounded-[1.5rem] border-t border-l border-[#ffffff51]">
            <h4 className="text-xl md:text-3xl font-bold">{h1}</h4>
            <p>{p1}</p>
        </div>
    )
}

export default Tabs