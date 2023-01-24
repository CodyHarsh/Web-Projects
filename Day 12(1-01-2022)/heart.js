let palindrome= (a) =>{
    let j = (a.length) -1;
    let i = 0;
    while(i < j){
        if(a[i] == a[j]){
            i++;
            j--;
        }else{
            return false;
        }
    }
    return true;
}


console.log(palindrome("hah"));