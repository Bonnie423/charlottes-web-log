 interface Props{
  title: string
  date: string
  paragraphs: string[]
  id: number
  commentCount: number
}

const Post = ({title, date,paragraphs}:Props) => {
  return (
    <div className="post">
      <h3>{title}</h3>
      <p>{date}</p>
      <p>{paragraphs}</p>
    </div>
  )
}

export default Post