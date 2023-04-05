import http from "../../../utils/httpClient";

export const createUser = async (values) => {
    debugger
try {
    const { data } = await http().post(`/create-user`, values);
    return data
} catch (error){
    throw Error(error.response.data.message)
}
};