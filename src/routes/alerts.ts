/**
 * @author WMXPY
 * @namespace Weather_Dot_Gov_Route
 * @description Alerts
 */

import { Barktler } from "@barktler/core";
import { WeatherAlertResponse, WeatherAlertResponsePattern } from "../declare/alerts";

export class WeatherDotGovAlertsAPI extends Barktler<any, WeatherAlertResponse> {

    public static create(email: string): WeatherDotGovAlertsAPI {

        return new WeatherDotGovAlertsAPI(email);
    }

    private readonly _email: string;

    private constructor(email: string) {

        super();

        this._email = email;
        super._declareResponseDataPattern(WeatherAlertResponsePattern);
    }

    public async fetchByState(state: string): Promise<WeatherAlertResponse> {

        const response: WeatherAlertResponse = await this._requestForData({

            url: 'https://api.weather.gov/alerts/active',
            method: 'GET',
            headers: {
                'User-Agent': this._email,
            },
            params: {
                area: state,
            },
        });
        return response;
    }
}
