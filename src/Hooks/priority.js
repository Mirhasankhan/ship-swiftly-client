const calculatePriorityCost = (priority)=> {
    if(priority < 3){
        return 20;
    }
    else if(priority >= 3 && priority < 10){
        return 15
    }
    else if(priority > 9){
        return 10
    }
  }

  export default calculatePriorityCost