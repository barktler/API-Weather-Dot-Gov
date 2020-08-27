/**
 * @author WMXPY
 * @namespace Steam
 * @description Steam
 * @override Unit
 */

import { expect } from "chai";
import * as Chance from "chance";
import { WeatherDotGovAPI } from "../../src";

describe('Given {WeatherDotGovAPI} Class', (): void => {

    const chance: Chance.Chance = new Chance('barktler-weather-weather');

    it('should be able to construct', (): void => {

        const factory: WeatherDotGovAPI = WeatherDotGovAPI.create(chance.string());

        expect(factory).to.be.instanceOf(WeatherDotGovAPI);
    });
});
