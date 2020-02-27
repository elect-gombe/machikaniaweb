/****************************************
*  PIC32MX emulator written by Katsumi  *
*        This script is released        *
*          under the LGPL v2.1.         *
****************************************/

keyboard=new Object();
keyboard.capslock=0;
keyboard.numlock=0;
keyboard.scrolllock=0;
keyboard.winkey=0;
keyboard.altkey=0;
keyboard.ctrlkey=0;
keyboard.shiftkey=0;
keyboard.kanamode=0;
keyboard.keyArray=new Array();
keyboard.ps2readkey=function(){
	var vkey;
	if (0==this.keyArray.length) {
		vkey=0;
	} else {
		vkey=this.keyArray.pop();
	}
	var ascii=this.convertCode(vkey);
	if (system.pVkey) {
		if (vkey) vkey|=this.shiftkeys()<<8;
		system.write16(system.pVkey,vkey);
	}
	return ascii;
};
keyboard.shiftkeys=function(){
	var vkey=0;
	// <0><CAPSLK><NUMLK><SCRLK><Win><ALT><CTRL><SHIFT>
	if (this.capslock) vkey|=0x40;
	if (this.numlock) vkey|=0x20;
	if (this.scrolllock) vkey|=0x10;
	if (this.winkey) vkey|=0x08;
	if (this.altkey) vkey|=0x04;
	if (this.ctrlkey) vkey|=0x02;
	if (this.shiftkey) vkey|=0x01;
	return vkey;
};
keyboard.kanaclick=function(lock){
	this.kanamode=lock ? 1:0;
};
keyboard.checkShiftKeys=function(event){
	this.capslock=event.getModifierState("CapsLock") ? 1:0;
	this.numlock=event.getModifierState("NumLock") ? 1:0;
	this.scrolllock=event.getModifierState("ScrollLock") ? 1:0;
	this.winkey=event.getModifierState("OS") ? 1:0;
	this.altkey=event.getModifierState("Alt") ? 1:0;
	this.ctrlkey=event.getModifierState("Control") ? 1:0;
	this.shiftkey=event.getModifierState("Shift") ? 1:0;
};
keyboard.keydown=function(code,event){
	this.checkShiftKeys(event);
	this.keyArray.push(code);
	var status=system.pPs2keystatus;
	if (status) {
		system.write8(status+code,1);
	}
};
keyboard.keyup=function(code,event){
	this.checkShiftKeys(event);
	var status=system.pPs2keystatus;
	if (status) {
		system.write8(status+code,0);
	}
};
keyboard.convertCode=function(code){
	var shiftkey=this.shiftkey;
	if (0x41<=code && code<=0x5a && this.capslock && !this.kanamode) shiftkey=shiftkey ? 0:1;
	if (get.jp) {
		if (this.kanamode) {
			if (shiftkey) return this.vk2kana2[code];
			else return this.vk2kana1[code];
		} else {
			if (shiftkey) return this.vk2asc2_jp[code];
			else return this.vk2asc1_jp[code];
		}
	} else {
		if (shiftkey) return this.vk2asc2_en[code];
		else return this.vk2asc1_en[code];
	}
};
keyboard.init=function(){
	var i;
	var conv=function(table){
		// If string set the ascii code
		if (typeof table[i]== "string") table[i]=table[i].charCodeAt(0);
	};
	for(i=0;i<256;i++){
		conv(keyboard.vk2asc1_jp);
		conv(keyboard.vk2asc2_jp);
		conv(keyboard.vk2asc1_en);
		conv(keyboard.vk2asc2_en);
		conv(keyboard.vk2kana1);
		conv(keyboard.vk2kana2);
	}
};
keyboard.vk2asc1_jp=[
	// 仮想キーコードからASCIIコードへの変換テーブル（SHIFTなし）
	0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
	0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
	' ' ,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
	'0' ,'1' ,'2' ,'3' ,'4' ,'5' ,'6' ,'7' ,'8' ,'9' ,0x00,0x00,0x00,0x00,0x00,0x00,
	0x00,'a' ,'b' ,'c' ,'d' ,'e' ,'f' ,'g' ,'h' ,'i' ,'j' ,'k' ,'l' ,'m' ,'n' ,'o' ,
	'p' ,'q' ,'r' ,'s' ,'t' ,'u' ,'v' ,'w' ,'x' ,'y' ,'z' ,0x00,0x00,0x00,0x00,0x00,
	0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,'*' ,'+' ,0x00,'-' ,0x00,'/' ,
	0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
	0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
	0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
	0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
	0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,':' ,';' ,',' ,'-', '.' ,'/' ,
	'@' ,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
	0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,'[' ,'\\',']' ,'^' ,0x00,
	0x00,0x00,'\\',0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
	0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00
];
keyboard.vk2asc2_jp=[
	// 仮想キーコードからASCIIコードへの変換テーブル（SHIFTあり）
	0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
	0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
	' ' ,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
	0x00,'!' ,0x22,'#' ,'$' ,'%' ,'&' ,0x27,'(' ,')' ,0x00,0x00,0x00,0x00,0x00,0x00,
	0x00,'A' ,'B' ,'C' ,'D' ,'E' ,'F' ,'G' ,'H' ,'I' ,'J' ,'K' ,'L' ,'M' ,'N' ,'O' ,
	'P' ,'Q' ,'R' ,'S' ,'T' ,'U' ,'V' ,'W' ,'X' ,'Y' ,'Z' ,0x00,0x00,0x00,0x00,0x00,
	'0' ,'1' ,'2' ,'3' ,'4' ,'5' ,'6' ,'7' ,'8' ,'9' ,'*' ,'+' ,0x00,'-' ,'.' ,'/' ,
	0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
	0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
	0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
	0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
	0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,'*' ,'+' ,'<' ,'=' ,'>' ,'?' ,
	'`' ,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
	0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,'{' ,'|' ,'}' ,'~' ,0x00,
	0x00,0x00,'_' ,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
	0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00
];
keyboard.vk2kana1=[
	// 仮想キーコードからカナコードへの変換テーブル（SHIFTなし）
	0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
	0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
	' ' ,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
	0xdc,0xc7,0xcc,0xb1,0xb3,0xb4,0xb5,0xd4,0xd5,0xd6,0x00,0x00,0x00,0x00,0x00,0x00,
	0x00,0xc1,0xba,0xbf,0xbc,0xb2,0xca,0xb7,0xb8,0xc6,0xcf,0xc9,0xd8,0xd3,0xd0,0xd7,
	0xbe,0xc0,0xbd,0xc4,0xb6,0xc5,0xcb,0xc3,0xbb,0xdd,0xc2,0x00,0x00,0x00,0x00,0x00,
	0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,'*' ,'+' ,0x00,'-' ,0x00,'/' ,
	0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
	0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
	0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
	0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
	0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0xb9,0xda,0xc8,0xce,0xd9,0xd2,
	0xde,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
	0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0xdf,0xb0,0xd1,0xcd,0x00,
	0x00,0x00,0xdb,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
	0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00
];
keyboard.vk2kana2=[
	// 仮想キーコードからカナコードへの変換テーブル（SHIFTあり）
	0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
	0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
	' ' ,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
	0xa6,0xc7,0xcc,0xa7,0xa9,0xaa,0xab,0xac,0xad,0xae,0x00,0x00,0x00,0x00,0x00,0x00,
	0x00,0xc1,0xba,0xbf,0xbc,0xa8,0xca,0xb7,0xb8,0xc6,0xcf,0xc9,0xd8,0xd3,0xd0,0xd7,
	0xbe,0xc0,0xbd,0xc4,0xb6,0xc5,0xcb,0xc3,0xbb,0xdd,0xaf,0x00,0x00,0x00,0x00,0x00,
	'0', '1' ,'2' ,'3' ,'4' ,'5' ,'6' ,'7' ,'8' ,'9' ,'*' ,'+' ,0x00,'-' ,'.' ,'/' ,
	0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
	0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
	0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
	0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
	0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0xb9,0xda,0xa4,0xce,0xa1,0xa5,
	0xde,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
	0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0xa2,0xb0,0xa3,0xcd,0x00,
	0x00,0x00,0xdb,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
	0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00
];
keyboard.vk2asc1_en=[
	// 仮想キーコードからASCIIコードへの変換テーブル（SHIFTなし）
	0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
	0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
	' ' ,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
	'0' ,'1' ,'2' ,'3' ,'4' ,'5' ,'6' ,'7' ,'8' ,'9' ,0x00,';' ,0x00,'=' ,0x00,0x00,
	0x00,'a' ,'b' ,'c' ,'d' ,'e' ,'f' ,'g' ,'h' ,'i' ,'j' ,'k' ,'l' ,'m' ,'n' ,'o' ,
	'p' ,'q' ,'r' ,'s' ,'t' ,'u' ,'v' ,'w' ,'x' ,'y' ,'z' ,0x00,0x00,0x00,0x00,0x00,
	0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,'*' ,'+' ,0x00,'-' ,0x00,'/' ,
	0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
	0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
	0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
	0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,'-' ,0x00,0x00,
	0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,';' ,'=' ,',' ,'-' ,'.' ,'/' ,
	'`' ,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
	0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,'[' ,'\\',']' ,0x27,0x00,
	0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
	0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00
];
keyboard.vk2asc2_en=[
	// 仮想キーコードからASCIIコードへの変換テーブル（SHIFTあり）
	0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
	0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
	' ' ,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
	')' ,'!' ,'@' ,'#' ,'$' ,'%' ,'^' ,'&' ,'*' ,'(' ,0x00,':' ,0x00,'+' ,0x00,0x00,
	0x00,'A' ,'B' ,'C' ,'D' ,'E' ,'F' ,'G' ,'H' ,'I' ,'J' ,'K' ,'L' ,'M' ,'N' ,'O' ,
	'P' ,'Q' ,'R' ,'S' ,'T' ,'U' ,'V' ,'W' ,'X' ,'Y' ,'Z' ,0x00,0x00,0x00,0x00,0x00,
	'0' ,'1' ,'2' ,'3' ,'4' ,'5' ,'6' ,'7' ,'8' ,'9' ,'*' ,'+' ,0x00,'-' ,'.' ,'/' ,
	0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
	0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
	0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
	0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,'_' ,0x00,0x00,
	0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,':' ,'+' ,'<' ,'_' ,'>' ,'?' ,
	'~' ,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
	0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,'{' ,'|' ,'}' ,0x22,0x00,
	0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
	0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00
];
keyboard.init();
