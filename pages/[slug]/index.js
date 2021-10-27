import Head from 'next/head'
import Detail from '../../components/detail/Detail'
import Comments from '../../components/detail/comment/Comment'
import axios from '../../utils/axios'

import Container from '../../components/other/ContainerLayout'

const index = ({ data }) => {
    const { id, author, desc, title , deadline ,deadlineAnswer ,create_at ,slug  ,contenttype ,choice ,comments, auth } = data
    return (
        <>
         <Head>
                <title>{title} - Pollin</title>
                <link rel="icon" href="/icon.png" />  
                <link rel="apple-touch-icon" href="/icon.png"></link>  
                <link rel="manifest" href="/manifest.json" />
                <meta name="theme-color" content="black"></meta>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="description" content={`vote question ${title} `} ></meta>
                <meta name="keywords" content={`poll free, website poll free,create poll free,${title}`} />
          </Head>
   
        <Container>
            <Detail 
                id={id}
                title={title}
                author={author}
                desc={desc}
                deadline={deadline}
                deadlineAnswer={deadlineAnswer}
                create_at={create_at}
                list={data.private}
                result={data.result_private}
                slug={slug}
                auth={auth}
                choice={choice} />
        </Container>

        <Container>
            <Comments 
                contenttype={contenttype}
                comments={comments}
                id={id} />
        </Container>

        </>
    )
}


export async function getServerSideProps(context) {
    const { query } = context
    
    try {
      const res = await axios.get(`api/${query.slug}`)
      
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
