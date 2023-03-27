-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Mar 26, 2023 at 04:12 PM
-- Server version: 8.0.32
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bonsaishifu_database`
--

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `id` int NOT NULL,
  `address` text CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `phone` text CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `email` text CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `work_time` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`id`, `address`, `phone`, `email`, `work_time`) VALUES
(1, '', '+380 (97) 130-74-74', 'bonsaishifu@gmail.com', '[\"Пн-Пт: 9:00 - 17:00\",\"Сб-Нд: вихідний\"]');

-- --------------------------------------------------------

--
-- Table structure for table `gallery`
--

CREATE TABLE `gallery` (
  `id` int NOT NULL,
  `image` text CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `gallery`
--

INSERT INTO `gallery` (`id`, `image`) VALUES
(1, 'https://i.imgur.com/H3jtOBA.png'),
(2, 'https://i.imgur.com/fvgMrrC.png'),
(3, 'https://i.imgur.com/EFJFyOU.jpg'),
(4, 'https://i.imgur.com/gwmI8QK.png'),
(5, 'https://i.imgur.com/qqDv91l.png'),
(6, 'https://i.imgur.com/mfLZtK3.jpg'),
(7, 'https://i.imgur.com/VjrWlH1.png'),
(8, 'https://i.imgur.com/rwj6BKQ.png'),
(9, 'https://i.imgur.com/7TP4Gkq.png'),
(10, 'https://i.imgur.com/6D3RimF.png'),
(11, 'https://i.imgur.com/UeoMW0n.jpg'),
(12, 'https://i.imgur.com/nUkaQjQ.jpg'),
(13, 'https://i.imgur.com/XWRhUqi.jpg'),
(14, 'https://i.imgur.com/YMppw8h.png'),
(15, 'https://i.imgur.com/8zrT9th.png'),
(16, 'https://i.imgur.com/Y86BLpx.jpg'),
(17, 'https://i.imgur.com/LKMPqsg.png'),
(18, 'https://i.imgur.com/IsQmcfl.png');

-- --------------------------------------------------------

--
-- Table structure for table `header`
--

CREATE TABLE `header` (
  `id` int NOT NULL,
  `image` text COLLATE utf8mb4_general_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `header`
--

INSERT INTO `header` (`id`, `image`) VALUES
(1, 'https://i.imgur.com/raqSfyo.png'),
(2, 'https://i.imgur.com/RyRxdmR.jpg'),
(3, 'https://i.imgur.com/3xv1Fvb.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `info`
--

CREATE TABLE `info` (
  `id` int NOT NULL,
  `text` longtext CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci,
  `mini_gallery` json NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `info`
--

INSERT INTO `info` (`id`, `text`, `mini_gallery`) VALUES
(1, 'Дорогі друзі, я Ремігіюс Андрюшис. Мистецтвом бонсай займаюся з 1996 року.  \r\n \r\nЩо таке бонсай? \r\n \r\nОстаннім часом життя диктує величезний темп. Ми мчимося кудись із бутербродом у зубах, запиваючи все це кавою з картонних стаканчиків. Додому повертаємось вже надвечір і як тільки заплющуємо очі, дзвонить будильник – ніч кудись зникла без сліду, а ми навіть і не встигли відпочити. Бонсай - це дерево, яке вимагає, щоб Ви, шановні, зупинилися біля нього, поспілкувалися з ним або просто перевели дух від постійної біганини. Застиглий у часі - бонсай сам зупиняє перебіг часу. Отже, бонсай – об\'єкт філософії. \r\n \r\nЗаданий життям темп утворює стресові ситуації. Але вистачає всього декілька хвилин постояти біля бонсай дерева і стрес кудись випаровується. Отже, бонсай – об\'єкт медитації. \r\n  \r\nMи часто почуваємося самотніми. Часто в оточенні людей ми не знаходимо того, кому могли б довірити те, що скупчилося у нас усередині, що лежить важким вантажем на душі... Дерево - найкращий слухач. Воно не переб\'є Вас на середині фрази, не дорікне... Воно мовчки вислухає Вас і все зрозуміє. Тому бонсай – це і наш сповідник, якому ми можемо довірити найпотаємніше і він – нікому не розкаже таємницю вашої сповіді. Це об\'єкт полегшення душі. \r\n \r\nТе, що бонсай став об\'єктом сучасного інтер\'єру, я впевнений, навіть не треба нагадувати. Незважаючи на політичну обстановку, кризи, інфляцію, соціальне становище,  вартість бонсай зростає з кожним роком, з кожним місяцем, навіть з кожним днем. Це найнадійніший об\'єкт інвестиції, який, незважаючи ні на що, згодом приносить дивіденди своєму господареві. Отже, бонсай - це івестиція. \r\n \r\nЯк часто ми замислюємося над тим: а що після себе ми залишимо своїм нащадкам? Справа в тому, що будь-яке дерево довговічніше за людину. Найдавніший бонсай - це сосна в Китаї. Її вік понад вісімсот років... На сході бонсай передавалися і передаються з покоління до покоління. Отже, бонсай ще й сімейна реліквія, що має не лише матеріальну, а й духовну цінність.', '[\"https://i.imgur.com/H3jtOBA.png\", \"https://i.imgur.com/fvgMrrC.png\", \"https://i.imgur.com/Y86BLpx.jpg\", \"https://i.imgur.com/cOzZYGb.png\", \"https://i.imgur.com/EFJFyOU.jpg\", \"https://i.imgur.com/rDArfb8.png\", \"https://i.imgur.com/IsQmcfl.png\"]');

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE `news` (
  `id` int NOT NULL,
  `title` text CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `date` date NOT NULL,
  `text` longtext CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `news`
--

INSERT INTO `news` (`id`, `title`, `date`, `text`) VALUES
(1, 'Історія та походження стилю бонсай', '2023-03-01', 'Авторство ідеї бонсай належить Китаю. Існують різні думки з приводу дати започаткування цього мистецтва, за різними твердженнями початок своєї історії воно отримало близько 4000 років тому.Існує легенда що першим «бонсаїстом» був китайський імператор династії Хань, який створив мініатюрну копію своєї імперії. Згідно з легендою там були мініатюрні гори, дерева, будинки й навіть річки. Згодом, у період середньовіччя, разом із буддизмом культура бонсай поширилася й у Японію де вкорінилося спочатку серед аристократів і духовенства, а потім, на початку 17 століття, і на національному рівні.  Перша виставка бонсай у Європі відбулася 1909 році в Лондоні. Після другої світової війни бонсай починає здобувати популярність на Заході. Багато дерев було привезено солдатами з Японії. Останнім часом популярність цього мистецтва неймовірно виросла. На даний час існує велика кількість клубів бонсай майже у кожній країні світу.'),
(2, 'Розпродаж шедеврів бонсай майстра Сальваторе Ліппораце', '2023-03-01', 'Італійський грандмайстер бонсаїв Сальваторе Ліппораце після 45 років видатної творчої діяльності у світі бонсаї вирішив закінчити свою кар\'єру як бонсай майстер та розпродати свою колекцію. Це надзвичайно рідкісна можливість для колекціонерів та цінителів мистецтва бонсай придбати неперевершені шедеври створені ним, які неодмінно збагатять будь-яку колекцію. Його творіння - це неймовірно красиві дерева з гармонійними формами та вишуканими деталями, що передають естетичну гармонію природи та людської творчості. Його майстерність та розуміння бонсай, що поєднує в собі досвід та тонку естетику, дозволили створити неймовірні творіння, які привертають увагу колекціонерів та експертів у всьому світі.  Цей рік може стати останнім шансом, щоб отримати величезне задоволення від придбання цих безцінних творінь мистецтва.');

-- --------------------------------------------------------

--
-- Table structure for table `store`
--

CREATE TABLE `store` (
  `id` int NOT NULL,
  `name` text CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `description` text CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `price` double NOT NULL,
  `stock` tinyint(1) NOT NULL,
  `image` text CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `store`
--

INSERT INTO `store` (`id`, `name`, `description`, `price`, `stock`, `image`) VALUES
(1, 'Їжак в тумані', 'Авторський бонсай \"HEDGEHOG IN THE FOG\"\r\nКолекція \"4 Сезони Весни\", закладена в 2020 році.\r\n\r\nРослина: Сосна гірська\r\nВік: 16 років\r\nСтиль: SIAKAN\r\nВисота: 27 см\r\nБез контейнера: 21 см\r\nДіаметр контейнера: 17см', 3200, 1, 'https://i.imgur.com/rJnOImi.png'),
(2, 'Баланс', 'Авторський бонсай \"BALANCE\"\r\nКолекція \"4 Сезони Весни\", закладена в 2020 році.\r\n\r\nРослина: Сосна гірська\r\nВік: 11 років\r\nСтиль: Bankan\r\nВисота: 35 см\r\nБез контейнера: 25 см\r\nДіаметр контейнера: 15 см', 2700, 1, 'https://i.imgur.com/olhEKi6.png'),
(3, 'Вартовий тиші', 'Авторський бонсай \"GUARDIAN OF SILENCE\"\r\nКолекція \"4 Сезони Весни\", закладена в 2020 році.\r\n\r\nРослина: Сосна гірська\r\nВік: 17 років\r\nСтиль: FUKINAGASHI\r\nВисота: 25 см\r\nБез контейнера: 17 см\r\nДіаметр контейнера: 17 см', 4500, 1, 'https://i.imgur.com/MLbWHc3.png'),
(4, 'Вогняний дракон', 'Авторський бонсай \"FIRE DRAGON\"\r\nКолекція \"4 Сезони Весни\", закладена в 2020 році.\r\n\r\nРослина: Сосна гірська\r\nВік: 15 років\r\nСтиль: FUKINAGASHI\r\nВисота: 37 см\r\nБез контейнера: 29 см\r\nДіаметр контейнера: 18 см', 3900, 1, 'https://i.imgur.com/2kFaza4.png'),
(5, 'Дерево достатку', 'Авторський бонсай \"HOJO NO KI\"\r\nКолекція \"4 Сезони Весни\", закладена в 2020 році.\r\n\r\nРослина: Граб березолистий\r\nВік: 30 років\r\nСтиль: TESKAN\r\nВисота: 113 см\r\nБез контейнера: 94 см\r\nДіаметр контейнера: 55 см', 18000, 0, 'https://i.imgur.com/rB1c99h.png'),
(6, 'Дракон, що прокидається', 'Авторський бонсай \"THE AWAKENING DRAGON\"\r\nКолекція \"4 Сезони Весни\", закладена в 2020 році.\r\n\r\nРослина: Сосна гірська\r\nВік: 10 років\r\nСтиль: Horaї\r\nВисота: 30см\r\nБез контейнера: 21см\r\nДіаметр контейнера: 18см', 2500, 1, 'https://i.imgur.com/QOEtj7p.png'),
(7, 'Дракон-метелик', 'Авторський бонсай \"BUTTERFLY DRAGON\" Колекція \"4 Сезони Весни\", закладена в 2020 році.\r\n\r\nРослина: Сосна гірська\r\nВік: 10 років\r\nСтиль: Bankan\r\nВисота: 45см\r\nБез контейнера: 35см\r\nДіаметр контейнера: 18см', 3500, 1, 'https://i.imgur.com/UhnLdAl.png'),
(8, 'Душа прірви', 'Авторський бонсай \"THE SOUL OF THE ABYSS\"\r\nКолекція \"4 Сезони Весни\", закладена в 2020 році.\r\n\r\nРослина: Сосна гірська\r\nВік: 15 років\r\nСтиль: KENGAI\r\nВисота: 40 см\r\nБез контейнера: 27 см\r\nДіаметр контейнера: 17 см х 24 см', 3400, 1, 'https://i.imgur.com/aOTXHAf.png'),
(9, 'Зіркова тиша', 'Авторський бонсай \"STAR SILENCE\"\r\nКолекція \"4 Сезони Весни\", закладена в 2020 році.\r\n\r\nРослина: Самшит вічнозелений\r\nВік: 17 років\r\nСтиль: HOKIDATI\r\nВисота: 36 см\r\nБез контейнера: 18 см\r\nДіаметр контейнера: 18 см', 2400, 1, 'https://i.imgur.com/uIqeh9B.png'),
(10, 'Каскад думок\r\n ', 'Авторський бонсай \"KASKADE OF MINDS\"\r\nКолекція \"4 Сезони Весни\", закладена в 2020 році.\r\n\r\nРослина: Сосна гірська\r\nВік: 11 років\r\nСтиль: KENGAI\r\nВисота: 32 см\r\nБез контейнера: 30 см\r\nДіаметр контейнера: 9 см', 3700, 1, 'https://i.imgur.com/ghhxaC0.png'),
(11, 'Кракен', 'Авторський бонсай THE KRAKEN\"\r\nКолекція \"4 Сезони Весни\", закладена в 2020 році.\r\n\r\nРослина: Ялівець горизонтальний\r\nВік: 11 років\r\nСтиль: KENGAI\r\nВисота: 20 см\r\nБез контейнера: 20 см\r\nДіаметр контейнера: 17см', 1900, 1, 'https://i.imgur.com/EJo4thg.png'),
(12, 'Краса асиметрії', 'Авторський бонсай \"FUKINSEI\"\r\nКолекція \"4 Сезони Весни\", закладена в 2020 році.\r\n\r\nРослина: Сосна гірська\r\nВік: 11 років\r\nСтиль: KENGAI\r\nВисота: 22 см\r\nБез контейнера: 16 см\r\nДіаметр контейнера: 9 см', 2700, 1, 'https://i.imgur.com/fT9bOUV.png'),
(13, 'Краса у плині часу', 'Авторський бонсай \"SHIBUI\"\r\nКолекція \"4 Сезони Весни\", закладена в 2020 році.\r\n\r\nРослина: Ялівець голден\r\nВік: 15 років\r\nСтиль: KENGAI\r\nВисота: 26 см\r\nБез контейнера: 33 см\r\nДіаметр контейнера: 26 см х 16 см', 2400, 1, 'https://i.imgur.com/cOzZYGb.png'),
(14, 'Крила вітру', 'Авторський бонсай \"WINGS OF WIND\"\r\nКолекція \"4 Сезони Весни\", закладена в 2020 році.\r\n\r\nРослина: Самшит вічнозелений\r\nВік: 17 років\r\nСтиль: HAN KENGAI\r\nВисота: 28 см\r\nБез контейнера: 20 см\r\nДіаметр контейнера: 15 см', 1900, 1, 'https://i.imgur.com/0TIrqS0.png'),
(15, 'Монах в медитації', 'Авторський бонсай \"KADOMATSU\"\r\nКолекція \"4 Сезони Весни\", закладена в 2020 році.\r\n\r\nРослина: Сосна гірська\r\nВік: 31 рік\r\nСтиль: FUKINAGASHI\r\nВисота: 98 см\r\nБез контейнера: 72 см\r\nДіаметр контейнера: 56 см', 15000, 1, 'https://i.imgur.com/HJsaHKv.png'),
(16, 'Нірвана', 'Авторський бонсай \"NIRVANA\"\r\nКолекція \"4 Сезони Весни\", закладена в 2020 році.\r\n\r\nРослина: Сосна гірська\r\nВік: 17 років\r\nСтиль: HAN KENGAI\r\nВисота: 37 см\r\nБез контейнера: 30 см\r\nДіаметр контейнера: 22 см х 16 см', 3900, 1, 'https://i.imgur.com/o21pag0.png'),
(17, 'Прозріння', 'Авторський бонсай \"SATORI\"\r\nКолекція \"4 Сезони Весни\", закладена в 2020 році.\r\n\r\nРослина: Самшит вічнозелений\r\nВік: 17 років\r\nСтиль: HOKIDATI\r\nВисота: 42 см\r\nБез контейнера: 32 см\r\nДіаметр контейнера: 19 см', 1900, 1, 'https://i.imgur.com/sQiCjCh.png'),
(18, 'Просвітлення', 'Авторський бонсай \"ENLIGHTENMENT\"\r\nКолекція \"4 Сезони Весни\", закладена в 2020 році.\r\n\r\nРослина: Сосна гірська\r\nВік: 17 років\r\nСтиль: KENGAI\r\nВисота: 39 см\r\nБез контейнера: 25 см\r\nДіаметр контейнера: 17 см х 24 см', 3500, 1, 'https://i.imgur.com/46hGQaZ.png'),
(19, 'Танець метелика', 'Авторський бонсай \"DANCE OF THE BUTTERFLY\"\r\nКолекція \"4 Сезони Весни\", закладена в 2020 році.\r\n\r\nРослина: Ялівець Вілтоні\r\nВік: 9 років\r\nСтиль: IKIAGI\r\nВисота: 23 см\r\nБез контейнера: 16 см\r\nДіаметр контейнера: 17см', 3600, 1, 'https://i.imgur.com/NrSl3KC.png'),
(20, 'Спокуса', 'Авторський бонсай \"TEMPTATION\"\r\nКолекція \"4 Сезони Весни\", закладена в 2020 році.\r\n\r\nРослина: Самшит вічнозелений\r\nВік: 16 років\r\nСтиль: NIAGARI\r\nВисота: 35 см\r\nБез контейнера: 29 см\r\nДіаметр контейнера: 18 см', 1900, 1, 'https://i.imgur.com/ZTwiVuR.png'),
(21, 'Тайчі', 'Авторський бонсай \"TAI CHI\"\r\nКолекція \"4 Сезони Весни\", закладена в 2020 році.\r\n\r\nРослина: Сосна гірська\r\nВік: 14 років\r\nСтиль: HAN KENGAI\r\nВисота: 34 см\r\nБез контейнера: 28 см\r\nДіаметр контейнера: 17см', 3500, 1, 'https://i.imgur.com/OILR4qR.png'),
(22, 'Танець вітру', 'Авторський бонсай \"DANCE OF WIND\"\r\nКолекція \"4 Сезони Весни\", закладена в 2020 році.\r\n\r\nРослина: Сосна гірська\r\nВік: 17 років\r\nСтиль: FUKINAGASHI\r\nВисота: 41 см\r\nБез контейнера: 35 см\r\nДіаметр контейнера: 30х23 см', 5500, 1, 'https://i.imgur.com/ERS14TK.png'),
(23, 'Танець метелика', 'Авторський бонсай \"DANCE OF THE BUTTERFLY\"\r\nКолекція \"4 Сезони Весни\", закладена в 2020 році.\r\n\r\nРослина: Сосна гірська\r\nВік: 11 років\r\nСтиль: MOIOGI\r\nВисота: 41 см\r\nБез контейнера: 34 см\r\nДіаметр контейнера: 17см', 2800, 1, 'https://i.imgur.com/7vZpy7H.png'),
(24, 'Хвиля Чорного моря', 'Авторський бонсай \"BLACK SEA WAVE\"\r\nКолекція \"4 Сезони Весни\", закладена в 2020 році.\r\n\r\nРослина: Сосна гірська\r\nВік: 17 років\r\nСтиль: HAN KENGAI\r\nВисота: 20 см\r\nБез контейнера: 25 см\r\nДіаметр контейнера: 19 см', 3500, 1, 'https://i.imgur.com/rDArfb8.png'),
(25, 'Хоку', 'Авторський бонсай \"HOKU\"\r\nКолекція \"4 Сезони Весни\", закладена в 2020 році.\r\n\r\nРослина: Ялівець горизонтальний\r\nВік: 14 років\r\nСтиль: OTODOSI-EDA-KENGAI\r\nВисота: 19 см\r\nБез контейнера: 13 см\r\nДіаметр контейнера: 15 см', 2500, 1, 'https://i.imgur.com/TiKY821.png'),
(26, 'Цвітіння часу', 'Авторський бонсай \"SABI\"\r\nКолекція \"4 Сезони Весни\", закладена в 2020 році.\r\n\r\nРослина: Сосна гірська\r\nВік: 14 років\r\nСтиль: FUKINAGASHI\r\nВисота: 24 см\r\nБез контейнера: 16 см\r\nДіаметр контейнера: 17 см', 3500, 1, 'https://i.imgur.com/326fmbM.png'),
(27, 'Шлях самурая', 'Авторський бонсай \"WAY OF THE SAMURAI\"\r\nКолекція \"4 Сезони Весни\", закладена в 2020 році.\r\n\r\nРослина: Сосна гірська\r\nВік: 17 років\r\nСтиль: HAN KENGAI\r\nВисота: 32 см\r\nБез контейнера: 22 см\r\nДіаметр контейнера: 19см', 4700, 1, 'https://i.imgur.com/xNttuvU.png'),
(28, 'Шогун володар', 'Авторський бонсай \"THE SHOGUN\"\r\nКолекція \"4 Сезони Весни\", закладена в 2020 році.\r\n\r\nРослина: Сосна гірська\r\nВік: 17 років\r\nСтиль: FUKINAGASHI\r\nВисота: 30 см\r\nБез контейнера: 22 см\r\nДіаметр контейнера: 18 см', 4500, 1, 'https://i.imgur.com/GmI8U5E.png');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `gallery`
--
ALTER TABLE `gallery`
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `header`
--
ALTER TABLE `header`
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `info`
--
ALTER TABLE `info`
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `store`
--
ALTER TABLE `store`
  ADD UNIQUE KEY `id` (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `gallery`
--
ALTER TABLE `gallery`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `header`
--
ALTER TABLE `header`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `info`
--
ALTER TABLE `info`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `store`
--
ALTER TABLE `store`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
