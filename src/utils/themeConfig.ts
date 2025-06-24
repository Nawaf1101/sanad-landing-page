// themeConfig.ts
import { createSystem, defaultConfig } from "@chakra-ui/react";

export const system = createSystem(defaultConfig, {
  theme:{
    tokens:{
      fonts: {
        body:{value:"DINNext"},
        heading:{value:"DINNext"}
      }
    }
  },
  
})
