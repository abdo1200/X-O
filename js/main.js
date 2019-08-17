function display()
{
	var n1 =document.getElementById("n1").value;
	var n2 =document.getElementById("n2").value;
	var n3 =document.getElementById("n3").value;
	var n4 =document.getElementById("n4").value;
	var n5 =document.getElementById("n5").value;
	var n6 =document.getElementById("n6").value;
	var n7 =document.getElementById("n7").value;
	var n8 =document.getElementById("n8").value;
	var n9 =document.getElementById("n9").value;
	var o="O";
	var x="X"

	//player 1 conditions
	if(n1==o && n2==o && n3==o)
	{
        document.getElementById("win-playerone").style.display="block"
		document.getElementById("back-btn").style.display = "block";
		document.getElementById("playOne").style.display="none";
        document.getElementById("playTwo").style.display="none";
    
    document.getElementById("xo-Game").style.display="none";    num=0;
	}
	else if(n4==o && n5==o && n6==o)
	{
		document.getElementById("win-playerone").style.display="block"
		document.getElementById("back-btn").style.display = "block";
		document.getElementById("playOne").style.display="none";
        document.getElementById("playTwo").style.display="none";
        document.getElementById("xo-Game").style.display="none";
		num=0;
	}
	else if(n7==o && n8==o && n9==o)
	{
		document.getElementById("win-playerone").style.display="block"
		document.getElementById("back-btn").style.display = "block";
		document.getElementById("playOne").style.display="none";
        document.getElementById("playTwo").style.display="none";
        document.getElementById("xo-Game").style.display="none";
		num=0;
	}
	else if(n1==o && n4==o && n7==o)
	{
		document.getElementById("win-playerone").style.display="block"
		document.getElementById("back-btn").style.display = "block";
		document.getElementById("playOne").style.display="none";
        document.getElementById("playTwo").style.display="none";
        document.getElementById("xo-Game").style.display="none";
		num=0;
	}
	else if(n2==o && n5==o && n8==o)
	{
		document.getElementById("win-playerone").style.display="block"
		document.getElementById("back-btn").style.display = "block";
		document.getElementById("playOne").style.display="none";
        document.getElementById("playTwo").style.display="none";
        document.getElementById("xo-Game").style.display="none";
		num=0;
	}
	else if(n3==o && n6==o && n9==o)
	{
		document.getElementById("win-playerone").style.display="block"
		document.getElementById("back-btn").style.display = "block";
		document.getElementById("playOne").style.display="none";
        document.getElementById("playTwo").style.display="none";
        document.getElementById("xo-Game").style.display="none";
		num=0;
	}
	else if(n1==o && n5==o && n9==o)
	{
		document.getElementById("win-playerone").style.display="block"
		document.getElementById("back-btn").style.display = "block";
		document.getElementById("playOne").style.display="none";
        document.getElementById("playTwo").style.display="none";
        document.getElementById("xo-Game").style.display="none";
		num=0;
	}
	else if(n3==o && n5==o && n7==o)
	{
		document.getElementById("win-playerone").style.display="block"
		document.getElementById("back-btn").style.display = "block";
		document.getElementById("playOne").style.display="none";
        document.getElementById("playTwo").style.display="none";
        document.getElementById("xo-Game").style.display="none";
		num=0;
	}

	// player 2 conditions
	if(n1==x && n2==x && n3==x)
	{
		document.getElementById("win-playertwo").style.display="block"
		document.getElementById("back-btn").style.display = "block";
		document.getElementById("playOne").style.display="none";
        document.getElementById("playTwo").style.display="none";
        document.getElementById("xo-Game").style.display="none";
		num=0;
	}
	else if(n4==x && n5==x && n6==x)
	{
		document.getElementById("win-playertwo").style.display="block"
		document.getElementById("back-btn").style.display = "block";
		document.getElementById("playOne").style.display="none";
        document.getElementById("playTwo").style.display="none";
        document.getElementById("xo-Game").style.display="none";
		num=0;
	}
	else if(n7==x && n8==x && n9==x)
	{
		document.getElementById("win-playertwo").style.display="block"
		document.getElementById("back-btn").style.display = "block";
		document.getElementById("playOne").style.display="none";
        document.getElementById("playTwo").style.display="none";
        document.getElementById("xo-Game").style.display="none";
		num=0;
	}
	else if(n1==x && n4==x && n7==x)
	{
		document.getElementById("win-playertwo").style.display="block"
		document.getElementById("back-btn").style.display = "block";
		document.getElementById("playOne").style.display="none";
        document.getElementById("playTwo").style.display="none";
        document.getElementById("xo-Game").style.display="none";
		num=0;
	}
	else if(n2==x && n5==x && n8==x)
	{
		document.getElementById("win-playertwo").style.display="block"
		document.getElementById("back-btn").style.display = "block";
		document.getElementById("playOne").style.display="none";
        document.getElementById("playTwo").style.display="none";
        document.getElementById("xo-Game").style.display="none";
		num=0;
	}
	else if(n3==x && n6==x && n9==x)
	{
		document.getElementById("win-playertwo").style.display="block"
		document.getElementById("back-btn").style.display = "block";
		document.getElementById("playOne").style.display="none";
        document.getElementById("playTwo").style.display="none";
        document.getElementById("xo-Game").style.display="none";
		num=0;
	}
	else if(n1==x && n5==x && n9==x)
	{
		document.getElementById("win-playertwo").style.display="block"
		document.getElementById("back-btn").style.display = "block";
		document.getElementById("playOne").style.display="none";
        document.getElementById("playTwo").style.display="none";
        document.getElementById("xo-Game").style.display="none";
		num=0;
	}
	else if(n3==x && n5==x && n7==x)
	{
		document.getElementById("win-playertwo").style.display="block"
		document.getElementById("back-btn").style.display = "block";
		document.getElementById("playOne").style.display="none";
        document.getElementById("playTwo").style.display="none";
        document.getElementById("xo-Game").style.display="none";
		num=0;
	}


	
	var t = setTimeout(display, 100);		
}
display();

