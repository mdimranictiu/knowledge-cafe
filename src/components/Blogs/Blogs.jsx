import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";


const Blogs = ({handleAddTobookmark,handleMarkAsRead}) => {
   
    const [blogs,setBlogs]=useState([]);
    useEffect(()=>{
      fetch('blogs.json')
      .then(res=>res.json())
      .then(data=> setBlogs(data))
    },[])
    return (
        <div className="col-span-2">
            <h3>Blogs : {blogs.length}</h3>
            {
                blogs.map(blog=> <Blog  handleMarkAsRead={handleMarkAsRead} handleAddTobookmark={handleAddTobookmark} key={blog.id} blog={blog}>

                </Blog>)
            }
        </div>
    );
};

Blogs.propTypes={
    handleAddTobookmark:PropTypes.func,
    handleMarkAsRead: PropTypes.func
}
export default Blogs;