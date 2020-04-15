import * as imp from "./app2.js";
import * as valid from "./app3.js";
let fetchdata=new imp.fetchjsondata();
let validate=new valid.validation();


class actions implements imp.CRUD<imp.emp>
{
    numrows:number;
    delarray:string[];
    temp:any[];
    nrow:number;


constructor()
{   
    this.nrow=1;
    this.numrows=0;
    this.temp=[];
    /*
    let add = document.getElementById("add")!;
    add.addEventListener("click", this.addrow);

    for(let i=0;i<this.numrows;i++)
    {  
         this.id=i;
           let d = document.getElementById(""+i)!;
    d.addEventListener("click", this.deleterow);
    
    let p = document.getElementById(""+i+ "" +i)!;
    p.addEventListener("click", this.editrow);
    }
  

    this.temp=[''];
    this.numrows=this.getdata();
      */
     let load= document.getElementById("load")!;
     load.addEventListener("click",this.getdata);

     let add= document.getElementById("add")!;
     add.addEventListener("click",this.addrow);
}

getdata()
{
    fetchdata.fetch().then(data => p1.create(data));

    /*
     this.emp=[
        {
            "FirstName": "Arman",
            "MiddleName": "deep",
            "LastName": "Singh",
            "Email": "abc@g.com",
            "phoneno": 789789999,
            "role": 0,
            "Address": "2402 ",
            "id":0
        },     
    ];

    let tbody= document.getElementById("t1body")!;
    tbody.innerHTML =``;
    for(let i=0;i<this.emp.length;i++)
    {
        tbody.innerHTML +=` <tr style="display:block" id="row${this.emp[i].id}">
        <td><input type="text" placeholder="${data[i].FirstName}" disabled></td>
        <td><input type="text" placeholder="${data[i].MiddleName}}" disabled></td>
        <td><input type="text" placeholder="${data[i].LastName}" disabled></td>
        <td><input type="email" placeholder="${data[i].Email}" disabled></td>
        <td><input type="number" placeholder="${data[i].phoneno}" disabled></td>
        <td><input type="number" placeholder="${imp.ROLES[data[i].role]}" disabled></td>
        <td><input type="text" placeholder="${data[i].Address}" disabled></td>
        <td><input type="number" placeholder="${data[i].id}" disabled></td>
        <td><button class="btn btn-primary" id="${data[i].id}${data[i].id}">EDIT</button></td>
       <td><button class="btn btn-danger" id="${data[i].id}">DELETE</button></td>
        </tr>`;

    }

    return this.emp.length;
}
*/
}

create(data:any)
{
    this.numrows=data.length;
    let tbody=document.getElementById("tbody")!;
    tbody.innerHTML=``;
    for(let i=0;i<this.numrows;i++)
    {
       let newrow= tbody.insertRow(-1);
       newrow.setAttribute("id","row"+data[i].id);
       newrow.innerHTML=`
       <td><input type="text" placeholder="${data[i].FirstName}" disabled></td>
       <td><input type="text" placeholder="${data[i].MiddleName}" disabled></td>
       <td><input type="text" placeholder="${data[i].LastName}" disabled></td>
       <td><input type="email" placeholder="${data[i].Email}" disabled></td>
       <td><input type="number" placeholder="${data[i].phoneno}" disabled></td>
       <td><input type="text" placeholder="${data[i].Address}" disabled></td>
       <td><input type="number" placeholder="${data[i].id}" disabled></td>
       <td><input type="number" placeholder="${imp.ROLES[data[i].role]}" disabled></td>
       <td><button class="btn btn-primary" id="${data[i].id}${data[i].id}">EDIT</button></td>
      <td><button class="btn btn-danger" id="${data[i].id}">DELETE</button></td>`;
      

         let n=""+data[i].id;
       let editb=document.getElementById(""+n+""+n)!;
       editb!.onclick = () => {
        this.editrow(""+n);
      }
      let delb=document.getElementById(""+data[i].id)!;
      delb!.onclick = () => {
       this.deleterow(""+n);
     }
    }

}

editrow(val:any)
{
    var fid;
        var yo;
        var kid=1;
        var lol=7;
        if (val == "newsave" || val=="newcancel") {
            let theid = document.getElementById("theid")!;
            let theval = theid.value;
            if(theval)
            {
                let therow = document.getElementById("newnew")!;
                therow.id = "row" + theval;
               
                let thesave = document.getElementById("newsave")!;
                thesave.id = "" + theval + "" + theval;

                let thedelete = document.getElementById("newcancel")!;
                thedelete.innerHTML = "DELETE";
                thedelete.id = "" + theval;

                fid = "" + theval;
                yo = "" + theval + "" + theval;
                lol=99;

                let dnew = document.getElementById(""+fid)!;
                dnew.onclick = () => {
                    p1.deleterow(fid);
                };
                let pnew = document.getElementById(""+yo)!;
                pnew.onclick = () => {
                    p1.editrow(fid);
                   };
        }
            else
            {
                let rowid = document.getElementById("newnew")!;
                let theid = document.getElementById("theid")!;
                let thesave = document.getElementById("newsave")!;
                let thecancel = document.getElementById("newcancel")!;
                theid.removeAttribute("id");
                thesave.removeAttribute("id");
                thecancel.removeAttribute("id");
                rowid.id="fake";
                document.getElementById("fake")!.remove();
                fid = "nosorry";
                kid = 99;
                p1.nrow=1;
            }
           
        }
       else{
            fid= ""+val
            yo=""+val+""+val;
       }
      
       if(kid==1)
       {
        if(document.getElementById(""+fid+""+fid)!.innerHTML=="SAVE" )
        {
            let recordarr:any[];
            recordarr=[];
            
    
            let b6="row"+ fid;
    
            var xx6= document.getElementById(b6)!.getElementsByTagName("input")!;
            var xe6= document.getElementById(b6)!.getElementsByTagName("td")!;
            var xs6= document.getElementById(b6)!.getElementsByTagName("select")!;
    
            var q6;
            for (q6 = 0; q6 < xe6.length-2; q6++) 
            {
                var index = xx6[q6];
                if(q6==6)
                {
                    if(index.value)
                    {
                        index.placeholder = index.value;
                        recordarr[q6]=index.value;
                    }
                    else
                    {
                        recordarr[q6]=index.placeholder;
                    }
                }
                else if(q6==7)
                {
                    let x:any;
                    x = xs6[0].value;
                    recordarr[q6]=x;
                }
                else
                {
                    index.placeholder = index.value;
                    recordarr[q6]=index.value;
                }
                    
            }
            let allrows=document.getElementById("tbody")!.getElementsByTagName("tr")!;
            let cells=document.getElementById("row"+fid)!.getElementsByTagName("td")!;

            if(!validate.id(`${recordarr[6]}`,`${allrows}`))
            {
                cells[6].innerHTML +='<span class="alertspan" style="color:red,display:block">Please fill an unique ID</span>';
            }
            if(!validate.phone(`${recordarr[4]}`))
            {
                cells[4].innerHTML +='<span class="alertspan" style="color:red,display:block">Please fill in valid phone number</span>';
            }
            if(!validate.email(`${recordarr[3]}`))
            {
                cells[3].innerHTML +='<span class="alertspan" style="color:red,display:block">Please fill in valid email</span>';
            }
            if(!validate.notempty(`${recordarr[0]}`))
            {
                cells[0].innerHTML +='<span class="alertspan" style="color:red,display:block">Please enter your First name</span>';
            }
            if(!validate.notempty(`${recordarr[2]}`))
            {
                cells[2].innerHTML +='<span class="alertspan" style="color:red,display:block">Please enter your Last Name</span>';
            }
            if(!validate.address(`${recordarr[5]}`))
            {
                cells[5].innerHTML +='<span class="alertspan" style="color:red,display:block">Please enter your address</span>';
            }

           
           if(validate.id(`${recordarr[6]}`,`${allrows}`)&&validate.phone(`${recordarr[4]}`)&&validate.email(`${recordarr[3]}`)&&validate.notempty(`${recordarr[0]}`)&&validate.notempty(`${recordarr[2]}`)&&validate.address(`${recordarr[5]}`))
           {
            let newemp= new imp.emp(recordarr[0],recordarr[1],recordarr[2],recordarr[3],recordarr[4],recordarr[5],recordarr[6],recordarr[7]);
           let alerts= document.getElementsByClassName("alertspan")!;
           for(let i=0;i<alerts.length;i++)
           {
               alerts[i].style.display="none";
           }
            if(lol==99 || p1.nrow==0)
            {
                p1.nrow=1;
                fetch(`http://localhost:3000/addnewrow/${recordarr[6]}`,{
                    method:"post",
                    headers:{'Content-Type':'application/json'},
                    body:JSON.stringify(newemp)
                }).then(res=>{
                    let kalesh1=document.getElementById("tbody")!.getElementsByTagName("button")!;
    
                    for(let i=1;i<kalesh1.length;i=i+2)
                    { 
                            let num2=kalesh1[i].id;
                            let b25=""+num2;
                            let b35=""+num2+ "" +num2;
                            var xx15= document.getElementById(""+b25)!;
                            var xx25= document.getElementById(""+b35)!;
                           
        
                            if(b35==""+fid+""+fid)
                            {
                                    xx25.innerHTML="EDIT";
                                    xx15.innerHTML="DELETE";
                                    let b="row"+ fid;
        
                                   

                                    var sel=document.getElementById(b)!.getElementsByTagName("td");
                                    console.log(imp.ROLES[recordarr[7]]);
                                    sel[7].innerHTML=`<input type="number" placeholder="${imp.ROLES[recordarr[7]]}" disabled>`;

                                    var xx5=document.getElementById(b)!.getElementsByTagName("input")!;
        
                                    var q5;
                                    for(q5=0;q5<xx5.length;q5++)
                                    {
                                        var index=xx5[q5];
                                        index.disabled=true;   
                                    }
                            }
                            else
                            {
                                xx15.style.display="block";
                                xx25.style.display="block";
                            } 
                     }
                });
            }
            else
            {
                fetch(`http://localhost:3000/updateempdata/${fid}`,{
                    method:"put",
                    headers:{'Content-Type':'application/json'},
                    body:JSON.stringify(newemp)
            }).then(res=>{
                let kalesh1=document.getElementById("tbody")!.getElementsByTagName("button")!;
    
                for(let i=1;i<kalesh1.length;i=i+2)
                { 
                        let num2=kalesh1[i].id;
                        let b25=""+num2;
                        let b35=""+num2+ "" +num2;
                        var xx15= document.getElementById(""+b25)!;
                        var xx25= document.getElementById(""+b35)!;
                       
    
                        if(b35==""+fid+""+fid)
                        {
                                xx25.innerHTML="EDIT";
                                xx15.innerHTML="DELETE";
                                let b="row"+ fid;
    
                                var xx5= document.getElementById(b)!.getElementsByTagName("input")!;

                                var sel=document.getElementById(b)!.getElementsByTagName("td");
                                console.log(imp.ROLES[recordarr[7]]);
                                sel[7].innerHTML=`<input type="number" placeholder="${imp.ROLES[recordarr[7]]}" disabled>`;

                                
    
                                var q5;
                                for(q5=0;q5<xx5.length;q5++)
                                {
                                    var index=xx5[q5];
                                    index.disabled=true;   
                                }
                        }
                        else
                        {
                            xx15.style.display="block";
                            xx25.style.display="block";
                        } 
                 }
            });
            }
           }
            
    
           
          /*  if(lol==99)
                    {
                        p1.emp.push( {
                            "FirstName": xx6[0].value,
                            "MiddleName":  xx6[1].value,
                            "LastName":  xx6[2].value,
                            "Email":  xx6[3].value,
                            "phoneno":  xx6[4].value,
                            "role":  xx6[5].value,
                            "Address":  xx6[6].value,
                            "id": xx6[7].value
                        });
    
                        p1.numrows=p1.numrows +1; 
                    }
                    */  
        }
        
    
                    else
                    {
                        
                            let b6="row"+ fid;
    
                            var xx6= document.getElementById(b6)!.getElementsByTagName("input")!;
    
                            var q60;
                            for(q60=0;q60<xx6.length;q60++)
                            {
                                    var index=xx6[q60];  
                                    index.value=index.placeholder;
                                    p1.temp[q60]=index.placeholder;
                            }
    
                            let kalesh2=document.getElementById("tbody")!.getElementsByTagName("button")!;
    
                                    for(let i=1;i<kalesh2.length;i=i+2)
                                    { 
                                                let num2=kalesh2[i].id;
                        
                                                if(num2==fid)
                                                {
                                        
                                                    let b2=""+fid+""+fid;
                                                    
                                                    let b3="row"+ fid;
                                    
                                                
                                                        var xx1= document.getElementById(""+fid)!;
                                                        var xx2= document.getElementById(b2)!;
                                                        var xx3= document.getElementById(b3)!.getElementsByTagName("input")!;
                                                        var xh5= document.getElementById(b3)!.getElementsByTagName("td")!;
                                                
                                                        xx1.innerHTML="CANCEL";
                                                        xx2.innerHTML="SAVE";
                                                        
                                                        
                                                        var qq;
                                                        for(qq=0;qq<xx3.length;qq++)
                                                        {
                                                           
                                                            if(qq==7)
                                                                {
                                                                    xh5[7].innerHTML=` <select class="form-control">
                                                                    <option value="0">DEVELOPER</option>
                                                                    <option value="1">QA</option>
                                                                    <option value="2">DEVOPS</option>
                                                                  </select>
                                                                    `
                                                                }
                                                                else
                                                                {
                                                                    var index=xx3[qq];
                                                                     index.disabled=false; 
                                                                }
                                                            
                                                        }
                                                 }
                                                    else
                                                    {
                                                        
                                                        let b22=""+num2;
                                                        let b33=""+num2+ "" +num2;
                                                        var xx11= document.getElementById(""+b22)!;
                                                        var xx22= document.getElementById(""+b33)!;
                                                        xx11.style.display="none";
                                                        xx22.style.display="none";
                                                    }
                                    }
            
                    }
       }
   
}

deleterow(val:any)
{
    var num:any;
        var kya=1;

       if(val=="newcancel")
       {
           if(document.getElementById("theid")!.value){
        let theid = document.getElementById("theid")!;
            let theval = theid.value;
            let therow = document.getElementById("newnew")!;
            therow.id="row" + theval;
            let thesave = document.getElementById("newsave")!;
            thesave.innerHTML = "EDIT";
            thesave.id="" + theval + "" + theval;
            let thedelete = document.getElementById("newcancel")!;
            thedelete.innerHTML = "DELETE";
            thedelete.id="" + theval;
            num = "" + theval;
           }
           else{
               p1.editrow("newcancel");
               kya=99;
           }
       }
        else
        {
            num=""+val;
        }
        if(kya==1)
        {
            if((document.getElementById(""+num)!.innerHTML=="DELETE" ))
            {
                fetch(`http://localhost:3000/deleterow/${num}`,{
                    method : "delete"}).then(res =>{
                        let rowid = document.getElementById("row"+num)!;
                        let theedit = document.getElementById(""+num+""+num)!;
                        let thedel = document.getElementById(""+num)!;
                        theedit.removeAttribute("id");
                        thedel.removeAttribute("id");
                        rowid.id="fake";
                        document.getElementById("fake")!.remove();
                    });
            }
                else
                {    
                    let h2= "row"+ num;
                    let nh1=num;
                               
                                var h22= document.getElementById(h2)!;
        
                                h22.innerHTML=`
                                <td><input type="text" placeholder="${p1.temp[0]}" disabled></td>
                                <td><input type="text" placeholder="${p1.temp[1]}" disabled></td>
                                <td><input type="text" placeholder="${p1.temp[2]}" disabled></td>
                                <td><input type="email" placeholder="${p1.temp[3]}" disabled></td>
                                <td><input type="number" placeholder="${p1.temp[4]}" disabled></td>
                                <td><input type="number" placeholder="${p1.temp[5]}" disabled></td>
                                <td><input type="text" placeholder="${p1.temp[6]}" disabled></td>
                                <td><input type="number" placeholder="${p1.temp[7]}" disabled></td>
                                <td><button id="${nh1}${nh1}" class="btn btn-primary">EDIT</button></td>
                                <td><button id="${nh1}" class="btn btn-danger">DELETE</button></td>`;
        
                                
                                let r=""+ num + "" + num;
                                let de = document.getElementById(""+nh1)!;
                                de!.onclick = () => {
                                    this.deleterow(p1.temp[6]);
                                  }
                         
                         let pe = document.getElementById(r)!;
                         pe!.onclick = () => {
                            this.editrow(this.temp[6]);
                          }    
                    let kalesh3=document.getElementById("tbody")!.getElementsByTagName("button")!;
        
                    for(let i=1;i<kalesh3.length;i=i+2)
                    {
                        let num2=kalesh3[i].id;
                        let b25=""+num2;
                        let b35=""+num2+ "" +num2;
                        var xx15= document.getElementById(""+b25)!;
                        var xx25= document.getElementById(""+b35)!;
                            xx15.style.display="block";
                            xx25.style.display="block";
                    }
                }
        }
   
       
}

async addrow()
{
    alert("Remember to fill a unique ID, else it will not work properly.");
         let kalesh=await document.getElementById("tbody")!.getElementsByTagName("button")!;
        let thebody= document.getElementById("tbody")!;
        p1.nrow=0;

        let newlen=kalesh.length;

        let newrow= thebody.insertRow(-1);
        newrow.setAttribute("id","newnew");
       newrow.innerHTML=`
       <td><input type="text" placeholder=""></td>
       <td><input type="text" placeholder=""></td>
       <td><input type="text" placeholder=""></td>
       <td><input type="email" placeholder="" ></td>
       <td><input type="number" placeholder=""></td>
       <td><input type="text" placeholder=""></td>
       <td><input type="number" placeholder="" id="theid"></td>
       <td><select class="form-control">
       <option value="0">DEVELOPER</option>
       <option value="1">QA</option>
       <option value="2">DEVOPS</option>
     </select></td>
       <td><button class="btn btn-primary" id="newsave">SAVE</button></td>
      <td><button class="btn btn-danger" id="newcancel">CANCEL</button></td>`;

            let dnew = document.getElementById("newcancel")!;
            dnew!.onclick = () => {
                p1.deleterow("newcancel");
              }
          
            
            let pnew = document.getElementById("newsave")!;
            pnew!.onclick = () => {
                p1.editrow("newsave");
              }

            for(let i=1;i<newlen;i=i+2)
            { 
                let a=""+kalesh[i].id;
                let b=""+kalesh[i].id+""+kalesh[i].id;

                    let d = document.getElementById("" + a)!;
                    d!.onclick = () => {
                        this.deleterow(a);
                      }
                   
                    let p = document.getElementById("" + b)!;
                    p!.onclick = () => {
                        this.editrow(a);
                      }
               
             }
            

}


/*
    async addrow()
    {
        alert("Remember to fill a unique ID, else it will not work properly.");
         let kalesh=await document.getElementById("t1body")!.getElementsByTagName("button")!;
        let thebody= document.getElementById("t1body")!;

        let newlen=kalesh.length;
        console.log(newlen);
        
       
            thebody.innerHTML +=` <tr style="display:block" id="newnew">
            <td><input type="text" placeholder=""></td>
            <td><input type="text" placeholder=""></td>
            <td><input type="text" placeholder=""></td>
            <td><input type="email" placeholder=""></td>
            <td><input type="number" placeholder=""></td>
            <td><input type="number" placeholder=""></td>
            <td><input type="text" placeholder=""></td>
            <td><input type="number" placeholder="" id="theid"></td>
            <td><button id="newsave" class="btn btn-primary">SAVE</button></td>
            <td><button id="newcancel" class="btn btn-danger">CANCEL</button></td>
            </tr>`;

            let dnew = document.getElementById("newcancel")!;
            dnew.addEventListener("click", p1.deleterow);
            
            let pnew = document.getElementById("newsave")!;
            pnew.addEventListener("click", p1.editrow);

            console.log(kalesh);

            for(let i=1;i<newlen;i=i+2)
            { 
                console.log(kalesh[i].id);
                let a=""+kalesh[i].id;
                let b=""+kalesh[i].id+""+kalesh[i].id;

                    let d = document.getElementById("" + a)!;
                    d.addEventListener("click", p1.deleterow);
                   
                    let p = document.getElementById("" + b)!;
                    p.addEventListener("click", p1.editrow);
               
             }
            

    }

    

    editrow()
    { 
        var fid;
        var yo;
        var kid=1;
        var lol=7;
        if (this.id == "newsave" || document.getElementById("newcancel")) {
            let theid = document.getElementById("theid")!;
            let theval = theid.value;
            if(theval)
            {
                let therow = document.getElementById("newnew")!;
                therow.id = "row" + theval;
               
                let thesave = document.getElementById("newsave")!;
                thesave.id = "" + theval + "" + theval;

                let thedelete = document.getElementById("newcancel")!;
                thedelete.innerHTML = "DELETE";
                thedelete.id = "" + theval;

                fid = "" + theval;
                yo = "" + theval + "" + theval;
                lol=99;
            }
            else
            {
                let rowid = document.getElementById("newnew")!;
                let theid = document.getElementById("theid")!;
                let thesave = document.getElementById("newsave")!;
                let thecancel = document.getElementById("newcancel")!;
                theid.removeAttribute("id");
                thesave.removeAttribute("id");
                thecancel.removeAttribute("id");
                rowid.id="fake";
                document.getElementById("fake")!.remove();
                fid = "nosorry";
                kid = 99;
            }
           
        }
       else{
        let ill=this.id;
        let num=ill;
            let len= Math.max(Math.floor(Math.log10(Math.abs(num))), 0) + 1;
            let num1=len/2;
            let div=Math.pow(10,num1); 
            let nid=num/div; 
            fid= Math.floor(nid);
            yo=""+num;
       }
      
           

                    if(kid==1)
                    {  
                        if(document.getElementById(""+fid+""+fid)!.innerHTML=="SAVE" )
                        {
                            
                            let b6="row"+ fid;
            
                            var xx6= document.getElementById(b6)!.getElementsByTagName("input")!;
            
                            var q6;
                            for (q6 = 0; q6 < xx6.length; q6++) 
                            {
                                var index = xx6[q6];
                                if(q6==7)
                                {
                                    if(index.value)
                                    {
                                        index.placeholder = index.value;
                                    }
                                }
                                else
                                {
                                    index.placeholder = index.value;
                                }
                                    
                            }
                            if(lol==99)
                                    {
                                        p1.emp.push( {
                                            "FirstName": xx6[0].value,
                                            "MiddleName":  xx6[1].value,
                                            "LastName":  xx6[2].value,
                                            "Email":  xx6[3].value,
                                            "phoneno":  xx6[4].value,
                                            "role":  xx6[5].value,
                                            "Address":  xx6[6].value,
                                            "id": xx6[7].value
                                        });

                                        p1.numrows=p1.numrows +1; 
                                    }
                            
                                    let kalesh1=document.getElementById("t1body")!.getElementsByTagName("button")!;

                                    for(let i=1;i<kalesh1.length;i=i+2)
                                    { 
                                            let num2=kalesh1[i].id;
                                            let b25=""+num2;
                                            let b35=""+num2+ "" +num2;
                                            var xx15= document.getElementById(""+b25)!;
                                            var xx25= document.getElementById(""+b35)!;
                                           
                        
                                            if(b35==yo)
                                            {
                                                    xx25.innerHTML="EDIT";
                                                    xx15.innerHTML="DELETE";
                                                    let b="row"+ fid;
                        
                                                    var xx5= document.getElementById(b)!.getElementsByTagName("input")!;
                        
                                                    var q5;
                                                    for(q5=0;q5<xx5.length;q5++)
                                                    {
                                                        var index=xx5[q5];
                                                        index.disabled=true;   
                                                    }
                                            }
                                            else
                                            {
                                                xx15.style.display="block";
                                                xx25.style.display="block";
                                            } 
                                     }
                        }
                        

                                    else
                                    {
                                        
                                            let b6="row"+ fid;

                                            var xx6= document.getElementById(b6)!.getElementsByTagName("input")!;

                                            var q60;
                                            for(q60=0;q60<xx6.length;q60++)
                                            {
                                                var index=xx6[q60];  
                                                    index.value=index.placeholder;   
                                            }

                                            var q6;
                                            for(q6=0;q6<xx6.length;q6++)
                                            {
                                                var index=xx6[q6];   
                                                p1.temp[q6]=index.placeholder;
                                            }

                                            let kalesh2=document.getElementById("t1body")!.getElementsByTagName("button")!;

                                                    for(let i=1;i<kalesh2.length;i=i+2)
                                                    { 
                                                                let num2=kalesh2[i].id;
                                        
                                                                if(num2==fid)
                                                                {
                                                        
                                                                    let b2=""+fid+""+fid;
                                                                    
                                                                    let b3="row"+ fid;
                                                    
                                                                
                                                                        var xx1= document.getElementById(""+fid)!;
                                                                        var xx2= document.getElementById(b2)!;
                                                                        var xx3= document.getElementById(b3)!.getElementsByTagName("input")!;
                                                                
                                                                        xx1.innerHTML="CANCEL";
                                                                        xx2.innerHTML="SAVE";
                                                                        
                                                                        
                                                                        var qq;
                                                                        for(qq=0;qq<xx3.length;qq++)
                                                                        {
                                                                            var index=xx3[qq];
                                                                            index.disabled=false;
                                                                            
                                                                        }
                                                                 }
                                                                    else
                                                                    {
                                                                        
                                                                        let b22=""+num2;
                                                                        let b33=""+num2+ "" +num2;
                                                                        var xx11= document.getElementById(""+b22)!;
                                                                        var xx22= document.getElementById(""+b33)!;
                                                                        xx11.style.display="none";
                                                                        xx22.style.display="none";
                                                                    }
                                                    }
                            
                                    }
                    }

        

       
        
    }

    deleterow()
    {
        var num;
        var kya=1;

       if(this.id=="newcancel")
       {
           if(document.getElementById("theid")!.value){
        let theid = document.getElementById("theid")!;
            let theval = theid.value;
            let therow = document.getElementById("newnew")!;
            therow.id="row" + theval;
            let thesave = document.getElementById("newsave")!;
            thesave.innerHTML = "EDIT";
            thesave.id="" + theval + "" + theval;
            let thedelete = document.getElementById("newcancel")!;
            thedelete.innerHTML = "DELETE";
            thedelete.id="" + theval;
            num = "" + theval;
           }
           else{
               p1.editrow();
               kya=99;
           }
       }
        else
        {
            num=this.id;
        }
        if(kya==1)
        {
            if(document.getElementById(""+num)!.innerHTML=="CANCEL" )
            {
                
                let h2= "row"+ this.id;
                let nh1=this.id;
                           
                            var h22= document.getElementById(h2)!;

                            h22.innerHTML=`
                            <td><input type="text" placeholder="${p1.temp[0]}" disabled></td>
                            <td><input type="text" placeholder="${p1.temp[1]}" disabled></td>
                            <td><input type="text" placeholder="${p1.temp[2]}" disabled></td>
                            <td><input type="email" placeholder="${p1.temp[3]}" disabled></td>
                            <td><input type="number" placeholder="${p1.temp[4]}" disabled></td>
                            <td><input type="number" placeholder="${p1.temp[5]}" disabled></td>
                            <td><input type="text" placeholder="${p1.temp[6]}" disabled></td>
                            <td><input type="number" placeholder="${p1.temp[7]}" disabled></td>
                            <td><button id="${nh1}${nh1}" class="btn btn-primary">EDIT</button></td>
                            <td><button id="${nh1}" class="btn btn-danger">DELETE</button></td>`;

                            
                            let r=""+ this.id + "" +this.id;
                            let de = document.getElementById(""+nh1)!;
                     de.addEventListener("click", p1.deleterow);
                     
                     let pe = document.getElementById(r)!;
                     pe.addEventListener("click", p1.editrow);

                            let num=this.id;
                            let len= Math.max(Math.floor(Math.log10(Math.abs(num))), 0) + 1;
                            let num1=len/2;
                            let div=10^num1;
                            let nid=num/div; 
                            let fid= Math.floor(nid);
                            let yo=""+num;
                            
                
                let kalesh3=document.getElementById("t1body")!.getElementsByTagName("button")!;

                for(let i=1;i<kalesh3.length;i=i+2)
                {
                    let num2=kalesh3[i].id;
                    let b25=""+num2;
                    let b35=""+num2+ "" +num2;
                    var xx15= document.getElementById(""+b25)!;
                    var xx25= document.getElementById(""+b35)!;
                        xx15.style.display="block";
                        xx25.style.display="block";
                }
            }
            else
            {
                var tt;
                          let deleteitem= "row"+ num;
                          let b1=""+num;
                          let b2=""+ num + "" + num;
                       var xx= document.getElementById(deleteitem)!;
                       var xx1= document.getElementById(b1)!;
                       var xx2= document.getElementById(b2)!;
                       xx.remove();
                       p1.numrows=p1.numrows-1;
                    //xx.style.display="none";
                    //xx1.style.display="none";
                    //xx2.style.display="none";
            }
        }
    }
    */
}
  
let p1=new actions();
