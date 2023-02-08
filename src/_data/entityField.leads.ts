export const typeLeads = `
export type ILead = {
    id?: string;
    title: string;
    leadName: string;
    leadCompanyName: string;
    leadEmail?: string;
    leadPhoneNumber?: string;
    leadNotes?: string;
    source: ILeadSource;
    sourceId?: string;
    status: ILeadStatus;
    statusDate: string;
    endDate?: string;
    description: string;
    personId: string;
    nextVisitDate: string;
    tags: string[];
    dataTags: string[];
    extraParams?: Json;
};
`;
