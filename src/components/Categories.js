import { useEffect, useState } from "react";


const Categories = () =>{

    const[categories,setCategories] = useState(null);
    const[loading,setLoading] = useState(true)
    const[error,setError] = useState(false)

    useEffect(function(){
        ajaxCall();
    },[])

    function ajaxCall(){
        var url = "https://themealdb.com/api/json/v1/1/categories.php"

        fetch(url)
        .then(function(response){
          return response.json();
        })
        .then(function(data){
          console.log(`The data being received is ${data.categories}`)
          setCategories(data.categories)
          setLoading(false)
          setError(false)
        }).catch(function(err){
          console.log(err)
          setLoading(false)
          setCategories(null)
          setError(true)
        })
      }

    return (
        <main>
  {/* banner section */}
  <section
    className="container-fluid p-0 m-0"
    style={{
      backgroundImage: 'url("assets/images/banner.jpg")',
      height: 200,
      backgroundSize: "cover"
    }}
  >
    <div
      className="row"
      style={{ backgroundColor: "rgba(0,0,0,0.6)", height: "inherit" }}
      id="banner"
    >
      <div className="col">
        <h1 className="text-center text-light mt-4">
          Browse our Range of Mouth-Watering Menu
        </h1>
      </div>
    </div>
  </section>
  {/* end banner section */}
  <div className="album py-5 bg-light">
    <div className="container" id="shopnow">
      <div className="row">
        <div className="col-md-12">
          {/* Categories of menu starts */}
          <h5 className="mb-3 text-danger">CATEGORIES</h5>
          <div
            className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3"
            id="shopnow"
          >
            {/* category item*/}

            {
                categories == null ? "... Loading" : ""
            }

            {

                categories &&  categories.map(function(category){
                    return (
                        <div className="col">
              <div className="card shadow-sm">
                <img
                  src={category.strCategoryThumb}
                  alt=""
                  className="img-fluid"
                />
                <div className="card-body">
                  <p className="card-text">{category.strCategory}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <a href="just" className="btn btn-sm btn-danger">
                        More Details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
                    )
                })
            }
            
            {/* end category item*/}
          </div>
          {/* Categories of menu ends */}
        </div>
      </div>
    </div>
  </div>
</main>

    )
}


export default Categories