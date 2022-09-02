const loadAllCatagories = async () => {
    const url = ("https://openapi.programming-hero.com/api/news/categories")
    const response = await fetch(url);
    const data = await response.json();
    displayAllCatagories(data.data.news_category)
    
}
const displayAllCatagories = (catagories) =>{
    const allCatagories = document.getElementById('all-catagory');
    catagories.forEach(catagory => {
        console.log(catagory)
        const catagoryDiv = document.createElement('div');
        catagoryDiv.classList.add('catagory')
        catagoryDiv.innerHTML =`
        <div onclick="loadCatagoriesDetails('${catagory.category_id}')">
        <a>${catagory.category_name}</a>
        </div>
        `
        allCatagories.appendChild(catagoryDiv)
    });
}
const loadCatagoriesDetails = async(catagoryId) => {
    // console.log(catagoryId)
    const url = (`https://openapi.programming-hero.com/api/news/category/${catagoryId}`)
    const response = await fetch(url);
    const data = await response.json();
    displayCatagoriesDetails(data.data)
}
const displayCatagoriesDetails = (catagoriesNews) => {
    // console.log(catagoriesNews)
    catagoriesNews.forEach(catagory => {
        // console.log(catagory)
        const catagoryDetailsContainer = document.getElementById('catagory-details-container');
        catagoryDetailsContainer.textContent = '';
        const catagoryDetailsDiv = document.createElement('div');
        catagoryDetailsDiv.classList.add('card');
        catagoryDetailsDiv.innerHTML = `
        <div class="row g-0">
            <div class="col-md-4">
            <img src="${catagory.thumbnail_url}" class="card-img-top" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                <h5 class="card-title">${catagory.title}</h5>
                <p class="card-text">${catagory.details.slice(0, 300) + '...'}</p>
                    <div class="row row-cols-1 row-cols-md-4 g-4">
                        <div class="col">
                        <img src="${catagory.author.img}" class="card-img-top" style = "width:50px" alt="...">
                        <h6 class="card-title">${catagory.author.name}</h6>
                        </div>
                        <div class="col">
                            <i class="fa-solid fa-eye"></i>
                            <span>${catagory.total_view}</span>
                        </div>
                        <div class="col">
                            <i class="fa-regular fa-star"></i> 
                            <i class="fa-regular fa-star"></i> 
                            <i class="fa-regular fa-star"></i> 
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-solid fa-star-half-stroke"></i>
                        </div>
                        <div class="col">
                            <i class="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
        catagoryDetailsContainer.appendChild(catagoryDetailsDiv)
    })
}
loadAllCatagories()