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
export class CanShellSmallToastComponent {
    constructor() {
        this.onPlayerInteract = this.onPlayerInteract.bind(this);
    }
    onPlayerInteract(args) {
        const block = args.block;
        const player = args.player;
        const dimension = args.dimension;
        const item = player.getComponent("inventory")?.container?.getItem(player.selectedSlotIndex);

        if (item &&
            !item.hasTag("farmersdelight:is_knife")
        ) {
            player.onScreenDisplay.setActionBar({
                translate: "farmersdelight.tips.false_tool"
            });
            return;
        }
        if (item?.hasTag("farmersdelight:is_knife")) {
            ItemAPI.damage(player, player.selectedSlotIndex);
            player.playSound("block.lantern.hit");
            ItemAPI.spawn(block, "luncheonmeatsdelight:small_toast", 1);
            dimension.setBlockType(block.location, "minecraft:air");
        }
    }
    register(args) {
        args.blockComponentRegistry.registerCustomComponent('luncheonmeatsdelight:can_shell_small_toast', new CanShellSmallToastComponent());
    }
}
__decorate([
    EventAPI.register(system.beforeEvents.startup),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [StartupEvent]),
    __metadata("design:returntype", void 0)
], CanShellSmallToastComponent.prototype, "register", null);