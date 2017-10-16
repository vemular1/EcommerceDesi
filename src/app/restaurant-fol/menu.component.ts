import { Component } from '@angular/core';
import { LocationPipe } from './category.pipe';
import { FormsModule } from '@angular/forms';
import { MenuService} from '../services/menu.service';
import{ActivatedRoute} from '@angular/router';
@Component({
  selector: 'menu-root',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
 providers: [MenuService]
})
export class MenuComponent {

 value: any = []; 
   constructor(private _MenuService: MenuService, private route:ActivatedRoute) { } 
   ngOnInit(): void {
        let menu = this.route.snapshot.params['menu'];
        console.log(menu);
      
  this._MenuService.getMenu(menu).subscribe(res => this.value = res);
   }
}

