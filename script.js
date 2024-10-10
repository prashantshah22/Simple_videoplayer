document.getElementById("file_input").addEventListener('change',(event)=>{
    var bg=document.getElementById("contrls");
    bg.style.backgroundImage="url(txt.jpg)";
    bg.style.backgroundSize = "cover";
    var file_input=event.target;
    var reader=new FileReader;
    reader.onload=()=>{
        var file_name=reader.result;
        document.getElementById("vdo").src=file_name;
        bg.style.display="none";
    };
    reader.readAsDataURL(file_input.files[0]);
})