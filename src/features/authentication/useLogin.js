import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: loginUser, isLoading } = useMutation({
    mutationFn: login,
    onSuccess: (user) => {
      console.log("fatos de usuario");
      queryClient.setQueryData(["user", user.user]);
      navigate("/");
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error("Provided email or password are incorrect");
    },
  });

  return { loginUser, isLoading };
}
