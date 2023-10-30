import otherBlogsData from '../data/other-blogs'
import OtherBlog from './OtherBlog'

const OtherBlogs = () => {
  return (
    <>
      <div className='other-blog-container'>
        <h3>Other Blogs:</h3>
        <ul>
          {otherBlogsData.map((blog) => (
            <li key={blog.id}>
              <OtherBlog title={blog.blogTitle} link={blog.link} />
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default OtherBlogs
