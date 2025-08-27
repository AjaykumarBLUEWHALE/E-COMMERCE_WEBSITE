



import React from "react";


const SizeCard = ({ items }) => {
  const id = `size-${items.fit}`;
  return (
    <div>
      <input type="radio" name="size" id={id} />
      <label htmlFor={id} className="text-black text-[20px] ml-2">
        {items.fit}
      </label>
    </div>
  );
};

const FilterPanel = () => {
  return (
 
      <div className="wrapper flex items-center justify-center  space-x-2  fixed top-40 w-full">
        <div className="card-switch">
          <label className="switch">
            <input type="checkbox" className="toggle" />
            <span className="slider"></span>
            <span className="card-side"></span>
            <div className="flip-card__inner">
              <div className="flip-card__front">
                <div className="title">Log in</div>
                <form className="flip-card__form" action="">
                  <input
                    className="flip-card__input"
                    name="email"
                    placeholder="Email"
                    type="email"
                  />
                  <input
                    className="flip-card__input"
                    name="password"
                    placeholder="Password"
                    type="password"
                  />
                  <button className="flip-card__btn">Let`s go!</button>
                </form>
              </div>
              <div className="flip-card__back">
                <div className="title">Sign up</div>
                <form className="flip-card__form" action="">
                  <input
                    className="flip-card__input"
                    placeholder="Name"
                    type="text"
                  />
                  <input
                    className="flip-card__input"
                    name="email"
                    placeholder="Email"
                    type="email"
                  />
                  <input
                    className="flip-card__input"
                    name="password"
                    placeholder="Password"
                    type="password"
                  />
                  <button className="flip-card__btn">Confirm!</button>
                </form>
              </div>
            </div>
          </label>
        </div>
      </div>
  );
};

export default FilterPanel;
