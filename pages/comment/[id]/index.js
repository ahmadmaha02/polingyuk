import Head from 'next/head'
import axios from '../../../utils/axios'
import Comments from '../../../components/detail/comment/Comment'
import Container from '../../../components/other/ContainerLayout'

const index = ({ data }) => {
    return (
        <>
         <Head>
                <link rel="icon" href="/icon.png" />  
                <link rel="apple-touch-icon" href="/icon.png"></link>
                <link rel="manifest" href="/manifest.json" />
                <title>Comments {data[0].obj_id}</title>
                <meta name="theme-color" content="#1f2937"></meta>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          </Head>
         <Container>
            <Comments contenttype={7} comments={data} id={data[0].obj_id} />
         </Container>
        </>
    )
}

export async function getServerSideProps(context) {
    const { query } = context
    
    try {
      const res = await axios.get(`comment/detail/${query.id}/`)
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


export default index
