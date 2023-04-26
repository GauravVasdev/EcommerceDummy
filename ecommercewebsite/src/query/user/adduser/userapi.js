import {cardHttp, http} from "../../../utils/httpClient";

export const createUser = async (values) => {
    // debugger
try {
    const { data } = await http().post(`/create-user`, values);
    return data
} catch (error){
    throw Error(error.response.data.message)
}
};

export const loginUser = async (values) => {
    try{
        debugger;
        const{ data } = await http().post("/login", values);
        return data;
    } catch(error){
        throw Error(error.response.data.message)
    }
}

export const createCard = async (values) => {
    try{
        debugger;
        const{ data } = await cardHttp().post("/create/create-card", values);
        return data;
    } catch(error){
        throw Error(error.response.data.message)
    }
}

export const getCard = async (values) => {
    try{
        debugger;
        const{ data } = await cardHttp().get("/get/getAllCard");
        return data;
    } catch(error){
        throw Error(error.response.data.message)
    }
}

export const updateCard = async (values) => {
    try{
        debugger;
        const{ data } = await cardHttp().put("/update/update-card",values);
        return data;
    } catch(error){
        throw Error(error.response.data.message)
    }
}

export const deleteCard = async (cardUuid) => {
    try{
        debugger;
        const{ data } = await cardHttp().delete(`/delete/delete-card/${cardUuid}`);
        return data;
    } catch(error){
        throw Error(error.response.data.message)
    }
}

export const getCardByUuid = async (cardUuid) => {
    try{
        const{ data } = await cardHttp().get(`/get/get-card/${cardUuid}`);
        return data;
    } catch(error){
        throw Error(error.response.data.message)
    }
}