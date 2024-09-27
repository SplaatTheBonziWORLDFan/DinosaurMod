/* generated by pull.js */
const manifest = {
    "editorOnly": true,
    "noTranslations": true,
    "name": "Choose Default Music Editor",
    "description": "A Addon to choose which Music Editor you would choose as default.",
    "credits": [
      {
        "name": "MrIncredibleMakerZe",
        "link": "https://scratch.mit.edu/users/MrIncredibleMakerZe/"
      }
    ],
    "userscripts": [
      {
        "url": "userscript.js"
      }
    ],
    "info": [
      {
        "type": "notice",
        "text": "This Addon is in beta.",
        "id": "betaNotice"
      }
    ],
    "settings": [
      {
        "dynamic": true,
        "id": "defaulteditor",
        "name": "Choose Default Music Editor",
        "type": "select",
        "potentialValues": [
          {
            "id": "dinobox",
            "name": "DinoBox"
          },
          {
            "id": "beepbox",
            "name": "BeepBox"
          },
          {
            "id": "jummbox",
            "name": "JummBox"
          }
        ],
        "default": "dinobox"
      }
    ],
    "tags": [
      "beta",
      "new"
    ],
    "enabledByDefault": false
  };
  export default manifest;
  