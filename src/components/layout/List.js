

const List = ({h1, p, p1, p2, p3}) => {
    return (
        <div>
            <p href="/" className='font-bold mb-4 text-xl sm:text-3xl'>{h1}</p>
            <a href="/" className='hover:text-[white] text-[#e0eeffc9] sm:text-xl mb-2 block'>{p}</a>
            <a href="/" className='hover:text-[white] text-[#e0eeffc9] sm:text-xl mb-2 block'>{p1}</a>
            <a href="/" className=' hover:text-[white] text-[#e0eeffc9] sm:text-xl mb-2 block'>{p2}</a>
            <a href="/" className=' hover:text-[white] text-[#e0eeffc9] sm:text-xl block'>{p3}</a>
        </div>
    )
}

export default List