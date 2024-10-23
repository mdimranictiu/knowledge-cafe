import { useEffect, useState } from "react";


const Blogs = () => {

    const [blogs,setBlogs]=useState([]);
    useEffect(()=>{
      fetch('blogs.json')
      .then(res=>res.json())
      .then(data=> setBlogs(data))
    },[])
    return (
        <div className="col-span-2">
            <h3>Blogs : {blogs.length}</h3>
        </div>
    );
};

export default Blogs;