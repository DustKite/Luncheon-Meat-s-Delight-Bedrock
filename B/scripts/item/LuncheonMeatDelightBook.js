var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ActionFormData } from '@minecraft/server-ui';
import { ItemUseAfterEvent, world } from "@minecraft/server";
import { methodEventSub } from "../lib/eventHelper";

function lunchMeatForm(player) {
    const form = new ActionFormData()
        .title({ "rawtext": [{ "text": "item.luncheonmeatsdelight:luncheon_meat_can" }] })
        .body({
            "rawtext": [
                { "translate": "LuncheonMeatDelight.book.lunch_meat.pork_filling" },
                { "text": "\n" },
                { "translate": "LuncheonMeatDelight.book.lunch_meat.can_shell" },
                { "text": "\n" },
                { "translate": "LuncheonMeatDelight.book.lunch_meat.raw_can" },
                { "text": "\n" },
                { "translate": "LuncheonMeatDelight.book.lunch_meat.cooked_can" },
                { "text": "\n" },
                { "translate": "LuncheonMeatDelight.book.lunch_meat.waste_shell" },
                { "text": "\n" },
                { "translate": "LuncheonMeatDelight.book.lunch_meat.slices" }
            ]
        })
        .button({ "rawtext": [{ "text": "LuncheonMeatDelight.book.back" }] });
    
    form.show(player).then((response) => {
        if (response.selection === 0) {
            mainForm(player);
        }
    });
}

function toastForm(player) {
    const form = new ActionFormData()
        .title({ "rawtext": [{ "text": "LuncheonMeatDelight.book.toast.title" }] })
        .body({
            "rawtext": [
                { "translate": "LuncheonMeatDelight.book.toast.dough" },
                { "text": "\n" },
                { "translate": "LuncheonMeatDelight.book.toast.toast_can" },
                { "text": "\n" },
                { "translate": "LuncheonMeatDelight.book.toast.small_toast" },
                { "text": "\n" },
                { "translate": "LuncheonMeatDelight.book.toast.sliced_toast" }
            ]
        })
        .button({ "rawtext": [{ "text": "LuncheonMeatDelight.book.back" }] });

    form.show(player).then((response) => {
        if (response.selection === 0) {
            mainForm(player);
        }
    });
}

function otherFoodsForm(player) {
    const form = new ActionFormData()
        .title({ "rawtext": [{ "text": "LuncheonMeatDelight.book.other_foods.title" }] })
        .body({
            "rawtext": [
                { "translate": "LuncheonMeatDelight.book.other_foods.sandwich" },
                { "text": "\n" },
                { "translate": "LuncheonMeatDelight.book.other_foods.rice_ball" },
                { "text": "\n" },
                { "translate": "LuncheonMeatDelight.book.other_foods.plated_rice" },
                { "text": "\n" },
                { "translate": "LuncheonMeatDelight.book.other_foods.fried_egg" }
            ]
        })
        .button({ "rawtext": [{ "text": "LuncheonMeatDelight.book.back" }] });

    form.show(player).then((response) => {
        if (response.selection === 0) {
            mainForm(player);
        }
    });
}

function thanksForm(player) {
    const form = new ActionFormData()
        .title({ "rawtext": [{ "text": "LuncheonMeatDelight.book.thanks.title" }] })
        .body({
            "rawtext": [
                { "translate": "LuncheonMeatDelight.book.thanks.permit" },
                { "text": "\n" }
            ]
        })
        .button({ "rawtext": [{ "text": "LuncheonMeatDelight.book.back" }] });

    form.show(player).then((response) => {
        if (response.selection === 0) {
            mainForm(player);
        }
    });
}

function mainForm(player) {
    const form = new ActionFormData()
        .title({ "rawtext": [{ "text": "item.LuncheonMeatDelight:food_manual.name" }] })
        .button({ "rawtext": [{ "text": "item.luncheonmeatsdelight:luncheon_meat_can" }] })
        .button({ "rawtext": [{ "text": "LuncheonMeatDelight.book.toast.title" }] })
        .button({ "rawtext": [{ "text": "LuncheonMeatDelight.book.other_foods.title" }] })
        .button({ "rawtext": [{ "text": "LuncheonMeatDelight.book.thanks.title" }] });

    form.show(player).then((response) => {
        switch (response.selection) {
            case 0:
                lunchMeatForm(player);
                break;
            case 1:
                toastForm(player);
                break;
            case 2:
                otherFoodsForm(player);
                break;
            case 3:
                thanksForm(player);
                break;
        }
    });
}

export class LuncheonMeatDelightBook {
    itemUse(args) {
        const player = args.source;
        const itemStack = args.itemStack;
        if (itemStack?.typeId === "luncheonmeatsdelight:book_luncheonmeatdelight") {
            mainForm(player);
        }
    }
}

__decorate([
    methodEventSub(world.afterEvents.itemUse),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ItemUseAfterEvent]),
    __metadata("design:returntype", void 0)
], LuncheonMeatDelightBook.prototype, "itemUse", null);