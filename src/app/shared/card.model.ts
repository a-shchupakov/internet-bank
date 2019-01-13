export class CardModel {
    constructor(public cardNumber: string,
                public cardExpires: string,
                public cardCVC: string,
                public amount: number,
                public comment: string,
                public email: string,
                public safe: boolean,
                public url: string) {}
}
