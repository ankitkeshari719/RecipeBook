import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./header/header.component";
import { SharedModule } from "../shared/shared.module";
import { AppRoutingModule } from "../app.route.module";
import { ShoppingListService } from "../services/shopping-list.service";
import { RecipeService } from "../services/recipe.service";
import { DataStorageService } from "../shared/data-storage.service";
import { AuthService } from "../services/auth.service";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthIntercepter } from "../shared/auth.intercepter";
import { LoggingInterceptor } from "../shared/logging.intercepter";

@NgModule({
    declarations:[
        HomeComponent,
        HeaderComponent
    ],
    imports:[
        SharedModule,
        AppRoutingModule
    ],
    exports:[
        AppRoutingModule,
        HeaderComponent
    ],
    providers:[
        ShoppingListService,RecipeService, DataStorageService,AuthService,
        {provide: HTTP_INTERCEPTORS,useClass:AuthIntercepter, multi:true},
        {provide: HTTP_INTERCEPTORS,useClass:LoggingInterceptor, multi:true},
    ]
})
export class CoreModule{

}