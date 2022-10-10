import { useSelector } from 'react-redux';
import './App.css';
import postApi, { useGetAllPostsQuery } from './app/api/posts';

function App() {

const {posts} = useSelector(state => state.posts)

useGetAllPostsQuery()

const [deletePost, {}] = postApi.useDeletePostMutation();
const [changePost, {}] = postApi.useChangePostMutation()

  return(
   <div className='todos'>
      <h1 className='title'>TODO LIST</h1>
      {
        posts?.map((post) => {
          return(
            <li key={post.id} className='list-item'>
                <div>
                    <input className="list-checkbox" type="checkbox" checked={post.completed} onClick={() => {changePost(post)}} />
                    <span className={post.completed ? 'done' : ''} >{post.title}</span>
                </div>
                <button className="list-button" onClick={() => {deletePost(post)}} disabled={!post.completed} >
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMPgtqrh4PdWU9WxUtsmEvvoV7NhhJLvNTvA&usqp=CAU" width={15} alt="delete"/>
                </button>
            </li>
          )
        })
      }
    </div>
  )
}

export default App;

 