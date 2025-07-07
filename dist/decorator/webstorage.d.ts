export declare function LocalStorage(key?: string): (target: object, propertyName: string) => void;
export declare function SessionStorage(key?: string): (target: object, propertyName: string) => void;
export declare const WebStorage: (webStorage: Storage, key: string) => (target: object, propertyName: string) => void;
