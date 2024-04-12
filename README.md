# Freight Aggregator

![/docs/preview](docs/preview.jpg)

## Описание
Данные репозиторий явялется решением тестового задания компании "**ITECO**" на позицию Frontend-разработчика.

## [Техническое задание](https://docs.google.com/document/d/1JmvW4FRkMFTj_PIPqfNgg3qjrBWnQEw6_PhquaxOArg/edit) |  [Figma](https://www.figma.com/file/MXpAPpp1Wtiq6yuSn2ZeH7/%D0%A2%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-ITECO-(Copy)?type=design&node-id=0-1&mode=design&t=yg0iHb3yU0KITYgm-0)

## Установка
1) Клонируйте репозиторий: 
```
    git clone git@github.com:artem-gladkov/freight-aggregator.git    
```


2) Далее из корня проекта устновите пакеты
```
    npm install     
```

## Запуск в режиме development
Для запуска в режиме разработки .  
1) Скопируйте файл ```env.simple``` в корне проекта и переименуйте его в ```env.development```
2) Из корная проекта запустите команду ``npm run dev``

## Запуск в  режиме production
Для запуска production версии сервиса:
1) Cкопируйте файл ```env.simple``` в корне проекта и переименуйте его в ```env.production```
2) Значение переменной ```NODE_ENV``` замените на ```production```
3) Из корная проекта запустите команды ```npm run build ``` и ``` npm run start ```

Приятного CodeReview :)



