
import { type Puppy } from "../types";
import {LikeToggle} from "./LikeToggle";
import {Dispatch, SetStateAction} from "react";

export function PuppiesList({
    searchQuery,
    puppies,
    liked,
    setLiked,
    } : {
    searchQuery: string
    puppies: Puppy[]
    liked: Puppy["id"][]
    setLiked: Dispatch<SetStateAction<Puppy["id"][]>>
    }) {
    return(
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {
                puppies
                    .filter(pup => pup.vibe.toLowerCase().includes(searchQuery.toLowerCase()))
                    .map( (puppy)  => (
                    <PuppyCard key={puppy.id} puppy={puppy} liked={liked} setLiked={setLiked} />
                ))
            }
        </ul>
    )
}

type PuppyCardProps = {
    puppy: Puppy;
    liked: Puppy["id"][];
    setLiked: Dispatch<SetStateAction<Puppy["id"][]>>;
}

function PuppyCard({puppy, liked, setLiked}: PuppyCardProps) {
    return(
        <li key={puppy.id} className="overflow-clip rounded-lg bg-white shadow-md ring ring-black/5 transition-shadow duration-300  hover:shadow-[0px_0px_10px_0px_rgba(0,_0,_0,_0.4)]">
            <img
                className="aspect-square object-cover"
                alt={puppy.name}
                src={puppy.imagePath}
            />
            <div className="gap flex items-center justify-between p-4 text-sm">
                <div className="flex items-center gap-2">
                    <p className="font-semibold">{puppy.name}</p>
                    <span className="text-slate-300">·</span>
                    <p className="text-slate-500">{puppy.vibe}</p>
                </div>
                <LikeToggle id={puppy.id} liked={liked} setLiked={setLiked} />
            </div>
        </li>
    )
}