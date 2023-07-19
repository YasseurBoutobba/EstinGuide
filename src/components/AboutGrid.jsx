



export default function AboutGrid({title , content , sTitle, sContent}) {
  return (
    <div className='grid-system'>
      <div className="grid-left">
        <div className="content-sticky content">
          <h2>{ title }</h2>
        </div>
      </div>
      <div className="grid-right" >
        <h3 data-aos="zoom-in" data-aos-duration="1000">{sTitle}</h3>
        {sContent ? <p data-aos="zoom-in" data-aos-duration="1000">{ sContent }</p> : ''}
        {content.map((item , index) => (
          <div className="content-about" key={index} data-aos="zoom-in" data-aos-duration="1000">
            <h4>{item.title}</h4>
            {item.content.map((text , index) => (
              <div className="separate-content" key={index} data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1000">
                <span>{text.title}</span>
                <span>{text.content}</span>
              </div>
            ) )}
          </div>
        ))}
      </div>
    </div>
  )
}
