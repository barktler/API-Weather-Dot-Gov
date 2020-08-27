/**
 * @author WMXPY
 * @namespace Weather_Dot_Gov_Declare
 * @description Owned Games
 */

import { GeoJsonPolygon } from "@sudoo/geometry";
import { Pattern } from "@sudoo/pattern";

export type WeatherAlertFeature = {

    readonly id: string;
    readonly geometry: GeoJsonPolygon | null;
    readonly properties: {
        readonly id: string;
        readonly areaDesc: string;
        readonly geocode: {
            readonly UGC: string[];
            readonly SAME: string[];
        };
        readonly sent: Date;
        readonly effective: Date;
        readonly onset: Date;
        readonly expires: Date;
        readonly ends: Date;
        readonly status: string;
        readonly messageType: string;
        readonly category: string;
        readonly severity: string;
        readonly certainty: string;
        readonly urgency: string;
        readonly event: string;
        readonly sender: string;
        readonly senderName: string;
        readonly headline: string;
        readonly description: string;
        readonly instruction: string;
        readonly response: string;
    };
};

export type WeatherAlertResponse = {

    readonly features: WeatherAlertFeature[];
};

export const WeatherAlertResponsePattern: Pattern = {

    type: 'map',
    strict: true,
    map: {
        features: {
            type: 'map',
            strict: true,
            map: {
                id: {
                    type: 'string',
                },
                geometry: {
                    type: 'any',
                },
                properties: {
                    type: 'map',
                    strict: true,
                    map: {
                        id: {
                            type: 'string',
                        },
                        areaDesc: {
                            type: 'string',
                        },
                        geocode: {
                            type: 'map',
                            strict: true,
                            map: {
                                UGC: {
                                    type: 'list',
                                    element: {
                                        type: 'string',
                                    },
                                },
                                SAME: {
                                    type: 'list',
                                    element: {
                                        type: 'string',
                                    },
                                },
                            },
                        },
                        sent: {
                            type: 'date',
                            allowString: true,
                        },
                        effective: {
                            type: 'date',
                            allowString: true,
                        },
                        onset: {
                            type: 'date',
                            allowString: true,
                        },
                        expires: {
                            type: 'date',
                            allowString: true,
                        },
                        ends: {
                            type: 'date',
                            allowString: true,
                        },
                        status: {
                            type: 'string',
                        },
                        messageType: {
                            type: 'string',
                        },
                        category: {
                            type: 'string',
                        },
                        severity: {
                            type: 'string',
                        },
                        certainty: {
                            type: 'string',
                        },
                        urgency: {
                            type: 'string',
                        },
                        event: {
                            type: 'string',
                        },
                        sender: {
                            type: 'string',
                        },
                        senderName: {
                            type: 'string',
                        },
                        headline: {
                            type: 'string',
                        },
                        description: {
                            type: 'string',
                        },
                        instruction: {
                            type: 'string',
                        },
                        response: {
                            type: 'string',
                        },
                    },
                },
            },
        },
    },
};
