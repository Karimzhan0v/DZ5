const usd = document.querySelector('#usd')
const eur = document.querySelector('#eur')
const jpy = document.querySelector('#jpy')
const load=document.querySelector('.load')

function loadOn (){
    load.style.display='block'
}

function loadOff (){
    load.style.display='none'
}

function convert(item,item2,item3){
    item.addEventListener('input',(e)=>{
        const req = new XMLHttpRequest()
        req.open('GET','https://api.freecurrencyapi.com/v1/latest?apikey=KLE9qmyFLGnyBfpjD92XXY4bRMCi6THshLcMCeog')
        req.setRequestHeader('Content-type','application/json')
        req.send()
    
        loadOn()
        req.addEventListener('load',()=>{
          const eurResp=  JSON.parse(req.response).data.EUR
          const jspyResp = JSON.parse(req.response).data.JPY
          loadOff()
          if(item===usd){
            item2.value = (item.value/eurResp).toFixed(2)
            item3.value = (jspyResp*item.value).toFixed(2)
          }else if(item===eur){
            item2.value=(eurResp*item.value).toFixed(2)
            item3.value=(jspyResp*(eurResp*item.value)).toFixed(2)
          }else if(item===jpy){
            item2.value=(item.value/jspyResp).toFixed(2)
            item3.value=(eurResp*(item.value/jspyResp)).toFixed(2)
          }
          if(item.value===''){
            item2.value=''
            item3.value=''
          }

        })
    })
}
 convert(usd,eur,jpy)
 convert(eur,usd,jpy)
 convert(jpy,usd,eur)