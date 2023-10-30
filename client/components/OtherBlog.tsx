interface Props{
  title: string
  link: string
}

const OtherBlog = ({title, link}:Props) => {
  return (
    <div>
     <a href={link}><h3>{title}</h3></a>
     
      </div>
  )
}

export default OtherBlog