export class Document{
    fldId: number;
    id?: number;
    docName: string;
    dateItem: string;
    isDone: number = 0;

    constructor(fldId: number, 
                docName: string, dateItem: string, isDone: number, id?: number){
        this.fldId = fldId;
        this.id = id;
        this.docName = docName;
        this.dateItem = dateItem;
        this.isDone = isDone;
    }
}