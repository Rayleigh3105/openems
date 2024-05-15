// @ts-strict-ignore
import {Environment} from "src/environments";
import {theme} from "./theme";

window["env"] = window["env"] || {};

export const environment: Environment = {
  ...theme, ...{

    backend: 'OpenEMS Backend',
    url: window["env"]["websocket"] || "ws://" + location.hostname + ":8082",

    production: true,
    debugMode: false,
  },
};
