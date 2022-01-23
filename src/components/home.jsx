import React, { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../css/style.css";
import item from "../json/items";

export default function Home() {
  const [items, setfilter] = useState(item);

  const handleClick = (name) => {
    const updateFilter = item.filter((filtered) => {
      if (name === "all") {
        return item;
      } else {
        return filtered.category === name;
      }
    });
    setfilter(updateFilter);
  };

  return (
    <div>
      <h1>This is Home page</h1>
      <div className="d-flex justify-content-center">
        <button
          className="btn btn-primary mx-2"
          onClick={handleClick.bind(this, "all")}
        >
          all
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={handleClick.bind(this, "android")}
        >
          android
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={handleClick.bind(this, "web")}
        >
          web
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={handleClick.bind(this, "etc")}
        >
          etc
        </button>
      </div>

      <div className="row px-3">
        {items.map((item, idx) => (
          <div className="col-4 px-3 my-4 border border-primary" key={idx}>
            <div className={item.category === ""}>
              <div>{item.title}</div>
              <div>{item.category}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
