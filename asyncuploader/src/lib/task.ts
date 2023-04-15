import Protocols from "./protocols";

enum UploadStatus{
    stopped = 0,
    uploading = 1,
    completed = 2,
    error = 3
}

export default class Task{
    protocol:Protocols;
    host:string;
    port:number;
    route:string;
    dataset:object = {};
    headerOptions:object = {};
    files:Array<any>;
    status:UploadStatus = UploadStatus.stopped;
    errorMessage:string;

    constructor(protocol:Protocols, host:string, port:number, route:string, dataset?:object, headerOptions?:object, files?:Array<any>){
        this.protocol = protocol;
        this.host = host;
        this.port = port;
        this.route = route;
        if(dataset){
            this.dataset = dataset;
        }
        if(headerOptions){
            this.headerOptions = headerOptions;
        }
        if(files){
            this.files
        }
    }

    addFile(file:any):void{
        this.files.push(file)
    }

    setUploadingStatus():void{
        this.status = UploadStatus.uploading;
    }

    setCompletedStatus():void{
        this.status = UploadStatus.completed;
    }

    setErrorStatus(message:string):void{
        this.status = UploadStatus.error;
        this.errorMessage = message;
    }

    getStatus():UploadStatus{
        return this.status
    }
}