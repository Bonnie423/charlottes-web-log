import recentEntriesData from "../data/recent-entries"
import RecentEntry from './RecentEntry'
const RecentEntries = () => {
  return (
    <div className="recent-entries">
     <ul>
      {recentEntriesData.map((item =>(
        <li key={item.id}>
          <RecentEntry {...item} />
        </li>
      )))}
     </ul>
    </div>
  )
}

export default RecentEntries