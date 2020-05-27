export interface State {
  title: string;
  bridge: Bridge;
  config?: HueConfig;
  lightConfig?: LightConfig;
}

export interface Bridge {
  ip: string;
  apiKey: string;
}

export interface HueConfig {
  name: string;
  zigbeechannel: number;
  bridgeid: string;
  mac: string;
  dhcp: boolean;
  ipaddress: string;
  netmask: string;
  gateway: string;
  proxyaddress: string;
  proxyport: number;
  UTC: Date;
  localtime: Date;
  timezone: string;
  modelid: string;
  datastoreversion: string;
  swversion: string;
  apiversion: string;
  swupdate: {
    updatestate: number;
    checkforupdate: boolean;
    devicetypes: {
      bridge: boolean;
      lights: number[];
      sensors: number[];
    };
    url: string;
    text: string;
    notify: boolean;
  };
  swupdate2: {
    checkforupdate: boolean;
    lastchange: Date;
    bridge: {
      state: string;
      lastinstall: Date;
    };
    state: string;
    autoinstall: {
      updatetime: string;
      on: boolean;
    };
  };
  linkbutton: boolean;
  portalservices: boolean;
  portalconnection: string;
  portalstate: {
    signedon: boolean;
    incoming: boolean;
    outgoing: boolean;
    communication: string;
  };
  internetservices: {
    internet: string;
    remoteaccess: string;
    time: string;
    swupdate: string;
  };
  factorynew: boolean;
  // replacesbridgeid: null,
  backup: {
    status: string;
    errorcode: number;
  };
  starterkitid: string;
  whitelist: {
    [key: string]: {
      'last use date': Date;
      'create date': Date;
      name: string;
    };
  };
}

export interface LightConfig {
  [key: string]: {
    state: LightState;
    swupdate: {
      state: string;
      lastinstall: Date;
    };
    type: string;
    name: string;
    modelid: string;
    manufacturername: string;
    productname: string;
    capabilities: {
      certified: boolean;
      control: {
        mindimlevel: number;
        maxlumen: number;
        colorgamuttype: string;
        colorgamut: number[][];
        ct: {
          min: number;
          max: number;
        };
      };
      streaming: {
        renderer: boolean;
        proxy: boolean;
      };
    };
    config: {
      archetype: string;
      function: string;
      direction: string;
      startup: {
        mode: string;
        configured: boolean;
      };
    };
    uniqueid: string;
    swversion: string;
    swconfigid: string;
    productid: string;
  };
}

export interface LightState {
  on: boolean;
  bri: number;
  hue: number;
  sat: number;
  effect: string;
  xy: number[];
  ct: number;
  alert: string;
  colormode: string;
  mode: string;
  reachable: boolean;
}

export const state: State = {
  title: 'Hue Dev Controller',
  bridge: {
    ip: '192.168.0.185',
    apiKey: 'IAS6AADWD1OOGGIZsMMzNwxDoFt8t5pI13rN2COO'
  }
};
