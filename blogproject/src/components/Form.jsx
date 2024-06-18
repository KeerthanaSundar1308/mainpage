import { useState } from "react";
import styles from './form.module.css';
export default function Form({post,setPost}){
    const[update, setUpdate]=useState("");
    function saveSubmit(e){
        e.preventDefault(); // when refreshing the page, now the eentered data does not disappear, it gets submitted
        setPost([...post,update]);
        setUpdate("");
    }
    return(
        <form className={styles.stylepost} onSubmit={saveSubmit}>
        <div className={styles.flex}>
            <input className={styles.font} onChange ={(e)=>setUpdate(e.target.value)} value={update} type="text"/>
            <button className={styles.button} type="submit">Add</button>
        </div>
        </form>
    );
}