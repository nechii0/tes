import { world, system } from "@minecraft/server";
import { showEnchantDialog } from "./dialog/ench.js";

world.beforeEvents.itemUse.subscribe(event => {
    const player = event.source;
    const item = event.itemStack;
    if (item && item.typeId === "nxzott:ench") {
        event.cancel = true;
        system.run(() => {
            showEnchantDialog(player);
        });
    }
});
