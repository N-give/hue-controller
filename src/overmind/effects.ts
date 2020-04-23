import { Bridge, HConfig } from "./state";

export const api = {
  async getCurrentConfig(bridge: Bridge): Promise<HConfig> {
    return fetch(`http://${bridge.ip}/api/${bridge.apiKey}/config`).then(
      response => {
        return response.json();
      }
    );
  }
};
