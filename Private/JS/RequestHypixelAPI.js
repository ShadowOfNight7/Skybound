const APIKey = process.env.APIKey
export async function RequestHypixelAPI(endpoint, { playerUUID: undefined, profileUUID: undefined } = {}) {
    if (playerUUID != undefined) {
        requestLink = `https://api.hypixel.net/v2/${endpoint}?uuid=${playerUUID}`//&key=${APIKey}`
    }
    else { requestLink = `https://api.hypixel.net/v2/${endpoint}` };//?key=${APIKey}` };
    fetch(requestLink,
        {
            method: "GET",
            headers: {
                "key": APIKey
            }
        }
    )
        .then(response => {
            if (!response.ok) {
                throw new Error(`Encountered a HTTP error when attempting to pull from Hypixel API. Status: ${response.status}`);
            }
            return response.json();
        });
};