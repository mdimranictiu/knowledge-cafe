import PropTypes from "prop-types";
import bookmark from '../../assets/image/bookmark.png'


const Blog = ({blog,handleAddTobookmark,handleMarkAsRead}) => {
    const {id,hashtags,title,cover,postDate,authorRealImg,authorName,readingTime}=blog;
    return (
        <div className="my-8 px-5 py-5 shadow-lg">
       <div className="my-5 h-[400px] rounded-[40px] border">
       <img className=" w-full h-full  " src={cover} alt={`cover  picture of title ${title}`} />
       </div>
           
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-5">
                    
                    <img className="w-16 h-16 border rounded-[32px]" src={authorRealImg} alt={`Auothor img for ${title}`} />

                    <div>
                     <h3>{authorName}</h3>
                     <p>{postDate}</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <p>{readingTime} min read</p>
                    <button onClick={()=>handleAddTobookmark(blog)}><img className="w-4 h-4" src={bookmark} alt="" /></button>
                </div>
            </div>
            <h2 className="text-3xl my-2">{title}</h2>
             <p>            { 
  hashtags.map((hashtag, idx)=> 
    <span key={idx}>
      <a href=""> {hashtag}</a>
    </span>
  ) 
}</p>
<button
                onClick={() => handleMarkAsRead(id,readingTime)}
                className='text-purple-800 font-bold underline'
            >Mark As Read</button>
        </div>
);
};
Blog.prototypes={
    blog: PropTypes.object.isRequired,
    handleAddTobookmark:PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blog;