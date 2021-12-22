import style from './style.module.css';
import img1 from './photos/img1.jpg';
import img2 from './photos/img2.jpg';
import img3 from './photos/img3.jpg';
import img4 from './photos/img4.jpg';
import img5 from './photos/img5.jpg';
import img6 from './photos/img6.jpg';
import img7 from './photos/img7.jpg';
import img8 from './photos/img8.jpg';
import img9 from './photos/img9.jpg';
import img10 from './photos/img10.jpg';
import img11 from './photos/img11.jpg';
import img12 from './photos/img12.jpg';
import img13 from './photos/img13.jpg';
import img14 from './photos/img14.jpg';
import img15 from './photos/img15.jpg';
import img16 from './photos/img16.jpg';
import img17 from './photos/img17.jpg';
import img18 from './photos/img18.jpg';

function NaturePage() {
  return (
    <>
      <div class={style.natureImages}>
        <img src={img1} alt="img1"/>
        <img src={img2} alt="img1"/>
        <img src={img3} alt="img1"/>
        <img src={img4} alt="img1"/>
        <img src={img5} alt="img1"/>
        <img src={img6} alt="img1"/>
      </div>
      <div class={style.natureImages}>
        <img src={img7} alt="img1"/>
        <img src={img8} alt="img1"/>
        <img src={img9} alt="img1"/>
        <img src={img10} alt="img1"/>
        <img src={img11} alt="img1"/>
        <img src={img12} alt="img1"/>
      </div>
      <div class={style.natureImages}>
        <img src={img13} alt="img1"/>
        <img src={img14} alt="img1"/>
        <img src={img15} alt="img1"/>
        <img src={img16} alt="img1"/>
        <img src={img17} alt="img1"/>
        <img src={img18} alt="img1"/>
      </div>
    </>
  );
}

export default NaturePage;