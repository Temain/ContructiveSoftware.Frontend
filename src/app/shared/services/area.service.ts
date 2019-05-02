import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

import { BaseService } from './base.service';
import { Area } from '../models/area';

@Injectable({
    providedIn: 'root'
})
export class AreaService extends BaseService {

    private apiUri: string;

    constructor(private http: HttpClient) {
      super();
    }

    getAreas(searchPattern: string): Observable<Area[]> {
        let params = new HttpParams();
        if (searchPattern) {
          params = params.set('searchPattern', searchPattern);
      }

        return this.http.get<Area[]>(this.apiUri + '/areas', { params });
    }

    getArea(id: number): Observable<Area> {
        return this.http.get<Area>(this.apiUri + '/areas/' + id.toString());
    }

    editArea(area: Area): Observable<Area> {
        const body = JSON.stringify(area);
        const uri = environment.apiUri + '/areas/' + area.id;
        return this.http.put<Area>(uri, body);
    }
}
