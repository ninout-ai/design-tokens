/**
 * Do not edit directly
 * Generated on Sat, 26 Nov 2022 12:10:05 GMT
 */

export default tokens;

declare interface DesignToken {
  value: any;
  name?: string;
  comment?: string;
  themeable?: boolean;
  attributes?: {
    category?: string;
    type?: string;
    item?: string;
    subitem?: string;
    state?: string;
    [key: string]: any;
  };
  [key: string]: any;
}

declare const tokens: {
  "tokenSetOrder": {
    "0": DesignToken,
    "1": DesignToken
  },
  "color": {
    "text": {
      "light": {
        "body": DesignToken
      }
    },
    "white": DesignToken,
    "black": DesignToken,
    "gray": {
      "50": DesignToken,
      "100": DesignToken,
      "200": DesignToken,
      "300": DesignToken,
      "400": DesignToken,
      "500": DesignToken,
      "600": DesignToken,
      "700": DesignToken,
      "750": DesignToken,
      "800": DesignToken,
      "900": DesignToken
    },
    "brand": {
      "cs-lightgray": DesignToken,
      "cs-orange": DesignToken,
      "cs-darkgray": DesignToken
    },
    "blue": {
      "500-primary": DesignToken
    }
  }
}