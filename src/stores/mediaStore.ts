// store imports
import { writable } from "svelte/store";

//type imports
import type { LibraryItem } from "../types/types";

const library: LibraryItem[] = writable([])