let containor_1= document.getElementById("containor-1");
// let value () =>{
//     let search=document.getElementById("search").value 
// }
// let search=document.getElementById("search").value
// console.log(search);
fetch(`https://newsdata.io/api/1/news?apikey=pub_2537554e2a4088e94057c56b20cfdb2cef680&q=pakistan`)
.then(res => res.json())
 .then(res => 
 {
     
for(var i=0; i <= 40; i++){
console.log(res.results[i].pubDate)

containor_1.innerHTML +=` <div class="left-container">
    

<div class="flex">
  <div class="card " style="width: 12rem;">
    <img src="${res.results[i].image_url}" class="card-img-top" alt="...">
    <div class="card-body">
      
      <p class="card-text">${res.results[i].title}</p>
      <p class="card-text"><small class="text-body-secondary">${res.results[i].pubDate}</small></p>
    </div>
 
  </div>
  <div class="space"></div>
  <div class="card" style="width: 12rem;">
    <img src="${res.results[i].image_url}" class="card-img-top" alt="...">
    <div class="card-body">
      
      <p class="card-text">${res.results[i].title}</p>
      <p class="card-text"><small class="text-body-secondary">${res.results[i].pubDate}</small></p>
    </div>
  </div>

</div>


</div>
<div class="mid-containor">
<div class="card mb-3">
  <img src="${res.results[i].image_url}" class="card-img-top" alt="..." width="20px">
  <div class="card-body">
    <h5 class="card-title">${res.results[i].title}</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small class="text-body-secondary">${res.results[i].pubDate}</small></p>
  </div>
</div>

</div>

<div class="right-containor">

<div class="card">
<div class="card-body">
<h5 class="card-title">Card title</h5>
<p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
<p class="card-text">5 min ago</p>
</div>
</div>
`
}



//  console.log(res)

})
.catch(rej => console.log (rej))



//https://api.worldnewsapi.com/search-news?api-key=50e020136963412e83069c918dc96af3