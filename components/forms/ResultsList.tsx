import { useEffect, useState } from 'react'
import DefaultCard from "../DesignSystem/cards/DefaultCard";

const ResultData = [
    {   
        resultId : 1,
        formId: 1,
        createdAt: "2023–07–20T15:52:22.871Z",
        updatedAt: "2023–07–20T15:52:22.871Z",
        result: {"FirstName":"John","LastName":"Doe","Rating":1}
    }, {
        resultId : 2,
        formId: 1,
        createdAt: "2023–07–20T16:12:22.871Z",
        updatedAt: "2023–07–20T16:12:22.871Z",
        result: {"FirstName":"Paul","LastName":"Jones","Rating":5}
    }
]


const ResultsList = () => {
    const [resultData, setResultData] = useState<any[]>();

    useEffect(() => {
        setResultData(JSON.parse(localStorage.getItem("resultdata") as string))
    }, [])

    return (
        <div className="
            pt-4
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-5
            2xl:grid-cols-6
            gap-8
        ">
                {resultData?.map((result: any) => {
                    return (
                        <div key={result.formId}> 
                            <DefaultCard 
                                Title={'This is result '+result.resultId}
                                Description={result.createdAt}
                                Link={`/form/${result.formId}/${result.resultId}`}
                            />
                        </div>
                    )   
                    })
                }
        </div>
    )
}

export default ResultsList;