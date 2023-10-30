import header from "../data/header";



const Header = () => {
  return (
    <div  className='header'>
     <a href={header.link}><h2>{header.title}</h2></a> 
    </div>
  )
}

export default Header