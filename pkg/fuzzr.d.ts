/* tslint:disable */
/* eslint-disable */
/**
*/
export class Fuzzr {
  free(): void;
/**
* @param {any} items
* @param {object | undefined} options
*/
  constructor(items: any, options?: object);
/**
* @param {string} query
* @returns {Array<any>}
*/
  search(query: string): Array<any>;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_fuzzr_free: (a: number) => void;
  readonly fuzzr_new: (a: number, b: number) => number;
  readonly fuzzr_search: (a: number, b: number, c: number) => number;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number) => number;
  readonly __wbindgen_exn_store: (a: number) => void;
}

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
        