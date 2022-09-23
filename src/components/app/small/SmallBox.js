

const SmallBox = ({h1, p1, row}) => {
    return (
        <div className={`w-[22rem] ${row ? 'text-left' : 'text-right'}`}>
            <h1 className=" text-xl lg:text-3xl my-3 font-bold">{h1}</h1>
            <p className=" text-[#ffffffb6]  capitalize">{p1}</p>
        </div>
    )
}

export default SmallBox

