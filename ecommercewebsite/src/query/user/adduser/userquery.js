import { toaster } from "../../../utils/toast";

import { useQuery, useMutation, useQueryClient } from "react-query";

import {
  createCard,
  createUser, deleteCard, getCard, getCardByUuid, loginUser, updateCard
} from "./userapi";

export const useCreateUser = () => {
  const cache = useQueryClient();
  return useMutation("createUser", createUser, {
    onSuccess: (res, variables, context) => {
      toaster("success", "User Saved Sucessfully !!");
      // debugger
    //   cache.invalidateQueries("getEmployeeAttendanceStatus");
    },
    onError: (error) => {
      toaster("error", error.message);
    },
  });
};

export const useLoginUser = () => {
  return useMutation("loginUser", loginUser, {
    onSuccess: (res, variables, context) => {
      toaster("success", "User Login Successfully !!");
      localStorage.setItem("token",res.token_value);
      console.log()
    },
    onError: (error) => {
      toaster("error", error.message);
    },
  })
}

export const useCreateCard = () => {
  const cache = useQueryClient();
  return useMutation("createCard", createCard, {
    onSuccess: (res, variables, context) => {
      cache.invalidateQueries('getCard');
      toaster("success", "Card created Successfully !!");
      console.log()
    },
    onError: (error) => {
      toaster("error", error.message);
    },
  })
}

export const useGetCard = () => {
  const cache = useQueryClient();
  return useQuery("getCard", getCard, {
    // onSuccess: (res, variables, context) => {
    //   toaster("success", "Card created Successfully !!");
    //   console.log()
    // },
    // onError: (error) => {
    //   toaster("error", error.message);
    // },
  })
}

export const useDeleteCard = () => {
  const cache = useQueryClient();
  return useMutation("deleteCard", deleteCard, {
    onSuccess: (res, variables, context) => {
      cache.invalidateQueries('getCard');
      toaster("success", "Card deleted Successfully !!");
      console.log()
    },
    onError: (error) => {
      toaster("error", error.message);
    },
  })
}

export const useUpdatedCard = () => {
  const cache = useQueryClient();
  return useMutation("updateCard", updateCard, {
    onSuccess: (res, variables, context) => {
      // cache.invalidateQueries('getCard');
      toaster("success", "Card updated Successfully !!");
      console.log()
    },
    onError: (error) => {
      toaster("error", error.message);
    },
  })
}

export const useGetCardByUuid = (id) => {
  const cache = useQueryClient();
  return useQuery(["getCardByUuid",id],() => getCardByUuid(id), {
    enabled:id ? true : false 
  },{
    // onSuccess: (res, variables, context) => {
    //   toaster("success", "Card created Successfully !!");
    //   console.log()
    // },
    onError: (error) => {
      toaster("error", error.message);
    },
  })
}
