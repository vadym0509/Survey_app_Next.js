import { Form } from "@/components/forms/Form"

export default function Page( {params}: {
    params: { resultId: number,
                formId: number
            }
}) {

    return (
        <div>
            <p>The id of this page is {params.resultId}</p>
            <Form formId={params.formId} resultId={params.resultId} />
        </div>
    )
  }