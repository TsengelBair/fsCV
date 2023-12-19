const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
const dbName = "schedule";

async function getSchedule() {
  const client = new MongoClient(url, { useUnifiedTopology: true });

  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db(dbName);
    const scheduleCollection = db.collection("daysAndTimes");
    // Извлечение расписания в массив
    const schedule = await scheduleCollection.find().toArray();

    return schedule;
  } catch (err) {
    console.error("Error accessing MongoDB:", err);
    throw err;
  } finally {
    client.close();
  }
}

// Функция для форматирования расписания в читаемую строку
function formatSchedule(schedule) {
  let formattedSchedule = "Расписание\n";
  for (const entry of schedule) {
    for (const daySchedule of entry.schedule) {
      formattedSchedule += `${daySchedule.day}:\n`;
      if (daySchedule.timeslots.length === 0) {
        formattedSchedule += "  По договоренности\n";
      } else {
        formattedSchedule += `  ${daySchedule.timeslots.join(", ")}\n`;
      }
    }
  }
  return formattedSchedule;
}

module.exports = { getSchedule, formatSchedule };
