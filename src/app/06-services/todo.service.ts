import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

export class TodoService {
	constructor(private http: HttpClient) {}

	add(todo) {
		return this.http.post('...', todo).pipe(map((r: Response) => r.json()));
	}

	getTodos() {
		return this.http.get('...').pipe(map((r: Response) => r.json()));
	}

	delete(id) {
		return this.http.delete('...').pipe(map((r: Response) => r.json()));
	}
}
