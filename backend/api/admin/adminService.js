const debug = require('../../utils/debug');
const spots = require('../../db/collection');

const getParkingSpotDetails = async (uuid) => {
    try {
        return { success: true, message: (await spots.doc(uuid).get()).data() };
    } catch (error) {
        debug.error(error.stack);
        throw new Error(error);
    }
};

const reserveParkingSpot = async (uuid, licensePlate, duration) => {
    try {
        const spot = spots.doc(uuid);
        const startTime = Math.floor(new Date().getTime() / 1000);
        if (!spot.occupied) {
            var response = await spot.update({
                duration: duration,
                expirationTime: startTime + duration,
                expired: false,
                licensePlate: licensePlate,
                occupied: true,
                startTime: startTime,
            });

            return { success: true, message: response };
        }
    } catch (error) {
        debug.error(error.stack);
        throw new Error(error);
    }
};

const shouldBeEmpty = async () => {
    try {
        const shouldBeEmptySpots = {}
        const expiredSpots = [];
        const emptySpots = [];
        const now = Math.floor(new Date().getTime() / 1000);
        const unoccupiedSpots = await spots
            .where('occupied', '==', false)
            .get();
        
        unoccupiedSpots.forEach(spot => {
            emptySpots.push(spot.data())
        })
        shouldBeEmptySpots.unoccupiedSpots = emptySpots;

        const occupiedSpots = await spots
            .where('occupied', '==', true)
            .get();
        
        occupiedSpots.forEach((spot) => {
            const spotData = spot.data()
            if((spotData.expirationTime - now) <= 0){
                spots.doc(spot.id).update({
                    expired: true
                })
                spotData.expired = true;
                expiredSpots.push(spotData)
            }
        })
        shouldBeEmptySpots.expiredSpots = expiredSpots;

        return { success: true, message: shouldBeEmptySpots };
    } catch (error) {
        debug.error(error.stack);
        throw new Error(error);
    }
};

module.exports = { getParkingSpotDetails, reserveParkingSpot, shouldBeEmpty };
