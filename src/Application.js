import React from 'react';
import { Header } from './Header';
import { Content } from './Content';
import { Footer } from './Footer';

const links = {
  home: {
    label: 'Home',
    href: '/',
  },
  about: {
    label: 'About us',
    href: '/#about',
  },
  contact: {
    label: 'Contact us',
    href: '/#contact',
  },
  help: {
    label: 'Help page',
    href: '/#help',
  },
};

const notes = {
  0: {
    title: '15 полезных однострочных выражений JavaScript',
    description:
      'Улучшение JavaScript-кода за пару минут перевод 15 Helpful JavaScript One-Liners',
  },
  1: {
    title: 'Полиморфизм простыми словами',
    description:
      'Скорее всего вы уже встречались с понятием “полиморфизм” и даже помните примеры с наследованием, но они показывают далеко не всё',
  },
  2: {
    title: 'Начало работы с Node.js',
    description: 'Node Hero: Глава 1',
  },
  3: {
    title:
      'Нейросети с нуля для JavaScript разработчиков (Часть 1: Перцептрон)',
    description:
      'Перевод статьи Elyx0: Neural networks from scratch for Javascript linguists (Part1 The Perceptron).',
  },
  4: {
    title: '8 практичных хитростей веб-разработчика применить немедленно!',
    description:
      'HTML, CSS и JS хинты, которые полезно знать перевод 8 Tricks for Web Developers You Can Put Into Practice Immediately',
  },
  5: {
    title: 'Насколько JavaScript сильный?',
    description:
      'Погружение в тему неявных преобразований. Где и как возникают и вычисляются неявные преобразования в JavaScript?',
  },
  6: {
    title: 'Изучите CSS-переменные за 5 минут',
    description:
      'Перевод статьи Per Harald Borgen: Learn CSS Variables in 5 minutes.',
  },
  7: {
    title: 'Создание MEVN-приложения (Часть 1/2)',
    description:
      'Создание full-stack приложения на основе Vue.js и Express.js (+MongoDB)',
  },
  8: {
    title: 'Реактивность Vue.js',
    description:
      'Реактивность фреймворка Vue.js и использование метода Vue.set',
  },
  9: {
    title: 'Микроптимизации производительности и JavaScript',
    description:
      'Недавно в комментариях на Hexlet я поучаствовал в дискуссии на тему «Что важнее — оптимизации производительности или качество кода?» Если…',
  },
  10: {
    title: 'Девшахта-подкаст',
    description:
      '#108: Производительность кода — это важнейший критерий качества?',
  },
  11: {
    title: 'Одна из самых красивых идей в информатике: Y-Combinator',
    description:
      'Перевод статьи Lucas Fernandes da Costa “Y: The Most Beautiful Idea in Computer Science explained in JavaScript”',
  },
};

const Application = () => {
  return (
    <div className="wrapper">
      <Header links={links} />
      <Content notes={notes} />
      <Footer logo="Logo" copyright="Small static blog @ 2022" />
    </div>
  );
};

export default Application;
