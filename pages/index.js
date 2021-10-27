import Head from 'next/head'
import axios from '../utils/axios'
import Discover from '../components/DiscoverItem'
import Container from '../components/other/ContainerLayout'
export default function Home({ data }) {
  
  return (
    <>
      <Head>
        <title>discover interested question - Pollin</title>
        <link rel="icon" href="/icon.png" />  
        <link rel="apple-touch-icon" href="/icon.png"></link>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="black"></meta>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="description" content="vote interested in question , or make question for free and anytime"></meta>
        <meta name="keywords" content="poll free, website poll free,create poll" />
      </Head>
      
      <Container>
        <div className="flex flex-col mb-3 md:ml-10">
            <h1 className="sm:text-4xl mb-2 font-serif capitalize text-2xl"> Discover Poll</h1>
            <p className="antialiased text-opacity-70 text-base-200 font-serif ml-3 "> if you interested in question you can vote</p>
        </div>
        <div className="container flex flex-wrap justify-evenly">
        
          {data.results.length > 0 && data.results.map((item,i) => {
            return <Discover 
                      key={i} 
                      title={item.title} 
                      create_at={item.create_at} 
                      count_answer={item.count_answer}
                      slug={item.slug} />
          })}
          
        </div>
      </Container>
     
    </>
  )
}

export async function getServerSideProps(context) {
  try {
    const res = await axios.get('api/')
    if(!res.data){
      return {
        notFound: true,
      }
    }
    return {
      props: {
        data:res.data
      }, // will be passed to the page component as props
    }
  } catch (error) {
    return {
      notFound: true,
     
    }
  }
}