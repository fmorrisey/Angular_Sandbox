import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"]
})
export class AppComponent {
    public title = "reverse-phrase";
    public text = "";
    public reverseText = "";

    onClickReverse() {
        //Event Listeners and Bindings Syntax
        this.reverseText = this.text.split("").reverse().join("");
    }

    onChangeText(value: string) {
        this.text = value;
    }

    onInputText(value: string) {
        this.text = value;
    }
}
