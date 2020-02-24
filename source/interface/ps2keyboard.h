#define CHK_SHIFT 0x01
#define CHK_CTRL 0x02
#define CHK_ALT 0x04
#define CHK_WIN 0x08
#define CHK_SCRLK 0x10
#define CHK_NUMLK 0x20
#define CHK_CAPSLK 0x40
#define CHK_SHIFT_L 0x01
#define CHK_SHIFT_R 0x02
#define CHK_CTRL_L 0x04
#define CHK_CTRL_R 0x08
#define CHK_ALT_L 0x10
#define CHK_ALT_R 0x20
#define CHK_WIN_L 0x40
#define CHK_WIN_R 0x80
#define CHK_SCRLK_A 0x100
#define CHK_NUMLK_A 0x200
#define CHK_CAPSLK_A 0x400

#define VK_LBUTTON 0x01
#define VK_RBUTTON 0x02
#define VK_CANCEL 0x03
#define VK_MBUTTON 0x04
#define VK_XBUTTON1 0x05
#define VK_XBUTTON2 0x06
#define VK_BACK 0x08
#define VK_TAB 0x09
#define VK_CLEAR 0x0C
#define VK_RETURN 0x0D
#define VK_SHIFT 0x10
#define VK_CONTROL 0x11
#define VK_MENU 0x12
#define VK_PAUSE 0x13
#define VK_CAPITAL 0x14
#define VK_KANA 0x15
#define VK_HANGUEL 0x15
#define VK_HANGUL 0x15
#define VK_JUNJA 0x17
#define VK_FINAL 0x18
#define VK_HANJA 0x19
#define VK_KANJI 0x19
#define VK_ESCAPE 0x1B
#define VK_CONVERT 0x1C
#define VK_NONCONVERT 0x1D
#define VK_ACCEPT 0x1E
#define VK_MODECHANGE 0x1F
#define VK_SPACE 0x20
#define VK_PRIOR 0x21
#define VK_NEXT 0x22
#define VK_END 0x23
#define VK_HOME 0x24
#define VK_LEFT 0x25
#define VK_UP 0x26
#define VK_RIGHT 0x27
#define VK_DOWN 0x28
#define VK_SELECT 0x29
#define VK_PRINT 0x2A
#define VK_EXECUTE 0x2B
#define VK_SNAPSHOT 0x2C
#define VK_INSERT 0x2D
#define VK_DELETE 0x2E
#define VK_HELP 0x2F
#define VK_LWIN 0x5B
#define VK_RWIN 0x5C
#define VK_APPS 0x5D
#define VK_SLEEP 0x5F
#define VK_NUMPAD0 0x60
#define VK_NUMPAD1 0x61
#define VK_NUMPAD2 0x62
#define VK_NUMPAD3 0x63
#define VK_NUMPAD4 0x64
#define VK_NUMPAD5 0x65
#define VK_NUMPAD6 0x66
#define VK_NUMPAD7 0x67
#define VK_NUMPAD8 0x68
#define VK_NUMPAD9 0x69
#define VK_MULTIPLY 0x6A
#define VK_ADD 0x6B
#define VK_SEPARATOR 0x6C
#define VK_SUBTRACT 0x6D
#define VK_DECIMAL 0x6E
#define VK_DIVIDE 0x6F
#define VK_F1 0x70
#define VK_F2 0x71
#define VK_F3 0x72
#define VK_F4 0x73
#define VK_F5 0x74
#define VK_F6 0x75
#define VK_F7 0x76
#define VK_F8 0x77
#define VK_F9 0x78
#define VK_F10 0x79
#define VK_F11 0x7A
#define VK_F12 0x7B
#define VK_F13 0x7C
#define VK_F14 0x7D
#define VK_F15 0x7E
#define VK_F16 0x7F
#define VK_F17 0x80
#define VK_F18 0x81
#define VK_F19 0x82
#define VK_F20 0x83
#define VK_F21 0x84
#define VK_F22 0x85
#define VK_F23 0x86
#define VK_F24 0x87
#define VK_NUMLOCK 0x90
#define VK_SCROLL 0x91
#define VK_LSHIFT 0xA0
#define VK_RSHIFT 0xA1
#define VK_LCONTROL 0xA2
#define VK_RCONTROL 0xA3
#define VK_LMENU 0xA4
#define VK_RMENU 0xA5
#define VK_BROWSER_BACK 0xA6
#define VK_BROWSER_FORWARD 0xA7
#define VK_BROWSER_REFRESH 0xA8
#define VK_BROWSER_STOP 0xA9
#define VK_BROWSER_SEARCH 0xAA
#define VK_BROWSER_FAVORITES 0xAB
#define VK_BROWSER_HOME 0xAC
#define VK_VOLUME_MUTE 0xAD
#define VK_VOLUME_DOWN 0xAE
#define VK_VOLUME_UP 0xAF
#define VK_MEDIA_NEXT_TRACK 0xB0
#define VK_MEDIA_PREV_TRACK 0xB1
#define VK_MEDIA_STOP 0xB2
#define VK_MEDIA_PLAY_PAUSE 0xB3
#define VK_LAUNCH_MAIL 0xB4
#define VK_LAUNCH_MEDIA_SELECT 0xB5
#define VK_LAUNCH_APP1 0xB6
#define VK_LAUNCH_APP2 0xB7
#define VK_OEM_1 0xBA
#define VK_OEM_PLUS 0xBB
#define VK_OEM_COMMA 0xBC
#define VK_OEM_MINUS 0xBD
#define VK_OEM_PERIOD 0xBE
#define VK_OEM_2 0xBF
#define VK_OEM_3 0xC0
#define VK_OEM_4 0xDB
#define VK_OEM_5 0xDC
#define VK_OEM_6 0xDD
#define VK_OEM_7 0xDE
#define VK_OEM_8 0xDF
#define VK_OEM_102 0xE2
#define VK_PROCESSKEY 0xE5
#define VK_PACKE 0xE7
#define VK_ATTN 0xF6
#define VK_CRSEL 0xF7
#define VK_EXSEL 0xF8
#define VK_EREOF 0xF9
#define VK_PLAY 0xFA
#define VK_ZOOM 0xFB
#define VK_NONAME 0xFC
#define VK_PA1 0xFD
#define VK_OEM_CLEAR 0xFE

