 document.querySelector('button').addEventListener('click',()=>{
        const val = document.querySelector('input').value
        const request = new XMLHttpRequest()
        request.open('POST','server.php')
        request.setRequestHeader('Content-type','application/json')
        request.send(JSON.stringify(val))
        request.addEventListener('load',()=>{
            console.log(request.response);
        })
 })