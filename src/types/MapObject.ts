export type MapObject<T = any, Deeper = true> = Deeper extends true
  ? { [key: string]: MapObject | T }
  : { [key: string]: T }
