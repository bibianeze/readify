import { useEffect } from "react";
import BookCard from "../components/cards/BookCard";
import "./style/featuredSection.scss";
import { useState } from "react";
import Loading from "../components/Loading";

const FeaturedSection = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // get data from an api using the fetch method

  // ".then" method
  // useEffect(() => {
  //     fetch("https://example-data.draftbit.com/books?_limit=16")
  //         .then((response) => response.json())
  //         .then((data) => {
  //             console.log(data);
  //             setBooks(data);
  //         });
  // }, []);

  // "async await" method

  const getData = async () => {
    const res = await fetch(
      "https://example-data.draftbit.com/books?_limit=16"
    );
    const data = await res.json();
    setBooks(data);
    setIsLoading (false)
    console.log(data);
  };
  useEffect(() => {
    getData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  // if (isError) {
  //   return <h1>Oops!! error occured while fetching</h1>;
  // }

 

  return (
    <main style={{ backgroundColor: `#F1F5F8` }} className="">
      {/* header / title */}
      <section className="container py-5">
        <h1 className="text-center text-uppercase ">Featured Books</h1>
        {/* <hr className='color-info' /> */}
        <div className="cc-divider cc-button"></div>
      </section>

      {/* list of books */}
      {/* <section className="container py-5">
        
        <div className="row">{showListOfBooks}</div>
      </section> */}

      <section className="container py-5">
       <div className="row">
       {
        books.map((book) =>{
        return(
          <div key={book.id} className="col" >
            <BookCard book={book} />

          </div>

        )
        })
      }
       </div>
      </section>

      
    </main>
  );
};

export default FeaturedSection;
