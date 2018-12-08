import { Injectable } from '@angular/core';
import { Observable, of, throwError, pipe } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { HttpApiService } from '../Shared/Services/http-api.service';
import { map, catchError } from 'rxjs/operators';
import * as PouchDB from 'pouchdb/dist/pouchdb';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class CaptureProductionService extends HttpApiService {

  data: any;
  db: any;
  remote: any;

  constructor(private http: HttpClient) {
    super();

    this.db = new PouchDB('olakoems');

    this.remote = 'http://localhost:5984/olakoems';

    const options = {
      live: true,
      retry: true,
      continuous: true
    };
    this.db.sync(this.remote, options);
  }

  Capture(todo) {
    this.db.post(todo);
  }

  // Capture(data): Observable<any> {
  //   const url = `${this.baseUrl}Register/`;
  //   return this.http.post(url, data, httpOptions)
  //     .pipe(
  //       map(this.extractData),
  //       catchError(this.handleError)
  //     );
  // }

  getEggs() {
    if (this.data) {
      // return Promise.resolve(this.data);
      return this.data;
    }
    return new Promise(resolve => {
      this.db.allDocs({
        include_docs: true
      }).then((result) => {
        this.data = [];

        const docs = result.rows.map((row) => {
          this.data.push(row.doc);
        });

        resolve(this.data);

        this.db.changes({live: true, since: 'now', include_docs: true}).on('change', (change) => {
          this.handleChange(change);
        });

      }).catch((error) => {

        console.log(error);

      });
    });
  }

  updateTodo(todo) {
    this.db.put(todo).catch((err) => {
      console.log(err);
    });
  }

  deleteTodo(todo) {
    this.db.remove(todo).catch((err) => {
      console.log(err);
    });
  }

  handleChange(change) {
    let changedDoc = null;
    let changedIndex = null;

    this.data.forEach((doc, index) => {
      if (doc._id === change.id) {
        changedDoc = doc;
        changedIndex = index;
      }

    });

    // A document was deleted
    if (change.deleted) {
      this.data.splice(changedIndex, 1);
    } else {

      // A document was updated
      if (changedDoc) {
        this.data[changedIndex] = change.doc;
      } else {
        this.data.push(change.doc);
      }
    }
  }
}
