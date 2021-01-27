var userName = prompt('Please enter your name ', 'Type your name here..')
Var age = prompt('Welcome to Formula Drift Website, ' + userName + '!' + ' This site contains media showing Profissional Drifers drifting their cars. Please do not try doing what you see here. Enter your age to continue.' , 'Your age..')
if(age<18){
    document.write('<h2>' + 'Limited view for under 18' + '</h2>')
    alert('Hey ' + userName + '! We costomized our content to match your age. Have fun!')
}else{
    document.write('<h2>' + 'Full access view for 18+' + '</h2>')
    alert('Hey ' + userName + '! You have full access to our content. Have fun!')
}

