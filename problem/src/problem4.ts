

  type Circle = {
    shape : "circle";
    radius: number;
  } 
  type Rectangle = {
    shape : "rectangle";
    width: number;
    height: number;
  }


  function calculateShapeArea(shape : Circle | Rectangle){
    if(shape.shape ===  "circle"){
      return Math.PI * shape.radius ** 2;
    }else if (shape.shape === "rectangle"){
      return shape.width * shape.height;
    }

    throw new Error("Invalid shapes type")
    
  }

  
  // Sample Input 1:
const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });

// Sample Output 1:
// 78.54;

// Sample Input 2:
const rectangleArea = calculateShapeArea({
  shape: "rectangle",
  width: 4,
  height: 6,
});

console.log(circleArea)
console.log(rectangleArea)

// Sample Output 2:
//24;