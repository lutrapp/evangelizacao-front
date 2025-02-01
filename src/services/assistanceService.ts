import api from "./api";

export interface Assistance {
  responsibleName: string;
  responsiblePhone: string;
  motherName: string;
  motherMobile: string;
  address: {
    street: string;
    zip: string;
    number: string;
    neighborhood: string;
    complement?: string;
    state: string;
    country: string
  };
  children: {
    id: number;
    name: string;
    dob: string; //date of birth
    allergies: string;
    physicalDisability: string;
    disease: string; //includes tdah, autism
    learningDifficulty: string;
    medication: string;
    homeBehavior: string;
    schoolBehavior: string;
    literate: boolean;
    needsSchoolSupport: boolean;
    vaccinationDeclaration: boolean;
    basicSanitation: boolean;
    additionalInfo: string;
  }[];
}

export const createAssistance = async (assistance: Assistance) => {
  const response = await api.post("/assistances", assistance);
  return response.data;
};
