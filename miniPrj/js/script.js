// function for search box (find text within p element in grid-item div)
function searchProject() {
    let searchInput = document.getElementById("searchBox").value.toUpperCase();
    let searchPrjName = document.getElementsByClassName("grid-item");
    
    for(let i=0; i<searchPrjName.length; i++){
        let prjName = searchPrjName[i].querySelector("p");
        let text = prjName.innerText;
        
        if(text.toUpperCase().indexOf(searchInput) > -1){
            searchPrjName[i].style.display = "block";
        } else {
            searchPrjName[i].style.display = "none";
        }
    }
}