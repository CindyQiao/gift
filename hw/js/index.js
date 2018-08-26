var oLis=document.getElementById("nav").getElementsByTagName("li");
var oAs=document.getElementById("nav").getElementsByTagName("a");
var oMains=document.getElementsByTagName("main");



for(var i=0; i<oLis.length; i++){
    (function(i){
        oLis[i].onmouseover = function(){
            
             for(var j=0; j<oLis.length;j++){
           
            oLis[j].className="";
            oAs[j].className="";
            oMains[j].className="hide"
            }
            oLis[i].className="nav_style1";
            oAs[i].className="nav_style2";
            oMains[i].className="show"
        }
        
      })(i);
}

 var indexs=[0,0,0,0,0];
 function load(){
    
     for(var i=0;i<indexs.length;i++){

    //    var btn_r= document.getElementById("arrow-right"+(i+1));
    //    var btn_l= document.getElementById("arrow-left"+(i+1));
       (function(i){
        var btn_r= document.getElementById("arrow-right"+(i+1));
        var btn_l= document.getElementById("arrow-left"+(i+1));
        var oLb_Lis= document.getElementById("imgs"+(i+1)).getElementsByTagName("li");
       btn_r.onclick=function(){

        for(var n=0;n<oLb_Lis.length;n++)
        {
          oLb_Lis[n].className="hide";
        }
        if(++indexs[i]==oLb_Lis.length)indexs[i]=0;
        oLb_Lis[indexs[i]].className="show";
        };
        btn_l.onclick=function(){

            for(var n=0;n<oLb_Lis.length;n++)
            {
              oLb_Lis[n].className="hide";
            }
           if(--indexs[i]==-1)indexs[i]=oLb_Lis.length-1;
           oLb_Lis[indexs[i]].className="show";
        };
    })(i);
     }
 }
 load();

