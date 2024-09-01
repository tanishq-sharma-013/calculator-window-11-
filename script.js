let btn = document.querySelectorAll('button')
let inp = document.querySelector('input')



for(let i of btn) {
    i.addEventListener('click', function(e){
        let txt = e.target.innerText
        

        if( txt==='AC') {
            inp.value=''
            
        }
        else if(txt==='=') {
            inp.value=eval(inp.value)
        }
        else if(txt==='⌫') {
            inp.value=inp.value.toString().slice(0,-1)
        }
        else if(txt==='x²'){
            inp.value=inp.value+'**2'
        }
        else if(txt==='1/x') {
            inp.value='1'+'/'+inp.value
        }
        else if(txt==='√') {
            inp.value=inp.value+'**(1/2)'
        }
        else if(txt==='×'){
            inp.value=inp.value+'*'
        }
        else if(txt==='÷') {
            inp.value=inp.value+'/'
        }
            
        else {
                inp.value=inp.value+txt
            }
        
            
       
            
        
    })
}