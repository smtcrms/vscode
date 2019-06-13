/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { KeyboardLayoutProvider, KeyboardLayoutInfo } from 'vs/workbench/services/keybinding/browser/keyboardLayoutProvider';

KeyboardLayoutProvider.INSTANCE.registerKeyboardLayout((new KeyboardLayoutInfo(
	{ name: '00000409', id: '', text: 'US' },
	[
		{ name: '00000804', id: '', text: 'Chinese (Simplified) - US Keyboard' },
		{ name: '00000411', id: '', text: 'Japanese' },
		{ name: '00000412', id: '', text: 'Korean' },
		{ name: '00000404', id: '', text: 'Chinese (Traditional) - US Keyboard' }
	],
	{
		Sleep: [],
		WakeUp: [],
		KeyA: ['a', 'A', '', '', 0],
		KeyB: ['b', 'B', '', '', 0],
		KeyC: ['c', 'C', '', '', 0],
		KeyD: ['d', 'D', '', '', 0],
		KeyE: ['e', 'E', '', '', 0],
		KeyF: ['f', 'F', '', '', 0],
		KeyG: ['g', 'G', '', '', 0],
		KeyH: ['h', 'H', '', '', 0],
		KeyI: ['i', 'I', '', '', 0],
		KeyJ: ['j', 'J', '', '', 0],
		KeyK: ['k', 'K', '', '', 0],
		KeyL: ['l', 'L', '', '', 0],
		KeyM: ['m', 'M', '', '', 0],
		KeyN: ['n', 'N', '', '', 0],
		KeyO: ['o', 'O', '', '', 0],
		KeyP: ['p', 'P', '', '', 0],
		KeyQ: ['q', 'Q', '', '', 0],
		KeyR: ['r', 'R', '', '', 0],
		KeyS: ['s', 'S', '', '', 0],
		KeyT: ['t', 'T', '', '', 0],
		KeyU: ['u', 'U', '', '', 0],
		KeyV: ['v', 'V', '', '', 0],
		KeyW: ['w', 'W', '', '', 0],
		KeyX: ['x', 'X', '', '', 0],
		KeyY: ['y', 'Y', '', '', 0],
		KeyZ: ['z', 'Z', '', '', 0],
		Digit1: ['1', '!', '', '', 0],
		Digit2: ['2', '@', '', '', 0],
		Digit3: ['3', '#', '', '', 0],
		Digit4: ['4', '$', '', '', 0],
		Digit5: ['5', '%', '', '', 0],
		Digit6: ['6', '^', '', '', 0],
		Digit7: ['7', '&', '', '', 0],
		Digit8: ['8', '*', '', '', 0],
		Digit9: ['9', '(', '', '', 0],
		Digit0: ['0', ')', '', '', 0],
		Enter: [],
		Escape: [],
		Backspace: [],
		Tab: [],
		Space: [' ', ' ', '', '', 0],
		Minus: ['-', '_', '', '', 0],
		Equal: ['=', '+', '', '', 0],
		BracketLeft: ['[', '{', '', '', 0],
		BracketRight: [']', '}', '', '', 0],
		Backslash: ['\\', '|', '', '', 0],
		Semicolon: [';', ':', '', '', 0],
		Quote: ['\'', '"', '', '', 0],
		Backquote: ['`', '~', '', '', 0],
		Comma: [',', '<', '', '', 0],
		Period: ['.', '>', '', '', 0],
		Slash: ['/', '?', '', '', 0],
		CapsLock: [],
		F1: [],
		F2: [],
		F3: [],
		F4: [],
		F5: [],
		F6: [],
		F7: [],
		F8: [],
		F9: [],
		F10: [],
		F11: [],
		F12: [],
		PrintScreen: [],
		ScrollLock: [],
		Pause: [],
		Insert: [],
		Home: [],
		PageUp: [],
		Delete: [],
		End: [],
		PageDown: [],
		ArrowRight: [],
		ArrowLeft: [],
		ArrowDown: [],
		ArrowUp: [],
		NumLock: [],
		NumpadDivide: ['/', '/', '', '', 0],
		NumpadMultiply: ['*', '*', '', '', 0],
		NumpadSubtract: ['-', '-', '', '', 0],
		NumpadAdd: ['+', '+', '', '', 0],
		NumpadEnter: [],
		Numpad1: [],
		Numpad2: [],
		Numpad3: [],
		Numpad4: [],
		Numpad5: [],
		Numpad6: [],
		Numpad7: [],
		Numpad8: [],
		Numpad9: [],
		Numpad0: [],
		NumpadDecimal: [],
		IntlBackslash: ['\\', '|', '', '', 0],
		ContextMenu: [],
		Power: [],
		NumpadEqual: [],
		F13: [],
		F14: [],
		F15: [],
		F16: [],
		F17: [],
		F18: [],
		F19: [],
		F20: [],
		F21: [],
		F22: [],
		F23: [],
		F24: [],
		Help: [],
		Undo: [],
		Cut: [],
		Copy: [],
		Paste: [],
		AudioVolumeMute: [],
		AudioVolumeUp: [],
		AudioVolumeDown: [],
		NumpadComma: [],
		IntlRo: [],
		KanaMode: [],
		IntlYen: [],
		Convert: [],
		NonConvert: [],
		Lang1: [],
		Lang2: [],
		Lang3: [],
		Lang4: [],
		ControlLeft: [],
		ShiftLeft: [],
		AltLeft: [],
		MetaLeft: [],
		ControlRight: [],
		ShiftRight: [],
		AltRight: [],
		MetaRight: [],
		MediaTrackNext: [],
		MediaTrackPrevious: [],
		MediaStop: [],
		Eject: [],
		MediaPlayPause: [],
		MediaSelect: [],
		LaunchMail: [],
		LaunchApp2: [],
		LaunchApp1: [],
		BrowserSearch: [],
		BrowserHome: [],
		BrowserBack: [],
		BrowserForward: [],
		BrowserStop: [],
		BrowserRefresh: [],
		BrowserFavorites: []
	}
)));