import Link from 'next/link'

const DiscoverItem = ({
    title ,
    count_answer ,
    create_at,
    slug
    }) => {
    return (
        <>
        <Link href={`/${slug}`}>
            <div className="mt-4 filter hover:blur-lg rounded w-full lg:w-2/5 flex shadow transition relative duration-300 ease-in-out transform hover:translate-x-4  p-4 hover:bg-base-800 cursor-pointer">
                <div className="hasil-voting flex flex-col p-1 text-center">
                    <p className=" text-xs font-thin font-mono">
                        Voted
                    </p>
                    <p className="tabular-nums">
                        {count_answer}
                    </p>
                </div>
                <div className="flex flex-col w-fill mx-3 ">
                        <p className="title text-basefont-500 hover:text-basefont-50 subpixel-antialiased cursor-pointer font-serif an" >
                            {title}
                        </p>
                    <p className="create italic text-base-400">
                        {create_at}
                    </p>
                </div>
            </div>  
        </Link>
        </>
    )
}

export default DiscoverItem
