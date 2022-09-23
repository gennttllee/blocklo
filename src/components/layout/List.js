

const List = ({h1, p, p1, p2, p3}) => {
    return (
        <div>
            <p className='font-bold mb-4 text-xl sm:text-3xl'>{h1}</p>
            <p className='text-[#e0eeffc9] sm:text-xl mb-2'>{p}</p>
            <p className='text-[#e0eeffc9] sm:text-xl mb-2'>{p1}</p>
            <p className='text-[#e0eeffc9] sm:text-xl mb-2'>{p2}</p>
            <p className='text-[#e0eeffc9] sm:text-xl'>{p3}</p>
        </div>
    )
}

export default List