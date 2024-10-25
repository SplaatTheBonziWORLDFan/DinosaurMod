import { variables } from "@src/variables.js"
export default async function ({ addon, console }) {
    const defaultEditor = addon.settings.get("defaulteditor")
    // localStorage.setItem("dinosaurmod_musicEditor_data", defaultEditor)im new at addons, so this will be used.
    variables["dinosaurmod_musicEditor_data"] = defaultEditor
}