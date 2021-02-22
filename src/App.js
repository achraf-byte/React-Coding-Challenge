import React, {useEffect , useState ,useRef} from 'react';
import { Waypoint } from 'react-waypoint';
import './App.css';
import axios from 'axios'
import Elements from './components/Elements';


function App() {

  const [info , setInfo] = useState([])
  const [isloading , setisloading] = useState(true)
  const [isloadingtow , setisloadingtow] = useState(true)
  const [page , setpage] = useState(1)

  const [error , seterrore] = useState(false)
  

  
  useEffect( () =>  {
    let exit
    setisloadingtow(true)
      axios({
        method:'get',
        url:'https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&per_page=4&page=' + page,
        cancelToken: new axios.CancelToken(c => exit = c)
      }).catch(error =>{
        if(axios.isCancel(error)) return
        if(error.message){
          alert("GITHUB API rate limit exceeded for you")
          seterrore(true)
          

        }
       
      }).then(res=>{
        if(res){
          
          setInfo([...new Set([...info , ...res.data.items])])
          
           setisloading(false)
          setisloadingtow(false)
        }
      
      })
    
     
   } ,[page])
 
   
  function loadmore() {
   
    if(!error && !isloading && !isloadingtow  ){
      setpage(page+1)
     
      return
    }else{
      return
    }
     
  
   
    
  }
  

  return (
   <div className='app'>
     <React.StrictMode>
     <Elements  infos={info} isloading={isloading} isloadingtow={isloadingtow} />
     <Waypoint onEnter={loadmore} />
     </React.StrictMode>
   </div>
  )
}

export default App;
