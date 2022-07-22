function validate(){
    var fname=document.forms["MainForm"]["firstname"].value;
    var vname=document.forms["MainForm"]["lastname"].value;
    var vcity=document.forms["MainForm"]["venuecity"].value;
    var scity=document.forms["MainForm"]["statecity"].value;
    var mail=document.forms["MainForm"]["email"].value;
    var subj=document.forms["MainForm"]["subject"].value;
    var msg=document.forms["MainForm"]["message"].value;
    var a='border';
    var s1='2.5px solid rgb(255,0,0)'

    var n=0    
    if(fname.length==0){ 
        document.getElementById('fName').style.setProperty(a, s1);
        n+=1;
    }
    if(vname.length==0){ 
        document.getElementById('vName').style.setProperty(a, s1);
        n+=1;
    }
    if(vcity.length==0){ 
        document.getElementById('vCity').style.setProperty(a, s1);
        n+=1;
    }
    if(scity.length==0){ 
        document.getElementById('sCity').style.setProperty(a, s1);
        n+=1;
    }
    if(mail.length==0){ 
        document.getElementById('email').style.setProperty(a, s1);
        n+=1;
    }
    if(subj.length==0){ 
        document.getElementById('sub').style.setProperty(a, s1);
        n+=1;
    }
    if(msg.length==0){ 
        document.getElementById('msg').style.setProperty(a, s1);
        n+=1;
    }
    if(n>0){
        return false;
    } else {
        return true;
    }
}