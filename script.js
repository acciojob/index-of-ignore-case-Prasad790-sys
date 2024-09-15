function indexOfIgnoreCase(s1, s2) {
  let ans=-1;
  let st1=s1.toLowerCase();
  let st2=s2.toLowerCase();
  for (let index = 0; index < s1.length-s2.length; index++) {
  	if(st1.includes(st2, index)){ans=index;}
  }
	return ans;
}
// Please do not change the code
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
