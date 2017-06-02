export class Document{
    fldId: number;
    id?: number;
    docName: string;
    docDate: string;
    docDone: number = 0;

    constructor(fldId: number, docName: string, docDate: string,
                 docDone: number, id?: number){
        this.fldId = fldId;
        this.id = id;
        this.docName = docName;
        this.docDate = docDate;
        this.docDone = docDone;
    }
}