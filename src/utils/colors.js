export const COLOR_BG_START = '#CCCCCC'
export const COLOR_BG_END = '#888888'

export const COLOR_TABS = '#4caf50'

export const COLOR_TEXT = '#FFFFFF';
export const COLOR_TEXT_IMPORTANT = '#f44336';
export const COLOR_TEXT_SUB = '#ff1744';

export const COLOR_SHADOW = 'rgba(0, 0, 0, 0.9)';

const hexColorPartLength = 2;

export const convertHexColorToDex = (hex) => (
    hexColorToDec(hex.replace(/^#([A-Fa-f0-9]*)$/g, '$1'), [])
);

const hexColorToDec = (hex, array = []) => (
    hex.length === 0 ? array : hexColorToDec(hex.substr(hexColorPartLength), [
        ...array,
        parseInt(hex.substr(0, hexColorPartLength), 16)
    ])
);