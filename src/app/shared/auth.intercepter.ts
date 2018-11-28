import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { AuthService } from "../services/auth.service";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthIntercepter implements HttpInterceptor {
    constructor(private authService: AuthService) { };

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("Intercepter", req);
        const cloneReq = req.clone({ params: req.params.set('auth', this.authService.getToken()) });
        return next.handle(cloneReq);
    }
}