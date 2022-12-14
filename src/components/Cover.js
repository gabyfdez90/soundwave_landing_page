import '../styles/index.css'
import girl from "../img/landing-page-girl.png"

function Cover() {
  return (
    <div className='cover'>
      <img src={girl} className='cover__girl'></img>
    </div>
  );
}

export default Cover;
