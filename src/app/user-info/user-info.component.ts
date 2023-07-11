import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent {
  urlParam: string = '';
  altParam: string = '';
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.urlParam = this.route.snapshot.paramMap.get('userId') || '';
  }
}
