/**
 * @author WMXPY
 * @namespace Weather_Dot_Gov
 * @description Steam
 */

import { WeatherDotGovAlertsAPI } from "./routes/alerts";

export class WeatherDotGovAPI {

    public static create(entity: string, email: string): WeatherDotGovAPI {

        return new WeatherDotGovAPI(entity, email);
    }

    private readonly _entity: string;
    private readonly _email: string;

    private constructor(entity: string, email: string) {

        this._entity = entity;
        this._email = email;
    }

    public createAlertsAPI(): WeatherDotGovAlertsAPI {

        return WeatherDotGovAlertsAPI.create(this._entity, this._email);
    }
}
