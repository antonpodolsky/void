export interface Atom {
  type: string;
  [key: string]: unknown;
}

export interface Thing {
  id: string;
  [key: string]: unknown;
}

export interface Reducer<T = Thing> {
  (thing: string): (state: T, atom: Atom) => T;
}