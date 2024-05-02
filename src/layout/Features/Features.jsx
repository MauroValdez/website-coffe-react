import './Features.css'

import { features } from '../../Data'
import shape from '../../assets/shape.png'
function Features() {
  return (
    <>
      <section className="section features" id="features">
        <h2 className="section__title section-center" data-title="Features">
          Our Best Features
        </h2>
        <div className="features__grid container grid">
          {features.map(({ img, title, description }, index) => {
            return (
              <div className="features__item" key={index}>
                <img src={img} alt="feature img" className="features__img" />

                <h3 className="features__title">{title}</h3>

                <p className="features__description">{description}</p>

                <img src={shape} alt="shape img" className="features__shape" />
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Features
