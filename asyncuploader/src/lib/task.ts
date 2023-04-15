import Protocols from "./protocols";
import RequestResponse from "./requestResponse";

/**
 * Upload's status enum.
 */
enum UploadStatus{
    stopped = 0,
    uploading = 1,
    completed = 2,
    error = 3
}

/**
 * Task's class.
 */
export default class Task{
    protocol:Protocols;
    host:string;
    port:number;
    route:string;
    dataset:object = {};
    headerOptions:object = {};
    files:Array<any> = [];
    status:UploadStatus = UploadStatus.stopped;
    requestResponse: RequestResponse;

    /**
     * Task's constructor.
     * @param protocol Protocol type
     * @param host Host's name or IP
     * @param port Host's port.
     * @param route Route to Upload.
     * @param dataset Request's dataset.
     * @param headerOptions Request's header parameters. (Optional)
     * @param files Files. (Optional in constructor, but necessary to upload data)
     */
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

    /**
     * Add file to send.
     * @param file File to send.
     */
    addFile(file:any):void{
        this.files.push(file)
    }

    /**
     * Add Multile files to send.
     * @param files Files to send.
     */
    addFiles(files:Array<any>):void{
        this.files.concat(files)
    }

    /**
     * Remove a file from file's stack using id.
     * @param fileId File id stack.
     */
    removeFile(fileId:Number):any{
        this.files = this.files.filter((value,idx)=> idx!==fileId);
    }

    /**
     * Remove all files in file's stack
     */
    removeAllFiles():void{
        this.files = [];
    }

    /**
     * Set uploading status.
     */
    setUploadingStatus():void{
        this.status = UploadStatus.uploading;
    }

    /**
     * Set completed status.
     */
    setCompletedStatus():void{
        this.status = UploadStatus.completed;
    }

    /**
     * Set error status.
     */
    setErrorStatus():void{
        this.status = UploadStatus.error;
    }

    /**
     * Get upload status.
     * @returns UploadStatus as upload status.
     */
    getStatus():UploadStatus{
        return this.status
    }

    /**
     * Get request response. By default response is undefined, after upload manager run, it set upload response.
     * @returns RequestResponse as upload response.
     */
    getRequestResponse():RequestResponse{
        return this.requestResponse
    }
}