import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log(req);
        console.log('header', req.headers.has('Test'));
        const token = "ABCDEFG";
        const modifiedReq = req.clone({
            headers: req.headers
            .set("Authorization", `Bearer ${token}`)
            .set("Token", `Token_Value`)
        });
        console.log('header', modifiedReq.headers.keys());
        return next.handle(modifiedReq);
    }
}