function multipleFinder(mynum){//opens the function
    var result=[];//array to store answers
    for(var i=1;i<=mynum;i++){//opens the for loop
        if((i%2===0)&&(i%3===0)&&(i%5===0))
                result.push("yu-gi-oh");
        else if((i%2===0)&&(i%3!=0)&&(i%5!=0))
                result.push("yu");
        else if((i%2!=0)&&(i%3===0)&&(i%5!=0))
                result.push("gi");
        else if((i%2!=0)&&(i%3!=0)&&(i%5===0))
                result.push("oh");
        else if((i%2===0)&&(i%3===0)&&(i%5!=0))
                result.push("yu-gi");
        else if((i%2===0)&&(i%3!=0)&&(i%5===0))
                result.push("yu-oh");
        else if((i%2!=0)&&(i%3===0)&&(i%5===0))
                result.push("gi-oh");
        else{
                result.push(i);
            }
    }//closes the for loop
    return result;//returns the result array containing the changed values
}//closes the function
multipleFinder(100);//returns an array of 1-100 and changes the multiples of 2,3,5
multipleFinder(25);//another example