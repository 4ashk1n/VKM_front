import { makeAutoObservable } from "mobx";
import { Strain, StrainDataShort } from "./Strain";
import api from "../../axiosConfig";
import { createContext } from "react";


export class Catalog {
    pages: Strain[][] = []
    totalResults: number = 0
    totalPages: number = 0
    
    currentPage = 0
    limit = 24
    query = ''
    
    constructor() {
        makeAutoObservable(this);
    }

    async getItemsOnCurrentPage(reload = false) {
        if (!reload && this.pages[this.currentPage]?.length > 0) {
            return this.pages[this.currentPage]
        }

        const URL = this.query ? 
                        `/strains/search/?offset=${this.currentPage * this.limit}&limit=${this.limit}&q=${this.query}`
                        : `/strains/get_strains/?offset=${this.currentPage * this.limit}&limit=${this.limit}`;
        const { data } = await api.get(URL);
        this.totalResults = data.count;
        this.totalPages = Math.ceil(this.totalResults / this.limit)
        if (this.pages.length != this.totalPages) {
            this.pages = []
            for (let i = 0; i < this.totalPages; i++) {
                this.pages.push([])
            }
        }
        this.pages[this.currentPage] = data.results.map((strain: StrainDataShort) => new Strain(strain));
        return this.pages[this.currentPage]
    }

    setPage(value: number) {
        this.currentPage = value;
    }
    
    setLimit(value: number) {
        this.limit = value;
    }

    setQuery(value: string) {
        this.query = value;
    }
}

export const CatalogContext = createContext({})
