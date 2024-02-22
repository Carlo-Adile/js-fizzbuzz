const fizzbuzzList = document.querySelector('.fizzbuzz_list');

for(let x = 1; x < 101; x++){ 
  let myItem;
  let listItem = document.createElement("li");

  /* controlla fizz e buzz attraverso il remainder */
  if(x % 3 == 0 && x % 5 == 0){
    myItem = "FizzBuzz";
    listItem.classList.add('box');
    listItem.classList.add('style1');
  }
  else if(x % 3 == 0){
    myItem = "Fizz";
    listItem.classList.add('box');
    listItem.classList.add('style2');
  }
  else if(x % 5 == 0){
    myItem = "Buzz";
    listItem.classList.add('box');
    listItem.classList.add('style3');  
  }
  else{
    myItem = x;
    listItem.classList.add('box');
    listItem.classList.add('style4');
  }

  listItem.innerHTML = myItem;
  fizzbuzzList.append(listItem);
  console.log(myItem);

}





