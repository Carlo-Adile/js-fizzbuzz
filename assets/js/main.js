const fizzbuzzList = document.querySelector('.fizzbuzz_list');



for(let x = 1; x < 101; x++){ 
  let myItem;
  /* console.log(x); */

  /* controlla fizz e buzz con il remainder */
  if(x % 3 == 0 && x % 5 == 0){
    myItem = "FizzBuzz";
    
  }
  else if(x % 3 == 0){
    myItem = "Fizz";
    console.log("Fizz");
  }
  else if(x % 5 == 0){
    myItem = "Buzz";
    console.log("Buzz")
  }
  else{
    myItem = x;
    console.log(x);
  }

  console.log("myItem");
  /* aggiungi gli elementi alla lista html */
  const markupListItem = `<li>${myItem}</li>`
  fizzbuzzList.innerHTML += markupListItem;

}

