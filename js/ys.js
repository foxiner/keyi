// <!-- 
// Gan()  创建天干对象 参数字符串一个天干
// 属性方法：wuxing  name 
// Zhi()  创建地支对象 参数字符串一个地支
// 属性方法：wuxing  name  canggan
// -->
function Gan(val){
	this.name = val;
	this.wuxing = (function(){
				var m="";
				switch(val){
					case "甲":
					case "乙":
					m = "木";
					break;
					case "丙":
					case "丁":
					m = "火";
					break;
					case "戊":
					case "己":
					m = "土";
					break;
					case "庚":
					case "辛":
					m = "金";
					break;
					case "壬":
					case "癸":
					m = "水";
					break;
				}
				return m;
			})();
	this.shiyi = function(){
		var n ="";
		switch(val){
			case "甲":
			n = "甲木参天，脱胎要火，春不容金，秋不容土，火炽乘龙，水宕骑虎，地润天和，植立千古。";
			break;
			case "乙":
			n = "乙木虽柔，刲羊解牛，怀丁抱丙，跨凤乘猴，虚湿之地，骑马亦忧，藤罗系甲，可春可秋。";
			break;
			case "丙":
			n = "丙火猛烈，欺霜侮雪。能煅庚金，逢辛反怯。土众成慈。水猖显节，虎马犬乡，甲来成灭。";
			break;
			case "丁":
			n = "丁火柔中，内性昭融，抱乙而孝，合壬而忠，旺而不烈，衰而不穷，如有嫡母，可秋可冬。";
			break;
			case "戊":
			n = "戊土固重，既中且正，静翕动辟，万物司命，水润物生，火燥物病，若在艮坤，怕冲宜静。";
			break;
			case "己":
			n = "己土卑湿，中正蓄藏，不愁木盛，不畏水狂，火少火晦，金多金光，若要物旺，宜助宜帮。";
			break;
			case "庚":
			n = "庚金带煞，刚健为最，得水而清，得火而锐，土润则生，土干则脆，能赢甲兄，输于乙妹。";
			break;
			case "辛":
			n = "辛金软弱，温润而清，畏土之叠，乐水之盈，能扶社稷，能救生灵，热则喜母，寒则喜丁。";
			break;
			case "壬":
			n = "壬水通河，能泄金气，刚中之德，周流不滞，通根透癸，冲天奔地，化则有情，从则相济。";
			break;
			case "癸":
			n = "癸水至弱，达于天津，得龙而运，功化斯神，不愁火土，不论庚辛，合戊见火，化象斯真。";
			break;
		}
		return n;
	}
}
function Zhi(val){
	this.name = val;
	this.wuxing = (function(){
				var m = "";
				switch(val){
					case "亥":
					case "子":
					m = "水";
					break;
					case "寅":
					case "卯":
					m = "木";
					break;
					case "巳":
					case "午":
					m = "火";
					break;
					case "申":
					case "酉":
					m = "金";
					break;
					case "丑":
					case "辰":
					case "未":
					case "戌":
					m = "土";
					break;
				}
				return m;
			})();
	// 地支藏干
	this.canggan = (function(){
				var c = [],
					benqi,
					zhongqi,
					yuqi;
				switch (val){
					case "亥":
					c = (function(){
						benqi = new Gan("壬");
						benqi.shu = 32;
						zhongqi = new Gan("甲");
						zhongqi.shu = 16;
						return [benqi,zhongqi];
						})();
					break;
					case "子":
					c = (function(){
						benqi = new Gan("癸");
						benqi.shu = 48;
						return [benqi];
						})();
					break;
					case "丑":
					c = (function(){
						benqi = new Gan("己");
						benqi.shu = 16;
						zhongqi = new Gan("辛");
						zhongqi.shu = 4;
						yuqi = new Gan("癸");
						yuqi.shu = 4;
						return [benqi,zhongqi,yuqi];
						})();
					break;
					case "寅":
					c = (function(){
						benqi = new Gan("甲");
						benqi.shu = 32;
						zhongqi = new Gan("丙");
						zhongqi.shu = 16;
						yuqi = new Gan("戊");
						yuqi.shu = 8;
						return [benqi,zhongqi,yuqi];
						})();
					break;
					case "卯":
					c = (function(){
						benqi = new Gan("乙");
						benqi.shu = 48;
						return [benqi];
						})();
					break;
					case "辰":
					c = (function(){
						benqi = new Gan("戊");
						benqi.shu = 32;
						zhongqi = new Gan("癸");
						zhongqi.shu = 8;
						yuqi = new Gan("乙");
						yuqi.shu = 8;
						return [benqi,zhongqi,yuqi];
						})();
					break;
					case "巳":
					c = (function(){
						benqi = new Gan("丙");
						benqi.shu = 32;
						zhongqi = new Gan("庚");
						zhongqi.shu = 8;
						yuqi = new Gan("戊");
						yuqi.shu = 8;
						return [benqi,zhongqi,yuqi];
						})();
					break;
					case "午":
					c = (function(){
						benqi = new Gan("丁");
						benqi.shu = 48;
						zhongqi = new Gan("己");
						zhongqi.shu = 16;
						return [benqi,zhongqi];
						})();
					break;
					case "未":
					c = (function(){
						benqi = new Gan("己");
						benqi.shu = 32;
						zhongqi = new Gan("乙");
						zhongqi.shu = 8;
						yuqi = new Gan("丁");
						yuqi.shu = 8;
						return [benqi,zhongqi,yuqi];
						})();
					break;
					case "申":
					c = (function(){
						benqi = new Gan("庚");
						benqi.shu = 32;
						zhongqi = new Gan("壬");
						zhongqi.shu = 16;
						yuqi = new Gan("戊");
						yuqi.shu = 8;
						return [benqi,zhongqi,yuqi];
						})();
					break;
					case "酉":
					c = (function(){
						benqi = new Gan("辛");
						benqi.shu = 48;
						return [benqi];
						})();
					break;
					case "戌":
					c = (function(){
						benqi = new Gan("戊");
						benqi.shu = 32;
						zhongqi = new Gan("丁");
						zhongqi.shu = 8;
						yuqi = new Gan("辛");
						yuqi.shu = 8;
						return [benqi,zhongqi,yuqi];
						})();
				}
				return c;
			})();
}
function Bazi(a,b,c,d,e,f,g,h){
	this.ng = new Gan(a);
	this.nz = new Zhi(b);
	this.yg = new Gan(c);
	this.yz = new Zhi(d);
	this.rg = new Gan(e);
	this.rz = new Zhi(f);
	this.sg = new Gan(g);
	this.sz = new Zhi(h);		
}
Bazi.prototype.qishu=function(){
	var jin=0,mu=0,shui=0,huo=0,tu=0;
		// 计算月支中五行的力量
	for(var n in this.yz.canggan){ 
		switch(this.yz.canggan[n].wuxing){
			case "金":
			jin+=this.yz.canggan[n].shu;
			break;
			case "木":
			mu+=this.yz.canggan[n].shu;
			break;
			case "水":
			shui+=this.yz.canggan[n].shu;
			break;
			case "火":
			huo+=this.yz.canggan[n].shu;
			break;
			case "土":
			tu+=this.yz.canggan[n].shu;
			break;
		}
	}
	// 计算日支中五行的力量
	for(var n in this.rz.canggan){ 
		switch(this.rz.canggan[n].wuxing){
			case "金":
			jin+=(this.rz.canggan[n].shu)/2;
			break;
			case "木":
			mu+=(this.rz.canggan[n].shu)/2;
			break;
			case "水":
			shui+=(this.rz.canggan[n].shu)/2;
			break;
			case "火":
			huo+=(this.rz.canggan[n].shu)/2;
			break;
			case "土":
			tu+=(this.rz.canggan[n].shu)/2;
			break;
		}
	}
	// 计算时支中五行的力量
	for(var n in this.sz.canggan){ 
		switch(this.sz.canggan[n].wuxing){
			case "金":
			jin+=(this.sz.canggan[n].shu)/2;
			break;
			case "木":
			mu+=(this.sz.canggan[n].shu)/2;
			break;
			case "水":
			shui+=(this.sz.canggan[n].shu)/2;
			break;
			case "火":
			huo+=(this.sz.canggan[n].shu)/2;
			break;
			case "土":
			tu+=(this.sz.canggan[n].shu)/2;
			break;
		}
	}
	// 计算年支中五行的力量
	for(var n in this.nz.canggan){ 
		switch(this.nz.canggan[n].wuxing){
			case "金":
			jin+=(this.nz.canggan[n].shu)/8;
			break;
			case "木":
			mu+=(this.nz.canggan[n].shu)/8;
			break;
			case "水":
			shui+=(this.nz.canggan[n].shu)/8;
			break;
			case "火":
			huo+=(this.nz.canggan[n].shu)/8;
			break;
			case "土":
			tu+=(this.nz.canggan[n].shu)/8;
			break;
		}
	}
	// 寅申月支生气有无透出月干
	// if( d =="寅" || d =="申"){
	// 	switch(d){
	// 		case "寅":
	// 		if(c == "丙"){
	// 			huo+=16;
	// 		}
	// 		break;
	// 		case "申":
	// 		if(c == "壬"){
	// 			shui+=16;
	// 		}
	// 		break;
	// 	}
	// }
	// 返回整个八字地支的五行力量
	return [jin,mu,shui,huo,tu];
}


// var yi = new Gan("乙");
// var yin = new Zhi("卯");
// var bz = new Bazi("乙","丑","丁","亥","己","未","戊","辰");

// console.log(yi.wuxing,yin.wuxing,yin.canggan[0],bz.qishu(),bz.rg.shiyi());
