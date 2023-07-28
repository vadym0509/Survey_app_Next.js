export default function addResultData(formId: number) {
    // Implement SyncData function
    let currentResultData = JSON.parse(localStorage.getItem("resultdata") as string);
    const newResultData = {
        resultId : currentResultData[currentResultData.length - 1].resultId + 1,
        formId: formId,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        result: {}
    }

    const updatedResultData = [...currentResultData, newResultData];

    localStorage.setItem("resultdata", JSON.stringify(updatedResultData));
    console.log("The Result data has been updated", JSON.parse(localStorage.getItem("resultdata") as string))
    return newResultData.resultId;
}
