// store imports
import { writable } from "svelte/store";

//type imports
import type { LibraryItem } from "../types/types";

const library = writable<LibraryItem[]>([])

const addItem = (item: LibraryItem) => {
    library.update(prev => {
        return [item, ...prev]
    })
}