export type MediaType = "Book" | "Album" | "Movie" | "TV Show" | "Video Game" | ""

export type LibraryItem = {
    id: number,
    medium: string,
    title: string,
    release_year: number,
    creator: string,
    genre: string[]
    consumed: boolean
}