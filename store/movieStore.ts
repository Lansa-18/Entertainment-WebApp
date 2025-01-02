import {create} from "zustand";
// import {persist} from "zustand/middleware";

interface MovieObj {

}

interface MovieState {
    movies: MovieObj[]
}

export const MovieStore = create<MovieState>(set => (
    
));