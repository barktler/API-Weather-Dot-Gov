/**
 * @author WMXPY
 * @namespace Weather_Dot_Gov
 * @description Steam
 */

export class WeatherDotGovAPI {

    public static create(email: string): WeatherDotGovAPI {

        return new WeatherDotGovAPI(email);
    }

    private readonly _email: string;

    private constructor(email: string) {

        this._email = email;
    }
}
