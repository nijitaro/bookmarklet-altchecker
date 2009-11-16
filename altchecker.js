javascript:function altChecker(){
	a = document.getElementsByTagName('img');
	var d = "";
	var f = "";
	for(i=0;i<a.length;i++){
		var b = a[i];
		var fname = "%E3%80%80%E3%80%80"+b.src.substring(b.src.lastIndexOf('/')+1,b.src.length);
		b.title = b.alt + fname +" ("+b.width+"%C3%97"+b.height+")";
		if( b.hasAttribute("alt") ) {
			if ( /[ %E3%80%80]$/.test(b.alt) ) {
				b.style.outline='1px solid #00ff00';
				f += fname+"\n";
				e++;
			} else if ( b.alt == "" ) {
				b.style.outline='1px solid #0099ff';
			}
		} else if ( b.alt == undefined || b.alt == "" ) {
			b.style.outline='1px solid #ff0000';
			d += fname +"\n";
			e++;
		}
	}
	if(e==0){
		alert('Hi-Ho!!');
	}else{
		alert ('MISSING ALT!!\n'+d+'\nWRONG ALT!!\n'+f);
	}
}
var e=0;altChecker();