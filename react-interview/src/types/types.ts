
export interface Movie {

    id: string,
    title: string,
    category: string,
    likes: number,
    dislikes: number

}

export interface MovieStateRedux {
    movies: Movie[]
}

export interface FilterStateRedux {
    categories: string[]
}