import { Component, ViewChild } from '@angular/core';
import { Content } from 'ionic-angular';

/**
 * Generated class for the AccountSelectorComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'account-selector',
  templateUrl: 'account-selector.html'
})
export class AccountSelectorComponent {

  items = [
    '200000000012345600',
    '160000000012345600',
    '210000000012345600',
    '180000000012345600',
    '140000000012345600',
  ];
  @ViewChild(Content) content: Content;

  constructor() {
    console.log('Hello AccountSelectorComponent Component');
  }

  private itemSelected(item: string) {
    console.log("Selected Item", item);
  }
}
