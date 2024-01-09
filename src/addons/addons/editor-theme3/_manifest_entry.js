/* generated by pull.js */
const manifest = {
  "editorOnly": true,
  "noTranslations": true,
  "name": "Customizable block colors",
  "description": "Edit block colors for each category in the editor.",
  "credits": [
    {
      "name": "NitroCipher/ZenithRogue"
    },
    {
      "name": "TheColaber",
      "link": "https://scratch.mit.edu/users/TheColaber/"
    }
  ],
  "customCssVariables": [
    {
      "name": "inputColor-text",
      "value": {
        "type": "alphaThreshold",
        "source": {
          "type": "settingValue",
          "settingId": "input-color"
        },
        "opaque": {
          "type": "textColor",
          "source": {
            "type": "settingValue",
            "settingId": "input-color"
          }
        },
        "transparent": {
          "type": "map",
          "source": {
            "type": "settingValue",
            "settingId": "text"
          },
          "options": {
            "white": "#ffffff",
            "black": "#575e75",
            "colorOnWhite": "#575e75",
            "colorOnBlack": "#ffffff"
          }
        }
      }
    },
    {
      "name": "inputColor-blackText",
      "value": {
        "type": "alphaThreshold",
        "source": {
          "type": "settingValue",
          "settingId": "input-color"
        },
        "opaque": {
          "type": "textColor",
          "black": "#000000",
          "source": {
            "type": "settingValue",
            "settingId": "input-color"
          }
        },
        "transparent": {
          "type": "map",
          "source": {
            "type": "settingValue",
            "settingId": "text"
          },
          "options": {
            "white": "#ffffff",
            "black": "#000000",
            "colorOnWhite": "#000000",
            "colorOnBlack": "#ffffff"
          }
        }
      }
    },
    {
      "name": "commentText",
      "value": {
        "type": "textColor",
        "source": {
          "type": "settingValue",
          "settingId": "comment-color"
        }
      }
    },
    {
      "name": "commentTextTransparent",
      "value": {
        "type": "textColor",
        "black": "rgba(0, 0, 0, 0.50)",
        "white": "rgba(255, 255, 255, 0.50)",
        "source": {
          "type": "settingValue",
          "settingId": "comment-color"
        }
      }
    },
    {
      "name": "commentBorder",
      "value": {
        "type": "multiply",
        "source": {
          "type": "settingValue",
          "settingId": "comment-color"
        },
        "r": 0.7,
        "g": 0.7,
        "b": 0.7
      }
    }
  ],
  "dynamicDisable": true,
  "userscripts": [
    {
      "url": "theme3.js"
    }
  ],
  "userstyles": [
    {
      "url": "theme3.css"
    },
    {
      "url": "black_text.css",
      "if": {
        "settings": {
          "text": "black"
        }
      }
    },
    {
      "url": "color_on_white.css",
      "if": {
        "settings": {
          "text": "colorOnWhite"
        }
      }
    },
    {
      "url": "color_on_black.css",
      "if": {
        "settings": {
          "text": "colorOnBlack"
        }
      }
    }
  ],
  "settings": [
    {
      "dynamic": true,
      "name": "motion",
      "id": "motion-color",
      "type": "color",
      "default": "#4C97FF",
      "allowTransparency": true
    },
    {
      "dynamic": true,
      "name": "looks",
      "id": "looks-color",
      "type": "color",
      "default": "#9966FF",
      "allowTransparency": true
    },
    {
      "dynamic": true,
      "name": "sounds",
      "id": "sounds-color",
      "type": "color",
      "default": "#CF63CF",
      "allowTransparency": true
    },
    {
      "dynamic": true,
      "name": "events",
      "id": "events-color",
      "type": "color",
      "default": "#FFBF00",
      "allowTransparency": true
    },
    {
      "dynamic": true,
      "name": "control",
      "id": "control-color",
      "type": "color",
      "default": "#FFAB19",
      "allowTransparency": true
    },
    {
      "dynamic": true,
      "name": "sensing",
      "id": "sensing-color",
      "type": "color",
      "default": "#5CB1D6",
      "allowTransparency": true
    },
    {
      "dynamic": true,
      "name": "operators",
      "id": "operators-color",
      "type": "color",
      "default": "#59C059",
      "allowTransparency": true
    },
    {
      "dynamic": true,
      "name": "variables",
      "id": "data-color",
      "type": "color",
      "default": "#FF8C1A",
      "allowTransparency": true
    },
    {
      "dynamic": true,
      "name": "lists",
      "id": "data-lists-color",
      "type": "color",
      "default": "#FF661A",
      "allowTransparency": true
    },
    {
      "dynamic": true,
      "name": "custom",
      "id": "custom-color",
      "type": "color",
      "default": "#FF6680",
      "allowTransparency": true
    },
    {
      "dynamic": true,
      "name": "extensions",
      "id": "Pen-color",
      "type": "color",
      "default": "#0FBD8C",
      "allowTransparency": true
    },
    {
      "dynamic": true,
      "name": "TurboWarp",
      "id": "tw-color",
      "type": "color",
      "default": "#ff4c4c",
      "allowTransparency": true
    },
    {
      "dynamic": true,
      "name": "Addon blocks",
      "id": "sa-color",
      "type": "color",
      "default": "#29BEB8",
      "allowTransparency": true,
      "if": {
        "addonEnabled": [
          "debugger"
        ]
      }
    },
    {
      "dynamic": true,
      "name": "Block inputs",
      "id": "input-color",
      "type": "color",
      "default": "#FFFFFF",
      "allowTransparency": true
    },
    {
      "dynamic": true,
      "name": "Comments",
      "id": "comment-color",
      "type": "color",
      "default": "#FEF49C"
    },
    {
      "dynamic": true,
      "name": "Text color",
      "id": "text",
      "type": "select",
      "default": "white",
      "potentialValues": [
        {
          "id": "white",
          "name": "White"
        },
        {
          "id": "black",
          "name": "Black"
        },
        {
          "id": "colorOnWhite",
          "name": "Colored on white background"
        },
        {
          "id": "colorOnBlack",
          "name": "Colored on black background"
        }
      ]
    }
  ],
  "tags": [
    "theme"
  ],
  "enabledByDefault": false,
  "presets": [
    {
      "name": "3.0 Tweaks",
      "id": "tweaks",
      "description": "Events, Control, and Custom blocks with 2.0 inspired colors",
      "values": {
        "motion-color": "#4C97FF",
        "looks-color": "#9966FF",
        "sounds-color": "#CF63CF",
        "events-color": "#DE9E2E",
        "control-color": "#FFBF00",
        "sensing-color": "#5CB1D6",
        "operators-color": "#59C059",
        "data-color": "#FF8C1A",
        "data-lists-color": "#FF661A",
        "custom-color": "#5f49d8",
        "Pen-color": "#0FBD8C",
        "sa-color": "#29BEB8",
        "comment-color": "#FEF49C",
        "input-color": "#FFFFFF",
        "text": "white"
      }
    },
    {
      "name": "2.0 Colors",
      "id": "original",
      "description": "The original block colors from Scratch 2.0",
      "values": {
        "motion-color": "#4a6cd4",
        "looks-color": "#8a55d7",
        "sounds-color": "#bb42c3",
        "events-color": "#c88330",
        "control-color": "#e1a91a",
        "sensing-color": "#2ca5e2",
        "operators-color": "#5cb712",
        "data-color": "#ee7d16",
        "data-lists-color": "#cc5b22",
        "custom-color": "#632d99",
        "Pen-color": "#0e9a6c",
        "sa-color": "#29beb8",
        "comment-color": "#FFFFD2",
        "input-color": "#ffffff",
        "text": "white"
      }
    },
    {
      "name": "Dark",
      "id": "dark",
      "description": "Dark versions of the default colors",
      "values": {
        "motion-color": "#004099",
        "looks-color": "#220066",
        "sounds-color": "#752475",
        "events-color": "#997300",
        "control-color": "#664100",
        "sensing-color": "#1f5f7a",
        "operators-color": "#235c23",
        "data-color": "#b35900",
        "data-lists-color": "#993300",
        "custom-color": "#99004d",
        "Pen-color": "#064734",
        "tw-color": "#660000",
        "sa-color": "#166966",
        "comment-color": "#423f24",
        "input-color": "#202020",
        "text": "white"
      }
    },
    {
      "name": "Black",
      "id": "black",
      "description": "Makes block backgrounds black",
      "values": {
        "motion-color": "#4C97FF",
        "looks-color": "#9966FF",
        "sounds-color": "#CF63CF",
        "events-color": "#FFBF00",
        "control-color": "#FFAB19",
        "sensing-color": "#5CB1D6",
        "operators-color": "#59C059",
        "data-color": "#FF8C1A",
        "data-lists-color": "#FF661A",
        "custom-color": "#FF6680",
        "Pen-color": "#0FBD8C",
        "sa-color": "#29BEB8",
        "comment-color": "#FEF49C",
        "input-color": "#202020",
        "text": "colorOnBlack"
      }
    },
    {
      "name": "Pitch Black",
      "id": "pureblack",
      "description": "Makes block backgrounds pitch black",
      "values": {
        "motion-color": "#000000",
        "looks-color": "#000000",
        "sounds-color": "#000000",
        "events-color": "#000000",
        "control-color": "#000000",
        "sensing-color": "#000000",
        "operators-color": "#000000",
        "data-color": "#000000",
        "data-lists-color": "#000000",
        "custom-color": "#000000",
        "Pen-color": "#000000",
        "sa-color": "#000000",
        "comment-color": "#000000",
        "input-color": "#2b2b2b",
        "text": "colorOnBlack"
      }
    }
  ]
};
export default manifest;
