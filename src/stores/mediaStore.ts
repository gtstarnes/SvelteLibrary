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

const deleteItem = (id: number) => {
    library.update(prev => {
        return prev.filter(item => {
            return item.id !== id
        })
    })
}