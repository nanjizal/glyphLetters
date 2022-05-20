(function ($global) { "use strict";
Math.__name__ = true;
var Std = function() { };
Std.__name__ = true;
Std.string = function(s) {
	return js_Boot.__string_rec(s,"");
};
var glyphLetters_GreekBasic = {};
glyphLetters_GreekBasic._new = function(basicGreek) {
	var this1 = basicGreek;
	return this1;
};
glyphLetters_GreekBasic.fromQwerty = function(str) {
	switch(str) {
	case "A":
		return "Α";
	case "B":
		return "Β";
	case "C":
		return "Ψ";
	case "D":
		return "Δ";
	case "E":
		return "Ε";
	case "F":
		return "Φ";
	case "G":
		return "Γ";
	case "H":
		return "Η";
	case "I":
		return "Ι";
	case "J":
		return "Ξ";
	case "K":
		return "Κ";
	case "L":
		return "Λ";
	case "M":
		return "Μ";
	case "N":
		return "Ν";
	case "O":
		return "Ο";
	case "P":
		return "Π";
	case "R":
		return "Ρ";
	case "S":
		return "Σ";
	case "T":
		return "Τ";
	case "U":
		return "Θ";
	case "V":
		return "Ω";
	case "W":
		return "ΐ";
	case "X":
		return "Χ";
	case "Y":
		return "Υ";
	case "Z":
		return "Ζ";
	case "a":
		return "α";
	case "b":
		return "β";
	case "c":
		return "ψ";
	case "d":
		return "δ";
	case "e":
		return "ε";
	case "f":
		return "φ";
	case "g":
		return "γ";
	case "h":
		return "η";
	case "i":
		return "ι";
	case "j":
		return "ε";
	case "k":
		return "κ";
	case "l":
		return "λ";
	case "m":
		return "μ";
	case "n":
		return "ν";
	case "o":
		return "ο";
	case "p":
		return "π";
	case "q":
		return "ϊ";
	case "r":
		return "ρ";
	case "s":
		return "σ";
	case "t":
		return "τ";
	case "u":
		return "θ";
	case "v":
		return "ω";
	case "w":
		return "ς";
	case "x":
		return "χ";
	case "y":
		return "υ";
	case "z":
		return "ζ";
	default:
		return "not found";
	}
};
var glyphLetters_GreekKeyboardDom = function() {
	this.letters = "";
	this.divertTrace = new htmlHelper_tools_DivertTrace();
	window.document.onkeydown = $bind(this,this.keyDown);
	window.document.onkeyup = $bind(this,this.keyUp);
};
glyphLetters_GreekKeyboardDom.__name__ = true;
glyphLetters_GreekKeyboardDom.main = function() {
	new glyphLetters_GreekKeyboardDom();
};
glyphLetters_GreekKeyboardDom.prototype = {
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
			char = "Α";
			break;
		case "B":
			char = "Β";
			break;
		case "C":
			char = "Ψ";
			break;
		case "D":
			char = "Δ";
			break;
		case "E":
			char = "Ε";
			break;
		case "F":
			char = "Φ";
			break;
		case "G":
			char = "Γ";
			break;
		case "H":
			char = "Η";
			break;
		case "I":
			char = "Ι";
			break;
		case "J":
			char = "Ξ";
			break;
		case "K":
			char = "Κ";
			break;
		case "L":
			char = "Λ";
			break;
		case "M":
			char = "Μ";
			break;
		case "N":
			char = "Ν";
			break;
		case "O":
			char = "Ο";
			break;
		case "P":
			char = "Π";
			break;
		case "R":
			char = "Ρ";
			break;
		case "S":
			char = "Σ";
			break;
		case "T":
			char = "Τ";
			break;
		case "U":
			char = "Θ";
			break;
		case "V":
			char = "Ω";
			break;
		case "W":
			char = "ΐ";
			break;
		case "X":
			char = "Χ";
			break;
		case "Y":
			char = "Υ";
			break;
		case "Z":
			char = "Ζ";
			break;
		case "a":
			char = "α";
			break;
		case "b":
			char = "β";
			break;
		case "c":
			char = "ψ";
			break;
		case "d":
			char = "δ";
			break;
		case "e":
			char = "ε";
			break;
		case "f":
			char = "φ";
			break;
		case "g":
			char = "γ";
			break;
		case "h":
			char = "η";
			break;
		case "i":
			char = "ι";
			break;
		case "j":
			char = "ε";
			break;
		case "k":
			char = "κ";
			break;
		case "l":
			char = "λ";
			break;
		case "m":
			char = "μ";
			break;
		case "n":
			char = "ν";
			break;
		case "o":
			char = "ο";
			break;
		case "p":
			char = "π";
			break;
		case "q":
			char = "ϊ";
			break;
		case "r":
			char = "ρ";
			break;
		case "s":
			char = "σ";
			break;
		case "t":
			char = "τ";
			break;
		case "u":
			char = "θ";
			break;
		case "v":
			char = "ω";
			break;
		case "w":
			char = "ς";
			break;
		case "x":
			char = "χ";
			break;
		case "y":
			char = "υ";
			break;
		case "z":
			char = "ζ";
			break;
		default:
			char = "not found";
		}
		if(char != "not found") {
			this.letters += char;
		}
		haxe_Log.trace(this.letters,{ fileName : "src/glyphLetters/GreekKeyboardDom.hx", lineNumber : 31, className : "glyphLetters.GreekKeyboardDom", methodName : "keyUp"});
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
glyphLetters_GreekKeyboardDom.main();
})(typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this);
