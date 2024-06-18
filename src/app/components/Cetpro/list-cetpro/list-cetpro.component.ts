import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ExportAsConfig, ExportAsService } from 'ngx-export-as';
import { ToastrService } from 'ngx-toastr';
import { Cetpro } from 'src/app/interfaces/Cetpro';
import { ApiService } from 'src/app/service/api-service.service';

@Component({
  selector: 'app-list-cetpro',
  templateUrl: './list-cetpro.component.html',
  styles: [
  ]
})
export class ListCetproComponent {
  @Input() data: Cetpro[] = [];
  @Output() editItemEvent = new EventEmitter<Cetpro>();
  @Output() changeStateEvent = new EventEmitter<string>();

  constructor(
    private apiService: ApiService,
    private toast: ToastrService,
    private exportService: ExportAsService
  ) { }

  onEditClick(item: Cetpro) {
    this.editItemEvent.emit(item);
  }

  deleteItem(id: string) {
    this.apiService.deleteData(id).subscribe(
      () => {
        this.changeStateEvent.emit('deleted');
        this.toast.success('Eliminación exitosa', 'Éxito');
      }
    );
  }

  restoreItem(id: string) {
    this.apiService.restoreData(id).subscribe(
      () => {
        this.changeStateEvent.emit('restored');
        this.toast.success('Reactivación exitosa', 'Éxito');
      }
    );
  }

  exportData(typeData: any): void {
    const config: ExportAsConfig = {
      type: typeData,
      elementIdOrContent: 'table',
      options: {
        orientation: 'landscape',
      }
    }

    const fileName = 'cetpros';
    this.exportService.save(config, fileName).subscribe(() => {
      this.toast.success('Exportación exitosa', 'Éxito');
    });

  }
}
