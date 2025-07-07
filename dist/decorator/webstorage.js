import { WebStorageUtility } from "../utility/webstorage.utiltiy";
export function LocalStorage(key) {
    return WebStorage(localStorage, key || '');
}
export function SessionStorage(key) {
    return WebStorage(sessionStorage, key || '');
}
// initialization cache
const cache = {};
export const WebStorage = (webStorage, key) => {
    return (target, propertyName) => {
        key = key || propertyName;
        const storedValue = WebStorageUtility.get(webStorage, key);
        Object.defineProperty(target, propertyName, {
            get: function () {
                return WebStorageUtility.get(webStorage, key);
            },
            set: function (value) {
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
    };
};
//# sourceMappingURL=webstorage.js.map