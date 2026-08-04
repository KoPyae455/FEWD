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
// Profile Page အတွက် Portfolio Projects များကို ရှာဖွေပေးမည့် Function
function searchProfile() {
    let searchInput = document.querySelector("#searchBox").value.toUpperCase();
    // querySelectorAll ဖြင့် porfolio-item အားလုံးကို ဖမ်းယူခြင်း
    let items = document.querySelectorAll(".porfolio-item");

    items.forEach(function(item) {
        let text = item.innerText;
        if (text.toUpperCase().indexOf(searchInput) > -1) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}

// Service Page အတွက် Cards များ၏ h2 ခေါင်းစဉ်များကိုသာ သီးသန့် ရှာဖွေပေးမည့် Function
function searchService() {
    let searchInput = document.querySelector("#searchBox").value.toUpperCase();
    let cards = document.querySelectorAll(".service-container .card");

    cards.forEach(function(card) {
        // card တစ်ခုစီ ထဲမှာရှိတဲ့ <h2> tag ကို သီးသန့် ဖမ်းယူခြင်း
        let h2Element = card.querySelector("h2");
        
        // <h2> tag ရှိမရှိ စစ်ဆေးပြီး ရှိပါက ၎င်း၏ စာသားကို ယူခြင်း
        if (h2Element) {
            let h2Text = h2Element.innerText;
            
            // h2 စာသားထဲတွင် ရှာဖွေသည့် စာလုံး ပါ/မပါ စစ်ဆေးခြင်း
            if (h2Text.toUpperCase().indexOf(searchInput) > -1) {
                card.style.display = ""; // Layout မပျက်စေရန် "" ဟု ပေးပါသည်
            } else {
                card.style.display = "none";
            }
        }
    });
}