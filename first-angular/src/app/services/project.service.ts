import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Observable } from "rxjs"
import { Project } from "../models/Project";
import { Global } from "./global";

@Injectable()
export class ProjectService {
    public url: string;

    constructor(
        private _http: HttpClient
    ){
        this.url = Global.url
    }

    tetService(){
        return "Probando servicio de Angular"
    }

    saveProject(project: Project): Observable<any> {
        let params = JSON.stringify(project)
        let headers = new HttpHeaders().set('Content-Type', 'application/json')

        return this._http.post(this.url + '/save-project', params, {headers: headers})
    }
}