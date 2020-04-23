import { OnInitialize } from "overmind";

export const onInitialize: OnInitialize = async ({ state, effects }) => {
  state.config = await effects.api.getCurrentConfig(state.bridge);
  state.lightConfig = await effects.api.getCurrentLights(state.bridge);
};
