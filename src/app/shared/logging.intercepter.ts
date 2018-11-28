import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { tap, map } from 'rxjs/operators';
export class LoggingInterceptor implements HttpInterceptor{

    intercept( req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        return next.handle(req).pipe(tap(
            event =>{ console.log('Logging Intercepter', event)}
        ))
    }
}