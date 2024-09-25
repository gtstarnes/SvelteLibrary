export type MediaType = "Book" | "Album" | "Movie" | "TV Show" | "Video Game" | ""

export type LibraryItem = {
    medium: string,
    title: string,
    release_year: number,
    creator: string,
    genre: string[]
}