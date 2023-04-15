export default class RequestResponse{
    response:object | string;
    statusCode:number;

    constructor(response:object | string, statusCode:number){
        this.response = response;
        this.statusCode = statusCode;
    }

    /**
     * Get request's response dataset.
     * @returns Request's response.
     */
    getResponse():object | string{
        return this.response;
    }

    /**
     * Get request's status code.
     * @returns Request's status code.
     */
    getStatusCode():number{
        return this.statusCode
    }
}