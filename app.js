var userName;
var age;
var notMachine=false;
var answer;
var current = window.location.pathname;
console.log(current);
if(current == '/lab03b/index.html') {
    console.log('at homepage');
    if(notMachine==false){
        for(var i=3;i>0;i--){
            answer = prompt('You have ' + i + ' attempts to confirm that you are NOT A MACHINE. Please enter the result of (3 + 6) ', 'Type your answer here..');
            if(answer==9){
                notMachine=true;
                userName = prompt('Please enter your name ', 'Type your name here..');
                age = prompt('Welcome to Formula Drift Website, ' + userName + '!' + 'This site contains media showing Profissional Drifers drifting their cars. Please do not try doing what you see here. Please enter your age to continue.' , 'Your age..');
                document.getElementById("m1").innerHTML ='<ul><li style="display: inline;"><a href="index.html">Home</a></li><li style="display: inline;">|</li><li style="display: inline;"><a href="gallary.html">Photo Gallary</a></li><li style="display: inline;">|</li><li style="display: inline;"><a href="contactus.html">Contact Us</a></li><li style="display: inline;">|</li><li style="display: inline;"><a href="labmates.html">View Other Sports by Lab03b Mates</a></li></ul>';

                if(age<18){
                    document.getElementById("p1").innerHTML= '<h2 style="color: red;">' + 'Limited view for under 18 - You will not be able to view photos' + '</h2>';
                    alert('Hey ' + userName + '! We costomized our content to match your age. Have fun!');
                    document.getElementById("p2").innerHTML= '<h3 style="color: red;">' + 'Access to photos is denied for under 18' + '</h3>';
                    //document.getElementById("p2").textContent= "Access to photos is denied for under 18";
                }else{
                    document.getElementById("p1").innerHTML= '<h2 style="color: green;">' + 'Full access view for 18+' + '</h2>';
                    alert('Hey ' + userName + '! You have full access to our content. Have fun!');
                    document.getElementById("p2").innerHTML= '<img src="https://www.falken.com.au/wp-content/uploads/2019/10/James-Deane-2019-Formula-Drift-Champion-2-Copy.jpg" width="400px"; height="300px";/>&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://bloximages.chicago2.vip.townnews.com/gazettes.com/content/tncms/assets/v3/editorial/3/c4/3c4f3ff8-54d4-11e9-9fa0-c34c4ef96b86/58e2c1e32b8f7.image.jpg?resize=881%2C502" width="400px"; height="300px";/>&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://store-images.s-microsoft.com/image/apps.23298.14355368446062212.8bbd23ed-e9ab-4691-b02a-78fef05d4c17.a6d2007c-e955-4f7a-a2c8-b72fc76f1440?w=1399&h=874&q=90&format=jpg" width="400px"; height="300px";/>';
                }
            }else if(i==1){
                alert('Your answer is not correct. You are considered a machine!');
            }else{
                alert('Your answer is not correct. Please try again');
            }
        }

    }
    
    //document.getElementById("m2").innerHTML= '<main><h2 style="color: red;">' + 'Access denied. You are cosidered a machine!' + '</h2></main>';

} else if(current == '/lab03b/gallary.html') {
    userName = prompt('Please enter your name ', 'Type your name here..');
    age = prompt('Welcome to Formula Drift Website, ' + userName + '!' + ' This site contains media showing Profissional Drifers drifting their cars. Please do not try doing what you see here. Please enter your age to continue.' , 'Your age..')
    if(age<18){
        alert('Hey ' + userName + '! We costomized our content to match your age. Have fun!');
        document.getElementById("p4").innerHTML= '<h2 style="color: red;">' + 'Limited view for under 18 - You will not be able to view photos' + '</h2>';
        document.getElementById("p3").innerHTML= '<h3 style="color: red;">' + 'Access to photos is denied for under 18' + '</h3>';
        //document.getElementById("p3").textContent= "Access to photos is denied for under 18";
    }else{
        alert('Hey ' + userName + '! You have full access to our content. Have fun!');
        document.getElementById("p4").innerHTML= '<h2 style="color: green;">' + 'Full access view for 18+' + '</h2>';
        document.getElementById("p3").innerHTML= '<img src="http://news.formulad.com/wordpress/wp-content/uploads/2020/09/LC2_1779.jpg" width="400px"; height="300px";/>&nbsp;&nbsp;&nbsp;&nbsp;<img src="http://news.formulad.com/wordpress/wp-content/uploads/2020/09/LC2_1630.jpg" width="400px"; height="300px";/>&nbsp;&nbsp;&nbsp;&nbsp;<img src="http://news.formulad.com/wordpress/wp-content/uploads/2020/09/LB2_7976.jpg" width="400px"; height="300px";/>&nbsp;&nbsp;&nbsp;&nbsp;<img src="http://news.formulad.com/wordpress/wp-content/uploads/2020/09/LY1_9784.jpg" width="400px"; height="300px";/>&nbsp;&nbsp;&nbsp;&nbsp;<img src="http://news.formulad.com/wordpress/wp-content/uploads/2020/09/LC3_0947.jpg" width="400px"; height="300px";/>&nbsp;&nbsp;&nbsp;&nbsp;<img src="http://news.formulad.com/wordpress/wp-content/uploads/2020/09/LB2_8334.jpg" width="400px"; height="300px";/>&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://www.falken.com.au/wp-content/uploads/2019/10/James-Deane-2019-Formula-Drift-Champion-2-Copy.jpg" width="400px"; height="300px"; &nbspi &nbspi &nbspi &nbspi/>&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://bloximages.chicago2.vip.townnews.com/gazettes.com/content/tncms/assets/v3/editorial/3/c4/3c4f3ff8-54d4-11e9-9fa0-c34c4ef96b86/58e2c1e32b8f7.image.jpg?resize=881%2C502" width="400px"; height="300px";/>&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://store-images.s-microsoft.com/image/apps.23298.14355368446062212.8bbd23ed-e9ab-4691-b02a-78fef05d4c17.a6d2007c-e955-4f7a-a2c8-b72fc76f1440?w=1399&h=874&q=90&format=jpg" width="400px"; height="300px";/>';
    }
  
}


