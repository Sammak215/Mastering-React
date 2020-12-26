// Arrow functions

//old function making
const square =  function(number) {
    return number * number;
  };
  
  // New way to declare function
  // () if zero parameters
  const square1 = number => {
    return number * number;
  };
  // if single line function you can use 
  
  const square2 = number => number * number;
  
  // Arrow function realworld implmenetation
  
  const jobs = [
    { id:1, isActive: true },
    { id:2, isActive: false },
    { id:3, isActive: false },
  ]
  
  //without arrow function
  const activeJobs = jobs.filter(function(job) { return job.isActive; })
  
  //with arrow function
  // removed {} and return because of single line 
  const activeJobs = jobs.filter(job =>  job.isActive );