function back(){
	var n1 =document.getElementById("n1").value="";
	var n2 =document.getElementById("n2").value="";
	var n3 =document.getElementById("n3").value="";
	var n4 =document.getElementById("n4").value="";
	var n5 =document.getElementById("n5").value="";
	var n6 =document.getElementById("n6").value="";
	var n7 =document.getElementById("n7").value="";
	var n8 =document.getElementById("n8").value="";
	var n9 =document.getElementById("n9").value="";
    document.getElementById("win-playerone").style.display="none";
    document.getElementById("win-playertwo").style.display="none";
    document.getElementById("back-btn").style.display = "none";
    document.getElementById("playOne").style.display = "block";
	document.getElementById("xo-Game").style.display="block";
	document.getElementById("draw").style.display = "none";
	num=0;
}

let num=0;
function clickOne(elID){
	v=document.getElementById(elID).value;
	
	if(num % 2 == 0 && num<8 &&v==""){
		document.getElementById(elID).value="O";
		document.getElementById("playOne").style.display = "none";
		document.getElementById("playTwo").style.display = "block";
		num++;
	}
	else if(num % 2 == 1 && num<9 && v==""){
		document.getElementById(elID).value="X";
		document.getElementById("playOne").style.display = "block";
		document.getElementById("playTwo").style.display = "none";
		num++;
	}else if(num % 2 == 0 && num>7 &&num<9 &&v=="" ){
		document.getElementById(elID).value="O";
		document.getElementById("playOne").style.display = "none";
		document.getElementById("playTwo").style.display = "none";
		document.getElementById("back-btn").style.display = "block";
		
		num++;
	}
}
function clear(){
	p1=document.getElementById("win-playerone").style.display;
	p2=document.getElementById("win-playertwo").style.display;
	if(p1=="none" && p2=="none"){
		document.getElementById("draw").style.display = "block";
	}setTimeout(clear,100);
}
