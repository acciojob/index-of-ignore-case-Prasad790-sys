function indexOfIgnoreCase(s1, s2) {
  // write your code here
   let ans=-1;
   let st1=s1.toLowerCase();
   let st2=s2.toLowerCase();
	console.log(st1+" "+st2);
   for(let i=0;i<st1.length;i++){
	   if(st1[i]==st2[0]&i+st2.length<st1.length){
		   let s3=st1.slice(i,i+st2.length+1);
		   if(s3===st2)){ans=i;}
		   break;
	   }
   }
	return ans;
}
// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
