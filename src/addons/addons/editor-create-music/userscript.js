export default async function ({ addon, console }) {
    const defaultEditor = addon.settings.get("defaulteditor")
    localStorage.setItem("dinosaurmod_musicEditor_data", defaultEditor)// node.js.yml doesn't like variables and im new at addons, so this will be used.
    //variables["dinosaurmod_musicEditor_data"] = defaultEditor
}