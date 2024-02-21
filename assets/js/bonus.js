const fizzbuzzList = document.querySelector('.fizzbuzz_list');

for(let x = 1; x < 101; x++){ 
  let myItem;

  /* controlla fizz e buzz attraverso il remainder */
  if(x % 3 == 0 && x % 5 == 0){
    const listItem = document.createElement('li')
    listItem = `<li class="box">${myItem}</li>`
    /* myItem = "FizzBuzz"; */
  }
  else if(x % 3 == 0){
    myItem = "Fizz";
  }
  else if(x % 5 == 0){
    myItem = "Buzz";
  }
  else{
    myItem = x;
  }
  console.log(myItem);

  /* esercizio: aggiungi gli elementi alla lista html */
  /* const markupListItem = `<li>${myItem}</li>`
  fizzbuzzList.innerHTML += markupListItem; */

  /* bonus */
  /* const markupListItemStyle = `<li class="box">${myItem}</li>`;
  fizzbuzzList.innerHTML += markupListItemStyle; */

}