/**
 * Do not edit directly
 * Generated on Thu, 08 Dec 2022 06:01:25 GMT
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
        "body": DesignToken,
        "primary": DesignToken,
        "accent": DesignToken,
        "white": DesignToken,
        "place-holder": DesignToken,
        "disable": DesignToken
      }
    },
    "label": {
      "light": {
        "blue": DesignToken,
        "purple": DesignToken,
        "red": DesignToken,
        "green": DesignToken,
        "pink": DesignToken,
        "yellow": DesignToken,
        "orange": DesignToken,
        "gray": DesignToken
      }
    },
    "button": {
      "light": {
        "primary": {
          "default": DesignToken,
          "hover": DesignToken,
          "outline-border": DesignToken,
          "outline-hover": DesignToken,
          "light-hover": DesignToken,
          "disable": DesignToken
        },
        "basic": {
          "default": DesignToken,
          "hover": DesignToken,
          "outline-border": DesignToken,
          "outline-hover": DesignToken,
          "outline-disable": DesignToken,
          "disable": DesignToken
        },
        "danger": {
          "default": DesignToken,
          "hover": DesignToken,
          "outline-border": DesignToken,
          "outline-hover": DesignToken,
          "disable": DesignToken
        },
        "secondary": {
          "default": DesignToken,
          "hover": DesignToken,
          "outline-border": DesignToken,
          "outline-hover": DesignToken,
          "outline-disable": DesignToken,
          "disable": DesignToken
        },
        "accent": {
          "default": DesignToken,
          "hover": DesignToken,
          "outline-border": DesignToken,
          "outline-hover": DesignToken,
          "disable": DesignToken
        },
        "default-thema": {
          "default": DesignToken,
          "hover": DesignToken,
          "outline-border": DesignToken,
          "outline-hover": DesignToken,
          "outline-disable": DesignToken,
          "disable": DesignToken
        }
      }
    },
    "bland": {
      "cs-orange": DesignToken,
      "cs-lightgray": DesignToken,
      "cs-darkgray": DesignToken
    },
    "calender": {
      "light": {
        "weekday": DesignToken,
        "weekday-othermonth": DesignToken,
        "sunday": DesignToken,
        "sunday-othermonth": DesignToken,
        "saturday": DesignToken,
        "saturday-othermonth": DesignToken
      }
    },
    "icon": {
      "light": {
        "default": DesignToken,
        "primary": DesignToken,
        "secondary": DesignToken,
        "logic": DesignToken,
        "basic": DesignToken
      }
    },
    "background": {
      "light": {
        "white": DesignToken,
        "basic": {
          "primary": DesignToken,
          "secondary": DesignToken,
          "tertiary": DesignToken
        },
        "default": {
          "primary": DesignToken,
          "secondary": DesignToken,
          "tertiary": DesignToken
        }
      }
    },
    "border": {
      "light": {
        "basic": {
          "primary": DesignToken,
          "secondary": DesignToken,
          "tertiary": DesignToken
        },
        "default-thema": {
          "primary": DesignToken
        },
        "focus": DesignToken,
        "default": {
          "primary": DesignToken,
          "secondary": DesignToken
        }
      }
    },
    "status": {
      "danger": DesignToken,
      "notification": DesignToken
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
      "50": DesignToken,
      "100": DesignToken,
      "200": DesignToken,
      "400": DesignToken,
      "600": DesignToken,
      "500-primary": DesignToken
    },
    "orange": {
      "100": DesignToken,
      "200": DesignToken,
      "400": DesignToken,
      "500": DesignToken,
      "600": DesignToken
    },
    "darkblue": {
      "500": DesignToken
    },
    "turquoise": {
      "100": DesignToken,
      "200": DesignToken,
      "400": DesignToken,
      "500": DesignToken,
      "600": DesignToken
    },
    "yellow": {
      "200": DesignToken,
      "500": DesignToken
    },
    "red": {
      "100": DesignToken,
      "200": DesignToken,
      "300": DesignToken,
      "400": DesignToken,
      "500": DesignToken,
      "600": DesignToken
    },
    "azure": {
      "300": DesignToken,
      "400": DesignToken,
      "800": DesignToken
    },
    "purple": {
      "500": DesignToken
    },
    "green": {
      "500": DesignToken
    },
    "pink": {
      "500": DesignToken
    }
  },
  "spacing": {
    "xs": DesignToken,
    "s": DesignToken,
    "m": DesignToken,
    "l": DesignToken,
    "xl": DesignToken,
    "xxl": DesignToken,
    "xxxl": DesignToken,
    "standard": DesignToken
  },
  "border-width": {
    "1": DesignToken,
    "2": DesignToken,
    "s": DesignToken,
    "m": DesignToken
  },
  "typography": {
    "default": DesignToken,
    "size1": DesignToken,
    "size2": DesignToken,
    "size3": DesignToken,
    "size4": DesignToken,
    "size5": DesignToken,
    "size6": DesignToken,
    "size7": DesignToken
  },
  "font-weight": {
    "300": DesignToken,
    "600": DesignToken
  },
  "font-family": {
    "hiragino-kaku-gothic-pron": DesignToken
  },
  "font-size": {
    "10": DesignToken,
    "11": DesignToken,
    "13": DesignToken,
    "14": DesignToken,
    "15": DesignToken,
    "16": DesignToken,
    "18": DesignToken,
    "24": DesignToken,
    "32": DesignToken,
    "48": DesignToken,
    "22-primary": DesignToken
  },
  "line-height": {
    "standard": DesignToken
  }
}