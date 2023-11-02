// const { event } = require("jquery");
document.addEventListener("DOMContentLoaded", async () => {




// const div = document.createElement("div");
// document.body.appendChild(div);
// console.log(div)
//create a button 
const btn = document.createElement("button");
btn.setAttribute('click', 'button');
btn.textContent = 'download all the pics!'
console.log(btn)

btn.style.width ='200px';
btn.style.height ='200px';
btn.style.fontSize = '20px';
btn.style.fontFamily = 'myFont';
btn.style.textTransform = 'uppercase';
//add button to body 
document.body.appendChild(btn);

const arr = [];

 
// }


//create event listener for button 
// btn.addEventListener('click', (event)=>{
//     fetch("url")
//     .then()
//     .then()

//     if(event === 'click'){
//         const pics = document.getElementsByTagName("img");
        

//     }
    
// }); 

// const downloadLink = document.createElement('a')
// downloadLink.href = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV-JmHozzdftCuiawmYwSWsai5bLWzxmqRTw&usqp=CAU"
// downloadLink.innerHTML = "<h1>Hello there.200px<h1/>"
// document.body.appendChild(downloadLink)
// downloadLink.click()
// document.body.removeChild(downloadLink)

// console.log(fetch("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV-JmHozzdftCuiawmYwSWsai5bLWzxmqRTw&usqp=CAU")
// .then((response) => response.json))
// console.log('hi')

//access current url 

//access images on page 

// window.location.href

//currentSrc: "img url"


btn.onclick = function(){

    function imageFinder(){
        const picsArray = document.getElementsByTagName("img");
       
        console.log("picsArray", picsArray);
        console.log("picsArray index 0", picsArray[0]);

        console.log('Is pics array an array?', Array.isArray(picsArray))
        console.log('Is this a link?', picsArray[0].currentSrc)
        // picsArray.forEach(forceDownload(el.currentSrc))
        for (const key in picsArray){
            console.log(picsArray[key].currentSrc);

            if(typeof picsArray[key] === 'object'){
                forceDownload(picsArray[key].currentSrc, 'Image from Extension')
            }
        }
    }

    function forceDownload(url, fileName){
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.responseType = "blob";
        xhr.onload = function(){
            var urlCreator = window.URL || window.webkitURL;
            var imageUrl = urlCreator.createObjectURL(this.response);
            var tag = document.createElement('a');
            tag.href = imageUrl;
            tag.download = fileName;
            document.body.appendChild(tag);
            tag.click();
            document.body.removeChild(tag);
        }
        xhr.send();
    }
    // console.log(forceDownload("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV-JmHozzdftCuiawmYwSWsai5bLWzxmqRTw&usqp=CAU", "Image from Extension"))
    imageFinder()
    }

    //console.log(downloadImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV-JmHozzdftCuiawmYwSWsai5bLWzxmqRTw&usqp=CAU"));
});


function getCurrentURL () {
    return window.location.href
  }
  
  // Example
  const url = getCurrentURL()
  console.log("url", url);
  

