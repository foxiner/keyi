      var tg=["庚","辛","壬","癸","甲","乙","丙","丁","戊","己"];
      var dz=["丑","寅","卯","辰","巳","午","未","申","酉","戌","亥","子"];
      var jq=["小寒","立春","惊蛰","清明","立夏","芒种","小暑","立秋","白露","寒露","立冬","大雪"];
      var jq84=[442208451146,444755924716,447326679845,449936540593,452591457618,455285317308,458000946032,460714673166,463403390187,466051355952,468654332864,471220083199];
      var y_d84=441734340726;
      var tg0=["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"];
      var dz0=["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"];
      var dzcg={
         子:["癸"],
         丑:["癸","辛","己"],
         寅:["甲","丙","戊"],
         卯:["乙"],
         辰:["乙","壬","戊"],
         巳:["丙","庚","戊"],
         午:["丁","己"],
         未:["丁","乙","己"],
         申:["庚","壬","戊"],
         酉:["辛"],
         戌:["丁","辛","戊"],
         亥:["壬","甲"],
       };

       function cg(num){
        for(var i in dzcg){
          if(dzcg.hasOwnProperty(i)){
          if(i==num){
              return dzcg[i];
          }
          }
        }
       }
     function bazi(y,m,d,h,mm,sex){
             y=y-0;
             m=m-0;
             d=d-0;
             h=h-0;
             mm=mm-0;
             sex=sex;
             console.log(y,m,d,h,mm,sex);
     // 性别
             var qk;
             sex==0?qk="坤造":qk="乾造"; 
     // 年
             var ng=tg[y%10];
             var nz;//=dz[(y-1984)%12-1];
             if(y-1984<=0){
               nz=dz[11+(y-1984)%12];
             }
             if(y-1984>0){
               if(((y-1984)%12-1)==-1){
                 nz=dz[11];   
               }else{
                 nz=dz[(y-1984)%12-1];
               }
             }
     // 月
             if(ng=="甲"||ng=="己"){
                 var yg=tg[(5+m)%10];
             }else if(ng=="乙"||ng=="庚"){
                 var yg=tg[(7+m)%10];
             }else if(ng=="丙"||ng=="辛"){
               var yg=tg[(9+m)%10];
             }else if(ng=="丁"||ng=="壬"){
               var yg=tg[(1+m)%10];
             }else if(ng=="戊"||ng=="癸"){
                 var yg=tg[(3+m)%10];
             }
             var yz=dz[m];        
             var y_d=new Date();
                 y_d.setFullYear(y);
                 y_d.setMonth(m);
                 y_d.setDate(d);
                 y_d.setHours(h);
                 y_d.setMinutes(mm);
                 y_d.setSeconds(0);
             var y_t=y_d.getTime();
             if(y_t<((y-1984)*31556926009+jq84[m])){
                 if((tg.indexOf(yg)-1)==-1){
                   yg=tg[9];
                 }else{
                   yg=tg[tg.indexOf(yg)-1];
                 }
                 yz=dz[dz.indexOf(yz)-1];
             }
     //起运        
             var qiy;
             if(y_t<((y-1984)*31556926009+jq84[m])){
               var jnianm=(((y-1984)*31556926009+jq84[m])-y_t)/259200000;
               var jniann=(y_t-((y-1984)*31556926009+jq84[m-1]))/259200000;
             }else{
               var jnianm=(((y-1984)*31556926009+jq84[m+1])-y_t)/259200000;
               var jniann=(y_t-((y-1984)*31556926009+jq84[m]))/259200000;
             }
             if(sex==1){
               (y%2==0)?qiy=Math.round(jnianm):qiy=Math.round(jniann);
               } 
             if(sex==0){
               (y%2==1)?qiy=Math.round(jnianm):qiy=Math.round(jniann);
               }
     
     // 日
             var y_r=Math.floor((y_t-y_d84)/86400000)%60;
             var rg, rz;
             if(y_r>=0){
                 rg=tg[(4+y_r%10)%10];
                 rz=dz[(5+y_r%12)%12];
             }
             if(y_r<0){
               rg=tg[(4+(60+y_r)%10)%10];
               rz=dz[(5+(60+y_r)%12)%12];
             }
             
     // 时       
             var sz;
             if(h>=0) sz=dz[11];
             if(h>=1) sz=dz[0];
             if(h>=3) sz=dz[1];
             if(h>=5) sz=dz[2];
             if(h>=7) sz=dz[3];
             if(h>=9) sz=dz[4];
             if(h>=11) sz=dz[5];
             if(h>=13) sz=dz[6];
             if(h>=15) sz=dz[7];
             if(h>=17) sz=dz[8];
             if(h>=19) sz=dz[9];
             if(h>=21) sz=dz[10];
             if(h>=23) sz=dz[11];
             if(rg=="甲"||rg=="己"){
                 var sg=tg[(5+dz.indexOf(sz))%10];
             }else if(rg=="乙"||rg=="庚"){
                 var sg=tg[(7+dz.indexOf(sz))%10];
             }else if(rg=="丙"||rg=="辛"){
                 var sg=tg[(9+dz.indexOf(sz))%10];
             }else if(rg=="丁"||rg=="壬"){
                 var sg=tg[(1+dz.indexOf(sz))%10];
             }else if(rg=="戊"||rg=="癸"){
                 var sg=tg[(3+dz.indexOf(sz))%10];
             }
             if(h<1) sg=tg[(2+tg0.indexOf(sg))%10]; 
     // 旬空
             var xtg=tg0.indexOf(rg);
             var xdz=dz0.indexOf(rz);
             var xunk;
             if((xtg-xdz)==0) xunk=dz0[10]+dz0[11];
             if((xtg-xdz)==-10||(xtg-xdz)==2) xunk=dz0[8]+dz0[9];
             if((xtg-xdz)==-8||(xtg-xdz)==4) xunk=dz0[6]+dz0[7];
             if((xtg-xdz)==-6||(xtg-xdz)==6)  xunk=dz0[4]+dz0[5];
             if((xtg-xdz)==-4||(xtg-xdz)==8)  xunk=dz0[2]+dz0[3];
             if((xtg-xdz)==-2)  xunk=dz0[0]+dz0[1];
     //  大运
             var dyg=[];
             var tg1=tg0.concat(tg0);
             var dyz=[];
             var dz1=dz0.concat(dz0);
     //大运天干
             if((tg0.indexOf(ng))%2==0){
               if(qk=="乾造"){
                 for(var n=(tg1.indexOf(yg))+1; n<20; n++){
                         dyg.push(tg1[n]);
                         dyg.splice(10,20);
                 }
               }
             }
             if((tg0.indexOf(ng))%2==1){
               if(qk=="坤造"){
                 for(var n=(tg1.indexOf(yg))+1; n<20; n++){
                         dyg.push(tg1[n]);
                         dyg.splice(10,20);
                 }
               }
             }
              if((tg0.indexOf(ng))%2==1){
               if(qk=="乾造"){
                 tg1.reverse();
                 for(var n=(tg1.indexOf(yg))+1; n<20; n++){ 
                         dyg.push(tg1[n]);
                         dyg.splice(10,20);
                 }
               }
             }
             if((tg0.indexOf(ng))%2==0){
               if(qk=="坤造"){
                 tg1.reverse();
                 for(var n=(tg1.indexOf(yg))+1; n<20; n++){
                         dyg.push(tg1[n]);
                         dyg.splice(10,20);
                 }
               }
             }
     //大运地支
             if((tg0.indexOf(ng))%2==0){
               if(qk=="乾造"){
                 for(var n=(dz1.indexOf(yz))+1; n<24; n++){
                         dyz.push(dz1[n]);
                         dyz.splice(10,24);
                 }
               }
             }
             if((tg0.indexOf(ng))%2==1){
               if(qk=="坤造"){
                 for(var n=(dz1.indexOf(yz))+1; n<24; n++){
                         dyz.push(dz1[n]);
                         dyz.splice(10,24);
                 }
               }
             }
              if((tg0.indexOf(ng))%2==1){
               if(qk=="乾造"){
                 dz1.reverse();
                 for(var n=(dz1.indexOf(yz))+1; n<24; n++){
                         dyz.push(dz1[n]);
                         dyz.splice(10,24);
                 }
               }
             }
             if((tg0.indexOf(ng))%2==0){
               if(qk=="坤造"){
                 dz1.reverse();
                 for(var n=(dz1.indexOf(yz))+1; n<24; n++){
                         dyz.push(dz1[n]);
                         dyz.splice(10,24);
                 }
               }
             }
     // 十神 
             function shishen(cnz){
                var sn;
                var cn=tg0.indexOf(cnz);
                var shi=tg0.indexOf(rg);
                if((shi%2)==0){
                 if((cn-shi)==-5||(cn-shi)==5) sn="财";
                 if((cn-shi)==-4||(cn-shi)==6) sn="杀";
                 if((cn-shi)==-3||(cn-shi)==7) sn="官";
                 if((cn-shi)==-2||(cn-shi)==8) sn="枭";
                 if((cn-shi)==-1||(cn-shi)==9) sn="印";
                 if((cn-shi)==0) sn="比";
                 if((cn-shi)==1||(cn-shi)==-9) sn="劫";
                 if((cn-shi)==2||(cn-shi)==-8) sn="食";
                 if((cn-shi)==3||(cn-shi)==-7) sn="伤";
                 if((cn-shi)==4||(cn-shi)==-6) sn="才";
                 }
                if((shi%2)==1){
                 if((cn-shi)==-5||(cn-shi)==5) sn="官";
                 if((cn-shi)==-4||(cn-shi)==6) sn="杀";
                 if((cn-shi)==-3||(cn-shi)==7) sn="印";
                 if((cn-shi)==-2||(cn-shi)==8) sn="枭";
                 if((cn-shi)==-1||(cn-shi)==9) sn="劫";
                 if((cn-shi)==0) sn="比";
                 if((cn-shi)==1||(cn-shi)==-9) sn="伤";
                 if((cn-shi)==2||(cn-shi)==-8) sn="食";
                 if((cn-shi)==3||(cn-shi)==-7) sn="财";
                 if((cn-shi)==4||(cn-shi)==-6) sn="才";
                }
                return sn;
             }
             // var cgss=function(item,index,array){           
             //   item=shishen(item); 
             // }
             var cgss=function(arr){
               var ssitem=[];
               for(index in arr){
                  ssitem.push(shishen(arr[index]));
               }
               return ssitem;
             }
             var nshen=shishen(ng);
             var yshen=shishen(yg);
             var sshen=shishen(sg);
             var nzcgss=cgss(cg(nz));
     
             var nian=new Tian(ng);
             var yue=new Tian(yg);
             var rizhu=new Tian(rg);
             var shichen=new Tian(sg);
     

             console.log();

              var mingpan={
                Vqk:qk,
                Vxk:xunk,
                Vtgss:"<li>"+shishen(ng)+"</li><li>"+shishen(yg)+"</li><li>主</li><li>"+shishen(sg)+"</li>",
                Vtg:{
                  ng:ng,
                  yg:yg,
                  rg:rg,
                  sg:sg
                },
                Vdz:{
                  nz:nz,
                  yz:yz,
                  rz:rz,
                  sz:sz
                },
                Vbz:ng+nz+yg+yz+rg+rz+sg+sz,
                Vdzcg:{
                  nz:cg(nz).join(""),
                  yz:cg(yz).join(""),
                  rz:cg(rz).join(""),
                  sz:cg(sz).join("")
                },
                Vdzcgss:{
                  nz:cgss(cg(nz)).join(""),
                  yz:cgss(cg(yz)).join(""),
                  rz:cgss(cg(rz)).join(""),
                  sz:cgss(cg(sz)).join("")
                },
                Vsrss:{
                  nz:rizhu.srss(nz),
                  yz:rizhu.srss(yz),
                  rz:rizhu.srss(rz),
                  sz:rizhu.srss(sz)
                },
                Vnayin:{
                  n:nian.nayin(nz),
                  y:yue.nayin(yz),
                  r:rizhu.nayin(rz),
                  s:shichen.nayin(sz)
                },
                Vdayun:[dyg[0]+dyz[0],dyg[1]+dyz[1],dyg[2]+dyz[2],dyg[3]+dyz[3],dyg[4]+dyz[4],dyg[5]+dyz[5],dyg[6]+dyz[6],dyg[7]+dyz[7]],
                Vqiy:[qiy,qiy+10,qiy+20,qiy+30,qiy+40,qiy+50,qiy+60,qiy+70],
                Vqiyn:[qiy+y,qiy+10+y,qiy+20+y,qiy+30+y,qiy+40+y,qiy+50+y,qiy+60+y,qiy+70+y],
                Vln:{
                  n1:new Liunian(y,qiy,0).li(),
                  n2:new Liunian(y,qiy,10).li(),
                  n3:new Liunian(y,qiy,20).li(),
                  n4:new Liunian(y,qiy,30).li(),
                  n5:new Liunian(y,qiy,40).li(),
                  n6:new Liunian(y,qiy,50).li(),
                  n7:new Liunian(y,qiy,60).li(),
                  n8:new Liunian(y,qiy,70).li(),
                  n9:new Liunian(y,qiy,80).li()
                }
              }
              return mingpan;
     
           }