const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

  //   write your code here
	function haskey(key){
    for(let i in sampleObject) {
        if(i===key){
            return true;
        }
    }
    return false;
}


// Do not change the code below
const key = prompt("Enter Key.");
