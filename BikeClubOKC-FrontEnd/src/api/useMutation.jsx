import React from "react";
import { useApi } from "./ApiContext";
import { useState } from "react";

export default function useMutation(method, resource, tagsToInvalidate) {
  const { request, invalidateTags } = useApi();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const mutate = async (body) => {
    setLoading(true);
    setError(null);
    try {
      const result = await request(resource, {
        method,
        body: JSON.stringify(body),
      });
      setData(result);
      invalidateTags(tagsToInvalidate);
      return true;
    } catch (error) {
      setError(error.message);
      console.error(error);
    } finally {
      setLoading(false);
    }
    return false;
  };
  return { mutate, data, loading, error };
}
