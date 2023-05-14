import './Home.css'

export default function Home() {
  return (
    <>
      <div id="home">
        <p>
          <iframe width="250" height="auto" src="https://www.youtube.com/embed/OMQ2QARHPo0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <br />
          <iframe width="250" height="auto" src="https://www.youtube.com/embed/u-o30eBK3xs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <br />
          <iframe width="250" height="auto" src="https://www.youtube.com/embed/B17NC5DD-dA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <br />
          <iframe width="250" height="auto" src="https://www.youtube.com/embed/6CMfZkLntX8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <br />
          <iframe width="250" height="auto" src="https://www.youtube.com/embed/XTF5jXDr2H8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>       
        </p>

      </div>      
      <div className="footer">

        <p>---------------</p>
        <a href="https://eteddy.github.io/" target='_blank'>Fun Projects</a>
        <p>---------------</p>
        
        <a href="https://www.worldflagcounter.com/details/iyj" target='_blank'>
          <img className='footer_img' src="https://www.worldflagcounter.com/iyj/" alt="Flag Counter" />
        </a>

{/*        
        <a href="https://www.worldflagcounter.com/details/iyc">
          <img className="footer_img" src="https://www.worldflagcounter.com/iyc/" alt="Flag Counter" />
        </a>  
 */} 
        <p>Minimalist 🧡 May 2023</p>     
      </div>    
    </>

  )
}