# Angular15 LocalStorage

This Angular/TypeScript decorator makes it super easy to save and restore *automatically* a variable state in your
component (class property) using HTML5' LocalStorage.

**Modern Angular 15+ Fork** - This is a modernized fork of the original `angular2-localstorage` package, updated to support Angular 15+ with modern TypeScript features and best practices.

## Credits

This package is a modernized fork of the excellent [angular2-localstorage](https://github.com/marcj/angular2-localstorage) library by **Marc J. Schmidt**.

### Original Author
- **Marc J. Schmidt** - Original creator and maintainer of `angular2-localstorage`
- Original repository: https://github.com/marcj/angular2-localstorage

### What's Different in This Fork
- ✅ **Angular 15+ Support**: Updated to work with modern Angular versions
- ✅ **Modern TypeScript**: Uses latest TypeScript features and strict mode
- ✅ **ESLint**: Replaced deprecated TSLint with modern ESLint
- ✅ **providedIn: 'root'**: Uses modern Angular service registration
- ✅ **Updated Dependencies**: All dependencies updated to latest versions
- ✅ **Improved Type Safety**: Better TypeScript types and error handling

All core functionality and API remain the same as the original library, ensuring easy migration.

## 🔄 Migrating from `angular2-localstorage`

If you're currently using the original `angular2-localstorage` package, migration is simple:

1. **Uninstall the old package:**
   ```bash
   npm uninstall angular2-localstorage
   ```

2. **Install this package:**
   ```bash
   npm install angular15-localstorage
   ```

3. **Update your imports:**
   ```typescript
   // Before
   import {LocalStorage, SessionStorage} from "angular2-localstorage";
   
   // After
   import {LocalStorage, SessionStorage} from "angular15-localstorage";
   ```

4. **Remove explicit service providers** (if you were manually providing them):
   ```typescript
   // Before (remove this)
   providers: [LocalStorageService, SessionStorageService]
   
   // After (services are now auto-provided)
   // No need to manually provide services
   ```

**That's it!** All your existing `@LocalStorage()` and `@SessionStorage()` decorators will continue to work exactly as before.

## Use

1. Download the library using npm: `npm install --save angular15-localstorage`
2. Import the WebStorageModule in your app module:
    ```typescript
    import {NgModule} from "@angular/core";
    import {WebStorageModule, LocalStorageService} from "angular15-localstorage";

    @NgModule({
        imports: [WebStorageModule]
        // Note: Services are now provided automatically via providedIn: 'root'
    })
    export class AppModule {}
    ```


3. Use the `LocalStorage` decorator
```typescript
import {LocalStorage, SessionStorage} from "angular15-localstorage";

class MySuperComponent {
    @LocalStorage() public lastSearchQuery:Object = {};
    @LocalStorage('differentLocalStorageKey') public lastSearchQuery:Object = {};
}
```

**Note**: Define always a default value at the property you are using `@LocalStorage`.

**Note**: The localstorage key is per default the property name. Define the first argument of `@LocalStorage` to set different one.

**Note**: Please don't store circular structures as this library uses JSON.stringify to encode before using LocalStorage.

## Examples

```typescript
@Component({
    selector: 'app-login',
    template: `
<form>
    <div>
        <input type="text" [(ngModel)]="username" placeholder="Username" />
        <input type="password" [(ngModel)]="password" placeholder="Password" />
    </div>
    
    <input type="checkbox" [(ngModel)]="rememberMe" /> Keep me logged in

    <button type="submit">Login</button>
</form>
    `
})
class AppLoginComponent {
    //here happens the magic. `username` is always restored from the localstorage when you reload the site
    @LocalStorage() public username:string = '';
    
    public password:string;
    
    //here happens the magic. `rememberMe` is always restored from the localstorage when you reload the site
    @LocalStorage() public rememberMe:boolean = false;
}
```


```typescript
@Component({
    selector: 'admin-menu',
    template: `
<div *ngFor="#menuItem of menuItems() | mapToIterable; #i = index">
    <h2 (click)="hiddenMenuItems[i] = !!!hiddenMenuItems[i]">
        {{i}}: {{category.label}}
    </h2>
    <div style="padding-left: 15px;" [hidden]="hiddenMenuItems[i]">
        <a href>Some sub menu item 1</a>
        <a href>Some sub menu item 2</a>
        <a href>Some sub menu item 3</a>
    </div>
</div>
    `
})
class AdminMenuComponent {
    public menuItems = [{title: 'Menu1'}, {title: 'Menu2'}, {title: 'Menu3'}];

    //here happens the magic. `hiddenMenuItems` is always restored from the localstorage when you reload the site
    @LocalStorage() public hiddenMenuItems:Array<boolean> = [];
    
    //here happens the magic. `profile` is always restored from the sessionStorage when you reload the site from the current tab/browser. This is perfect for more sensitive information that shouldn't stay once the user closes the browser.
    @SessionStorage() public profile:any = {};
}
```

## License

ISC License - Same as the original `angular2-localstorage` package.

This fork maintains the same license as the original work by Marc J. Schmidt.
