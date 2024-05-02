import './About.css'
import AboutImg from '../../assets/about-img.jpg'
function About() {
  return (
    <>
      <section className="about section" id="about">
        <div className="about__grid container grid">
          <div className="about__img-wrapper">
            <img src={AboutImg} alt="about img" className="about__img" />
          </div>
          <div className="about__content">
            <h2 className="section__title" data-title="About Us">
              Fresh Quality And Organic Tasty Coffee House For You
            </h2>

            <p className="about__description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
              laborum sed dolorem! Fugit doloribus ad pariatur consequuntur
              eaque molestias libero nulla aspernatur doloremque explicabo,
              quos, aliquid dignissimos nesciunt consequatur dolores.
            </p>

            <div className="about__details grid">
              <p className="about__details-description">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m10 16.4l-4-4L7.4 11l2.6 2.6L16.6 7L18 8.4z"
                  />
                </svg>
                At vero eos et accusamus et iusto odio
              </p>
              <p className="about__details-description">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m10 16.4l-4-4L7.4 11l2.6 2.6L16.6 7L18 8.4z"
                  />
                </svg>
                Established fact that a reader will be distracted
              </p>
              <p className="about__details-description">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m10 16.4l-4-4L7.4 11l2.6 2.6L16.6 7L18 8.4z"
                  />
                </svg>
                Sed ut perspiciatis unde omnis iste natus sit
              </p>
            </div>
            <a href="#team" className="btn">Our Experts</a>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
