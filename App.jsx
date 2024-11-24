import { useState,useEffect } from "react";
import axios from "axios";
const App=()=>{
  const [mydata,setMydata]=useState([]);
  const loadData=()=>{
  let api="https://jsonplaceholder.org/comments";
  axios.get(api).then((res)=>{
    setMydata(res.data);
    console.log(res);
  });
  }
  useEffect(()=>{
    loadData();
  },[])
  const ans=mydata.map((key)=>{
    return(
      <>
      <tr>
        <td>{key.id}</td>
        <td>{key.postId}</td>
        <td>{key.userId}</td>
        <td>{key.comment}</td>
      </tr>
      </>
    )
  })
return(
  <>
  <h1>
    live api
    </h1>
    <table>
      <tr>
        <th>ID</th>
        <th>PostId</th>
        <th>UserId</th>
        <th>comment</th>
      </tr>
      {ans}
    </table>
    </>
)}
export default App;