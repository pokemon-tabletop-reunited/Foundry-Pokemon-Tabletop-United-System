import { Init } from "./init.js";
import { ActorButtons } from "./actor-tab-buttons.js";
import { RenderTokenHUD } from "./render-token-hud.js";
import { DropCanvasData } from "./drop-canvas-data.js";
import { ItemPilesHooks } from "./item-piles-compatibility.js";
import { Ready } from "./ready.js";
import { DeleteToken } from "./tokenDocumentDeleted.js";

export const PtuHooks = {
    listen() {
        const listeners = [
            // Add your listeners here
            Init,
            ActorButtons,
            RenderTokenHUD,
            DropCanvasData,
            ItemPilesHooks,
            Ready,
            DeleteToken
        ]
        for(const listener of listeners) listener.listen();
    }
}