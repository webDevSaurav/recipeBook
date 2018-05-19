import {Directive, HostBinding, HostListener} from "@angular/core"
@Directive({
  selector : "[appDropdown]"
})
export class DropDownDirective{
  //  @HostBinding('style.display') display : string = "none"

   constructor(){

    }
   @HostListener("click") toggleOpen(){
     
  //  if(this.display == "none"){
  //   this.display = "block"
  //  } else if(this.display == "block"){
  //    this.display = "none"
  //  }
  }
  
}