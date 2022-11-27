let dataarry;
let nation = document.getElementById('nation')
let year = document.getElementById('year')
let population = document.getElementById('population')
let table = document.getElementById('tablerow')

let a = 6
let nameGrab =new Promise ((rs, rj)=>{
    setTimeout(()=>{
        if(a===7){
            rs({name:'Harmony'})
        }else{
            rj(Error('i no see am ooo'))
        }
    },5000)
})
nameGrab.then(
    (rs)=>{
        console.log(rs.name)
    }
).catch(
    (err)=>{
        console.log(err)
    }
)




//SETTING HEADERS
let anotherdata;

fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
.then(response=> response.json())
// .then(response=> console.log(response))

        


.then((response)=> {
    console.log(response.data[0].Nation)
    console.log(response.data[0].Year)
    console.log(response.data[0].Population)
    dataarry  = response.data

        
    
    let head = document.createElement('thead')
let td1 = document.createElement('td')
let td2 = document.createElement('td')
let td3 = document.createElement('td')
td1.setAttribute('Id', 'td')
td2.setAttribute('Id', 'td')
td3.setAttribute('Id', 'td')

        td1.innerHTML = 'NATION';
        td2.innerHTML = 'YEAR';
        td3.innerHTML = 'POPULATION'
        head.append(td1)
        head.append(td2)
        head.append(td3)
        table.append(head)
    
    for (let i=0; i<dataarry.length; i++){
        let tr = document.createElement('tr');
        let data1 = document.createElement('td');
        let data2 = document.createElement('td');
        let data3 = document.createElement('td');

        
        data1.innerHTML = dataarry[i].Nation;
        data2.innerHTML = dataarry[i].Year;
        data3.innerHTML = dataarry[i].Population

        tr.appendChild(data1);
        tr.appendChild(data2);
        tr.appendChild(data3);

        table.append(tr)

        tr.setAttribute('id', 'tr')
    }
   
   
    
})
    
.catch(err=> console.error(err));

