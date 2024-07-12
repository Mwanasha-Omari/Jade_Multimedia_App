import './index.css';

const Podcast = () => {
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

export default Podcast;
