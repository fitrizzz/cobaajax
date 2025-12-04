// let input = document.getElementById("input");
// let container = document.getElementById("container");

// input.addEventListener('keydown',() => {
//     let ajax = new XMLHttpRequest();

//     ajax.onreadystatechange = () =>{
//         if(ajax.readyState == 4 && ajax.status == 200){
//             document.getElementById("container").innerHTML = "";
            
//         }
//     }
//     ajax.open('GET','load_data.php', true);
//     ajax.send();
// })

let keyword = document.getElementById("input");
let container = document.getElementById("container");

keyword.addEventListener('keyup', () =>{
    // console.log(keyword.value);

    let ajax = new XMLHttpRequest();

    // chek ajax siap ketak dari req
    ajax.onreadystatechange = function(){
        if(ajax.readyState == 4 && ajax.status == 200){
            // console.log(ajax.responseText);
            container.innerHTML = ajax.responseText;
        }
    }


    ajax.open('GET','load_data.php', true);
    ajax.send();

})