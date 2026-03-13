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
import { EventAPI } from "../../lib/EventAPI";
export class LuncheonMeatRiceBallComponent {
    constructor() {
        this.onPlayerInteract = this.onPlayerInteract.bind(this);
    }
    onPlayerInteract(args) {
        const block = args.block;
        const player = args.player;
        const dimension = args.dimension;
        const state = block.permutation.getState('luncheonmeatsdelight:food_block_stage');
        const hunger = player.getComponent('minecraft:player.hunger');
        const saturation = player.getComponent('minecraft:player.saturation');
        const heldItem = player.getComponent("inventory")?.container?.getItem(player.selectedSlotIndex);
        if (state < 2) {
            if (player.isSneaking && !heldItem) {
                hunger.setCurrentValue(Math.min(hunger.currentValue + 8, hunger.effectiveMax));
                saturation.setCurrentValue(Math.min(saturation.currentValue + 4, saturation.effectiveMax));
                block.setPermutation(block.permutation.withState('luncheonmeatsdelight:food_block_stage', state + 1));
                player.playSound("random.eat");
            }
            if (!player.isSneaking) {
                player.playSound("dig.cloth");
                ItemAPI.spawn(block, "luncheonmeatsdelight:luncheon_meat_rice_ball", 1);
                block.setPermutation(block.permutation.withState('luncheonmeatsdelight:food_block_stage', state + 1));
            }
        }
        if (state == 2) {
            ItemAPI.spawn(block, "minecraft:bowl", 1);
            dimension.setBlockType(block.location, "minecraft:air");
            player.playSound("dig.cloth");
        }
    }

    register(args) {
        args.blockComponentRegistry.registerCustomComponent('luncheonmeatsdelight:luncheon_meat_rice_ball', new LuncheonMeatRiceBallComponent());
    }
}
__decorate([
    EventAPI.register(system.beforeEvents.startup),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [StartupEvent]),
    __metadata("design:returntype", void 0)
], LuncheonMeatRiceBallComponent.prototype, "register", null);