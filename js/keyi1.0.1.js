(function(window){
		var tg=["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"],
				dz=["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"],
				jq=["小寒","立春","惊蛰","清明","立夏","芒种","小暑","立秋","白露","寒露","立冬","大雪"],
				jq84=[442208451146,444755924716,447326679845,449936540593,452591457618,455285317308,458000946032,460714673166,463403390187,466051355952,468654332864,471220083199],
				y_d84=441734400000, //441734340726  //1984.1.1 00:00:00
				cha=3021524716,
				dzcg={
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
				},
				cangdun={
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
		    },
				zsss={
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
				},
				nayi={
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
				};
		function Tian(gan){
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
	            g=tg[(l+6)%10];
	            if(l-1984<0){z=dz[11+(l-1984+1)%12];}
	            else{z=dz[(l-1984)%12];}
	            gz=g+z;
	            lgz.push(gz);
	            l=l+1;
	          }
		        var str=lgz.join("<br />");
		        return str;    
		        }       
		}
		//定义八字对象
		var bazi = {

			// 接口初始化
			init:function(option){
				var _option = (function(){
						var _date = new Date(),
							times ={
								n:_date.getFullYear(),
								y:_date.getMonth()+1,
								r:_date.getDate(),
								s:_date.getHours(),
								f:_date.getMinutes(),
								x:1
							};
						return times;
				})(),
				option = option || _option;
				return bazi.methods(option);
			},

			// 八字排盘逻辑
			methods:function(obj){

				var y_d = new Date(obj.n,obj.y-1,obj.r,obj.s,obj.f);
				var y_t = y_d.getTime();

				// 年干、年支
				var _ng = tg[(obj.n+6)%10];
				var _nz =(function(){
						if(obj.n<=1984){return dz[(1984-obj.n)%12];}
						else{return dz[(obj.n-1984)%12];}
				})();
				// 调整年分割线为立春
				var n;
				if(obj.n>=1984){n = (y_t-441734400000)%31556926009;}  // 一年31556926009
				else{n=31556926009+(y_t-441734400000)%31556926009;}
				if(n<cha){
					if(_ng == "甲"){_ng="癸";}else{_ng=tg[tg.indexOf(_ng)-1];}
					if(_nz == "子"){_nz="亥";}else{_nz=dz[dz.indexOf(_nz)-1];}	
				}

				// 月干、月支
				var _yg = (function(){
					var n = obj.n%10;
					if(n==4||n==9){return tg[(obj.y)%10];}
					else if(n==5||n==0){return tg[(2+obj.y)%10];}
					else if(n==6||n==1){return tg[(4+obj.y)%10];}
					else if(n==7||n==2){return tg[(6+obj.y)%10];}
					else if(n==8||n==3){return tg[(8+obj.y)%10];}
				})();            
				var _yz = (function(){
					if(obj.y==12){return dz[0];}
					return dz[obj.y];
				})();
				// 按节气调整月份干支
				if(y_t<((obj.n-1984)*31556926009+jq84[obj.y-1])){  //生日不够当月节气
				   if((tg.indexOf(_yg))==0){_yg=tg[9];}  //天干如果是甲，回退到癸
				   else{_yg=tg[tg.indexOf(_yg)-1];}  //不是甲回退一位
				   if((dz.indexOf(_yz))==0){_yz=dz[11];} //地支如果是子，回退到亥
				   else{_yz=dz[dz.indexOf(_yz)-1];}  //不是子回退一位
				}

        // 日干、日支
        var _rz = (function(){
					var y_r=Math.floor((y_t-y_d84)/86400000)%60;
					if(y_r>=0){return {rg:tg[(y_r%10)%10],rz:dz[(6+y_r%12)%12]}}
					else{return {rg:tg[((60+y_r)%10)%10],rz:dz[(6+(60+y_r)%12)%12]}}
				})();
                    
	      // 时干、时支  
	      var _sz = (function(){
					if(obj.s<1) return dz[0];
					if(obj.s<3) return dz[1];
					if(obj.s<5) return dz[2];
					if(obj.s<7) return dz[3];
					if(obj.s<9) return dz[4];
					if(obj.s<11) return dz[5];
					if(obj.s<13) return dz[6];
					if(obj.s<15) return dz[7];
					if(obj.s<17) return dz[8];
					if(obj.s<19) return dz[9];
					if(obj.s<21) return dz[10];
					if(obj.s<23) return dz[11];
					if(obj.s>=23) return dz[0];
	      })();
	      var _sg = (function(){
			    var n = tg.indexOf(_rz.rg);
			    var m = Math.floor((obj.s+1)/2);
					if(n==4||n==9){return tg[(8+m)%10];}
					else if(n==5||n==0){return tg[(m)%10];}
					else if(n==6||n==1){return tg[(2+m)%10];}
					else if(n==7||n==2){return tg[(4+m)%10];}
					else if(n==8||n==3){return tg[(6+m)%10];}
	      })();
             
	      // 旬空
	      var _xk = (function(){
	      	var xtg=tg.indexOf(_rz.rg);
					var xdz=dz.indexOf(_rz.rz);
					var xunk;
					if((xtg-xdz)==0) xunk=dz[10]+dz[11];
					if((xtg-xdz)==-10||(xtg-xdz)==2) xunk=dz[8]+dz[9];
					if((xtg-xdz)==-8||(xtg-xdz)==4) xunk=dz[6]+dz[7];
					if((xtg-xdz)==-6||(xtg-xdz)==6)  xunk=dz[4]+dz[5];
					if((xtg-xdz)==-4||(xtg-xdz)==8)  xunk=dz[2]+dz[3];
					if((xtg-xdz)==-2)  xunk=dz[0]+dz[1];
					return xunk;
	      })();
				//  性别
				var _xb = (function(){return obj.x==1?"乾":"坤";})();
				//  起运
				var _qy = (function(){
					var qiy,jnianm,jniann,
						n=tg.indexOf(_ng),  //年干的下标，同性别一起用来决定顺逆
						m=(obj.n-1984)*31556926009,  //与84年差年毫秒
						o=m+jq84[obj.y-1]; //当月节气点时间
            if(y_t<o){ //排盘时间小于当月节时间
              jnianm=(o-y_t)/259200000;  //后节减排盘时间
              if(obj.y==1){jniann=(y_t-(m+439662820000))/259200000;} // 1月份减去上年大雪节气
              else{jniann=(y_t-(m+jq84[obj.y-2]))/259200000;}//排盘时间减前节
            }else{
            	if(obj.y==12){
            		jnianm=((m+jq84[0])+31556926009-y_t)/259200000;
            	}else{jnianm=((m+jq84[obj.y])-y_t)/259200000;}
              jniann=(y_t-o)/259200000;
            }
            if(obj.x==1){(n%2==0)?qiy=Math.round(jnianm):qiy=Math.round(jniann);} 
            if(obj.x==0){(n%2==1)?qiy=Math.round(jnianm):qiy=Math.round(jniann);}
            return qiy;
				})();

				//  大运
				var _dy = (function(){
					var dyg=[],dyz=[],tg1=tg.concat(tg),dz1=dz.concat(dz),m=(tg.indexOf(_ng))%2;
					var pdy = function(a,b,c,d){
						for(var n=(a.indexOf(b))+1; n<d; n++){
							c.push(a[n]);
							c.splice(10,d);
            }
					}
					if((m==0&&obj.x==1)||(m==1&&obj.x==0)){
					   pdy(tg1,_yg,dyg,20);
					   pdy(dz1,_yz,dyz,24);
					}
					if((m==1&&obj.x==1)||(m==0&&obj.x==0)){
					   tg1.reverse();
					   dz1.reverse();
					   pdy(tg1,_yg,dyg,20);
					   pdy(dz1,_yz,dyz,24);
					}
					return {g:dyg,z:dyz};
				})();
				// 十神
				var _ss = (function(){
					function cg(num){
		        for(var i in dzcg){
		          if(dzcg.hasOwnProperty(i)){
			          if(i==num){
			              return dzcg[i];
			          }
		          }
		        }
		      }
		      var cgss=function(arr){
					  var ssitem=[];
					  for(index in arr){
					    ssitem.push(shishen(arr[index]));
					  }
					  return ssitem;
					}
					function shishen(cnz){
					  var sn;
					  var cn=tg.indexOf(cnz);
					  var shi=tg.indexOf(_rz.rg);
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
					return {
						ngs:shishen(_ng),
						ygs:shishen(_yg),
						sgs:shishen(_sg),
						nzs:cgss(cg(_nz)).join(''),
						yzs:cgss(cg(_yz)).join(''),
						rzs:cgss(cg(_rz.rz)).join(''),
						szs:cgss(cg(_sz)).join('')
					}
				})();

				var _sw = (function(){
					var z = new Tian(_rz.rg);
					return {
						n:z.srss(_nz),
						y:z.srss(_yz),
						r:z.srss(_rz.rz),
						s:z.srss(_sz)
					}
				})();
				var bz = {
					obj:obj,
					Vtgss:"<li>"+_ss.ngs+"</li><li>"+_ss.ygs+"</li><li>主</li><li>"+_ss.sgs+"</li>",
					ng:_ng,     //年干
					yg:_yg,     //月干
					rg:_rz.rg,  //日干
					sg:_sg,     //时干
					nz:_nz,     //年支
					yz:_yz,     //月支
					rz:_rz.rz,  //日支
					sz:_sz,     //时支
					cg:{        //地支藏干
						n:dzcg[_nz].join(""),
						y:dzcg[_yz].join(""),
						r:dzcg[_rz.rz].join(""),
						s:dzcg[_sz].join("")
					},
					sw:_sw,     //衰旺
					xk:_xk,     //旬空
					xb:_xb,     //性别
					qy:_qy,     //起运
					dy:_dy,     //大运 对象{[大运天干...],[大运地支...]}
					ss:_ss,     //十神 对象
					ny:{        //纳音
						n:new Tian(_ng).nayin(_nz),        //年纳音
            y:new Tian(_yg).nayin(_yz),        //月纳音
            r:new Tian(_rz.rg).nayin(_rz.rz),  //日纳音
            s:new Tian(_sg).nayin(_sz)         //时纳音
          },
					dyz:[_dy.g[0]+_dy.z[0],_dy.g[1]+_dy.z[1],_dy.g[2]+_dy.z[2],_dy.g[3]+_dy.z[3],_dy.g[4]+_dy.z[4],_dy.g[5]+_dy.z[5],_dy.g[6]+_dy.z[6],_dy.g[7]+_dy.z[7]],  //大运干支
          qys:[_qy,_qy+10,_qy+20,_qy+30,_qy+40,_qy+50,_qy+60,_qy+70],  //交大运岁数
          qyn:[_qy+obj.n,_qy+10+obj.n,_qy+20+obj.n,_qy+30+obj.n,_qy+40+obj.n,_qy+50+obj.n,_qy+60+obj.n,_qy+70+obj.n],  //交大运年份
					ln:{        //流年
					  n1:new Liunian(obj.n,_qy,0).li(),
					  n2:new Liunian(obj.n,_qy,10).li(),
					  n3:new Liunian(obj.n,_qy,20).li(),
					  n4:new Liunian(obj.n,_qy,30).li(),
					  n5:new Liunian(obj.n,_qy,40).li(),
					  n6:new Liunian(obj.n,_qy,50).li(),
					  n7:new Liunian(obj.n,_qy,60).li(),
					  n8:new Liunian(obj.n,_qy,70).li(),
					  n9:new Liunian(obj.n,_qy,80).li()
					}
				};			
				return bz;
			}
		};

		window.bazi = bazi;
})(this);