
import React from 'react';
import './blog.css';



const Blog = () => {
  return (
    <div id="blog" className="blog-section">
      <h2>Our Blog</h2>
      
        <div className="blog-content">
         <h3>Born a Crime by Trevor Noah</h3>
          <p>
          Trevor Noah's memoir "Born a Crime" recounts his coming-of-age in apartheid and post-apartheid South Africa as the son of a black 
          Xhosa mother and white Swiss father, whose very existence was illegal under racist apartheid laws.
          <a href="https://docs.google.com/document/d/1JkkWGW-nZlujlRQW2QTtUfdh2f1AqN7ACJPGXy4LhCQ/edit?usp=sharing" target="_blank" rel="noopener noreferrer">View More</a>
          </p>
          </div>
          
       
        <div className="case-studies">
        <h3>Analyzing Tea and Dairy Value Chains In Rwanda</h3>
           <p>
             A project to promote the usage of mobile money services and digitize Rwanda's tea-producing industry. The apps that were created include 
             the Umuhinzi Web App and the Umuhinzi Mobile App, which will be utilized by manufacturers and farmers, respectively.
        <a href="https://drive.google.com/drive/folders/1MQSQCdS5vvDWiUM-6VjGRU4ca7hbf34R?usp=sharing" target="_blank" rel="noopener noreferrer">View more</a>
         </p>
</div>
      </div>
    
  );
};

export default Blog;
