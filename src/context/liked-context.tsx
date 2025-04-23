import {createContext, Dispatch, SetStateAction} from "react";
import {Puppy} from "../types";

export const LikedContext = createContext<{
    liked: Puppy["id"][]
    setLiked: Dispatch<SetStateAction<Puppy["id"][]>> | null
}>(null);