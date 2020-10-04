import React, { useState, useEffect } from 'react';
import '../styles/menu.scss';

const Menu = (props) => {
  const [screenSize, onResizing] = useState(window.innerWidth);
  const [menuVisability, setMenuVisabiliti] = useState(false);

  useEffect(() => {
    const ac = new AbortController();

    window.addEventListener("resize", onResizing(window.innerWidth));
    
    return () => ac.abort();
  });

  const handleSandvichClick = () => {
    setMenuVisabiliti(!menuVisability);
  }

  const menuVisabilityStyle = (screenSize < 992 && !menuVisability)
    ? { "display": "none" } : { "display": "flex" };

  const sendvichStyle = menuVisability
    ? { "display": "none" }
    : { "display": "initial" };

  const sandvich = (screenSize < 992) &&
    <div className="menu-sendvich"
      onClick={handleSandvichClick}
      style={sendvichStyle}
    >
      <img src="/src/img/union.png" alt="menu" />
    </div>

  const closeMenuBTN = (screenSize < 992) &&
    <div className="menu-list__close"
      onClick={handleSandvichClick}
    >
      <img src="/src/img/close.png" alt="close menu" />
    </div>;

  const setClassName = (level) => {
    if (props.question[0] === undefined)
      return;

    const actualSum = props.question[0].sum;
    const style = (actualSum === level)
      ? "menu-list__item actual"
      : "menu-list__item";

    return style;
  }

  const passedStyleClass = (level) =>
    (props.passed.includes(level)) ? "passed" : "";

  return (
    <div className="menu">
      {sandvich}
      <div style={menuVisabilityStyle}
        className="menu-list"
      >
        {closeMenuBTN}
        <div className="revers">
          {
            props.levels.map(level => (
              <div key={level} className={`${setClassName(level)} ${passedStyleClass(level)}`}>
                <hr />
                <div className="menu-list__item-outer">
                  <span className="menu-list__item-inner">
                    {level}
                  </span>
                </div>
                <hr />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
};

export default Menu;