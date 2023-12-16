/* eslint-disable react/prop-types */
import style from "./scss/card.module.scss";
import "animate.css";




const BookCard = ({ book }) => {
    const { image_url, title, authors, rating } = book;
    return (
        <article className={`${style.card}`} >
            <div className={style.image}>
                <img className='img-fluid' src={image_url} alt='project' />
            </div>
            <div className={style.name}>
                <div className={style.avatar}></div>
                <p className='fw-bold'>{title}</p>
            </div>
            <div className={style.description}>
                <div className={style.like}>
                    {/* <Icon icon={`icon-park-outline:like`} /> */}
                    <p>{authors}</p>
                </div>
                <div className={style.view}>
                    {/* <Icon icon={`carbon:view`} /> */}
                    <p className='cc-text-color'>Rating:{rating}</p>
                </div>
            </div>
        </article>
    );
};

export default BookCard;
