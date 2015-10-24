var fn = {
    init:function(){
       // alert();
        var x = false;
        if (!x)
            window.location.href = '#registro';
        $('#regSend').click(fn.getReg);
    
    },
    
    getReg: function(){
       // var nom=document.getElementById('regNom').value;

        var nom = $('#regNom').val();
        var tel = $('#regTel').val();
        var mail = $('#regMail').val();
        
        if (nom!= '' && tel!= '' && mail!= '')
        alert(nom + '-' + tel + '-'+ mail);
        else
            alert("Todos los campos so requeridos");
    
    
    
    }
    
    
};
/*window.addEventListener("load",fn.init,false);*/
/*jQuery(dcoument).ready(fn.init);*/
//$(dcoument).ready(fn.init);
$(fn.init);