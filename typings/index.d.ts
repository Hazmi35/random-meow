declare module 'random-meow' {
    import { IncomingHttpHeaders, RequestOptions } from "http";

    /**
    * Get a random cat image
    * @returns {Promise<string>} A promise that contains url to the image
    */
    function meow(): Promise<String>;

    function get(url: string, options: RequestOptions): Promise<{ method: "GET", reqOptions: RequestOptions, raw: string, body: any,status: number, headers: IncomingHttpHeaders }>;

    export default Object.assign(meow, {get});
}