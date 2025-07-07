import {NgModule} from "@angular/core";
import {LocalStorageService, SessionStorageService} from "./service/webstorage.service";

export * from './decorator/index'
export * from './service/index'
export * from './utility/index'

@NgModule({
    // Services are now provided in root via providedIn: 'root'
    providers: []
})
export class WebStorageModule {}
