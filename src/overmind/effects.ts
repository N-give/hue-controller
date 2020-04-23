import { Bridge, HueConfig, LightConfig } from './state';

export const api = {
  async getCurrentConfig(bridge: Bridge): Promise<HueConfig> {
    return fetch(`http://${bridge.ip}/api/${bridge.apiKey}/config`).then(
      (res) => {
        return res.json();
      }
    );
  },
  async getCurrentLights(bridge: Bridge): Promise<LightConfig> {
    return fetch(`http://${bridge.ip}/api/${bridge.apiKey}/lights`).then(
      (res) => {
        return res.json();
      }
    );
  }
};
