import api from "../../axiosConfig";

export type StrainDataShort = {
    strain_id: number,
    CollectionCode: string,
    Strain: number,
    Genus: string,
    Species: string,
    Variant: string,
    AuthoritySp: string,
    TypeOfSubstrate: {
        en?: string,
        ru?: string,
    },
    Country: {
        en?: string,
        ru?: string,
    },
    IsolationDate: string,
}

export type StrainData = {
    strain_id: number,
    NameAndTaxonomy: {
        CollectionCode: string,
        Subcollection: string,
        Subcollection1: string,
        Genus: string,
        Species: string,
        Variant: string,
        Forma: string,
        FormaSpecies: string,
        Strain: number,
        AuthoritySp: string,
        AuthoritySubSp: string,
        Family: string,
        Order: string,
        Class: string,
        Synonym: string,
        TaxonomicID: string,
        Current_Name_DSMZ_MycoBank: string,
        Link_to_TaxonomicID: string,
        Pathogenicgroup: string,
        Risk_group: string,
        SanPin: string,
        State: string,
        Type: {
            en?: string,
            ru?: string,
        },
        Qouts: string,
        OtherName: string,
        ClassShort: string,
        References: string,
        References_nc: string,
        Race: string,
        Serovar: string,
        OtherCol: string,
    },
    History: {
        ReceivedFrom: {
            en: string,
            ru: string,
        },
        Depositor: {
            en: string,
            ru: string,
        },
        ReceivedAs: string,
        ReceivedDate: string,
        AccessionDate: null | string,
        TypeOfSubstrate: {
            en: string,
            ru: string,
        },
        IsolatedFrom: {
            en: string,
            ru: string,
        },
        AnatomicPart: {
            en: string,
            ru: string,
        },
        Location: {
            en: string,
            ru: string,
        },
        Geographics: {
            en: string,
            ru: string,
        },
        Country: {
            en: string,
            ru: string,
        },
        USSR: string,
        CollectedBy: {
            en: string,
            ru: string,
        },
        CollectedDate: null | string,
        IsolationDate: string,
        IsolatedBy: {
            en: string,
            ru: string,
        },
        IsolateNumber: {
            en: string,
            ru: string,
        },
        IdentificateBy: {
            en: string,
            ru: string,
        },
        IdentificateDate: string,
    },
    CultivationAndStorage: {
        IncubationTemp: string,
        Tested_temperature_growth_range: string,
        GrowthMedium: string,
        GrowthCondition: {
            en: string,
            ru: string,
        },
        StorageMethods: string,
        StorageFreeze: string,
        StorageOil: string,
        StorageSilicagel: string,
        StorageWater: string,
        StorageNitrogen: string,
        StorageSubcultivation: string,
        StorageSoil: string,
    },
    StrainCharacteristics: {
        EnzymeProduction: {
            en: string,
            ru: string,
        },
        MetaboliteProduction: {
            en: string,
            ru: string,
        },
        Transformation: {
            en: string,
            ru: string,
        },
        Degradation: {
            en: string,
            ru: string,
        },
        Other: {
            en: string,
            ru: string,
        },
        MatingType: string,
        DNA_Sequence_Accession_Numbers: string,
    },
    GeneralInformation: {
        Latitude: string,
        Longitude: string,
        Altitude: string,
        Curator: string,
        Category: string,
        Restrictions_on_use: string,
        Remarks: string,
        EntryDate: string,
        EditDate: string,
        Reidentif: {
            en: string,
            ru: string,
        },
        Confidential_Information: string,
        Application: {
            en: string,
            ru: string,
        },
        Form_of_supply: string,
        Report2020: string,
        Report2021: string,
    }
}

export class Strain {    
    data: StrainData | StrainDataShort
    

    constructor(data: StrainData | StrainDataShort) {
        this.data = data;
    }

    static async fetchOne(query: string): Promise<Strain | null> {
        const response = (await import('../samples/response_to_one_strain.json')).default as StrainData;
        return new Strain(response);
    }

    static async search(query: string, limit: number, offset: number): Promise<Strain[]> {
        // const { data } = await api.get(`/strains/search/?q=${query}`);
        // return data.map((strain: StrainData) => new Strain(strain));

        const strain_id = Number(query);
        const response = (await import('../samples/response_to_strains_list.json')).default as StrainDataShort[];
        let filteredData: StrainDataShort[] = []
        if (Number.isNaN(strain_id)) {
            filteredData = filteredData.concat(response.filter(strain => (strain.Genus.toLowerCase() + ' ' + strain.Species?.toLowerCase()).includes(query.toLowerCase())));
        } else {
            filteredData = filteredData.concat(response.filter(strain => strain.strain_id === strain_id));
        }
        console.log(filteredData)
        return filteredData.map((strain: StrainDataShort) => new Strain(strain));
    }

}
