import { LatexDictionary } from '../public';

export const DEFINITIONS_INEQUALITIES: LatexDictionary = [
  {
    trigger: ['!', '<'],
    kind: 'infix',
    associativity: 'right',
    precedence: 246,
    parse: 'NotLess',
  },
  {
    name: 'NotLess',
    trigger: ['\\nless'],
    kind: 'infix',
    associativity: 'right',
    precedence: 246,
  },
  {
    trigger: ['<'],
    kind: 'infix',
    associativity: 'right',
    precedence: 245,
    parse: 'Less',
  },
  {
    name: 'Less',
    trigger: ['\\lt'],
    kind: 'infix',
    associativity: 'right',
    precedence: 245,
  },
  {
    trigger: ['<', '='],
    kind: 'infix',
    associativity: 'right',
    precedence: 241,
    parse: 'LessEqual',
  },
  {
    name: 'LessEqual',
    trigger: ['\\le'],
    kind: 'infix',
    associativity: 'right',
    precedence: 241,
  },
  {
    trigger: ['\\leq'],
    kind: 'infix',
    associativity: 'right',
    precedence: 241,
    parse: 'Equal',
  },
  {
    trigger: ['\\leqslant'],
    kind: 'infix',
    associativity: 'right',
    precedence: 265, // Note different precedence than `<=` as per MathML
    parse: 'LessEqual',
  },
  {
    name: 'LessNotEqual',
    trigger: ['\\lneqq'],
    kind: 'infix',
    associativity: 'right',
    precedence: 260,
  },
  {
    name: 'NotLessNotEqual',
    trigger: ['\\nleqq'],
    kind: 'infix',
    associativity: 'right',
    precedence: 260,
  },
  {
    name: 'LessOverEqual',
    trigger: ['\\leqq'],
    kind: 'infix',
    associativity: 'right',
    precedence: 265,
  },
  {
    name: 'GreaterOverEqual',
    trigger: ['\\geqq'],
    kind: 'infix',
    associativity: 'right',
    precedence: 265,
    parse: 'GreaterEqual',
  },
  {
    name: 'Equal',
    trigger: ['='],
    kind: 'infix',
    associativity: 'right',
    precedence: 260,
  },
  {
    trigger: ['*', '='],
    kind: 'infix',
    associativity: 'right',
    precedence: 260,
    parse: 'StarEqual',
  },
  {
    name: 'StarEqual',
    trigger: ['\\star', '='],
    kind: 'infix',
    associativity: 'right',
    precedence: 260,
  },
  {
    name: 'PlusEqual',
    trigger: ['+', '='],
    kind: 'infix',
    associativity: 'right',
    precedence: 260,
  },
  {
    name: 'MinusEqual',
    trigger: ['-', '='],
    kind: 'infix',
    associativity: 'right',
    precedence: 260,
  },
  {
    name: 'SlashEqual',
    trigger: ['/', '='],
    kind: 'infix',
    associativity: 'right',
    precedence: 260,
  },
  {
    name: 'EqualEqual',
    trigger: ['=', '='],
    kind: 'infix',
    associativity: 'right',
    precedence: 260,
  },
  {
    name: 'EqualEqualEqual',
    trigger: ['=', '=', '='],
    kind: 'infix',
    associativity: 'right',
    precedence: 265,
  },
  {
    name: 'TildeFullEqual', // MathML: approximately equal to
    trigger: ['\\cong'],
    kind: 'infix',
    associativity: 'right',
    precedence: 260,
  },
  {
    name: 'NotTildeFullEqual', // MathML: approximately but not actually equal to
    trigger: ['\\ncong'],
    kind: 'infix',
    associativity: 'right',
    precedence: 260,
  },
  {
    trigger: [':', '='],
    kind: 'infix',
    associativity: 'right',
    precedence: 260,
    parse: 'Assign',
  },
  {
    name: 'Assign',
    trigger: ['\\coloneq'],
    kind: 'infix',
    associativity: 'right',
    precedence: 260,
  },
  {
    name: 'Approx', // Note: Mathematica TildeTilde
    trigger: ['\\approx'],
    kind: 'infix',
    associativity: 'right',
    precedence: 247,
  },
  {
    name: 'NotApprox', // Note: Mathematica TildeTilde
    trigger: ['\\approx'],
    kind: 'infix',
    associativity: 'right',
    precedence: 247,
  },
  {
    name: 'ApproxEqual', // Note: Mathematica TildeEqual, MathML: `asymptotically equal to`
    trigger: ['\\approxeq'],
    kind: 'infix',
    associativity: 'right',
    precedence: 260,
  },
  {
    name: 'NotApproxEqual', // Note: Mathematica NotTildeEqual
    trigger: ['!', '\\approxeq'],
    kind: 'infix', // Note: no LaTeX symbol for char U+2249
    associativity: 'right',
    precedence: 250,
  },
  {
    name: 'NotEqual',
    trigger: ['\\ne'],
    kind: 'infix',
    associativity: 'right',
    precedence: 255,
  },
  {
    name: 'Unequal',
    trigger: ['!', '='],
    kind: 'infix',
    associativity: 'right',
    precedence: 260, // Note different precendence than \\ne per MathML
  },
  {
    name: 'GreaterEqual',
    trigger: ['\\ge'],
    kind: 'infix',
    associativity: 'right',
    precedence: 242, // Note: different precendence than `>=` as per MathML
  },
  {
    trigger: ['\\geq'],
    kind: 'infix',
    associativity: 'right',
    precedence: 242, // Note: different precendence than `>=` as per MathML
    parse: 'GreaterEqual',
  },
  {
    trigger: ['>', '='],
    kind: 'infix',
    associativity: 'right',
    precedence: 243,
    parse: 'GreaterEqual',
  },
  {
    trigger: ['\\geqslant'],
    kind: 'infix',
    associativity: 'right',
    precedence: 265, // Note: different precendence than `>=` as per MathML
    parse: 'GreaterEqual',
  },
  {
    name: 'GreaterNotEqual',
    trigger: ['\\gneqq'],
    kind: 'infix',
    associativity: 'right',
    precedence: 260,
  },
  {
    name: 'NotGreaterNotEqual',
    trigger: ['\\ngeqq'],
    kind: 'infix',
    associativity: 'right',
    precedence: 260,
  },
  {
    trigger: ['>'],
    kind: 'infix',
    associativity: 'right',
    precedence: 245,
    parse: 'Greater',
  },
  {
    name: 'Greater',
    trigger: ['\\gt'],
    kind: 'infix',
    associativity: 'right',
    precedence: 245,
  },
  {
    name: 'NotGreater',
    trigger: ['\\ngtr'],
    kind: 'infix',
    associativity: 'right',
    precedence: 244,
  },
  {
    trigger: ['!', '>'],
    kind: 'infix',
    associativity: 'right',
    precedence: 244,
    parse: 'NotGreater',
  },
  {
    name: 'RingEqual',
    trigger: ['\\circeq'],
    kind: 'infix',
    associativity: 'right',
    precedence: 260,
  },
  {
    name: 'TriangleEqual', // MathML: delta equal to
    trigger: ['\\triangleq'],
    kind: 'infix',
    associativity: 'right',
    precedence: 260,
  },
  {
    name: 'DotEqual', // MathML: approaches the limit
    trigger: ['\\doteq'],
    kind: 'infix',
    associativity: 'right',
    precedence: 265,
  },
  {
    name: 'DotEqualDot', // MathML: Geometrically equal
    trigger: ['\\doteqdot'],
    kind: 'infix',
    associativity: 'right',
    precedence: 265,
  },
  {
    name: 'FallingDotEqual', // MathML: approximately equal to or the image of
    trigger: ['\\fallingdotseq'],
    kind: 'infix',
    associativity: 'right',
    precedence: 265,
  },
  {
    name: 'RisingDotEqual', // MathML: image of or approximately equal to
    trigger: ['\\fallingdotseq'],
    kind: 'infix',
    associativity: 'right',
    precedence: 265,
  },
  {
    name: 'QuestionEqual',
    trigger: ['\\questeq'],
    kind: 'infix',
    associativity: 'right',
    precedence: 260,
  },
  {
    name: 'Equivalent', // MathML: identical to, Mathematica: Congruent
    trigger: ['\\equiv'],
    kind: 'infix',
    associativity: 'right',
    precedence: 260,
  },
  {
    name: 'MuchLess',
    trigger: ['\\ll'],
    kind: 'infix',
    associativity: 'right',
    precedence: 260,
  },
  {
    name: 'MuchGreater',
    trigger: ['\\gg'],
    kind: 'infix',
    associativity: 'right',
    precedence: 260,
  },
  {
    name: 'Precedes',
    trigger: ['\\prec'],
    kind: 'infix',
    associativity: 'right',
    precedence: 260,
  },
  {
    name: 'Succeeds',
    trigger: ['\\succ'],
    kind: 'infix',
    associativity: 'right',
    precedence: 260,
  },
  {
    name: 'PrecedesEqual',
    trigger: ['\\preccurlyeq'],
    kind: 'infix',
    associativity: 'right',
    precedence: 260,
  },
  {
    name: 'SucceedsEqual',
    trigger: ['\\curlyeqprec'],
    kind: 'infix',
    associativity: 'right',
    precedence: 260,
  },
  {
    name: 'NotPrecedes',
    trigger: ['\\nprec'],
    kind: 'infix',
    associativity: 'right',
    precedence: 260,
  },
  {
    name: 'NotSucceeds',
    trigger: ['\\nsucc'],
    kind: 'infix',
    associativity: 'right',
    precedence: 260,
  },

  {
    name: 'Between',
    trigger: ['\\between'],
    kind: 'infix',
    associativity: 'right',
    precedence: 265,
  },
];