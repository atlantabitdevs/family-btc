const debug = require('../../utils/debug');
const adminService = require('./adminService');

const getParkingSpotDetails = async (req, res) => {
    try {
        const uuid = req._parsedUrl.query.split('=')[1];
        const response = await adminService.getParkingSpotDetails(uuid);

        debug.info(`Spot Details Response: ${JSON.stringify(response)}`);

        if (!response.success) res.status(500).json(response);
        else res.status(200).json(response);

    } catch (error) {
        debug.error(error.stack);
        res.status(500).json({ message: error.message, error: error.stack });
    }
};

const reserveParkingSpot = async (req, res) => {
    try {
        const uuid = req.body.uuid;
        const licensePlate = req.body.licensePlate;
        const duration = req.body.duration;

        const response = await adminService.reserveParkingSpot(
            uuid,
            licensePlate,
            duration
        );

        debug.info(`Spot Reservation Response: ${JSON.stringify(response)}`);

        if (!response.success) res.status(500).json(response);
        else res.status(200).json(response);

    } catch (error) {
        debug.error(error.stack);
        res.status(500).json({ message: error.message, error: error.stack });
    }
};

const shouldBeEmpty = async (req, res) => {
    try {
        const response = await adminService.shouldBeEmpty();

        debug.info(`Spot Details Response: ${JSON.stringify(response)}`);

        if (!response.success) res.status(500).json(response);
        else res.status(200).json(response);

    } catch (error) {
        debug.error(error.stack);
        res.status(500).json({ message: error.message, error: error.stack });
    }
}

module.exports = { getParkingSpotDetails, reserveParkingSpot, shouldBeEmpty };
