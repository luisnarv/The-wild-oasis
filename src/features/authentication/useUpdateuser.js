import { useMutation, useQueryClient } from "@tanstack/react-query";
import { udateCurrentUser } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useUpdateuser() {
  const queryClient = useQueryClient();
  const { mutate: updateUser, isLoading: isUpdatingUser } = useMutation({
    mutationFn: udateCurrentUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      toast.success("User account successfully update");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { updateUser, isUpdatingUser };
}
