import { Component,
				 OnInit,
				 Injectable }  
			from '@angular/core';

import { HttpClient }              from '@angular/common/http';
import { RouterModule, Router }    from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


@Injectable()
export class AppComponent implements OnInit {

	navLinks = [
		{ label: 'statics'		, path: '/'},
		{ label: 'report'			, path: '/'},
		{ label: 'setting'		, path: '/'},
		{ label: 'chat'				, path: '/'},
		{ label: 'profile'		, path: '/'}
	];

  constructor(
		private http    : HttpClient,
		public  router  : Router
  ) { }


  ngOnInit() {
  	drawer.toggle();
  }

}
