import "../../styles/lens-page.css"

const LensPage = ({galleryImages}) => {
  return (
      <div className='galleryWrap'>
        {
          galleryImages && galleryImages.map((slide, index) => {
            return(
              <div 
                className='single' 
                key={index}
              >
                <img src={slide.img} alt='' />
              </div>
            )
          })
        }
      </div>
  )
}

export default LensPage