import {
  IConfig,
  IOnInitialize,
  IAction,
  IOperator,
  IState,
  IDerive
} from "overmind";
import { createHook } from "overmind-react";
import { onInitialize } from "./onInitialize";
import { state } from "./state";
import * as actions from "./actions";
import * as effects from "./effects";

export const config = {
  onInitialize,
  state,
  actions,
  effects
};

type Config = IConfig<typeof config>;

declare module "overmind" {
  interface Config extends IConfig<typeof config> {}
}

export const useOvermind = createHook<typeof config>();

export interface OnInitialize extends IOnInitialize<Config> {}
export interface Action<Input = void> extends IAction<Config, Input> {}
export interface Operator<Input = void, Output = Input>
  extends IOperator<Config, Input, Output> {}
export interface Derive<Parent extends IState, Output>
  extends IDerive<Config, Parent, Output> {}
