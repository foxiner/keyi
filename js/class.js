function Tian(gan){
    var tg=["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"];
    var dz=["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"];
    var zsss={
       甲:["沐浴","冠带","临官","帝旺","衰","病","死","墓","绝","胎","养","长生"],
       乙:["病","衰","帝旺","临官","冠带","沐浴","长生","养","胎","绝","墓","死"],
       丙:["胎","养","长生","沐浴","冠带","临官","帝旺","衰","病","死","墓","绝"],
       丁:["绝","墓","死","病","衰","帝旺","临官","冠带","沐浴","长生","养","胎"],
       戊:["胎","养","长生","沐浴","冠带","临官","帝旺","衰","病","死","墓","绝"],
       己:["绝","墓","死","病","衰","帝旺","临官","冠带","沐浴","长生","养","胎"],
       庚:["死","墓","绝","胎","养","长生","沐浴","冠带","临官","帝旺","衰","病"],
       辛:["长生","养","胎","绝","墓","死","病","衰","帝旺","临官","冠带","沐浴"],
       壬:["帝旺","衰","病","死","墓","绝","胎","养","长生","沐浴","冠带","临官"],
       癸:["临官","冠带","沐浴","长生","养","胎","绝","墓","死","病","衰","帝旺"]   	
       }
    var nayi={
       甲子:["海中金"],
       乙丑:["海中金"],
       丙寅:["炉中火"],
       丁卯:["炉中火"],
       戊辰:["大林木"],
       己巳:["大林木"],
       庚午:["路旁土"],
       辛未:["路旁土"],
       壬申:["剑锋金"],
       癸酉:["剑锋金"],
       甲戌:["山头火"],
       乙亥:["山头火"],
       丙子:["涧下水"],
       丁丑:["涧下水"],
       戊寅:["城墙土"],
       己卯:["城墙土"],
       庚辰:["白腊金"],
       辛巳:["白腊金"],
       壬午:["杨柳木"],
       癸未:["杨柳木"],
       甲申:["泉中水"],
       乙酉:["泉中水"],
       丙戌:["屋上土"],
       丁亥:["屋上土"],
       戊子:["霹雳火"],
       己丑:["霹雳火"],
       庚寅:["松柏木"],
       辛卯:["松柏木"],
       壬辰:["长流水"],
       癸巳:["长流水"],
       甲午:["沙中金"],
       乙未:["沙中金"],
       丙申:["山下火"],
       丁酉:["山下火"],
       戊戌:["平地木"],
       己亥:["平地木"],
       庚子:["壁上土"],
       辛丑:["壁上土"],
       壬寅:["金箔金"],
       癸卯:["金箔金"],
       甲辰:["覆灯火"],
       乙巳:["覆灯火"],
       丙午:["天河水"],
       丁未:["天河水"],
       戊申:["大驿土"],
       己酉:["大驿土"],
       庚戌:["钗钏金"],
       辛亥:["钗钏金"],
       壬子:["桑柘木"],
       癸丑:["桑柘木"],
       甲寅:["大溪水"],
       乙卯:["大溪水"],
       丙辰:["沙中土"],
       丁巳:["沙中土"],
       戊午:["天上火"],
       己未:["天上火"],
       庚申:["石榴木"],
       辛酉:["石榴木"],
       壬戌:["大海水"],
       癸亥:["大海水"]
       }

    this.name=gan;
    this.srss=function(zhi){
        var zhiz=dz.indexOf(zhi);
        var sr=zsss[gan][zhiz];
        return sr;
    }
    this.nayin=function(zhi){
    	var zay=gan+zhi;
        var na=[];
        na=na.concat(nayi[zay]); 
        return na[0];
    }
    this.wuxing=function(gan){
    	var xux="";
        if(gan=="甲"||gan=="乙")
            wux="木";
        if(gan=="丙"||gan=="丁")
        	wux="火";
        if(gan=="戊"||gan=="己")
        	wux="土";
        if(gan=="庚"||gan=="辛")
        	wux="金";
        if(gan=="壬"||gan=="癸")
        	wux="水";
        return wux;
    }
}
function Dizhi(zhi){
    var cangdun={
        子:["癸",48],
        丑:["己",16,"癸",8,"辛",4],
        寅:["甲",32,"丙",16,"戊",8],
        卯:["乙",48],
        辰:["戊",16,"乙",8,"壬",8,],
        巳:["丙",32,"庚",8,"戊",8],
        午:["丁",48,"己",24],
        未:["己",32,"丁",8,"乙",8],
        申:["庚",32,"壬",16,"戊",8],
        酉:["辛",48],
        戌:["戊",32,"丁",8,"辛",8],
        亥:["壬",32,"甲",16],
    }
    this.name=zhi;
    this.canggan=function(){
        var z=cangdun[zhi];
        var zh=[];
        for (var i=0;i<z.length;i++){
            if(i%2==0)zh.push(z[i]);
        }
        return zh;
    }
}
function Liunian(y,n,m){

    var l=parseInt(y)+parseInt(n)+parseInt(m);
    this.li=function (){
        var g,z;
        var lgz=[];
        for(var i=0;i<10;i++){
            g=tg[l%10];
            // if(l-1984<=0) z=dz[11+(l-1984)%12];
            // if(l-1984>0)  z=dz[(l-1984)%12-1];
            if(l-1984<=0){
               z=dz[11+(l-1984)%12];
            }
            if(l-1984>0){
               if(((l-1984)%12-1)==-1){
               z=dz[11];   
               }else{
               z=dz[(l-1984)%12-1];
               }
            }
            gz=g+z;
            lgz.push(gz);
            l=l+1;
            }
        var str=lgz.join("<br />");
        return str;    
        }       
}
function $(id){
    return document.getElementById(id);
}