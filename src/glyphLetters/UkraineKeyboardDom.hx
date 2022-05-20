package glyphLetters;
import glyphLetters.UkraineGlyph;
import htmlHelper.tools.DivertTrace;
import js.html.Event;
import js.html.KeyboardEvent;
import js.Browser;
class UkraineKeyboardDom{
    public static function main(){
        new UkraineKeyboardDom();
    }
    var divertTrace: DivertTrace;
    public function new(){
        divertTrace = new DivertTrace();
        Browser.document.onkeydown = keyDown;
        Browser.document.onkeyup = keyUp;
    }
    inline
    function keyDown( e: KeyboardEvent ) {
        e.preventDefault();
        var keyCode = e.keyCode;
    }
    var letters = '';
    inline
    function keyUp( e: KeyboardEvent ) {
        e.preventDefault();
        var keyCode = e.keyCode;
        var char = UkraineGlyph.fromQwerty( e.key );
        if( char != notFound ){
            letters += char;
        } else {
            if( e.key.length < 2 ){
            letters += e.key;
            }
        }
        trace(letters);
    }
}
