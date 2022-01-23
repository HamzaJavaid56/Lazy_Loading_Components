import { Component, ComponentFactoryResolver, OnInit, ViewContainerRef } from '@angular/core';

import {LazyC1Component} from '../lazyC1/lazy-c1.component'


@Component({
  templateUrl: './lazy-c2.component.html',
  styleUrls: ['./lazy-c2.component.css']
})
export class LazyC2Component implements OnInit {

  constructor(
    
  ) { }

  ngOnInit(): void {
  }

  

}
