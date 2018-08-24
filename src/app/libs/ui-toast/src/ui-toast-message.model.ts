export class UiToastMessage {

    text: string;
    type: string;
    dismissable: boolean;
    cta: string;
    callback: any;

    static fromJson(
        text: string,
        type: string,
        dismissable: boolean,
        cta: string,
        callback: any
    ): UiToastMessage {
        return new UiToastMessage(text, type, dismissable, cta, callback);
    }

    constructor(
        text: string,
        type: string = 'alert',
        dismissable: boolean = true,
        cta: string,
        callback?: any
    ) {
        this.text = text;
        this.type = type;
        this.dismissable = dismissable;
        this.cta = cta;
        this.callback = callback;
    }
}
