export  function getALL(){
    return fetch("https://jsonplaceholder.typicode.com/posts")
          .then(res=>{return res.json()})
          .then(json=>json)
          .catch(err=>err)  
 }
