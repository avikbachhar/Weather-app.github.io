// getting all required elements
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".auto-com-box");
// if user press any key and release
inputBox.onkeyup=(e)=>{
    console.log(e.target.value);
    let userData = e.target.value;
    let emptyArray=[];
    if(userData){
        emptyArray=suggestions.filter((data)=>{
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data)=>{
            return data = '<li>'+data+'</li>';
        })
        console.log(emptyArray)
        searchWrapper.classList.add("active");
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            //adding onclick attribute in all li tag
            allList[i].setAttribute("onclick", "select(this)");
            allList[i].setAttribute("value", "(this)");
        }
    }
    else{
        searchWrapper.classList.remove("active");
    }
    
}

function select(element){
    let selectData = element.textContent;
    inputBox.value = selectData;
    searchWrapper.classList.remove("active");
    fetchWeather(selectData)
}

function onclickFetchWeather(){
    let city = '';
    city = inputBox.value;
    fetchWeather(city)
}

function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData='<li>'+userValue+'</li>'
    }else{
        listData=list.join(' ');
    }
    suggBox.innerHTML=listData;
}