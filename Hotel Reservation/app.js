const room1 = [1, 3, 5]; 
const room2 = [2, 6, 10];   

function findCommonElement(room1, room2) { 
      
    
    for(let i = 0; i < room1.length; i++) {          
        
        for(let j = 0; j < room2.length; j++) { 
               
            if(room1[i] === room2[j]) { 
              
                return true; 
            } 
        } 
    } 

    return false;  
} 
  
console.log(findCommonElement(room1, room2));

