import React from 'react'
import {useEffect,useState} from 'react'
import '/node_modules/bootstrap/dist/css/bootstrap.css'
export default function Recipe() {
    const [dish,setDish]=useState("");
    const [search,setSearch]=useState("");
    const [error,setError]=useState("");
    const [data,setData]=useState(null);
    const [selectedMeal, setSelectedMeal] = useState(null);
    useEffect(()=>{
        if(!search && search.trim()===""){
            setData(null);
            setError("");
            return;
        }
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
          .then(res=>res.json()).then(result=>{
            if(!result.meals){
                setError("Recipe not found");
                setData(null);
            }
            else{
                setData(result.meals);
                setError("");
            }
          })
        .catch(err => {
            console.log(err);
            setError("Something went wrong");
        });
    },[search]);

    const checkRecipe = (id) => {
        const recipe = data.find(meal => meal.idMeal === id);

        if (recipe) {

            const ingredients = [];

            for (let i = 1; i <= 20; i++) {
                const ingredient = recipe[`strIngredient${i}`];
                const measure = recipe[`strMeasure${i}`];

                if (ingredient && ingredient.trim() !== "") {
                    ingredients.push({
                        ingredient,
                        measure
                    });
                }
            }

            setSelectedMeal({
                name: recipe.strMeal,
                instructions: recipe.strInstructions,
                ingredients
            });
        }
        else {
            alert("Recipe not found");
        }
    };
return (
    <>
        {!data && 
        <div className="hs d-flex flex-column justify-content-center" >
        <div>
            <h1 className="text-center fw-bold p-5 ">🧑‍🍳Find the Recipe of your favorite dish</h1>
        </div>
        <div className="d-flex justify-content-center mb-4 mt-5">
            <input type="text" className="form-control w-50 rounded-pill" placeholder="Enter the dish name" value={dish} onChange={(e)=>setDish(e.target.value)} 
             onKeyDown={(e)=>{
                if(e.key==="Enter"){
                    setSearch(dish);
                }
             }}/>
        </div>
        <div className="container text-center align-items-center ">
            <div className="row justify-content-center g-4">
                <div className="col-md-12 col-lg-8">
                    <div className="welcome-card text-center p-4 shadow ">
                        <h2>🍲 Discover Delicious Recipes</h2>
                        <p>Search for meals, cuisines, or ingredients to begin.</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        }
        {data && (
            <div className="hs">
        <div>
            <h1 className="text-center fw-bold p-5 mt-5">🥗 Cook Something Delicious Today</h1>
        </div>
        <div className="d-flex justify-content-center mb-4">
            <input type="text" className="form-control w-50 rounded-pill" placeholder="Enter the dish name" value={dish} onChange={(e)=>setDish(e.target.value)} 
             onKeyDown={(e)=>{
                if(e.key==="Enter"){
                    setSearch(dish);
                }
             }}/>
        </div>
            <div className="container">
                <div className="row">
                    {data.map((meal) => (
                        <div className="col-md-4 mb-4" key={meal.idMeal}>
                            <div className="card h-100 shadow rounded-4">
                                <img src={meal.strMealThumb} className="card-img-top" alt={meal.strMeal} />
                                <div className="card-body">
                                    <h5 className="card-title">{meal.strMeal}</h5>
                                    <button className="btn btn-primary mt-2 rounded-pill" onClick={()=>checkRecipe(meal.idMeal)}>Check Recipe</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        ) 
        }
        {error && <p className="text-danger text-center">{error}</p>}

        {selectedMeal && (
            <div className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
            style={{
                backgroundColor: "rgba(0,0,0,0.7)",
                zIndex: 9999
            }}>
            <div className="bg-black p-4 rounded-4 shadow"
            style={{
                color: "white",
                width: "60%",
                maxHeight: "90vh",
                overflowY: "auto"
            }}>

      {/* CLOSE BUTTON */}
            <div className="text-end">
                <button className="btn btn-danger" onClick={() => setSelectedMeal(null)}>✖ Close</button>
            </div>

      {/* TITLE */}
            <h2 className="text-center">{selectedMeal.name}</h2>

      

      {/* INGREDIENTS */}
            <h4>🥗 Ingredients</h4>
            <ul className="list-group mb-3">
                {selectedMeal.ingredients.map((item, index) => (
                    <li key={index} className="list-group-item">{item.ingredient} — {item.measure}</li>
                ))}
            </ul>

      {/* INSTRUCTIONS */}
            <h4 className="mt-4">📖 Instructions</h4>
            <p>{selectedMeal.instructions}</p>

            </div>
        </div>
    )}
    </>
  )
}
