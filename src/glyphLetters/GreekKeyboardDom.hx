package glyphLetters;
import glyphLetters.GreekBasic;
import htmlHelper.tools.DivertTrace;
import js.html.Event;
import js.html.KeyboardEvent;
import js.Browser;
class GreekKeyboardDom{
    public static function main(){
        new GreekKeyboardDom();
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
        var char = GreekBasic.fromQwerty( e.key );
        if( char != notFound ){
            letters += char;
        }
        trace(letters);
    }
}