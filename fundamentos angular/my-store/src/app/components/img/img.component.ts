import { Component, OnInit, Input, Output,EventEmitter,
         OnChanges, AfterViewInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges,
 AfterViewInit {

  img: string ='';
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('img')
  set chandeImg(newImg: string) {
    this.img= newImg;
    console.log('Change just img =>' , this.img);  
    //code  
  };
  @Output() loaded = new EventEmitter<string>();
  imageDefault = 'https://picsum.photos/200';
  counter = 0;
  copunterFn: number | undefined;

  constructor() { 
    //before render
    //run once
    console.log('constructor', 'imageValue=>', this.img);    
  }

  ngOnChanges(){
    //for inputs updates
    //run multiple times
    console.log('onChanges', 'imageValue=>', this.img); 
    
  }

  ngOnInit(): void {
    //don't run inputs
    //run once - async
    console.log('ngOnInit', 'imageValue=>', this.img); 
    /* this.copunterFn =window.setInterval(() =>{
      this.counter += 1;
      console.log('run counter'); 
    },1000) */
  } 

  ngAfterViewInit() {
    //handler children
    //after run 
    console.log('AfterViewInit'); 
  }

  //ngOnDestroy(){
    //delete component
    /* console.log('Ondestroy');
    window.clearInterval(this.copunterFn); */
  //}

  imgError(){
    this.img = this.imageDefault;
  }

  imgLoaded(){
    console.log('log interno');
    this.loaded.emit(this.img);
  }

}
