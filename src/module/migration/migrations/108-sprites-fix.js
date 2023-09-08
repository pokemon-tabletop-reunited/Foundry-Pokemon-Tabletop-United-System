import { MigrationBase } from "../base.js";

export class Migration108SpritesFix extends MigrationBase {
    static version = 0.108;

    /**
     * @type {MigrationBase['updateActor']}
     */
    async updateActor(actor) {
        if(actor.type !== "pokemon") return;
        const match = /(\d+.+).(webp|png)/.exec(actor.img);
        if(!match) return;

        let [_, name, ext] = match;
        const path = game.settings.get("ptu", "generation.defaultImageDirectory");
        if(path === "systems/ptu/static/images/sprites/" && ext === "png") ext = "webp";

        actor.img = `${path.startsWith('/') ? "" : "/"}${path}${path.endsWith('/') ? "" : "/"}${name}.${ext}`
    }

    async updateToken(token) {
        if(game.actors.get(token.actorId).type !== "pokemon") return;
        const match = /(\d+.+).(webp|png)/.exec(token.texture.src);
        if(!match) return;

        let [_, name, ext] = match;
        const oldPath = game.settings.get("ptu", "generation.defaultImageDirectory");
        const path = oldPath.includes("systems/ptu/images/pokemon_sprites") ? "systems/ptu/static/images/sprites/" : game.settings.get("ptu", "generation.defaultImageDirectory");
        if(oldPath != path) await game.settings.set("ptu", "generation.defaultImageDirectory", path)
        if(path === "systems/ptu/static/images/sprites/" && ext === "png") ext = "webp";

        token.texture.src = `${path.startsWith('/') ? "" : "/"}${path}${path.endsWith('/') ? "" : "/"}${name}.${ext}`
    }
}