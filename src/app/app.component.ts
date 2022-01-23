import { Component, ComponentFactoryResolver, OnInit, ViewContainerRef } from '@angular/core';
import { LazyC1Component } from './Components/lazyC1/lazy-c1.component';
import { LazyC2Component } from './Components/lazyC2/lazy-c2.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';
  lazyC1Componet=LazyC1Component;
  
constructor(
  private cfr: ComponentFactoryResolver,
  private viewContainerRef: ViewContainerRef,
)
{
}
ngOnInit()
{
}
  async GetLazyComponent1(){
    //1.  Clear the container where the component is loaded
    this.viewContainerRef.clear() 
    // const {LazyC1Component}=await import('../lazyC1/lazy-c1.component'); // import the Lazy Component
    //2. Create The Component in ViweConitnerRef
    this.viewContainerRef.createComponent(
      this.cfr.resolveComponentFactory(LazyC1Component)
    );
  }
  async GetLazyComponent2(){
    //1.  Clear the container where the component is loaded
    this.viewContainerRef.clear() 
    // const {LazyC1Component}=await import('../lazyC1/lazy-c1.component'); // import the Lazy Component
    //2. Create The Component in ViweConitnerRef
    this.viewContainerRef.createComponent(
      this.cfr.resolveComponentFactory(LazyC2Component)
    );
  }
}
