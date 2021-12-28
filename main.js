$(function() {
   
    $(".form-control").on('focus', function(){

        $(this).parents(".form-group").addClass('focused');

    });

    $(".form-control").on('blur', function(){

        $(this).parents(".form-group").removeClass('focused');

    });

});

const root = 'http://jsonplaceholder.typicode.com/';
let uri = root + 'posts';

let formdata = new FormData();
formdata.append("userId", 3);
formdata.append('title','This is my title');
formdata.append('body','This is the body text of the post');

let options = {
    method: 'POST',
    mode: 'cors',
    body: formdata
}
let req = new Request(uri, options);

fetch(req)
    .then((response)=>{
        if(response.ok){
            return response.json();
        }else{
            throw new Error('Bad HTTP!')
        }
    })
    .then( (j) =>{
        console.log(j);
    })
    .catch( (err) =>{
        console.log('ERROR:', err.message);
    });
