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

  const filDubArr = (keyFunc, arr) => {
    var newArr = new Set();
    return arr.filter((x) => {
      var key = keyFunc(x),
        isNew = !newArr.has(key);
      //console.log(isNew);
      if (isNew) {
        newArr.add(key);
      }
      return isNew;
    });
  };

  const arr = filDubArr((x) => x.category, item);

  return (
    <div>
      <h1>This is Home page</h1>
      <div className="d-flex justify-content-center mb-3">
        <button
          className="btn btn-primary mx-2 btn-sm px-3"
          onClick={handleClick.bind(this, "all")}
        >
          all
        </button>
        {arr.map((btn, idx) => (
          <button
            className="btn btn-primary mx-2 btn-sm px-3"
            onClick={handleClick.bind(this, `${btn.category}`)}
            key={idx}
          >
            {btn.category}
          </button>
        ))}
      </div>

      <div className="row px-3">
        {items.map((item, idx) => (
          <div className="col-4 my-1" key={idx}>
            <div
              className={`
               ${
                 item.category === "android"
                   ? "bg-primary"
                   : item.category === "web"
                   ? "bg-secondary"
                   : "bg-success"
               } px-3 py-4 text-light rounded`}
            >
              <div>
                <h5>Title : {item.title}</h5>
              </div>
              <div>Category : {item.category}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
