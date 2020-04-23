import { OnInitialize } from "overmind";

export const onInitialize: OnInitialize = async ({ state, effects }) => {
  const initialConfig = await effects.api.getCurrentConfig(state.bridge);
  state.config = initialConfig;
};
