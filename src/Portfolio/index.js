
import './index.css';

const Portfolio = () => {
  const handleViewMoreClick = () => {
    // Replace 'lorenipsum' with the actual link you want to navigate to
    window.location.href = '/home/studen/Multimedia_App/src/More';
  };

  return (
    <div >
      <div className="cards-container">
      <div>
  <div className="cards-container">
    <div className='card'>
    <img src="/images/portfolio1.jpg" alt='researcher'/>
    <div className='content-container'>
        <p>Loren Ipsum Loren Ipsum</p>
        <a href='lorenipsum'>lorenipsum</a>

    </div>
    </div>
    <div className='card'>
    <img src="/images/portfolio2.jpg" alt='developer'/>
    <div className='content-container'>
        <p>Loren Ipsum Loren Ipsum</p>
        <a href='lorenipsum'>lorenipsum</a>

    </div>
    </div>
    <div className='card'>
    <img src="/images/portfolio3.jpg" alt='designer'/>
    <div className='content-container'>
        <p>Loren Ipsum Loren Ipsum</p>
        <a href='lorenipsum'>lorenipsum</a>

    </div>
    </div>
   

  </div>  
  </div>
      </div>
      <div className='second-container'>
   <div className='card'>
    <img src="/images/portfolio3.jpg" alt='designer'/>
    <div className='content-container'>
        <p>Loren Ipsum Loren Ipsum</p>
        <a href='lorenipsum'>lorenipsum</a>

    </div>
    </div>
    <div className='card'>
    <img src="/images/portfolio3.jpg" alt='designer'/>
    <div className='content-container'>
        <p>Loren Ipsum Loren Ipsum</p>
        <a href='lorenipsum'>lorenipsum</a>

    </div>
    </div>


   </div>
    
      <button onClick={handleViewMoreClick}>VIEW MORE</button>
    </div>
  );
};

export default Portfolio;
import './index.css'
const Portfolio = () => {
return(
<div>
 <h2 className='team'>MEET THE JADE</h2>
 <div className='our-team'>
 <div className='images'>
<div>
<img src= "/images/esther.png" alt='member-one' className='first_three'/>
<div className='caption'>
 <h4>Esther Naserian</h4>
<p>Software Developer</p>
</div>
</div>
<div>
 <img src="/images/trecy.png" alt='member-two'className='first_three'/>
<div className='caption'>
<h4>Trecy Malonza</h4>
<p className='p1'>Software Developer</p>


</div>  </div>
<div>
<img src="/images/mwansha.png" alt='member-three' className='first_three'/>
 <div className='caption'>
 <h4>Mwanasha Omari</h4>
 <p className='p1'>Software Developer</p>
 
</div>
 </div>
</div>
<div className='image-bottom'>
 <div>
 <img src='/images/glory.png'alt='member-four'/>
<div className='caption'>
 <h3>Gloria Kuria</h3>
  <p>Software Developer</p>
  
</div>
 </div>
<div>
 <img src='/images/caren.png' alt='member-five'/>
<div className='caption'>
<h3>Caren Chepngetich</h3>
 <p>Software Developer</p>
 
 </div>
 </div>
</div>
</div>
</div>
    )
}
export default Portfolio;
