import { api } from "@/shared/api/api";
import type { LoaderFunctionArgs } from "react-router-dom";

export async function loader({ params }: LoaderFunctionArgs) {
  const id = params.id;

  const res = await api.get(`/${id}`);

  return new Promise(() => {});
}
