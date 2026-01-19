const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");
const { format } = require("date-fns");
const { v4: uuid } = require("uuid");

// Function to log messages to a file
const logEvents = async (message) => {
    const dateTime = `${format(new Date(), "yyyyMMdd\tHH:mm:ss")}`;
    const logItem = `${dateTime}\t${uuid()}\t${message}\n`;

    console.log(logItem);

    try {
        // Append logItem to logs/eventlog.txt
        await fsPromises.appendFile(
            path.join(__dirname, "logs", "eventlog.txt"),
            logItem
        );
    } catch (err) {
        console.error(err);
    }
};

module.exports = logEvents;
