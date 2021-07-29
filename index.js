// Code your solutions in this file
function writeCards(names, event) {
  const answer = [];
  for (let i = 0; i < names.length; i++) {
      answer.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return answer;
}

function countDown(num) {
  while (num >= 0) {
    console.log(num);
    num--;
  }
}