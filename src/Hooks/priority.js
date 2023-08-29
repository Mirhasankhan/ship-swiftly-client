const calculatePriorityCost = (priority)=> {
    if(priority == 'tomorrow'){
        return 20;
    }
    else if(priority == '3 days later'){
        return 15
    }
    else if(priority == '10 days later'){
        return 10
    }
  }

  export default calculatePriorityCost