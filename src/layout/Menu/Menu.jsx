import './Menu.css'
import { menu } from '../../Data'
function Menu() {
  return( 
    <>
      <section className="section menu" id='menu'>
        <h2 className='section__title section-center' data-title='Our Menu'>
          Let`s Check Our Menu
        </h2>

        <div className="menu__grid container">
          {
            menu.map(({ img, title, description, price }, index) => {
              return (
                <div className='menu__item grid' key={index}>
                  <div className="menu__img-wrapper">
                    <img src={img} alt="menu img" className="menu__img" />
                  </div>
                  <div className="menu__data">
                    <div>
                      <h3 className="menu__title">{title}</h3>
                      <p className="menu__description">{description}</p>
                    </div>
                    <span className="menu__price">{price}</span>
                  </div>
                </div>
              )
            })
          }
        </div>
      </section>
    </>
)  
}

export default Menu