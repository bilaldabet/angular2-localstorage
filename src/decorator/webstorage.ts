import {WebStorageUtility} from "../utility/webstorage.utiltiy";

export function LocalStorage(key?: string) {
    return WebStorage(localStorage, key || '');
}

export function SessionStorage(key?: string) {
    return WebStorage(sessionStorage, key || '');
}

// initialization cache
const cache: { [key: string]: boolean } = {};

export const WebStorage = (webStorage: Storage, key: string) => {
    return (target: object, propertyName: string): void => {
        key = key || propertyName;

        const storedValue = WebStorageUtility.get(webStorage, key);

        Object.defineProperty(target, propertyName, {
            get: function() {
                return WebStorageUtility.get(webStorage, key);
            },
            set: function(value: any) {
                if (!cache[key]) {
                    // first setter handle
                    if (storedValue === null) {
                        // if no value in localStorage, set it to initializer
                        WebStorageUtility.set(webStorage, key, value);
                    }

                    cache[key] = true;
                    return;
                }

                WebStorageUtility.set(webStorage, key, value);
            },
        });
    }
}
