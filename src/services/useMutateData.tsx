/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from "@tanstack/react-query";

interface RequestPayload {
  url: string;
}

const getData = async (request: RequestPayload): Promise<any> => {
  const response = await fetch(request.url, {
    method: "GET",
  });
  return await response.json();
};

type SuccessCallback = (data: any) => void;
type ErrorCallback = (error: any) => void;

interface MutationHookResult {
  data: any;
  error: any;
  isError: boolean;
  isSuccess: boolean;
  mutate: (payload: RequestPayload) => void;
  mutateAsync: (payload: RequestPayload) => Promise<any>;
  reset: () => void;
  status: string | null;
  onSuccess: SuccessCallback | undefined;
}

export const useMutateData = (
  title: string,
  onSuccess?: SuccessCallback,
  onError?: ErrorCallback
): MutationHookResult => {
  const mutation = useMutation({
    mutationKey: [title],
    mutationFn: getData,
    onError: onError,
    onSuccess: onSuccess,
  });

  return {
    data: mutation.data,
    error: mutation.error,
    isError: mutation.isError,
    isSuccess: mutation.isSuccess,
    mutate: mutation.mutate,
    mutateAsync: mutation.mutateAsync,
    reset: mutation.reset,
    status: mutation.status,
    onSuccess: onSuccess,
  };
};
