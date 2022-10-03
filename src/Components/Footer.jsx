import '../App.css'

function Footer() {
    const year = new Date().getFullYear();
    return (
      <footer>
        <p>Copyright ⓒ {year} -FJ</p>
      </footer>
    );
  }
  
export default Footer;

