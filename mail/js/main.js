const emailArray = ['simonegiusti@gmail.com', 'alessiovietri@gmail.com', 'jacopodamiani@gmail.com', 'adrianogrimaldi@gmail.com'];
let success = false;
document.getElementById('send').addEventListener('click', 
function() { 
        for (let x = 0; x < emailArray.length; x++) {
            let yourEmailDom = document.getElementById('yourEmail');
            let yourEmail = yourEmailDom.value;
            if (emailArray[x] == yourEmail) {
                success = true;
            }
        }

        let yourMessageDom = document.getElementById('yourMessage');

        if (success == true) {
            yourMessageDom.innerHTML = 'Puoi entrare!'
        } else {
            yourMessageDom.innerHTML = 'Non puoi entrare!'
        }
    }  
);