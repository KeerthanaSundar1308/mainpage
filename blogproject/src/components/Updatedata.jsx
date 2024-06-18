import styles from "./updatedata.module.css"
export default function Updatedata({item,post,setPost}){
    function deletedata(item){
      console.log("delete button clicked for",item);
      setPost(post.filter((update)=>update!==item));
    }
        return (
            <div className={styles.data}>
                <div className={styles.dataname}>{item}</div>
                <span>
                    <button onClick={() =>deletedata(item)} className={styles.delete}>X</button>
                </span>
                    <hr className={styles.line} />
            </div>
       
        );
    
    
}