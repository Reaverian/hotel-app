import { SetStateAction } from "react";
import { API, ApiRoutes } from "./config";

export const getData = (updater: SetStateAction<any>, path: ApiRoutes | string, api: string = API) => fetch(
    `${api}${path}`)
    .then((res) => res.json())
    .then((json) => {
        updater(json)
    })