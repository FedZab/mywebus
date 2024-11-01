/*
let size = 200;
let grid=[];
for (let i =0; i<size; i++){
  grid.push([]);
  for (let n =0; n<size; n++){
    let cell = Math.floor(Math.random()*255)
    grid[i].push(cell)
    

  }
}
console.log(grid[2][2])


*/




let equation = window.prompt("enter your equation ")

let renderSize = 800;




function setup() {
  createCanvas(1440, 1440);

}


function draw() {


  
  
  fill(255)

  background(255)

  
  for(let x = -renderSize/2; x<renderSize/2; x++){
    for(let i = 500; i<10000;i+=50){
      if(Math.random()<((10000-i)/10000)){
        fill(20)
        point(x+renderSize/2, Math.floor(eval(equation)/i)+renderSize/2)
      }
    } 
  }





 /* 
  let mx1
  console.log(int(mouseX), int(mouseY))
  
  let width = 2;

  let scrs =[int(mouseX/2), int(mouseY/2)]
  let scrs1 =[150,100]
  let scrs2 =[100,150]
  background(23);
  fill(0, 0, 255);
  let y =0;
  let x =0;
  for (let x =0; x<400/width;x++){
    for (let y =0; y<400/width; y++){
      c = (Math.sin(dist(scrs[0], scrs[1], x, y)*0.5))
      c2 = (Math.sin(dist(scrs1[0], scrs1[1], x, y)*0.7))
      c3 = (Math.sin(dist(scrs2[0], scrs2[1], x, y)*0.2))
      xf = x*width
      yf = y*width
      fill(255*((c+c2+c3+1)/3));
      square(xf,yf,8)
  

    }
   
  }
  
  for (let y = size-2; y>0; y--){
    for(let x=0; x<size; x++){
      if (grid[y][x]>50 && y!=size-3 && grid[y+1][x]<200){
        
        let dif = (grid[y][x]-grid[y+Math.floor(grid[y][x]/255*2)][x]);
        grid[y+Math.floor(grid[y][x]/255*2)][x] += dif;
        grid[y][x]-=dif;
        
      }
    }
  }
  
  for(let i=0; i<size;i++){
    for(let n=0; n<size;n++){
      noStroke();
      fill(Math.min(grid[i][n]),255)
      ellipse(n, i, 2,2)

    }
  }
  */



  
}
