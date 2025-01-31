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
  };
  children: {
    id: number;
    name: string;
    vaccinationCard: boolean;
    additionalInfo: string;
  }[];
}

export const createAssistance = async (assistance: Assistance) => {
  const response = await api.post("/assistances", assistance);
  return response.data;
};
