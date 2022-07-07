const emailArray = ['simonegiusti@gmail.com', 'alessiovietri@gmail.com', 'jacopodamiani@gmail.com', 'adrianogrimaldi@gmail.com'];

document.getElementById('send').addEventListener('click', 
function() { 
        for (let x = 0; x < emailArray.length; x++) {
            let yourEmailDom = document.getElementById('yourEmail');
            yourEmail = yourEmailDom.value;
            if (emailArray[x] == yourEmail) {
                let yourMessageDom = document.getElementById('yourMessage');
                yourMessage = yourMessageDom.innerHTML = 'Puoi Entrare!';;
                yourMessage.value;
            } else {
                yourMessage.innerHTML = 'Non Puoi Entrare!';
            }
        }
    }  
);