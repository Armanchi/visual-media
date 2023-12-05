import React from 'react'
import Navbar from '../../Navbar/components/Navbar';

const Home = () => {

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <h1>Visual Media</h1>
      </div>
      <div>
        <h4>bringing back rentals</h4>
      </div>
      <div>
        <div className='CardContainer'>
          <h2>
            Movie Name
          </h2>
          <p>
            Synopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </p>
          <h3>
            people are saying:
          </h3>
          <p>user: poopoo</p>
          <p>this was amazing! i love movies so much, 5 stars!</p>
          <p>user: chiddennugget</p>
          <p>this was mid! 3 stars!</p>
          <p>user: ohYeah!</p>
          <p>hated it! next film. 1 star!</p>
          <button>
            rent this
          </button>
          <button>
            save to my list
          </button>
          <button>
            review this
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home;
