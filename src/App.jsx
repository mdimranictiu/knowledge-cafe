
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'

function App() {
 

  return (
    <>
     <Header></Header>
     <div className='grid grid-cols-3 mx-auto w-4/5 max-md:grid-cols-2 gap-5'>
      <Blogs></Blogs>
      <Bookmarks></Bookmarks>
     </div>
    </>
  )
}

export default App
