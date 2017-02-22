function greatedThanthree(x, y) {
  if ((x > 3) && (y > 3)) {
    return true
  }

  else {
    return false
  }
};

function aOrB(letter){
	if (letter == "a" || letter == "b"){
		return true
	}
	else { 
		return salse
	}
};

function greatThanTwo(number){
	if ( number == 2){ 
		return true
	} else{
		return false
	}
};

// level 2


// printBetween
// 1, 7 -> [2,3, 4,5, 6]
// [1,2,3,4,5,6,7]

function  printEvenBetween (a, b){
	var start;
	var end;

	if ( a >= b) {
		start = a;
		end = b;
	} else {
		start = b;
		end = a;
	}
var listbetween = [];


for ( var i = start+1; i<end; i++) {
	if( i % 2 == 0)	listbetween.push(i); 
}
return listbetween;
}

function  printBetween (a, b){
	var start;
	var end;

	if ( a >= b)
		start = a;
		end = b;
	} else {
		start = b;
		end = a;
	}
var listbetween = [];


for ( var i = start+1; i<end; i++) {
	listbetween.push(i); 
}
return listbetween;



// fibonacci sequence.
// 0 -> []
// 1 -> [0]
// 2 -> [0,1]
// 3 -> [0, 1, 1]
// 6 -> [0, 1, 1, 2, 3, 5]

// the fibonacci sequence is [0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ...]
// BONUS:
// do the second question with recursion

function fib(n){ // n=3
    if (n==0) return [];
    if (n==1) return [0];
    if (n==2) return [0,1];

    
     var fibList = [0, 1]; // [0,1, 1]
    for (var i=2; i<n; i++){
        var last = fibList[fibList.length-1];
        var secondToLast = fibList[fibList.length-2];
        fibList.push(last + secondToLast);
    }

    return fibList;
};



