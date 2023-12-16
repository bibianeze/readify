import "./style/hero.scss";
import "animate.css"

const Hero = (props) => {
    return (
        <section className='d-flex container cc-section'>
            {/* text content */}
            <div className='cc-text-content'>
                <h1 className="animate__bounceInLeft">Read A Book Today</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt praesentium dolorum magni ipsa voluptatibus voluptates velit repellendus
                    quo nobis veritatis.
                </p>
                <button className='btn cc-button text-white px-5'>Get One</button>
            </div>
            {/* img content */}
            <section className='cc-hero-img d-none d-md-flex'>
                <div className='cc-wrapper'>
                    {/* img 1 */}
                    <div className='cc-hero-img-1'>
                        <img className='img-fluid' src='https://readify-template.netlify.app/assets/book1-YwJ8xv7t.jpg' alt='hero-img' />
                    </div>
                    {/* img 2 */}
                    <div className='cc-hero-img-2'>
                        <img className='img-fluid' src='https://readify-template.netlify.app/assets/book2-fqJZgXUq.jpg' alt='hero-img' />
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Hero;
