(function ($global) { "use strict";
Math.__name__ = true;
var Std = function() { };
Std.__name__ = true;
Std.string = function(s) {
	return js_Boot.__string_rec(s,"");
};
var glyphLetters_UkraineGlyph = {};
glyphLetters_UkraineGlyph._new = function(ukraine) {
	var this1 = ukraine;
	return this1;
};
glyphLetters_UkraineGlyph.fromQwerty = function(str) {
	switch(str) {
	case "A":
		return "Ф";
	case "B":
		return "И";
	case "C":
		return "С";
	case "D":
		return "В";
	case "E":
		return "У";
	case "F":
		return "А";
	case "G":
		return "П";
	case "H":
		return "О";
	case "I":
		return "Ш";
	case "J":
		return "Л";
	case "K":
		return "Д";
	case "L":
		return "Ж";
	case "M":
		return "Ь";
	case "N":
		return "Т";
	case "O":
		return "Щ";
	case "P":
		return "З";
	case "Q":
		return "Й";
	case "R":
		return "К";
	case "S":
		return "І";
	case "T":
		return "Е";
	case "U":
		return "Г";
	case "V":
		return "М";
	case "W":
		return "Ц";
	case "X":
		return "Ч";
	case "Y":
		return "Н";
	case "Z":
		return "Я";
	case "[":
		return "х";
	case "]":
		return "ї";
	case "a":
		return "ф";
	case "b":
		return "и";
	case "c":
		return "с";
	case "d":
		return "в";
	case "e":
		return "у";
	case "f":
		return "а";
	case "g":
		return "п";
	case "h":
		return "о";
	case "i":
		return "ш";
	case "j":
		return "л";
	case "k":
		return "д";
	case "l":
		return "ж";
	case "m":
		return "ь";
	case "n":
		return "т";
	case "o":
		return "щ";
	case "p":
		return "з";
	case "q":
		return "й";
	case "r":
		return "к";
	case "s":
		return "і";
	case "t":
		return "е";
	case "u":
		return "г";
	case "v":
		return "м";
	case "w":
		return "ц";
	case "x":
		return "ч";
	case "y":
		return "н";
	case "z":
		return "я";
	default:
		return "not found";
	}
};
var glyphLetters_UkraineKeyboardDom = function() {
	this.letters = "";
	this.divertTrace = new htmlHelper_tools_DivertTrace();
	window.document.onkeydown = $bind(this,this.keyDown);
	window.document.onkeyup = $bind(this,this.keyUp);
};
glyphLetters_UkraineKeyboardDom.__name__ = true;
glyphLetters_UkraineKeyboardDom.main = function() {
	new glyphLetters_UkraineKeyboardDom();
};
glyphLetters_UkraineKeyboardDom.prototype = {
	keyDown: function(e) {
		e.preventDefault();
		var keyCode = e.keyCode;
	}
	,keyUp: function(e) {
		e.preventDefault();
		var keyCode = e.keyCode;
		var char;
		switch(e.key) {
		case "A":
			char = "Ф";
			break;
		case "B":
			char = "И";
			break;
		case "C":
			char = "С";
			break;
		case "D":
			char = "В";
			break;
		case "E":
			char = "У";
			break;
		case "F":
			char = "А";
			break;
		case "G":
			char = "П";
			break;
		case "H":
			char = "О";
			break;
		case "I":
			char = "Ш";
			break;
		case "J":
			char = "Л";
			break;
		case "K":
			char = "Д";
			break;
		case "L":
			char = "Ж";
			break;
		case "M":
			char = "Ь";
			break;
		case "N":
			char = "Т";
			break;
		case "O":
			char = "Щ";
			break;
		case "P":
			char = "З";
			break;
		case "Q":
			char = "Й";
			break;
		case "R":
			char = "К";
			break;
		case "S":
			char = "І";
			break;
		case "T":
			char = "Е";
			break;
		case "U":
			char = "Г";
			break;
		case "V":
			char = "М";
			break;
		case "W":
			char = "Ц";
			break;
		case "X":
			char = "Ч";
			break;
		case "Y":
			char = "Н";
			break;
		case "Z":
			char = "Я";
			break;
		case "[":
			char = "х";
			break;
		case "]":
			char = "ї";
			break;
		case "a":
			char = "ф";
			break;
		case "b":
			char = "и";
			break;
		case "c":
			char = "с";
			break;
		case "d":
			char = "в";
			break;
		case "e":
			char = "у";
			break;
		case "f":
			char = "а";
			break;
		case "g":
			char = "п";
			break;
		case "h":
			char = "о";
			break;
		case "i":
			char = "ш";
			break;
		case "j":
			char = "л";
			break;
		case "k":
			char = "д";
			break;
		case "l":
			char = "ж";
			break;
		case "m":
			char = "ь";
			break;
		case "n":
			char = "т";
			break;
		case "o":
			char = "щ";
			break;
		case "p":
			char = "з";
			break;
		case "q":
			char = "й";
			break;
		case "r":
			char = "к";
			break;
		case "s":
			char = "і";
			break;
		case "t":
			char = "е";
			break;
		case "u":
			char = "г";
			break;
		case "v":
			char = "м";
			break;
		case "w":
			char = "ц";
			break;
		case "x":
			char = "ч";
			break;
		case "y":
			char = "н";
			break;
		case "z":
			char = "я";
			break;
		default:
			char = "not found";
		}
		if(char != "not found") {
			this.letters += char;
		} else if(e.key.length < 2) {
			this.letters += e.key;
		}
		haxe_Log.trace(this.letters,{ fileName : "src/glyphLetters/UkraineKeyboardDom.hx", lineNumber : 35, className : "glyphLetters.UkraineKeyboardDom", methodName : "keyUp"});
	}
};
var haxe_Log = function() { };
haxe_Log.__name__ = true;
haxe_Log.formatOutput = function(v,infos) {
	var str = Std.string(v);
	if(infos == null) {
		return str;
	}
	var pstr = infos.fileName + ":" + infos.lineNumber;
	if(infos.customParams != null) {
		var _g = 0;
		var _g1 = infos.customParams;
		while(_g < _g1.length) {
			var v = _g1[_g];
			++_g;
			str += ", " + Std.string(v);
		}
	}
	return pstr + ": " + str;
};
haxe_Log.trace = function(v,infos) {
	var str = haxe_Log.formatOutput(v,infos);
	if(typeof(console) != "undefined" && console.log != null) {
		console.log(str);
	}
};
var haxe_iterators_ArrayIterator = function(array) {
	this.current = 0;
	this.array = array;
};
haxe_iterators_ArrayIterator.__name__ = true;
haxe_iterators_ArrayIterator.prototype = {
	hasNext: function() {
		return this.current < this.array.length;
	}
	,next: function() {
		return this.array[this.current++];
	}
};
var htmlHelper_tools_CodeLocation = function(count,fileName,lineNumber,className,methodName,customParams) {
	this.count = count;
	this.fileName = fileName;
	this.lineNumber = lineNumber;
	this.className = className;
	this.methodName = methodName;
	this.customParams = customParams;
};
htmlHelper_tools_CodeLocation.__name__ = true;
htmlHelper_tools_CodeLocation.create = function(posInfos,count) {
	if(count == null) {
		count = 0;
	}
	var codeLocation = new htmlHelper_tools_CodeLocation(count,posInfos.fileName,posInfos.lineNumber,posInfos.className,posInfos.methodName,posInfos.customParams);
	return codeLocation;
};
var htmlHelper_tools_DivertTrace = function(left,d) {
	if(left == null) {
		left = 610;
	}
	this.arrCount = [];
	this.textStyle1 = "<span style=\"font-size:14px; color:Grey\">";
	this.textStyle0 = "<span style=\"font-size:12px; color:Silver\">";
	this.traceString = "";
	this.divertTrace(left,d);
};
htmlHelper_tools_DivertTrace.__name__ = true;
htmlHelper_tools_DivertTrace.prototype = {
	traceCount: function(d,counting,pos) {
		var exists = false;
		var v;
		if(this.arrCount.length == 0) {
			var tmp = this.arrCount;
			var codeLocation = new htmlHelper_tools_CodeLocation(0,pos.fileName,pos.lineNumber,pos.className,pos.methodName,pos.customParams);
			tmp[0] = codeLocation;
		}
		var _g = 0;
		var _g1 = this.arrCount.length;
		while(_g < _g1) {
			var i = _g++;
			v = this.arrCount[i];
			if(v.fileName == pos.fileName && v.lineNumber == pos.lineNumber) {
				exists = true;
				if(v.count < counting) {
					this.myTrace(d,pos);
					v.count++;
				}
			}
			break;
		}
		if(!exists) {
			this.myTrace(d,pos);
			var tmp = this.arrCount;
			var tmp1 = this.arrCount.length;
			var codeLocation = new htmlHelper_tools_CodeLocation(0,pos.fileName,pos.lineNumber,pos.className,pos.methodName,pos.customParams);
			tmp[tmp1] = codeLocation;
		}
	}
	,divertTrace: function(left,d) {
		if(d == null) {
			var doc = window.document;
			this.traceDiv = doc.createElement("div");
			doc.body.appendChild(this.traceDiv);
			var dom = this.traceDiv;
			var style = dom.style;
			style.position = "absolute";
			style.top = "0px";
			style.left = (left == null ? "null" : "" + left) + "px";
			style.height = "500px";
			style.width = "500px";
			style.zIndex = "99";
			style.overflow = "auto";
		} else {
			this.traceDiv = d;
		}
		haxe_Log.trace = $bind(this,this.myTrace);
	}
	,myTrace: function(v,inf) {
		if(Std.string(v) == "") {
			return;
		}
		this.traceString += this.textStyle0 + inf.className + "." + inf.methodName + " ( " + (inf.lineNumber == null ? "null" : "" + inf.lineNumber) + " )" + "</span>" + "<br> - " + this.textStyle1 + Std.string(v) + "</span>" + "<br>";
		this.traceDiv.innerHTML = this.traceString;
	}
};
var js_Boot = function() { };
js_Boot.__name__ = true;
js_Boot.__string_rec = function(o,s) {
	if(o == null) {
		return "null";
	}
	if(s.length >= 5) {
		return "<...>";
	}
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) {
		t = "object";
	}
	switch(t) {
	case "function":
		return "<function>";
	case "object":
		if(((o) instanceof Array)) {
			var str = "[";
			s += "\t";
			var _g = 0;
			var _g1 = o.length;
			while(_g < _g1) {
				var i = _g++;
				str += (i > 0 ? "," : "") + js_Boot.__string_rec(o[i],s);
			}
			str += "]";
			return str;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( _g ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
			var s2 = o.toString();
			if(s2 != "[object Object]") {
				return s2;
			}
		}
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		var k = null;
		for( k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str.length != 2) {
			str += ", \n";
		}
		str += s + k + " : " + js_Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	case "string":
		return o;
	default:
		return String(o);
	}
};
var $_;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $global.$haxeUID++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = m.bind(o); o.hx__closures__[m.__id__] = f; } return f; }
$global.$haxeUID |= 0;
String.__name__ = true;
Array.__name__ = true;
js_Boot.__toStr = ({ }).toString;
glyphLetters_UkraineKeyboardDom.main();
})(typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this);
