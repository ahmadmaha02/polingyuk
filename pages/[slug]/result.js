import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

import axios from '../../utils/axios'

import Char from '../../components/result/pie' ;
import ProgressBar from '../../components/result/progressBar'
import ShareButton from '../../components/other/copyClipboard'
import Container from '../../components/other/ContainerLayout'

const result = ({ data, slug, page }) => {
    const router = useRouter()
    if(page){
        return ( 
            <>
             <Head>
                    <title>result Private- Pollin</title>
                    <link rel="icon" href="/icon.png" />  
                    <link rel="apple-touch-icon" href="/icon.png"></link>
                    <link rel="manifest" href="/manifest.json" />
                    <meta name="theme-color" content="#1f2937"></meta>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                    <meta name="description" content={`result question Private in pollin `} ></meta>
            </Head>
            <Container>
                <div className="container flex flex-col ">
                    <p className="md:text-2xl font-mono inline-flex justify-center">
                        Sorry But This question result Private
                    </p>
                    <p onClick={() => router.push(`/${slug}`)} className="text-2xl font-mono inline-flex justify-center cursor-pointer hover:underline text-basefont-500">
                            Go back to Vote
                    </p>

                    <p onClick={() => router.push(`/`)} className="text-2xl font-mono inline-flex justify-center cursor-pointer hover:underline text-basefont-500">
                            Discover Question
                    </p>
                    
                </div>
            </Container>
            </>
            ) 
    }
    const { title, desc, create_at, result, resultAll } = data
    const colorBg = [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
          'rgb(255, 111, 197)',
          'rgb(162, 111, 197)',
          'rgb(147, 76, 197)',
          'rgb(38, 242, 197)',
          'rgb(253, 141, 191)',
          'rgb(228, 150, 72)',
          'rgb(78, 150, 72)'
    ]
   
    return (
        <>  
            <Head>
                    <title>result {title} - Pollin</title>
                    <link rel="icon" href="/icon.png" />  
                    <link rel="apple-touch-icon" href="/icon.png"></link>
                    <link rel="manifest" href="/manifest.json" />
                    <meta name="theme-color" content="black"></meta>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                    <meta name="description" content={`result question ${title} in pollin `} ></meta>
                    <meta name="keywords" content={`poll free, website poll free,create poll free,${title}`} />
            </Head>
            <Container>
                <div className="flex flex-col">
                    <div className="flex sm:justify-center mb-3">
                        <div className="flex flex-col">
                            <h1 className="text-2xl sm:text-4x1 mb-2">{title}</h1>
                            <p className="antialiased text-opacity-80 text-base-400 italic">Started About {create_at}</p>
                        </div>
                    </div>
                    <div className="desc text-base-500 text-lg italic sm:ml-7 my-3">
                        <blockquote>
                            " {desc}
                        </blockquote> 
                    </div>
                    <div className="flex flex-col md:flex-row max-h-1/2 my-auto">
                        <div className="flex flex-col md:w-4/5 w-full py-10  ">
                            {result.map((item,i) => {
                                let percent = item.result == 0 ? 0 :  item.result / resultAll 
                                return <ProgressBar key={i} name={item.text} percent={`${((percent * 100) + '').substring(0,5) }%`} color={colorBg[i]} />
                            })}
                        </div>
                        <div className="char p-4 inline-flex justify-center md:m-auto md:justify-items-center">
                            <Char data={{result,resultAll,title}} />
                        </div>
                    </div>
                    <div className="ml-2 sm:ml4">
                        <p className="mb-2 text-lg">Total Votes : {resultAll} vote</p>
                    </div>
                    <div className="flex flex-row sm:justify-between mt-2">
                        <ShareButton url={router.asPath} title={title} /> 
                        <Link href={`/${slug}`}>
                            <button className="transition duration-300 ease-in-out focus:outline-none focus:shadow-outlin bg-basefont-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l w-1/2">
                                Back to Vote
                            </button>
                        </Link>
                    </div>
                </div>
            </Container>
        </>
    )
}

export async function getServerSideProps(context) {
    const { query } = context
   
    try {
      const res = await axios.get(`api/${query.slug}/result`)
      if(!res.data){
        return {
          notFound: true,
        }
      }
      return {
        props: {
          data:res.data,
          slug:query.slug
        }, // will be passed to the page component as props
      }
    } catch (error) {
        if(error.response.status){
        return {
            props:{
                page:true,
                slug:query.slug
            },
        }       
        }
        return {
            notFound: true,
        }
    }
  }

export default result
