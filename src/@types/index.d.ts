import React from 'react'

declare global {
  type WithChildren<T = unknown> = T & { children?: React.ReactNode }
  namespace NodeJS {
    interface Global {
      __DEV__: boolean
    }
  }
}
