'use client'

import { useEffect, useState } from 'react'
import { Form } from "@/components/forms/Form"
import { useRouter } from "next/navigation"

export default function Page( {params}: {
    params: { resultId: number,
                formId: number
            }
}) {
    const [isResult, setIsResult] = useState(false)
    const router = useRouter();
    

    useEffect(() => {
        const currentResultdata = JSON.parse(localStorage.getItem("resultdata") as string);
        const currentFormdata = JSON.parse(localStorage.getItem("formdata") as string)
        if(!currentResultdata.find((item: any) => item.resultId == params.resultId) || !currentFormdata.find((item: any) => item.formId == params.formId)){
            router.push('/not-found');
        }else{
            setIsResult(true);
        }
    }, [])

    return (
        <div>
            {isResult && <div>
                <p>The id of this page is {params.resultId}</p>
                <Form formId={params.formId} resultId={params.resultId} />
            </div>}
        </div>
    )
  }