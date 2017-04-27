export class Folder {
    id: number;
    name: string;
    isChildren: boolean = false;
    rootId: number;
    typeFolder: string;
     
    constructor(id: number, name: string,
                isChildren: boolean = false, rootId: number, typeFolder:string){
        this.id = id;
        this.name = name;
        this.isChildren = isChildren;
        this.rootId = rootId;
        this.typeFolder = typeFolder;
    }
}
