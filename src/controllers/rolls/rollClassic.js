const Roll = require("roll");
const rollDice = new Roll();
const CriticalEffects = require("../../models/criticalEffect");

exports.roll1d4 = ctx => {
    const result = rollDice.roll("d4").result;
    switch (result) {
        case 1:
            return ctx.reply(`Кровь кровавому богу! Черепа, ко трону черепов!(${result})`);

        case 2:
            return ctx.reply(`Удовольсивем одним насытны вы будете!(${result})`);

        case 3:
            return ctx.reply(`Все прах, все тлен, лишь зания вечны...(${result})`);

        case 4:
            return ctx.reply(`Истинное бессмертие есть разложение.(${result})`);

        default:
            return ctx.reply(`Твой бог под номером: ${result}. Хотя какая тебе разница?`);
    }
};

exports.roll1d6 = ctx => {
    const result = rollDice.roll("d6").result;
    return ctx.reply(`Твой результат: ${result}`);
};

exports.roll1d8 = ctx => {
    const result = rollDice.roll("d8").result;
    return ctx.reply(`Люблю эти восьмерки, а ты получаешь: ${result}`);
};

exports.roll1d10 = ctx => {
    const result = rollDice.roll("d10").result;
    return ctx.reply(`Я бы сказал: ${result}`);
};

exports.roll1d12 = ctx => {
    const result = rollDice.roll("d12").result;
    return ctx.reply(`Около: ${result}`);
};

exports.roll1d20 = ctx => {
    const result = rollDice.roll("d20").result;
    switch (result) {
        case 1:
            return ctx.reply(
                `Покайся! Ибо завтра ты умрёшь!" или "За моментом слабости следует жизнь, полная Ереси! - Тёмные Ангелы (${result})`
            );
        case 2:
            return ctx.reply(`Неизвестен - все записи стёрты до Ереси Хоруса (${result})`);
        case 3:
            return ctx.reply(`Совершенство или смерть! - Дети Императора (${result})`);
        case 4:
            return ctx.reply(`Железо внутри, железо снаружи! - Железные войны (${result})`);
        case 5:
            return ctx.reply(`За Хана и Императора! - Белые Шрамы (${result})`);
        case 6:
            return ctx.reply(`За Русса и Всеотца! - Космические Волки (${result})`);
        case 7:
            return ctx.reply(`Примарх-прародитель! Во славу Твою и во славу Его на земле! - Имперские Кулаки(${result})`);
        case 8:
            return ctx.reply(`Аве Доминус Нокс! - Повелители Ночи (${result})`);
        case 9:
            return ctx.reply(`Кровью Сангвиния! - Кровавые Ангелы (${result})`);
        case 10:
            return ctx.reply(`Плоть слаба! - Железные Руки(${result})`);
        case 11:
            return ctx.reply(`Неизвестен - все записи стёрты до Ереси Хоруса (${result})`);
        case 12:
            return ctx.reply(`Кровь для Бога Крови! Черепа для Трона Черепов! - Пожиратели Миров (${result})`);
        case 13:
            return ctx.reply(`Отвага и честь! - Ультрамарины (${result})`);
        case 14:
            return ctx.reply(`*ужасающая тишина* - Гвардия Смерти (${result})`);
        case 15:
            return ctx.reply(`Всё - прах... - Тысяча Сынов (${result})`);
        case 16:
            return ctx.reply(`Мы вернулись! Смерть Ложному Императору! - Чёрный Легион (${result})`);
        case 17:
            return ctx.reply(
                `Произнесите слова Лоргара и вы будете жить вечно во славу Хаоса. Не произносите их - и каждый из вас умрёт сегодня. – Ультиматум, написанный на воротах столицы планеты Моэг IV перед нападением Несущих Слово. (${result})`
            );
        case 18:
            return ctx.reply(`В пламя битвы, на наковальню войны! - Саламандры (${result})`);
        case 19:
            return ctx.reply(`Victorus aut Mortis ("Победа или смерть"). - Гвардия Ворона(${result})`);
        case 20:
            return ctx.reply(`Гидра Доминатус! - Альфа-Легион (${result})`);
        default:
            return ctx.reply(`Твой легион: Жопа Гуся (${result}), но я про такой не слышал`);
    }
};

exports.roll1d66 = async ctx => {
    const result = +rollDice
        .roll("2d6")
        .rolled.map(e => e.toString())
        .reduce((accum, curVal) => accum + curVal);
    const crit = await CriticalEffects.findOne({ roll: result });
    console.log(crit);
    const awnser = `На кубах: ${result}\n\nНазвание: ${crit.name}\nОписание: ${crit.desc}\n\nЭффект: ${crit.effect}\n\nУсиление: ${
        crit.severity
    }\nКлючевые слова: ${crit.keywords}
  `;
    ctx.reply(awnser);
};

exports.roll1d100 = ctx => {
    try {
        const result = rollDice.roll("d%").result;
        if (result > 0 && result <= 10) {
            ctx.reply(`Твои шансы на провал ничтожно малы (${result}%), празднуй свою победу, раб трупа на троне...`);
        } else if (result > 10 && result <= 20) {
            ctx.reply(`Впечатляюще, сметный (${result}%), еще немного и мои ты почти догонишь нурглинга в своем изяществе.`);
        } else if (result > 20 && result <= 30) {
            ctx.reply(`Да, старайся впечатлить темных богов (${result}%), ты же так желаешь их благословеня`);
        } else if (result > 30 && result <= 40) {
            ctx.reply(`Ничтожная пешка (${result}%), наслаждайся мнимой свободой, пока...`);
        } else if (result > 40 && result < 50) {
            ctx.reply(`Бесполезно убегать, (${result}%) ты не сможешь бегать вечно`);
        } else if (result === 50) {
            ctx.reply(`На полпути(${result}%), в могилу...`);
        } else if (result > 50 && result <= 60) {
            ctx.reply(`Ты меня разочаровал(${result}%), я думал ты хоть на что-то способен.`);
        } else if (result > 60 && result <= 70) {
            ctx.reply(`Заурядно (${result}%), где-то между газами нурглита и клешней демонетки...`);
        } else if (result > 70 && result <= 80) {
            ctx.reply(`Сколько раз тебе нужно умереть что бы ты принял свою судьбу (${result}%)?`);
        } else if (result > 80 && result <= 90) {
            ctx.reply(`Дразнишь богов? Ну что же, они тебя тоже (${result}%).`);
        } else if (result > 90 && result < 100) {
            ctx.reply(`А ты любишь играть со смертью, как я посмотрю (${result}%).`);
        } else if (result === 100) {
            ctx.reply(`Теперь тебе уже ничего не поможет (${result}%). Хоть умри достойно, насекомое `);
        }
    } catch (error) {
        console.error(error);
    }
};

exports.roll = rollDice;
