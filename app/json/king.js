const king = {
  'moves': [{
    'notation': 'in rage d/f+1+2',
    'hit_level': 'm',
    'damage': null,
    'speed': '16~18?',
    'on_block': '–',
    'on_hit': 'KND',
    'on_ch': 'KND',
    'notes': 'Rage art'
  }, {
    'notation': '1',
    'hit_level': 'h',
    'damage': '9',
    'speed': '10',
    'on_block': '+1',
    'on_hit': '+8',
    'on_ch': '+8',
    'notes': null
  }, {
    'notation': '1, 2',
    'hit_level': 'h, h',
    'damage': '9,20',
    'speed': '10',
    'on_block': '-1',
    'on_hit': '+6',
    'on_ch': '+6',
    'notes': null
  }, {
    'notation': '1, 2, 2+4',
    'hit_level': 'h, h, h(Throw)',
    'damage': '9,20,30',
    'speed': '10',
    'on_block': null,
    'on_hit': 'Throw(KND)',
    'on_ch': null,
    'notes': null
  }, {
    'notation': '1, 2, d+2+4',
    'hit_level': 'h, h, l(Throw)',
    'damage': '9,20,45',
    'speed': '10',
    'on_block': null,
    'on_hit': 'Throw(KND)',
    'on_ch': null,
    'notes': null
  }, {
    'notation': '1, 2, 1',
    'hit_level': 'h, h, m',
    'damage': '9,20,13',
    'speed': '10',
    'on_block': '-4',
    'on_hit': '+5',
    'on_ch': '+10',
    'notes': null
  }, {
    'notation': '1, 2, 1, 2+4',
    'hit_level': 'h, h, m, h(Throw)',
    'damage': '9,20,13,40',
    'speed': '10',
    'on_block': null,
    'on_hit': 'Throw(KND)',
    'on_ch': null,
    'notes': null
  }, {
    'notation': '1, 2, 1, d+2+4',
    'hit_level': 'h, h, m, l(Throw)',
    'damage': '9,20,13,45',
    'speed': '10',
    'on_block': null,
    'on_hit': 'Throw(KND)',
    'on_ch': null,
    'notes': null
  }, {
    'notation': '2',
    'hit_level': 'h',
    'damage': '13',
    'speed': '10',
    'on_block': '+1',
    'on_hit': '+7',
    'on_ch': '+7',
    'notes': null
  }, {
    'notation': '2, 1',
    'hit_level': 'h, m',
    'damage': '13,16',
    'speed': '10',
    'on_block': '-2~-1',
    'on_hit': '+5~+6',
    'on_ch': '+5~+6',
    'notes': null
  }, {
    'notation': '1+2',
    'hit_level': 'm',
    'damage': '24',
    'speed': '18~19 RBT',
    'on_block': '-11~-10',
    'on_hit': '-2~-1',
    'on_ch': '0~+1',
    'notes': null
  }, {
    'notation': '1+2, 1',
    'hit_level': 'm, m',
    'damage': '24,28',
    'speed': '18~19',
    'on_block': '-11',
    'on_hit': 'KND',
    'on_ch': 'KND',
    'notes': null
  }, {
    'notation': '1+2, 3',
    'hit_level': 'm, h',
    'damage': '24,33',
    'speed': '18~19',
    'on_block': '-3',
    'on_hit': 'KND',
    'on_ch': 'KND',
    'notes': 'Tail spin'
  }, {
    'notation': '1+4',
    'hit_level': '!',
    'damage': '33',
    'speed': '52~56 RG',
    'on_block': 'KND',
    'on_hit': 'KND',
    'on_ch': 'KND',
    'notes': null
  }, {
    'notation': 'BT 1+4',
    'hit_level': '!',
    'damage': '40',
    'speed': '41~45 RG',
    'on_block': 'KND',
    'on_hit': 'KND',
    'on_ch': 'KND',
    'notes': null
  }, {
    'notation': 'f+2',
    'hit_level': 'm',
    'damage': '16',
    'speed': '15',
    'on_block': '-11',
    'on_hit': '+2',
    'on_ch': '+2',
    'notes': null
  }, {
    'notation': 'f+2, 1',
    'hit_level': 'm, h',
    'damage': '16,27',
    'speed': '15',
    'on_block': '-9',
    'on_hit': 'KND',
    'on_ch': 'KND',
    'notes': null
  }, {
    'notation': 'f+2, d+1',
    'hit_level': 'h, m',
    'damage': '16,22',
    'speed': '15',
    'on_block': '-13~-12 OC',
    'on_hit': '+2~+3 OC',
    'on_ch': '+2~+3 OC',
    'notes': null
  }, {
    'notation': 'f+2, d+1, 2',
    'hit_level': 'h, m, m',
    'damage': '16,22,21',
    'speed': '15',
    'on_block': '-15',
    'on_hit': 'Launch (JG?)',
    'on_ch': 'Launch (JG?)',
    'notes': null
  }, {
    'notation': 'f+3',
    'hit_level': 'm',
    'damage': '24',
    'speed': '15',
    'on_block': '-9',
    'on_hit': '+1',
    'on_ch': '+9',
    'notes': null
  }, {
    'notation': 'f+4',
    'hit_level': 'm (TJ)',
    'damage': '31',
    'speed': '18',
    'on_block': '-9',
    'on_hit': 'KND',
    'on_ch': 'KND',
    'notes': 'Homing'
  }, {
    'notation': 'f+1+2',
    'hit_level': 'h',
    'damage': '33',
    'speed': '19?~21',
    'on_block': '-1~0?',
    'on_hit': 'KND',
    'on_ch': 'KND',
    'notes': null
  }, {
    'notation': 'f+1+2*',
    'hit_level': 'h!',
    'damage': '54',
    'speed': '29',
    'on_block': 'KND',
    'on_hit': 'KND',
    'on_ch': 'KND',
    'notes': null
  }, {
    'notation': 'f+3+4',
    'hit_level': 'h (TJ)',
    'damage': '33',
    'speed': '38~39',
    'on_block': '+7~+8',
    'on_hit': 'KND',
    'on_ch': 'KND',
    'notes': null
  }, {
    'notation': 'f, F+3+4',
    'hit_level': 'h (TJ)',
    'damage': '33',
    'speed': '28~29 (29~)',
    'on_block': '+7~+8',
    'on_hit': 'KND',
    'on_ch': 'KND',
    'notes': null
  }, {
    'notation': 'f+1+4',
    'hit_level': 'm',
    'damage': '28',
    'speed': '17~18',
    'on_block': '+3~+4',
    'on_hit': '+5~+6',
    'on_ch': '+5~+6?',
    'notes': null
  }, {
    'notation': 'f+2+3',
    'hit_level': 'm',
    'damage': '47',
    'speed': '25~31',
    'on_block': '-13~-10?',
    'on_hit': 'KND',
    'on_ch': 'KND?',
    'notes': 'Power crush'
  }, {
    'notation': 'd/f+1',
    'hit_level': 'm',
    'damage': '20',
    'speed': '14~16',
    'on_block': '-1~+1',
    'on_hit': '+3~+5',
    'on_ch': '+3~+5',
    'notes': null
  }, {
    'notation': 'd/f+1, 2',
    'hit_level': 'm, m',
    'damage': '20,16',
    'speed': '14~16',
    'on_block': '-9',
    'on_hit': '+3',
    'on_ch': '+3?',
    'notes': null
  }, {
    'notation': 'd/f+2',
    'hit_level': 'm',
    'damage': '16',
    'speed': '13',
    'on_block': '-6',
    'on_hit': '+3',
    'on_ch': '+3',
    'notes': null
  }, {
    'notation': 'd/f+2, 1',
    'hit_level': 'm, h',
    'damage': '16,20',
    'speed': '13',
    'on_block': '-4',
    'on_hit': 'KND',
    'on_ch': 'KND',
    'notes': 'Tail spin'
  }, {
    'notation': 'd/f+3',
    'hit_level': 'm',
    'damage': '22',
    'speed': '14',
    'on_block': '-9',
    'on_hit': '+2',
    'on_ch': '+2',
    'notes': null
  }, {
    'notation': 'd/f+3, 4',
    'hit_level': 'm, h (TJ)',
    'damage': '22,28',
    'speed': '14 RG',
    'on_block': '0',
    'on_hit': 'KND',
    'on_ch': 'KND',
    'notes': null
  }, {
    'notation': 'd/f+4',
    'hit_level': 'l',
    'damage': '13',
    'speed': '14',
    'on_block': '-14',
    'on_hit': '-3',
    'on_ch': '-3',
    'notes': null
  }, {
    'notation': 'd/f+4, 3',
    'hit_level': 'l, h',
    'damage': '13,14',
    'speed': '14',
    'on_block': '-5',
    'on_hit': '+6',
    'on_ch': '+6',
    'notes': null
  }, {
    'notation': 'd/f+4, 3, 4',
    'hit_level': 'l, h, m (TJ)',
    'damage': '13,14,36',
    'speed': '14',
    'on_block': '-15',
    'on_hit': 'KND',
    'on_ch': 'CS',
    'notes': null
  }, {
    'notation': 'd/f+4, 3, 4, B',
    'hit_level': 'l, h, m (TJ)',
    'damage': '13,14,36',
    'speed': '14 RBT',
    'on_block': '-8',
    'on_hit': 'KND',
    'on_ch': 'CS',
    'notes': null
  }, {
    'notation': 'd/f+4, 3, d/b or d+4',
    'hit_level': 'l, h, l (TJ)',
    'damage': '13,14,21',
    'speed': '14 RC( RG)',
    'on_block': '-13',
    'on_hit': 'KND',
    'on_ch': 'KND',
    'notes': null
  }, {
    'notation': 'd/f+3+4 (Close)',
    'hit_level': 'Sm (TJ)(, h(Throw))',
    'damage': '20(,30)',
    'speed': '28 RG( RBT)',
    'on_block': 'Throw(KND)',
    'on_hit': 'Throw(KND)',
    'on_ch': 'Throw(KND)',
    'notes': null
  }, {
    'notation': 'd/f+3+4',
    'hit_level': 'Sm (TJ)',
    'damage': '20',
    'speed': '28~35 RG',
    'on_block': '-18~-11',
    'on_hit': '-7~0 OC',
    'on_ch': '-7~0 OC',
    'notes': null
  }, {
    'notation': 'd+1 or FC+d+1',
    'hit_level': 'Sm (TC)',
    'damage': '6',
    'speed': '10 RC',
    'on_block': '-5',
    'on_hit': '+6',
    'on_ch': '+6',
    'notes': null
  }, {
    'notation': 'd+1, 2',
    'hit_level': 'Sm (TC), m',
    'damage': '6,17',
    'speed': '10',
    'on_block': '-9',
    'on_hit': '+2?',
    'on_ch': '+2?',
    'notes': null
  }, {
    'notation': 'd+3',
    'hit_level': 'l',
    'damage': '16',
    'speed': '17',
    'on_block': '-12',
    'on_hit': '+1',
    'on_ch': '+1',
    'notes': null
  }, {
    'notation': 'd+1+2',
    'hit_level': 'm (TC)',
    'damage': '28',
    'speed': '25',
    'on_block': '-20',
    'on_hit': 'Launch(JG?)',
    'on_ch': 'Launch(JG?)',
    'notes': null
  }, {
    'notation': 'd+3+4 or FC+d/f+4',
    'hit_level': 'l (TC)(ALI)',
    'damage': '18',
    'speed': '16 RC',
    'on_block': '-25',
    'on_hit': '-9',
    'on_ch': '-9',
    'notes': null
  }, {
    'notation': 'WR+4',
    'hit_level': 'l (TC)(ALI)',
    'damage': '29',
    'speed': '14 RC',
    'on_block': '-25',
    'on_hit': '-9',
    'on_ch': '-9',
    'notes': null
  }, {
    'notation': 'd+3+4, 4',
    'hit_level': 'l (TC), l (TC)(ALI)',
    'damage': '18,9',
    'speed': '14 RC',
    'on_block': '-25',
    'on_hit': '-9',
    'on_ch': '-9',
    'notes': null
  }, {
    'notation': 'd+3+4, 4, 4',
    'hit_level': 'l (TC) x 3(ALI)',
    'damage': '18,9,9',
    'speed': '14 RC',
    'on_block': '-29',
    'on_hit': '+12',
    'on_ch': '+12',
    'notes': null
  }, {
    'notation': 'd+3+4, 4, 4, 4',
    'hit_level': 'l (TC) x 5(ALI)',
    'damage': '21,9,9,5,3',
    'speed': '14 RC',
    'on_block': '-35',
    'on_hit': '+15',
    'on_ch': '+15',
    'notes': null
  }, {
    'notation': 'ALI 2',
    'hit_level': 'l (TC) x , m',
    'damage': '18,13',
    'speed': '14',
    'on_block': '-15',
    'on_hit': 'KND',
    'on_ch': 'KND',
    'notes': null
  }, {
    'notation': 'd+2+3',
    'hit_level': 'm',
    'damage': '33',
    'speed': '30~34 Air',
    'on_block': '-8~-4',
    'on_hit': '0~+4 OC',
    'on_ch': '0~+4 OC',
    'notes': null
  }, {
    'notation': 'd/b+2',
    'hit_level': 'm',
    'damage': '28',
    'speed': '25',
    'on_block': '-5 OC',
    'on_hit': 'KND',
    'on_ch': 'KND',
    'notes': null
  }, {
    'notation': 'd/b+3',
    'hit_level': 'l (TC)',
    'damage': '22',
    'speed': '23 RC',
    'on_block': '-16',
    'on_hit': '+2s',
    'on_ch': 'KND',
    'notes': null
  }, {
    'notation': 'd/b+4',
    'hit_level': 'l (TJ)',
    'damage': '27',
    'speed': '27~29?s',
    'on_block': '-17~-15a',
    'on_hit': 'KND',
    'on_ch': 'KND',
    'notes': null
  }, {
    'notation': 'in rage d/b+1+2',
    'hit_level': 'm',
    'damage': null,
    'speed': '20~22?',
    'on_block': '+?s',
    'on_hit': 'Launch',
    'on_ch': 'Launch',
    'notes': 'Rage art'
  }, {
    'notation': 'b+1',
    'hit_level': 'h',
    'damage': '17',
    'speed': '12',
    'on_block': '-8',
    'on_hit': '+3',
    'on_ch': 'CS',
    'notes': null
  }, {
    'notation': 'b+1, 2',
    'hit_level': 'h, h',
    'damage': '17,27',
    'speed': '12',
    'on_block': '-13',
    'on_hit': '+5',
    'on_ch': '+5?',
    'notes': null
  }, {
    'notation': 'b+1, 4',
    'hit_level': 'h, m',
    'damage': '17,33',
    'speed': '12 RG',
    'on_block': '-9~-7',
    'on_hit': 'KND',
    'on_ch': 'KND',
    'notes': null
  }, {
    'notation': 'b+2',
    'hit_level': 'h',
    'damage': '16',
    'speed': '14',
    'on_block': '-5',
    'on_hit': '+1',
    'on_ch': '+1',
    'notes': null
  }, {
    'notation': 'b+2, 1+2',
    'hit_level': 'h, h',
    'damage': '16,29',
    'speed': '14',
    'on_block': '+2s',
    'on_hit': 'KND',
    'on_ch': 'KND',
    'notes': null
  }, {
    'notation': 'b+2, 4',
    'hit_level': 'h, m',
    'damage': '16,24',
    'speed': '14',
    'on_block': '-8',
    'on_hit': '+9',
    'on_ch': 'Throw',
    'notes': null
  }, {
    'notation': 'b+3',
    'hit_level': 'h',
    'damage': '31',
    'speed': '16~17',
    'on_block': '-10~-9',
    'on_hit': 'KND',
    'on_ch': 'KF?KND',
    'notes': null
  }, {
    'notation': 'b+4 (Close)',
    'hit_level': 'h',
    'damage': '40',
    'speed': '15 RBT',
    'on_block': '-6',
    'on_hit': 'KND',
    'on_ch': 'KND',
    'notes': null
  }, {
    'notation': 'b+4',
    'hit_level': 'h',
    'damage': '27',
    'speed': '16~21 RBT',
    'on_block': '-17~-12',
    'on_hit': 'KND',
    'on_ch': 'KND',
    'notes': null
  }, {
    'notation': 'u/b+1',
    'hit_level': 'h',
    'damage': '40',
    'speed': '20~21',
    'on_block': '-3~-2',
    'on_hit': 'ATD',
    'on_ch': 'ATD',
    'notes': 'Homing'
  }, {
    'notation': 'u/b+2',
    'hit_level': 'm(?)',
    'damage': '47',
    'speed': '48~52 RG',
    'on_block': '-18~-14 OC',
    'on_hit': 'KND',
    'on_ch': 'KND',
    'notes': null
  }, {
    'notation': 'u+2',
    'hit_level': 'm (TJ)(?)',
    'damage': '47',
    'speed': '48~52 RG',
    'on_block': '-18~-14 OC',
    'on_hit': 'KND',
    'on_ch': 'KND',
    'notes': null
  }, {
    'notation': 'u/f+2',
    'hit_level': 'm (TJ)(?)',
    'damage': '47',
    'speed': '48~52 RG',
    'on_block': '-18~-14 OC',
    'on_hit': 'KND',
    'on_ch': 'KND',
    'notes': null
  }, {
    'notation': 'u/f+3',
    'hit_level': 'm (TJ)',
    'damage': '33',
    'speed': '22~23 RG',
    'on_block': '-10~-9',
    'on_hit': 'KND',
    'on_ch': 'KND',
    'notes': null
  }, {
    'notation': 'u/f+3 (Second part)',
    'hit_level': 'm',
    'damage': '24',
    'speed': '24~28 RG',
    'on_block': '-5~-1',
    'on_hit': 'KND',
    'on_ch': 'KND',
    'notes': null
  }, {
    'notation': 'u/b+4',
    'hit_level': 'm (TJ)',
    'damage': '14',
    'speed': '15',
    'on_block': '-20',
    'on_hit': '-8',
    'on_ch': '-8',
    'notes': null
  }, {
    'notation': 'u+4',
    'hit_level': 'm (TJ)',
    'damage': '20',
    'speed': '15',
    'on_block': '-13',
    'on_hit': 'KND',
    'on_ch': 'Launch (JG?)',
    'notes': null
  }, {
    'notation': 'u/f+4',
    'hit_level': 'm (TJ)',
    'damage': '17',
    'speed': '15',
    'on_block': '-13',
    'on_hit': 'Launch (JG?)',
    'on_ch': 'Launch (JG?)',
    'notes': null
  }, {
    'notation': 'u/f+1+2',
    'hit_level': 'm (TJ)',
    'damage': '33',
    'speed': '35',
    'on_block': '+2 OC',
    'on_hit': 'KND',
    'on_ch': 'KND',
    'notes': null
  }, {
    'notation': 'u/f+1+2*',
    'hit_level': '! (TJ)',
    'damage': '60',
    'speed': '88~89',
    'on_block': 'KND',
    'on_hit': 'KND',
    'on_ch': 'KND',
    'notes': null
  }, {
    'notation': 'u/f+3+4',
    'hit_level': 'h (TJ)',
    'damage': '37',
    'speed': '23 RG',
    'on_block': '-16',
    'on_hit': 'KND',
    'on_ch': 'KND',
    'notes': null
  }, {
    'notation': 'f, f, 2',
    'hit_level': 'l (TC)',
    'damage': '18',
    'speed': '18(19~)',
    'on_block': '-15',
    'on_hit': '0 OC',
    'on_ch': 'Throw',
    'notes': null
  }, {
    'notation': 'f, f, 1+2',
    'hit_level': 'm',
    'damage': '0',
    'speed': '9(10~)',
    'on_block': '0',
    'on_hit': '+7',
    'on_ch': '+18',
    'notes': null
  }, {
    'notation': 'f, F+1',
    'hit_level': 'm',
    'damage': '33',
    'speed': '22?(23?~)',
    'on_block': '-5',
    'on_hit': '+k',
    'on_ch': 'KND',
    'notes': 'Homing, Tail spin'
  }, {
    'notation': 'f, F+2',
    'hit_level': 'm',
    'damage': '25',
    'speed': '31(32~)',
    'on_block': '+2s',
    'on_hit': '+4',
    'on_ch': '+4 OC',
    'notes': null
  }, {
    'notation': 'f, F+2, 1',
    'hit_level': 'm, h',
    'damage': '25,33',
    'speed': '31(32~)',
    'on_block': '-1',
    'on_hit': 'KND',
    'on_ch': 'KND',
    'notes': null
  }, {
    'notation': 'f, F+4',
    'hit_level': 'm',
    'damage': '33',
    'speed': '15(16~)',
    'on_block': '-15',
    'on_hit': 'KND',
    'on_ch': 'Throw(KND)',
    'notes': null
  }, {
    'notation': 'f, F+1+2',
    'hit_level': 'h (TJ)',
    'damage': '20',
    'speed': '20~39 (21~)',
    'on_block': '-5~+14',
    'on_hit': 'KND',
    'on_ch': 'KND',
    'notes': null
  }, {
    'notation': 'f, F+1+2 (Far)',
    'hit_level': 'l (TJ)',
    'damage': '20',
    'speed': '40~43 (41~)',
    'on_block': '-25~-22',
    'on_hit': 'KND',
    'on_ch': 'KND',
    'notes': null
  }, {
    'notation': 'f, F+2+3 (Close)',
    'hit_level': 'm (TJ), (throw)',
    'damage': '40,5',
    'speed': '21~25 RG (22~)',
    'on_block': '-15~-11 OC',
    'on_hit': 'KND',
    'on_ch': 'KND',
    'notes': null
  }, {
    'notation': 'f, F+2+3',
    'hit_level': 'm (TJ)',
    'damage': '40',
    'speed': '26~42 RG (27~)',
    'on_block': '-10~+6 OC',
    'on_hit': '-13~+3 OC',
    'on_ch': '-13~+3 OC',
    'notes': null
  }, {
    'notation': 'f, f, f+3',
    'hit_level': 'm',
    'damage': null,
    'speed': '20?(23?~)',
    'on_block': '+2?',
    'on_hit': 'KND',
    'on_ch': 'KND',
    'notes': null
  }, {
    'notation': 'f, f, f+3+4',
    'hit_level': 'm (TJ)',
    'damage': '54',
    'speed': '28~30 RG (31~)',
    'on_block': '+17~+19 GB',
    'on_hit': 'KND',
    'on_ch': 'KND',
    'notes': null
  }, {
    'notation': 'WS+2',
    'hit_level': 'm',
    'damage': '14',
    'speed': '14',
    'on_block': '-9',
    'on_hit': '+1',
    'on_ch': '+1',
    'notes': 'Homing'
  }, {
    'notation': 'WS+2, 2',
    'hit_level': 'm, m',
    'damage': '14,33',
    'speed': '14',
    'on_block': '-12',
    'on_hit': '+ k',
    'on_ch': '+ k',
    'notes': 'Tail spin'
  }, {
    'notation': 'WS+3',
    'hit_level': 'h',
    'damage': '37',
    'speed': '16',
    'on_block': '0',
    'on_hit': 'KND',
    'on_ch': 'KND',
    'notes': null
  }, {
    'notation': 'WS+1+2',
    'hit_level': 'm',
    'damage': '24',
    'speed': '18~19',
    'on_block': '-10~-9?',
    'on_hit': 'Launch (JG?)',
    'on_ch': 'Launch (JG?)',
    'notes': null
  }, {
    'notation': 'FC+d/f+1',
    'hit_level': 'l (TC)',
    'damage': '27',
    'speed': '30 RC',
    'on_block': '-9',
    'on_hit': 'KND',
    'on_ch': 'KND',
    'notes': null
  }, {
    'notation': 'FC+d/f+2',
    'hit_level': 'm',
    'damage': '28',
    'speed': '15~16',
    'on_block': '-14~-13',
    'on_hit': 'CS',
    'on_ch': 'CS',
    'notes': null
  }, {
    'notation': 'SS+2',
    'hit_level': 'h',
    'damage': '40',
    'speed': '18(27~)',
    'on_block': '-5',
    'on_hit': 'KND',
    'on_ch': 'KND',
    'notes': null
  }, {
    'notation': 'SS+3+4',
    'hit_level': 'h (TJ)',
    'damage': '67',
    'speed': '27~31 RG (36~)',
    'on_block': '-1~+3',
    'on_hit': 'KND',
    'on_ch': 'KND',
    'notes': null
  }, {
    'notation': 'BT 1+2',
    'hit_level': 'h!',
    'damage': '67',
    'speed': '27~29',
    'on_block': 'KND',
    'on_hit': 'KND',
    'on_ch': 'KND',
    'notes': null
  }, {
    'notation': 'BT 3',
    'hit_level': 'm',
    'damage': '20',
    'speed': '13',
    'on_block': '-16',
    'on_hit': '+7',
    'on_ch': 'CS',
    'notes': null
  }, {
    'notation': 'BT d+4',
    'hit_level': 'l (TJ)',
    'damage': '27',
    'speed': '22~24 RC',
    'on_block': '-17~-15',
    'on_hit': 'KND',
    'on_ch': 'KND',
    'notes': null
  }, {
    'notation': '3+4 (to JGS)',
    'hit_level': '(Special) (TJ)(JGS)',
    'damage': null,
    'speed': 'Air',
    'on_block': null,
    'on_hit': null,
    'on_ch': null,
    'notes': null
  }, {
    'notation': 'b+3+4 (to JGS (backwards))',
    'hit_level': '(Special) (TJ)(JGS (backwards))',
    'damage': null,
    'speed': 'Air',
    'on_block': null,
    'on_hit': null,
    'on_ch': null,
    'notes': null
  }, {
    'notation': '3+4, 1 (one spin)',
    'hit_level': 'h',
    'damage': '28',
    'speed': '19(43)',
    'on_block': '-5',
    'on_hit': 'CS',
    'on_ch': 'CS',
    'notes': null
  }, {
    'notation': '3+4, 1 (two spins)',
    'hit_level': 'h',
    'damage': '33',
    'speed': '19(71)',
    'on_block': '-1',
    'on_hit': 'CS',
    'on_ch': 'CS',
    'notes': null
  }, {
    'notation': '3+4, 1 (three spins)',
    'hit_level': 'h',
    'damage': '41',
    'speed': '19(103)',
    'on_block': '-1',
    'on_hit': 'CS',
    'on_ch': 'CS',
    'notes': null
  }, {
    'notation': '3+4, 1 (four spins)',
    'hit_level': 'h',
    'damage': '41',
    'speed': '19(135)',
    'on_block': '-1',
    'on_hit': 'CS',
    'on_ch': 'CS',
    'notes': null
  }, {
    'notation': '3+4, 1 (five spins)',
    'hit_level': 'h',
    'damage': '41',
    'speed': '19(167)',
    'on_block': '-1',
    'on_hit': 'CS',
    'on_ch': 'CS',
    'notes': null
  }, {
    'notation': '3+4, 2 (one spin)',
    'hit_level': 'm',
    'damage': '20',
    'speed': '11~12 (35)',
    'on_block': '-9~-8',
    'on_hit': '+2~+3 (+13~+14 OC)',
    'on_ch': '+2~+3 (+13~+14 OC)',
    'notes': null
  }, {
    'notation': '3+4, 2 (two spins)',
    'hit_level': 'm',
    'damage': '24',
    'speed': '11~12 (67)',
    'on_block': '-2~-1',
    'on_hit': '+2~+3 (+13~+14 OC)',
    'on_ch': '+2~+3 (+13~+14 OC)',
    'notes': null
  }, {
    'notation': '3+4, 2 (three spins)',
    'hit_level': 'm',
    'damage': '29',
    'speed': '11~12 (99)',
    'on_block': '0~+1 OC',
    'on_hit': '+2~+3 (+13~+14 OC)',
    'on_ch': '+2~+3 (+13~+14 OC)',
    'notes': null
  }, {
    'notation': '3+4, 2 (four spins)',
    'hit_level': 'm',
    'damage': '29',
    'speed': '11~12 (131)',
    'on_block': '0~+1 OC',
    'on_hit': '+2~+3 (+13~+14 OC)',
    'on_ch': '+2~+3 (+13~+14 OC)',
    'notes': null
  }, {
    'notation': '3+4, 2 (five spins)',
    'hit_level': 'm',
    'damage': '29',
    'speed': '11~12 (163)',
    'on_block': '0~+1 OC',
    'on_hit': '+2~+3 (+13~+14 OC)',
    'on_ch': '+2~+3 (+13~+14 OC)',
    'notes': null
  }, {
    'notation': '3+4, 3 (one spin)',
    'hit_level': 'm (TJ)',
    'damage': '31',
    'speed': '22(46)',
    'on_block': '-5',
    'on_hit': 'KND',
    'on_ch': 'KND',
    'notes': null
  }, {
    'notation': '3+4, 3 (two spins)',
    'hit_level': 'm (TJ)',
    'damage': '36',
    'speed': '22(74)',
    'on_block': '-1',
    'on_hit': 'KND',
    'on_ch': 'KND',
    'notes': null
  }, {
    'notation': '3+4, 3 (three spins)',
    'hit_level': 'm (TJ)',
    'damage': '45',
    'speed': '22(106)',
    'on_block': '-1',
    'on_hit': 'KND',
    'on_ch': 'KND',
    'notes': null
  }, {
    'notation': '3+4, 3 (four spins)',
    'hit_level': 'm (TJ)',
    'damage': '45',
    'speed': '22(138)',
    'on_block': '-1',
    'on_hit': 'KND',
    'on_ch': 'KND',
    'notes': null
  }, {
    'notation': '3+4, 3 (five spins)',
    'hit_level': 'm (TJ)',
    'damage': '45',
    'speed': '22(170)',
    'on_block': '-1',
    'on_hit': 'KND',
    'on_ch': 'KND',
    'notes': null
  }, {
    'notation': '3+4, 3, 2+3 (Close)',
    'hit_level': 'm (TJ), (throw)',
    'damage': '40,5',
    'speed': '22(170) RG',
    'on_block': '-15~-11 OC',
    'on_hit': 'KND',
    'on_ch': 'KND',
    'notes': null
  }, {
    'notation': '3+4, 3, 2+3',
    'hit_level': 'm (TJ)',
    'damage': '40',
    'speed': '22(170) RG',
    'on_block': '-10~+6 OC',
    'on_hit': '-13~+3 OC',
    'on_ch': '-13~+3 OC',
    'notes': null
  }, {
    'notation': '3+4, 4 (one spin)',
    'hit_level': 'h',
    'damage': '54',
    'speed': '17(41)',
    'on_block': '+8',
    'on_hit': 'KND',
    'on_ch': 'KND',
    'notes': 'Tail spin'
  }, {
    'notation': '3+4, 4 (two spins)',
    'hit_level': 'h!',
    'damage': '56',
    'speed': '17(73)',
    'on_block': 'KND',
    'on_hit': 'KND',
    'on_ch': 'KND',
    'notes': 'Tail spin'
  }, {
    'notation': '3+4, 4 (three spins)',
    'hit_level': 'h!',
    'damage': '70',
    'speed': '17(105)',
    'on_block': 'KND',
    'on_hit': 'KND',
    'on_ch': 'KND',
    'notes': 'Tail spin'
  }, {
    'notation': '3+4, 4 (four spins)',
    'hit_level': 'h!',
    'damage': '70',
    'speed': '17(137)',
    'on_block': 'KND',
    'on_hit': 'KND',
    'on_ch': 'KND',
    'notes': 'Tail spin'
  }, {
    'notation': '3+4, 4 (five spins)',
    'hit_level': 'h!',
    'damage': '70',
    'speed': '17(169)',
    'on_block': 'KND',
    'on_hit': 'KND',
    'on_ch': 'KND',
    'notes': 'Tail spin'
  }, {
    'notation': '3+4, d/f+4 (one spin)',
    'hit_level': 'm',
    'damage': '40',
    'speed': '17~18 (41)',
    'on_block': '-17~-16',
    'on_hit': 'KND',
    'on_ch': 'KND',
    'notes': null
  }, {
    'notation': '3+4, d/f+4 (two spins)',
    'hit_level': 'm',
    'damage': '48',
    'speed': '17~18 (73)',
    'on_block': '+8~+9',
    'on_hit': 'KND',
    'on_ch': 'KND',
    'notes': null
  }, {
    'notation': '3+4, d/f+4 (three spins)',
    'hit_level': 'm',
    'damage': '60',
    'speed': '17~18 (105)',
    'on_block': '+8~+9',
    'on_hit': 'KND',
    'on_ch': 'KND',
    'notes': null
  }, {
    'notation': '3+4, d/f+4 (four spins)',
    'hit_level': 'm',
    'damage': '60',
    'speed': '17~18 (137)',
    'on_block': '+8~+9',
    'on_hit': 'KND',
    'on_ch': 'KND',
    'notes': null
  }, {
    'notation': '3+4, d/f+4 (five spins)',
    'hit_level': 'm',
    'damage': '60',
    'speed': '17~18 (169)',
    'on_block': '+8~+9',
    'on_hit': 'KND',
    'on_ch': 'KND',
    'notes': null
  }, {
    'notation': '3+4, 1+4 or 3+4, 2+3',
    'hit_level': 'h(Throw)',
    'damage': '20',
    'speed': '12(36~)',
    'on_block': null,
    'on_hit': 'Throw',
    'on_ch': null,
    'notes': null
  }, {
    'notation': 'f, n, d, D/F',
    'hit_level': '(Special)',
    'damage': null,
    'speed': 'RC',
    'on_block': null,
    'on_hit': null,
    'on_ch': null,
    'notes': null
  }, {
    'notation': 'f, n, d, D/F+1',
    'hit_level': 'l (TC)',
    'damage': '27',
    'speed': '30 RC(34~)',
    'on_block': '-9',
    'on_hit': 'KND',
    'on_ch': 'KND',
    'notes': null
  }, {
    'notation': 'f, n, d, D/F+4',
    'hit_level': 'm (TJ)',
    'damage': '28',
    'speed': '15(19~)',
    'on_block': '-9',
    'on_hit': 'CS',
    'on_ch': 'CS',
    'notes': null
  }, {
    'notation': 'f, n, d, D/F+1+2',
    'hit_level': 'm',
    'damage': '32',
    'speed': '20~22 (24~)',
    'on_block': '-10?~-9s?',
    'on_hit': 'KND',
    'on_ch': 'KND',
    'notes': null
  }, {
    'notation': 'f, n, d, D/F+2+3',
    'hit_level': 'h(Throw)',
    'damage': '25',
    'speed': '12',
    'on_block': null,
    'on_hit': 'Throw(KND)',
    'on_ch': null,
    'notes': null
  }, {
    'notation': 'f, n, d, D/F+1+4',
    'hit_level': 'h(Throw)',
    'damage': '20',
    'speed': '12',
    'on_block': null,
    'on_hit': 'Throw(KND)',
    'on_ch': null,
    'notes': null
  }],
  'metadata': {
    'ver': '0.4',
    'game': 't7',
    'character': 'king',
    'type': 'normal'
  }
}


export default king;