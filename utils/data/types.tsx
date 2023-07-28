// types.tsx
export interface IResult {
    resultId: number;  // Unique key, auto-increment
    formId: number;
    createdAt: Date;
    updatedAt: Date;
    result: any[];
}

export interface IForm {
    formId: number; // Unique key, auto-increment
    project: string;
    formDescription: string;
    form: any[];
}