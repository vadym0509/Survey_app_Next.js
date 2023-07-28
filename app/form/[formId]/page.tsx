'use client'

import { useEffect } from 'react'
import ResultsList from "@/components/forms/ResultsList"
import Button from "@/components/button/button"
import addResultData from "@/utils/addData/addResultData"
import { useRouter } from "next/navigation"

export default function Page({ params }: {
  params: { formId: number}
}) {
  const router = useRouter();

  useEffect(() => {
    const currentFormdata = JSON.parse(localStorage.getItem("formdata") as string)
    if(!currentFormdata.find((item: any) => item.formId == params.formId)){
      router.push('/not-found');
    }
  }, [])

  const handleButtonClick = () => {
    const newResultId = addResultData(params.formId);
    console.log(newResultId, "new")
    router.push(`./${params.formId}/${newResultId}`);
  }

  return(
    <div>
      <Button onClick={handleButtonClick} label="Create new result" />
      <ResultsList />
    </div>
  )
}
