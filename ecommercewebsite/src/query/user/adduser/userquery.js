import { toaster } from "../../../utils/toast";

import { useQuery, useMutation, useQueryClient } from "react-query";

import {
  createUser
} from "./userapi";

export const useCreateUser = () => {
  const cache = useQueryClient();
  return useMutation("createUser", createUser, {
    onSuccess: (res, variables, context) => {
      toaster("success", "User Saved Sucessfully !!");
      debugger
    //   cache.invalidateQueries("getEmployeeAttendanceStatus");
    },
    onError: (error) => {
      toaster("error", error.message);
    },
  });
};
