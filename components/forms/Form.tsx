'use client'

import { useCallback } from 'react';

import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import { useRouter } from 'next/navigation';

const surveyJson = {
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
};

type FormProps = {
  formId: number;
  resultId: number;
}

export const Form = ({formId, resultId}: FormProps) => {
  const router = useRouter();

  // Form model
  const formData = JSON.parse(localStorage.getItem("formdata") as string)
  const survey = new Model(formData.find((item: any) => item.formId == formId).form);

  // Handle results
  const saveSurveyResults = useCallback((sender: any) => {

    const results = sender.data;

    // Implement solution to save results
    let resultData = JSON.parse(localStorage.getItem("resultdata") as string);
    resultData.find((item: any) => item.resultId == resultId).result = results;
    localStorage.setItem("resultdata", JSON.stringify(resultData));
    console.log("The result data has been updated", resultData);
    router.push(`/form/${formId}`);
  }, []);

  survey.onComplete.add(saveSurveyResults);

  return <Survey model={survey} />;
}

