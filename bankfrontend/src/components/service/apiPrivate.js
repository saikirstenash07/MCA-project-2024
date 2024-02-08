import axiosInstance from "./axiosInterceptors";

//Get Account Details
export const getAccount = async () => {
  try {
    return await axiosInstance.get(`/api/private/myAccount`);
  } catch (error) {
    console.error("Error while processing request:", error);
    throw error;
  }
};

//Get balance details
export const getBalance = async () => {
  try {
    return await axiosInstance.get(`/api/private/myBalance`);
  } catch (error) {
    console.error("Error while processing request:", error);
    throw error;
  }
};
//Get Loans details
export const getLoans = async () => {
  try {
    return await axiosInstance.get(`/api/private/myLoans`);
  } catch (error) {
    console.error("Error while processing request:", error);
    throw error;
  }
};

//Get cards details
export const getCards = async () => {
  try {
    return await axiosInstance.get(`/api/private/myCards`);
  } catch (error) {
    console.error("Error while processing request:", error);
    throw error;
  }
};
