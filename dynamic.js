function getfile(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("Application/json");
  xhr.open('GET',file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && xhr.status=="200"){
      callback(xhr.responseText);
    }
  }
  xhr.send(null);
}
getfile("dynamic.json",function(text){
  var data=JSON.parse(text);
  console.log(data);
  profile(data.basics);
  career(data.career);
  education(data.education);
  skills(data.skills);
})



var parent=document.querySelector('.parent');
var left=document.querySelector('.left');
var right=document.querySelector('.right');
function profile(pro){
  var image=document.createElement('img');
  image.src=pro.img;
  left.appendChild(image);
    parent.appendChild(left);
  var name=document.createElement('h1');

  name.textContent=pro.name;

  left.appendChild(name);

  var roll=document.createElement('h1');
    roll.textContent=pro.roll;
    left.appendChild(roll);
    var hr=document.createElement('hr');
    left.appendChild(hr);
  }



    function career(car){
      var data=document.createElement('h2');
      data.textContent="career objective";
      right.appendChild(data);
        var hr=document.createElement('hr');
        right.appendChild(hr);
      var career=document.createElement('p');
      career.textContent=car.info;
      right.appendChild(career);
      parent.appendChild(right);
      var hr=document.createElement('hr');
      right.appendChild(hr);
    }


function education(edu){
  var para=document.createElement('h3');
  para.textContent="education details";
  right.appendChild(para);
  var hr=document.createElement('hr');
  right.appendChild(hr);
var table=document.createElement('table');
table.border='3';
let row='';

 row +="<tr>"+"<th>"+"SNO"+"</th>"+"<th>"+"DEGREE"+"</th>"+"<th>"+"INSTITUTE"+"</th>"+"</tr>";

for(i in edu){
  row += "<tr>"+"<td>"+edu[i].sno+"</td>"+"<td>"+edu[i].degree+"</td>"+"<td>"+edu[i].institute+"</td>"+"</tr>";
}
table.innerHTML=row;
right.appendChild(table);
parent.appendChild(right);
var hr=document.createElement('hr');
right.appendChild(hr);

}
function skills(skil){
  var hh=document.createElement('h4');
  hh.textContent="skills";
  right.appendChild(hh);
  var ul=document.createElement(ul);
  right.appendChild(ul);
  for(i in skil){
    var li=document.createElement('li');
    li.textContent=skil[i].info;
    ul.appendChild(li);
  }
}
