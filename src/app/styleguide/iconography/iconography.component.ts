import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { Http } from '@angular/http';

@Component({
    styleUrls: ['./iconography.component.scss'],
    templateUrl: './iconography.component.html',
})
export class StyleguideIconographyComponent implements OnInit {
    isValueChanged = true;
    public iconToCopy: string = 'icon-app_home';
    public copied: boolean = false;
    public iconCopiedString: string = '<ui-icon [name]="icon-app_home"></ui-icon>';
    @ViewChild('elementToCopy') elementToCopy;
    private dom: Document;
    private textarea: any;
    private iconLibrary: any;
    constructor(
        @Inject( DOCUMENT ) dom: Document,
        private http: Http,
    ) {
        this.dom = dom;
    }

    ngOnInit() {
        this.getIcons();
        // test ngClass propagate within ui-icon
        setTimeout(() => {
            this.isValueChanged = false;
        }, 5000);
    }

    byFunction () {
        return this.isValueChanged;
    }

    getIcons() {
        this.http.get('../../../assets/fonts/selection.json')
            .map((res) => res.json())
            .subscribe(
                (data) => {
                    this.iconLibrary = data.icons;
                });
    }

    copyIcon(val) {
        this.copied = false;
        this.textarea = this.dom.createElement( 'textarea' );
        this.textarea.style.height = '0px';
        this.textarea.style.left = '-100px';
        this.textarea.style.opacity = '0';
        this.textarea.style.position = 'fixed';
        this.textarea.style.top = '-100px';
        this.textarea.style.width = '0px';
        this.dom.body.appendChild( this.textarea );
        val = "'" + val + "'"; /// yeah, we are really doing this
        this.textarea.value = '<ui-icon [name]="' + val + '"></ui-icon>';
        this.textarea.select();
        this.iconToCopy = val;
        this.iconCopiedString = this.textarea.value ;
        this.copier();
        setTimeout(() => {
            if ( this.textarea && this.textarea.parentNode ) {
                this.textarea.parentNode.removeChild( this.textarea );
            }
        }, 100);
    }

    copier() {
        document.execCommand('copy');
        this.copied = true;
    }
}
