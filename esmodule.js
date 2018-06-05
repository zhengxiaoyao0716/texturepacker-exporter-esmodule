// Created with TexturePacker (http://www.codeandweb.com/texturepacker)
//
// {{ smartUpdateKey }}
//
// Exporter template: https://github.com/zhengxiaoyao0716/texturepacker-exporter-esmodule

/// <reference path="./texturepacker.d.ts"/>

/** @type {Object.<string, SpriteInfo>} */
const sprites = {{% for sprite in allSprites %}
    '{{ sprite.trimmedName }}': {
        name: '{{ sprite.trimmedName }}',
        fullName: '{{ sprite.fullName }}',
        rect: {
            x: {{ sprite.frameRect.x }},
            y: {{ sprite.frameRect.y }},
            width: {{ sprite.frameRect.width }},
            height: {{ sprite.frameRect.height }},
        },
        rotated: {{ sprite.rotated }},
    },{% endfor %}
};
export default sprites;
