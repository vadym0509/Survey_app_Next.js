'use client'

import ResultsList from "@/components/forms/ResultsList"
import Button from "@/components/button/button"
import addResultData from "@/utils/addData/addResultData"

export default function Page({ params }: {
  params: { formId: number}
}) {

  const handleButtonClick = async () => {
    await addResultData(params.formId)
  }

  return(
    <div>
      <Button onClick={handleButtonClick} label="Create new result" />
      <ResultsList />
    </div>
  )
}
