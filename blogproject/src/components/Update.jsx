import { useState } from "react";
import Form from './Form';
import Display from "./Display";

export default function Update(){
    const[post,setPost]=useState([]);
     return (
     <div>
        <Form post={post} setPost={setPost}/>
        <Display post={post} setPost={setPost} />
       
     </div>
     );
}