export class Document{
    fldId: number;
    id?: number;
    docName: string;
    dateItem: string;
    docDone: number = 0;

    constructor(fldId: number, 
                docName: string, dateItem: string, docDone: number, id?: number){
        this.fldId = fldId;
        this.id = id;
        this.docName = docName;
        this.dateItem = dateItem;
        this.docDone = docDone;
    }
}