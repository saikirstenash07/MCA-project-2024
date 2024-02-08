import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080";


//Get Notices
export const getNotices = async () => {
  try {
    return await axios.get(`/api/public/notices`);
  } catch (error) {
    console.error("Error while processing request:", error);
    throw error;
  }
};

//send contact info
export const postContact = async (data) => {
  try {
    const {
      name: contactName,
      email: contactEmail,
      subject: subject,
      message: message,
    } = data;

    const newData = { contactName, contactEmail, subject, message };

    return await axios.post(`/api/public/contact`, newData);
  } catch (error) {
    console.error("Error while processing request:", error);
    throw error;
  }
};
