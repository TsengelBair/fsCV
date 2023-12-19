const TelegramApi = require("node-telegram-bot-api");
const { getSchedule, formatSchedule } = require("./mongodb");

require("dotenv").config();

function setupBot() {
  const token = process.env.BOT_TOKEN;

  if (!token) {
    console.log("Invalid token");
    return;
  }

  const bot = new TelegramApi(token, { polling: true });

  const commands = [
    { command: "/start", description: "Начать" },
    {
      command: "/schedule",
      description: "Расписание",
      text: "Посмотреть расписание занятий.",
    },
    {
      command: "/chat",
      description: "Связаться",
      text: "Связаться с репетитором.",
    },
    {
      command: "/price",
      description: "Стоимость занятий",
      text: "Узнать стоимость занятий.",
    },
  ];

  bot.setMyCommands(commands);

  bot.on("message", async (msg) => {
    const text = msg.text;
    const chatId = msg.chat.id;

    if (text === "/start") {
      const username = msg.from.first_name || "дорогой гость";
      const welcomeMessage = `
      Привет, ${username}! 👋 Я - ассистент Баира, готовый помочь тебе в учебе! 📚✨
      
      С моей помощью ты сможешь:
      📌 Получать разъяснения по трудным темам и вопросам.
      📌 Решать задачи и упражнения вместе с объяснениями.
      📌 Получать советы и стратегии для успешной подготовки к экзаменам.
      📌 Планировать свою учебу и контролировать свой прогресс.
      
      Чтобы начать, просто напиши мне свой вопрос или запрос, и я с удовольствием помогу тебе в обучении. Если у тебя есть какие-либо специфические потребности или предпочтения, не стесняйся сообщить мне об этом!
      
      Удачи в учебе, и давай вместе достигнем великих результатов! 💪🎉
      
      Чтобы узнать, какие команды доступны, просто напиши /commands.
    `;
      await bot.sendMessage(chatId, welcomeMessage);
    } else if (text === "/schedule") {
      try {
        const schedule = await getSchedule();
        const formattedSchedule = formatSchedule(schedule);
        bot.sendMessage(chatId, formattedSchedule);
      } catch (err) {
        console.error(err);
        bot.sendMessage(
          chatId,
          "Произошла ошибка при получении расписания. Попробуйте позже."
        );
      }
    } else if (text === "/commands") {
      const commandsMessage = "Список команд:";
      bot.sendMessage(chatId, commandsMessage, {
        reply_markup: {
          keyboard: commands.map((cmd) => [{ text: cmd.command }]),
          resize_keyboard: true,
        },
      });
    } else if (text === "/chat") {
      const chatMessage =
        "Для связи со мной перейдите по ссылке: [Нажми сюда](https://t.me/BairTsengel)";
      bot.sendMessage(chatId, chatMessage, { parse_mode: "Markdown" });
    } else if (text === "/price") {
      const priceMessage = `
      Дистанционно:
          1-4 классы: 500 рублей
          5-6 классы: 600 рублей
          7-8 классы: 800 рублей
          9-11 классы: 1000 рублей
          
      Очно:
          1-4 классы: 900 рублей
          5-6 классы: 1000 рублей
          7-8 классы: 1300 рублей
          9-11 классы: 1500 рублей
          
      Студенты 1 - 4 курсов: от 1500
      (высшая математика, теория алгоритмов, дифференциальные уравнения, теория функции комплексного переменного, методы оптимизации)
          
      Шахматы: от 1000
          
      Постоянным ученикам идут бонусы в виде бесплатного занятия (каждое 10-ое)
          `;
      bot.sendMessage(chatId, priceMessage);
    }
  });
}

module.exports = setupBot;
