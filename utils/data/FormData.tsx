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

export default FormData;