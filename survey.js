



    var form=document.querySelector('#form')
    form.addEventListener('submit', function(event)
    {
        event.preventDefault()
        var username=document.querySelector('#fname').value;
        console.log(username);
        var phone=document.querySelector('#phone').value;
        console.log(phone);
        var email=document.querySelector('#email').value;
        console.log(email);
        var age=document.querySelector('#age').value;
        console.log(age);
        var country=document.querySelector('#country').value;
        console.log(country);
        var role=document.querySelector('#role').value;
        console.log(role);
        
        //var recommend=document.getElementsByName("recommend").value;
        var recommendOne=document.querySelector('#recommend-1');
        var recommendTwo=document.querySelector('#recommend-2');
        var recommendThree=document.querySelector('#recommend-3');
        if(recommendOne.checked==true)
        {
            console.log(recommendOne.value);
        }

       else if(recommendTwo.checked==true)
        {
            console.log(recommendTwo.value);
        }
        else  {
            console.log(recommendThree.value);
        }

        
        //checkbox
      
       
        var skillLength=document.myform.box.length;
        var skillCheckedValue="";
        for (i=0; i<skillLength; i++)
        {
            var skillChecked=document.myform.box[i].checked;
            if(skillChecked)
            {
                skillCheckedValue+=document.myform.box[i].value + ",";
            }
        }
        console.log( skillCheckedValue);
     //value from text area
     var textArea=document.querySelector("#content");
     var value=textArea.value;
     console.log(value);
       
       
        
        

    })

