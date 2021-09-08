var Matt=80
var Simon=45

var limit=51

if(Matt>limit && Simon>limit){
    console.log('both students passed');
}else if(Matt>limit || Simon<limit){
    if(Matt>limit){
        console.log('Matt passed and Simon failed');
        console.log('Matt score is '+Matt);
    }else{
        console.log('Simon score is '+Simon);

    }
}else{
    console.log('both students failed');
}


