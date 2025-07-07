var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import { WebStorageUtility } from "../utility/webstorage.utiltiy";
export class WebStorageService {
    constructor(storage) {
        this.storage = storage;
    }
    get(key) {
        return WebStorageUtility.get(this.storage, key);
    }
    set(key, value) {
        WebStorageUtility.set(this.storage, key, value);
    }
    remove(key) {
        WebStorageUtility.remove(this.storage, key);
    }
    clear() {
        this.storage.clear();
    }
}
let LocalStorageService = class LocalStorageService extends WebStorageService {
    constructor() {
        super(localStorage);
    }
};
LocalStorageService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [])
], LocalStorageService);
export { LocalStorageService };
let SessionStorageService = class SessionStorageService extends WebStorageService {
    constructor() {
        super(sessionStorage);
    }
};
SessionStorageService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [])
], SessionStorageService);
export { SessionStorageService };
//# sourceMappingURL=webstorage.service.js.map