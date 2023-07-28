'use client'

import DefaultCard from "../DesignSystem/cards/DefaultCard";

const FormData = [ 
        
    {   formId : 1,
        project: 'Form Title 1',
        formDescription: 'Description 1',
        form : {
            pages: [{
            elements: [{
                name: "FirstName",
                title: "Enter your first name:",
                type: "text"
            }]},{
            elements: [{
                name: "LastName",
                title: "Enter your last name:",
                type: "text"
            }]},{
            elements: [{
                name: "Rating",
                title: "How would you rate today:",
                type: "rating",
                rateMin: 0,
                rateMax: 10
            }]}]
        }
    },
    {   
        formId : 2,
        project: 'Form title 2',
        formDescription: 'Description 2',
        form : {
            pages: [{
                elements: [{
                    name: "FirstName2",
                    title: "Enter your first name:",
                    type: "text"
                },{
                    name: "LastName2",
                    title: "Enter your last name:",
                    type: "text"
                },{
                    name: "Rating",
                    title: "How would you rate today:",
                    type: "rating",
                    rateMin: 0,
                    rateMax: 10
                }]
            }]
        }
    }

];


const FormList = () => {

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
                {JSON.parse(localStorage.getItem("formdata") as string).map((form: any) => {
                    return (
                        <div key={form.formId}>
                            <DefaultCard 
                                Title={form.project}
                                Description={form.formDescription}
                                Link={`form/${form.formId}`}
                            />
                        </div>
                    )   
                    })
                }
        </div>
    )
}

export default FormList;