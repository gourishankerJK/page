function circle(){
  let dwidth=document.documentElement.clientWidth	;
  if (dwidth >"991")
  {
    document.querySelector("#circle").style.Display="visible";
  }
}
// It picks the color for triangle
function color_picker(i){
  if (i%2==0)
   return "rgb(192,192,192)";
 if (i%3==0)
   return "rgb(255,255,0)";
  if (i%4==0)
  return "rgb(88,240,245)";
  else{
    return "lightgreen";
  }
}
function tri(){
          let dwidth=window.innerWidth	;
             if (dwidth <"778"){
          let dwidth=window.innerWidth	;
          var height = document.querySelector("#Profile").clientHeight;
          var width = document.querySelector("#Profile").clientWidth;
          var h=25;
          var i=1;
          var s=25;
          console.log(width)
          while(s<height-25){
            //left triangle
                  var left_clone = document.querySelector('.triangleleft').cloneNode( true );
                  left_clone.style.top= s +"px";
                  left_clone.style.borderLeftColor=color_picker(i)
                  document.querySelector('#Profile').appendChild( left_clone );
                  //right triangle
                  var right_clone =document.querySelector(".triangleright").cloneNode(true);
                  right_clone.style.top= s +"px";
                  right_clone.style.borderRightColor=color_picker(i);
                  document.querySelector('#Profile').appendChild( right_clone );
                  i+=1;
                  s=h*i;
                }
          s=50;
          i=1;
          while (s < width-25)
                  {
                    //Top Triangle
                    var top_clone = document.querySelector('.triangletop').cloneNode( true );
                    top_clone.style.left= s +"px";
                    top_clone.style.borderTopColor=color_picker(i);
                    document.querySelector('#Profile').appendChild( top_clone );
                    //Bottom Triangle
                    var bottom_clone =document.querySelector(".trianglebottom").cloneNode(true);
                    bottom_clone.style.left= s +"px";
                    bottom_clone.style.borderBottomColor=color_picker(i);
                    document.querySelector('#Profile').appendChild( bottom_clone );
                    i+=1;
                    s=h*i;
                  }
                  }

              else{
                document.querySelector('.triangletop').style.display="none";
                document.querySelector(".trianglebottom").style.display="none";
                document.querySelector(".triangleright").style.display="none";
                 document.querySelector('.triangleleft').style.display="none";
              }
            }

function visi(){
    let dwidth=window.innerWidth	;
  t=document.querySelectorAll('.triangletop')
  b=document.querySelectorAll(".trianglebottom")
  l=document.querySelectorAll(".triangleright")
   r=document.querySelectorAll('.triangleleft')
  if (dwidth <"778"){
    for (var y of t)
        {
          y.style.display="block";
        }
    for (var y of b)
        {
          y.style.display="block";
        }
    for (var y of l)
       {
         y.style.display="block";
       }
     for (var y of r)
        {
           y.style.display="block";
        }
  tri();
  }

  else
        {

           for (var y of t)
               {
                 y.style.display="none";
               }
           for (var y of b)
               {
                 y.style.display="none";
               }
           for (var y of l)
              {
                y.style.display="none";
              }
            for (var y of r)
               {
                  y.style.display="none";
               }
        }

}
tri();
