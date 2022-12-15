// import '../styles/index.css'
import girl from "../img/landing-page-girl.png"
import "../img/bg/bg-movil-1.png"
import "../img/bg/bg-laptop-1.png"

function Cover() {
  return (
    <div className='cover'>
      <img src={girl} className='cover__girl'></img>
      <div classname='cover-box'>
      <h1 className='cover__title'>Feel The Music</h1>
      <h2 className='cover__slogan'>Stream over 20 thousand songs with one click</h2>
      <button className='cover__button'>Join Now</button>
      </div>
    </div>
  );
}

export default Cover;
