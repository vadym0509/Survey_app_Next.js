'use client'

import { useCallback } from 'react';

import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';

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



export const Form = () => {

  // Form model
  const survey = new Model(surveyJson);

  // Handle results
  const saveSurveyResults = useCallback((sender: any) => {

    const results = sender.data;

    // Implement solution to save results

  }, []);

  survey.onComplete.add(saveSurveyResults);

  return <Survey model={survey} />;
}

