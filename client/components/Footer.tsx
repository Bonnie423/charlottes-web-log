import footer from "../data/footer"

function Footer() {
  return (
   <footer className="footer">
    <p>{footer.author} {footer.copyright}</p>
   </footer>
  )
}

export default Footer