/**
 * @author WMXPY
 * @namespace Weather_Dot_Gov_Route
 * @description Alerts
 */

import { Barktler } from "@barktler/core";
import { GeoJsonPolygon, reverseGeoJsonPolygonTuples } from "@sudoo/geometry";
import { WeatherAlertFeature, WeatherAlertResponse, WeatherAlertResponsePattern } from "../declare/alerts";

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

    public async fetchByState(state: string): Promise<WeatherAlertFeature[]> {

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

        const features: WeatherAlertFeature[] = [];
        for (const feature of response.features) {

            const geometry: GeoJsonPolygon | null = feature.geometry
                ? reverseGeoJsonPolygonTuples(feature.geometry)
                : null;

            features.push({
                ...feature,
                geometry,
                properties: {
                    id: feature.properties.id,
                    areaDesc: feature.properties.areaDesc,
                    geocode: feature.properties.geocode,
                    status: feature.properties.status,
                    messageType: feature.properties.messageType,
                    category: feature.properties.category,
                    severity: feature.properties.severity,
                    certainty: feature.properties.certainty,
                    urgency: feature.properties.urgency,
                    event: feature.properties.event,
                    sender: feature.properties.sender,
                    senderName: feature.properties.senderName,
                    headline: feature.properties.headline,
                    description: feature.properties.description,
                    instruction: feature.properties.instruction,
                    response: feature.properties.response,
                    sent: new Date(feature.properties.sent),
                    effective: new Date(feature.properties.effective),
                    onset: new Date(feature.properties.onset),
                    expires: new Date(feature.properties.expires),
                    ends: new Date(feature.properties.ends),
                },
            });
        }

        return features;
    }
}
