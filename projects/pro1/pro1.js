function rolldice(){
    window.alert("hihi")
    let val = document.getElementById("num").value;
    let valuedisplay = document.getElementById("diceval");
    let imagedisplay = document.getElementById("imgd");
    let value=[];
    let image=[];
    for(i=0;i<val;i++)
    {
        const dice_no = Math.floor((Math.random()*6)+1);
        let img_name = "<img src=\"images/dice"+dice_no+".png\" style=\"padding:20px\">";
        value.push(dice_no);
        image.push(img_name);
    
    }
    value.join(",")
    valuedisplay.innerText ="dice : "+value.join(",");
    console.log(image);
    imagedisplay.innerHTML = image.join("");

    
}