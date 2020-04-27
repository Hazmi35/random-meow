declare module 'random-meow' {
    import { IncomingHttpHeaders, RequestOptions } from "http";

    /**
    * Get a random cat image
    * @returns {Promise<string>} A promise that contains url to the image
    */
    export default function meow(): Promise<String>;

    /**
    * Creates a GET request (Internal Function - NO SUPPORT OUTSIDE RANDOM-MEOW)
    * @param {String} url Url
    * @param {RequestOptions | object} [options] nodejs "https" options
    * @returns {Promise<object>} A Promise containing response
    * @private
    */
    export function get(url: string, options: RequestOptions): Promise<{ method: "GET", reqOptions: RequestOptions, raw: string, body: any,status: number, headers: IncomingHttpHeaders }>;
}