const KEY_PREFIX = "angular2ws";
export class WebStorageUtility {
    static generateStorageKey(key) {
        return `${KEY_PREFIX}_${key}`;
    }
    static get(storage, key) {
        const storageKey = WebStorageUtility.generateStorageKey(key);
        const value = storage.getItem(storageKey);
        return value ? WebStorageUtility.getGettable(value) : null;
    }
    static set(storage, key, value) {
        const storageKey = WebStorageUtility.generateStorageKey(key);
        storage.setItem(storageKey, WebStorageUtility.getSettable(value));
    }
    static remove(storage, key) {
        const storageKey = WebStorageUtility.generateStorageKey(key);
        storage.removeItem(storageKey);
    }
    static getSettable(value) {
        return typeof value === "string" ? value : JSON.stringify(value);
    }
    static getGettable(value) {
        try {
            return JSON.parse(value);
        }
        catch (e) {
            return value;
        }
    }
}
//# sourceMappingURL=webstorage.utiltiy.js.map