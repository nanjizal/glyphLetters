package glyphLetters; 

enum abstract UkraineGlyph_( String ) from String to String {
    var ukr_a  = 'а';
    var ukr_b  = 'б';
    var ukr_v  = 'в';
    var ukr_gh = 'г';
    var ukr_g  = 'ґ';
    var ukr_d  = 'д';
    var ukr_e  = 'е';
    var ukr_ye = 'є';
    var ukr_zh = 'ж';
    var ukr_z = 'з';
    var ukr_y = 'и';
    var ukr_i = 'і';
    var ukr_yi = 'ї';
    var ukr_j = 'й';
    var ukr_k = 'к';
    var ukr_l = 'л';
    var ukr_m = 'м';
    var ukr_n = 'н';
    var ukr_o = 'о';
    var ukr_p = 'п';
    var ukr_r = 'р';
    var ukr_s = 'с';
    var ukr_t = 'т';
    var ukr_u = 'у';
    var ukr_f = 'ф';
    var ukr_kh = 'х';
    var ukr_ts = 'ц';
    var ukr_ch = 'ч';
    var ukr_sh = 'ш';
    var ukr_shch = 'щ';
    var ukr_yu = 'ю';
    var ukr_ya = 'я';
    var ukr_b2 = 'ь';
    var ukr_bar = '’';

    var ukr_e2 = 'ё';
    var ukr_b3 = 'ъ';
    var ukr_ui = 'ы';
    var ukr_ie = 'ѣ';
    var ukr__e = 'э';
    var ukr_theta = 'ѳ';
    var ukr_i2 = 'ѵ';
    var ukr_ja = 'ѧ';
//////////////////////////////
    var UKR_A  = 'А';
    var UKR_B  = 'Б';
    var UKR_V  = 'В';
    var UKR_GH = 'Г';
    var UKR_G  = 'Ґ';
    var UKR_D  = 'Д';
    var UKR_E  = 'Е';
    var UKR_YE = 'Є';
    var UKR_ZH = 'Ж';
    var UKR_Z = 'З';
    var UKR_Y = 'И';
    var UKR_I = 'І';
    var UKR_YI = 'Ї';
    var UKR_J = 'Й';
    var UKR_K = 'К';
    var UKR_L = 'Л';
    var UKR_M = 'М';
    var UKR_N = 'Н';
    var UKR_O = 'О';
    var UKR_P = 'П';
    var UKR_R = 'Р';
    var UKR_S = 'С';
    var UKR_T = 'Т';
    var UKR_U = 'У';
    var UKR_F = 'Ф';
    var UKR_KH = 'Х';
    var UKR_TS = 'Ц';
    var UKR_CH = 'Ч';
    var UKR_SH = 'Ш';
    var UKR_SHCH = 'Щ';
    var UKR_YU = 'Ю';
    var UKR_YA = 'Я';
    var UKR_B2 = 'Ь';
    var UKR_BAR = '’';

    //Archaic letters
    var UKR_E2 = 'Ё';
    var UKR_B3 = 'Ъ';
    var UKR_UI = 'Ы';
    var UKR_IE = 'Ѣ';
    var UKR__E = 'Э';
    var UKR_THETA = 'Ѳ';
    var UKR_I2 = 'Ѵ';
    var UKR_JA = 'Ѧ';
    var notFound = 'not found';
}

abstract UkraineGlyph( UkraineGlyph_ ) from UkraineGlyph_ to UkraineGlyph_ {
    public function new( ukraine: UkraineGlyph_ ){
        this = ukraine;
    }
    public static inline function fromQwerty( str: String ): UkraineGlyph_ {
        return switch( str ){
            case 'q': ukr_j;
            case 'w': ukr_ts;
            case 'e': ukr_u;
            case 'r': ukr_k;
            case 't': ukr_e;
            case 'y': ukr_n;
            case 'u': ukr_gh;
            case 'i': ukr_sh;
            case 'o': ukr_shch;
            case 'p': ukr_z;
            
            case '[': ukr_kh;
            case ']': ukr_yi;
            // ukr_g

            case 'a': ukr_f;
            case 's': ukr_i;
            case 'd': ukr_v;
            case 'f': ukr_a;
            case 'g': ukr_p;
            case 'h': ukr_o;
            case 'j': ukr_l;
            case 'k': ukr_d;
            case 'l': ukr_zh;
            
            case 'z': ukr_ya;
            case 'x': ukr_ch;
            case 'c': ukr_s;
            case 'v': ukr_m;
            case 'b': ukr_y;
            case 'n': ukr_t;
            case 'm': ukr_b2;
            
            case 'Q': UKR_J;
            case 'W': UKR_TS;
            case 'E': UKR_U;
            case 'R': UKR_K;
            case 'T': UKR_E;
            case 'Y': UKR_N;
            case 'U': UKR_GH;
            case 'I': UKR_SH;
            case 'O': UKR_SHCH;
            case 'P': UKR_Z;

            case 'A': UKR_F;
            case 'S': UKR_I;
            case 'D': UKR_V;
            case 'F': UKR_A;
            case 'G': UKR_P;
            case 'H': UKR_O;
            case 'J': UKR_L;
            case 'K': UKR_D;
            case 'L': UKR_ZH;
                    
            case 'Z': UKR_YA;
            case 'X': UKR_CH;
            case 'C': UKR_S;
            case 'V': UKR_M;
            case 'B': UKR_Y;
            case 'N': UKR_T;
            case 'M': UKR_B2;

            case _: notFound;
        } 
    }
}