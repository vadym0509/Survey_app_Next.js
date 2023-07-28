import Formdata from "../data/FormData"
import ResultData from "../data/ResultData";

export default async function SyncData() {
    // Implement SyncData function
    localStorage.setItem("formdata", JSON.stringify(Formdata));
    localStorage.setItem("resultdata", JSON.stringify(ResultData));
    console.log(JSON.parse(localStorage.getItem("formdata") as string))
    console.log("The SyncData function has been triggered")
    console.log("The number of updated records", (JSON.parse(localStorage.getItem("formdata") as string)).length)
    window.alert(`The currend ResultData ${localStorage.getItem("resultdata")}`);
}
