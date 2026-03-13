var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

import { system, StartupEvent } from "@minecraft/server";
import { ItemAPI } from "../../lib/ItemAPI";
import { ItemUtil } from "../../lib/ItemUtil";
import { EventAPI } from "../../lib/EventAPI";

export class LuncheonMeatCanComponent {
    constructor() {
        this.onPlayerInteract = this.onPlayerInteract.bind(this);
    }

    onPlayerInteract(args) {
        const { block, player } = args;
        const selectedSlotIndex = player.selectedSlotIndex;
        const container = player.getComponent('inventory')?.container;
        const item = container?.getItem(selectedSlotIndex);
        const state = block.permutation.getState('luncheonmeatsdelight:food_block_stage');

        if (state == 0) {
            if (!item || (item && !item.hasTag("farmersdelight:is_knife") && item.typeId !== "luncheonmeatsdelight:luncheon_meat_can")) {
                player.onScreenDisplay.setActionBar({ translate: "farmersdelight.tips.false_tool" });
                return;
            }

            if (item.hasTag("farmersdelight:is_knife")) {
                ItemAPI.damage(player, selectedSlotIndex);
                player.playSound("block.lantern.hit");
                block.setPermutation(block.permutation.withState('luncheonmeatsdelight:food_block_stage', 1));
            }

            if (item.typeId == "luncheonmeatsdelight:luncheon_meat_can") {
                if (!container) return;
                if (player?.getGameMode() != "creative") {
                    ItemUtil.clearItem(container, selectedSlotIndex);
                }
                player.playSound("block.lantern.hit");
                block.setPermutation(block.permutation.withState('luncheonmeatsdelight:food_block_stage', 2));
            }
        }

        if (state == 1) {
            if (item?.hasTag("farmersdelight:is_knife")) {
                ItemAPI.damage(player, selectedSlotIndex);
                player.playSound("block.lantern.hit");
                ItemAPI.spawn(block, "luncheonmeatsdelight:luncheon_meat", 4);
                ItemAPI.spawn(block, "luncheonmeatsdelight:can_shell_abandon", 1);
                block.dimension.setBlockType(block.location, "minecraft:air");
            }
        }

        if (state == 2 || state == 3) {
            if (item?.typeId == "luncheonmeatsdelight:luncheon_meat_can") {
                if (!container) return;
                if (player?.getGameMode() != "creative") {
                    ItemUtil.clearItem(container, selectedSlotIndex);
                }
                player.playSound("block.lantern.hit");
                block.setPermutation(block.permutation.withState('luncheonmeatsdelight:food_block_stage', state + 1));
            }
        }
    }
    register(args) {
        args.blockComponentRegistry.registerCustomComponent('luncheonmeatsdelight:luncheon_meat_can', new LuncheonMeatCanComponent());
    }
}

__decorate([
    EventAPI.register(system.beforeEvents.startup),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [StartupEvent]),
    __metadata("design:returntype", void 0)
], LuncheonMeatCanComponent.prototype, "register", null);




