import Header from './Header'
import Footer from './Footer'
import OtherBlogs from './OtherBlogs'
import Posts from './Posts'
import RecentEntries from './RecentEntries'

function App() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="main">
        <div className="other-blog-container">
          <OtherBlogs />
        </div>
        <div className="posts-box">
          <Posts />
        </div>
        <div className='recent-box'>

        <RecentEntries />
        </div>
      </div>
      <Footer />
    </>
  )
}
export default App
