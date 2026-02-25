import React, { useState, useEffect } from 'react';
import '/node_modules/bootstrap/dist/css/bootstrap.css'

export default function Store() {

  const [products, setProducts] = useState([]);     // all data
  const [filtered, setFiltered] = useState([]);     // filtered data

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=100&skip=100')
      .then(res => res.json())
      .then(json => {
        const filterData = json.products.filter(
          item => item.category !== "vehicle"
        );
        // Shuffle the filtered array
        const shuffled = filterData.sort(() => Math.random() - 0.5);
        setProducts(json.products);
        setFiltered(shuffled); 
      });
  }, []);

  const filterCategory = (tags) => {
    if (tags === "all") {
      // Shuffle all products when "All" is selected
      const shuffled = products.filter(item => item.category !== "vehicle").sort(() => Math.random() - 0.5);
      setFiltered(shuffled);
    } else {
      const result = products.filter(
        item => item.tags.includes(tags)
      );
      setFiltered(result);
    }
  };

  return (
    <div className="bg-store">

      <div style={{ marginTop: "50px" }}>
        <h1 className="text-center fw-bold p-5">Welcome to our Store</h1>
      </div>

      {/* Buttons */}
      <div className="d-flex flex-wrap justify-content-center gap-2 gap-md-3 mb-4 px-2">

        <button
          className="btn bb flex-grow-1 flex-sm-grow-0"
          onClick={() => filterCategory("all")}
        >
          All
        </button>

        <button className="btn bb flex-grow-1 flex-sm-grow-0" onClick={()=>filterCategory("watches")}>
          Watches
        </button>
        <button
          className="btn bb flex-grow-1 flex-sm-grow-0"
          onClick={() => filterCategory("electronics")}
        >
          Electronics
        </button>

        <button
          className="btn bb flex-grow-1 flex-sm-grow-0"
          onClick={() => filterCategory("smartphones")}
        >
          Smartphones
        </button>

        <button className ="btn bb" onClick={()=>filterCategory("motorcycles")}>MotorCycles</button>

        <button
          className="btn bb flex-grow-1 flex-sm-grow-0"
          onClick={() => filterCategory("personal care")}
        >
          Personal care
        </button>

        <button
          className="btn bb flex-grow-1 flex-sm-grow-0"
          onClick={() => filterCategory("clothing")}
        >
          Women's Clothing
        </button>
        <button
          className="btn bb flex-grow-1 flex-sm-grow-0"
          onClick={() => filterCategory("sports equipment")}
        >Sport's</button>

      </div>

      {/* Products */}
      <div className="container">
        <div className="row">

          {filtered.map((item) => (
            <div className="col-md-4 g-4" key={item.id}>
              <div className="card p-2 shadow h-100">

                <img
                  style={{ objectFit: "contain" }}
                  src={item.thumbnail}
                  alt={item.title}
                />

                <div className="card-body">
                  <h6>{item.title}</h6>
                  <p>${item.price}</p>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>

    </div>
  );
}