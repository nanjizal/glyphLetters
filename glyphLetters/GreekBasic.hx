package glyphLetters;

enum abstract BasicGreek_( String ) from String to String {
    var alpha   = α;
    var alpha_acute = ά;
    var beta    = β;
    var gamma   = γ;
    var delta   = δ;
    var epsilon = ε;
    var epsilon_acute = έ;
    var zeta    = ζ;
    var eta     = η;
    var eta_acute = ή;
    var theta   = θ;
    var iota    = ι;
    var iota_acute = ί;
    var iota_diaeresi = ϊ;
    var kappa   = κ;
    var lambda  = λ;
    var mu      = μ;
    var nu      = ν;
    var nu_acute = ύ;
    var nu_diaeresi = ϋ;
    var nu_dialytika_tonos = ΰ;
    var xi      = ξ;
    var omicron = ο;
    var omicron_acute = ό;
    var pi      = π
    var rho     = ρ
    var sigma   = σ
    var tau     = τ;
    var upsilon = υ;
    var phi     = φ;
    var chi     = χ;
    var psi     = ψ;
    var omega   = ω;
    var omega_acute = ώ;

    var sigma2  = ς;
    var sigma3  = ϲ;
    
    
    var ALPHA   = Α;
    var ALPHA_ACUTE = Ά;
    var BETA    = Β;
    var GAMMA   = Γ;
    var DELTA   = Δ;
    var EPSILON = Ε;
    var EPSILON_ACUTE = Έ;
    var ZETA    = Ζ;
    var ETA     = Η;
    var ETA_ACUTE = Ή;
    var THETA   = Θ;
    var IOTA    = Ι;
    var IOTA_ACUTE = Ί;
    var IOTA_DIAERESI = Ϊ;
    var IOTA_DIALYTIA_TONOS = ΐ;
    var KAPA    = Κ;
    var LAMDA   = Λ;
    var MU      = Μ;
    var NU      = Ν;
    var XI      = Ξ;
    var OMICRON = Ο;
    var OMICRON_ACUTE = Ό;
    var PI      = Π;
    var RHO     = Ρ;
    var SIGMA   = Σ;
    var TAU     = Τ;
    var UPSILON = Υ;
    var UPSILON_ACUTE = Ύ;
    var UPSILON_DIAERESI = Ϋ;
    var PHI     = Φ;
    var CHI     = Χ;
    var PSI     = Ψ;
    var OMEGA   = Ω;
    var OMEGA_ACUTE = Ώ;

    var SIGMA3 = Ϲ;
}

abstract BasicGreek( BasicGreek ) from BasicGreek_ to BasicGreek_ {
    public function new( basicGreek: BasicGreek_ ){
        this = basicGreek;
    }
    public static inline function fromQwerty( str: String ): BasicGreek_ {
        return switch( str ){
            case 'q': iota_diaeresi;
            case 'w': sigma2;
            case 'e': epsilon;
            case 'r': rho;
            case 't': tau;
            case 'y': upsilon;
            case 'u': theta;
            case 'i': iota;
            case 'o': omicron;
            case 'p': pi;
            
            case 'a': alpha;
            case 's': sigma;
            case 'd': delta;
            case 'f': phi;
            case 'g': gamma;
            case 'h': eta;
            case 'j': epsilon;
            case 'k': kappa;
            case 'l': lamda;
            
            case 'z': zeta;
            case 'x': chi;
            case 'c': psi;
            case 'v': omega;
            case 'b': beta;
            case 'n': nu;
            case 'm': mu;
            
            // case 'Q': 
            case 'W': IOTA_DIALYTIA_TONOS;
            case 'E': EPSILON;
            case 'R': RHO;
            case 'T': TAU;
            case 'Y': UPSILON;
            case 'U': THETA;
            case 'I': IOTA;
            case 'O': OMICRON;
            case 'P': PI;
                    
            case 'A': ALPHA;
            case 'S': SIGMA;
            case 'D': DELTA;
            case 'F': PHI;
            case 'G': GAMMA;
            case 'H': ETA;
            case 'J': XI;
            case 'K': KAPPA;
            case 'L': LAMDA;
                    
            case 'Z': ZETA;
            case 'X': CHI;
            case 'C': PSI;
            case 'V': OMEGA;
            case 'B': BETA;
            case 'N': NU;
            case 'M': MU;
        } 
    }
}
