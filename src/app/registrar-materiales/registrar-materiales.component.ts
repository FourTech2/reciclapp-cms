import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-registrar-materiales',
  templateUrl: './registrar-materiales.component.html',
  styleUrls: ['./registrar-materiales.component.scss']
})
export class RegistrarMaterialesComponent implements OnInit {

  config: any;
  collection = { count: 0, data: [] }
  
  closeResult = '';

  materialForm: FormGroup;

  constructor(
    private modalService: NgbModal,
    public fb: FormBuilder
    ) {}


  ngOnInit(): void {

    this.config ={
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.collection.data.length
    };

    this.materialForm = this.fb.group({

      id: ['', Validators.required],
      material: ['', Validators.required],
      puntos: ['', Validators.required]

    })

    for (var i=0; i < this.collection.count; i++){
      this.collection.data.push({
        id: i,
        material: "material" + i,
        puntos: "puntos" + i
      })
    }


  }

  pageChanged(event){
    this.config.currentPage = event;
  }

  eliminar(item:any): void{
   // this.collection.data.pop(item);
  }

  guardarMaterial(item):void{
    this.collection.data.push(this.materialForm.value);
    this.materialForm.reset();
    this.modalService.dismissAll();
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
