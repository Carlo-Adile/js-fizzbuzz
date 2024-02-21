const fizzbuzzList = document.querySelector('.fizzbuzz_list');



for(let x = 1; x < 101; x++){ 
  /* console.log(x); */

  /* controlla fizz e buzz con il remainder */
  if(x % 3 == 0){
    console.log("Fizz");
  }
  else if(x % 5 == 0){
    console.log("Buzz")
  }
  else if(x % 3 == 0 && x % 5 == 0){
    console.log("FizzBuzz")
  }
  else{
    console.log(x);
  }
  /* aggiungi gli elementi alla lista html */
  const markupListItem = `<li>${x}</li>`
  fizzbuzzList.innerHTML += markupListItem;

}

