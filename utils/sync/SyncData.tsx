import Formdata from "../data/FormData"

export default async function SyncData() {
    // Implement SyncData function
    localStorage.setItem("formdata", JSON.stringify(Formdata));
    console.log(JSON.parse(localStorage.getItem("formdata") as string))
    console.log("The SyncData function has been triggered")
    console.log("The number of updated records", (JSON.parse(localStorage.getItem("formdata") as string)).length)
}
