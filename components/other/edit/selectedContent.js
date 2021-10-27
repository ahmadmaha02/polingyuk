import UpdateForm from './formUpdate'
import DeadlineUpdate from './deadlineUpdate'

const selectedContent = ({ type, id, title , deadline, desc,result,list  }) => {

   switch(type){
        case 1 :
            return <UpdateForm 
                            id={id}
                            title={title}
                            desc={desc}
                            list={list}
                            result={result}
                           />
        case 2 :
            return <DeadlineUpdate 
                            id={id}
                            deadline={deadline} /> 
   }
}

export default selectedContent
