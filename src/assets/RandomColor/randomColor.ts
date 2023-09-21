export  const  getRandomColor =() =>{
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export  const startRandomColorEffect = async(element:HTMLElement) => {
  
  
  if (element) {
    const originalColor = element.style.backgroundColor;
    console.log("cambiado")
    
    const randomColor = getRandomColor();
    element.style.backgroundColor = randomColor;
    setTimeout(function() {
      element.style.backgroundColor = originalColor;
    }, 1000);
  } else {
    console.error("Element not found.");
  }
}



