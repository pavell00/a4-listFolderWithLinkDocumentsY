export class Journal{
    docId: number;
    id: number;
    entName: string;
    jQty: number;
    jPrice: number;
    jSum: number;
    jTrNo: number;
    jLnNo: number;
    jEnt: number;

    constructor(docId: number, id: number,
                entName: string, jQty: number,
                jPrice: number, jSum: number,
                jTrNo: number, jLnNo: number,
                jEnt: number){
        this.docId = docId;
        this.id = id;
        this.entName = entName;
        this.jQty = jQty;
        this.jPrice = jPrice;
        this.jSum = jSum;
        this.jTrNo = jTrNo;
        this.jLnNo = jLnNo;
        this.jEnt = jEnt;
    }    
}