
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {
  const [bookmarks,setBookmarks]=useState([]);

  const handleAddTobookmark=blog=>{
    const newBookmarks=[...bookmarks,blog];
    setBookmarks(newBookmarks)
  }
  const [readingTime, setReadingTime] = useState(0)
  const handleMarkAsRead = (id, time) =>{
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
    // remove the read blog from bookmark
    // console.log('remove bookmark', id)
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks);
  }

  return (
    <>
     <Header ></Header>
     <div className='grid max-sm:grid-cols-1  grid-cols-3 mx-auto w-4/5  max-md:grid-cols-2 gap-5'>
      <Blogs handleAddTobookmark={handleAddTobookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
      <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
     </div>
    </>
  )
}

export default App
