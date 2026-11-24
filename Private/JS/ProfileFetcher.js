import { RequestHypixelAPI } from "RequestHypixelAPI.js";

export async function ProfileFetcher(playerUUID) {
    RequestHypixelAPI("skyblock/profiles", { playerUUID: playerUUID })
};