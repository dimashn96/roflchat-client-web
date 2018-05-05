import {Component} from '@angular/core';
import {Conversation} from "../../models/ConversationModel";
import {Router} from "@angular/router";
import {HttpService} from "../../services/http.service";
import {Response} from "../../models/ResponseModel";

@Component({
    selector: 'app-conversations-creation',
    templateUrl: './conversations-creation.component.html',
    styleUrls: ['./conversations-creation.component.scss']
})

export class ConversationsCreationComponent {

    conversation: Conversation = new Conversation();
    message: string;
    done = false;
    token = window.localStorage.token;

    constructor(private httpService: HttpService, private router: Router) {}

    submit() {
        this.httpService.addConversation(this.conversation, this.token).subscribe((res: Response) => {
                this.done = true;
                this.router.navigate(['conversations']);
                if (typeof res.data === 'string') {
                    this.message = res.data;
                }
            },
            error => console.log(error)
        );
    }

}