extern volatile unsigned char ps2keystatus[256]; // ���z�R�[�h�ɑ�������L�[�̏�ԁiOn�̎�1�j
extern volatile unsigned short vkey; //���z�L�[�R�[�h
extern unsigned char lockkey; // ����������Lock�L�[�̏�Ԏw��B����3�r�b�g��<CAPSLK><NUMLK><SCRLK>
extern unsigned char keytype; // �L�[�{�[�h�̎�ށB0�F���{��109�L�[�A1�F�p��104�L�[

int ps2init(); // PS/2���C�u�����֘A�������B����I��0�A�G���[��-1��Ԃ�
unsigned char shiftkeys(); // SHIFT�֘A�L�[�̉�����Ԃ�Ԃ�
unsigned char ps2readkey();
// ���͂��ꂽ1�̃L�[�̃L�[�R�[�h���O���[�o���ϐ�vkey�Ɋi�[�i������Ă��Ȃ����0��Ԃ��j
// ����8�r�b�g�F�L�[�R�[�h
// ���8�r�b�g�F�V�t�g��ԁi�����F1�j�A��ʂ���<0><CAPSLK><NUMLK><SCRLK><Win><ALT><CTRL><SHIFT>
// �p���E�L�������̏ꍇ�A�߂�l�Ƃ���ASCII�R�[�h�i����ȊO��0��Ԃ��j

// Macro(s) follows(s)
// TODO: implement this
#define keycodeExists() (0)

// Further macros for dummy functions
#define ps2mode() (0)
#define buttonmode() (0)
#define inPS2MODE() (1)