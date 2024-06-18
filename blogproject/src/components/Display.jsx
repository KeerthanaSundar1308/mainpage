import Updatedata from "./Updatedata";
import styles from './display.module.css';
export default function Display({post,setPost}){
    return(
        <div className={styles.list}>
             {post.map((item) =>(
            <Updatedata key={item} item={item} post={post} setPost={setPost}/>
          ))}
        </div>
    )
}
