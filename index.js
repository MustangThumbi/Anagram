/*var input = "heart, pride,triangle";
var words = input.split(",");
for (var i = 0; i <words.length; i++)
 {
 var word=words[i];
 var alphabetical = word.split("").sort().join("");
 for(var j =0; j<words.length; j++){
 	if (i===j){
 		continue;
 	}
 	var other = words[j];
 	if (alphabetical=== other.split("").sort().join("")){
 		console.log(word + "-"+other+ "("+i+","+j+")");
 	}
 }
}*/
function anagram(a,b){
    let num1=a.length;
    let num2=b.length;
    if(num1 !==num2){
        console.log('invalid input');
        return
    }
let string1= a.split('').sort().join('');
let string2= b.split('').sort().join('');
if(string1 ===string2){
    console.log("true")
}else{
    console.log("False")
}
}
anagram("nig","gin")