import Bookmark from "../Bookmark/Bookmark";
import PropTypes from "prop-types";

const Bookmarks = ({bookmarks,readingTime}) => {
    console.log(readingTime)

    return (
        <div className="mx-auto p-4 mt-11 text-center">
             <div>
                <h3 className="text-4xl">Reading Time: {readingTime}</h3>
            </div>
          <h2 className="text-3xl">BookMarks: </h2>
          {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark> )
            }
          
        </div>
    );
};
 Bookmarks.proTypes={
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
 }
export default Bookmarks;