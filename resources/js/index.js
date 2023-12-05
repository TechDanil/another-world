document.addEventListener('DOMContentLoaded', function () {
    const cardList = document.getElementById('cardList');

    const areaCards = [
        {
            number: '01',
            title: 'Просторная игровая арена',
            subtitle: 'Играйте команда на команду\n в виртуальной реальности на арене в 200 м2',
            imageSrc: 'resources/assets/pictures/area/simple-game-area-img.png',
        },
        {
            number: '02',
            title: 'Комфортная зона отдыха',
            subtitle: 'Просторная комната отдыха, где можно отметить любой праздник',
            imageSrc: 'resources/assets/pictures/area/comfort-rest-zone-img.png',
        },
        {
            number: '03',
            title: 'VR аттракционы',
            subtitle: 'Вы можете выбрать любую понравившуюся игру в зоне одиночного VR',
            imageSrc: 'resources/assets/pictures/area/VR-attractions-img.png',
        },
    ];

    areaCards.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.classList.add("area__card-list__item");

        const itemWrapper = document.createElement("div");
        itemWrapper.classList.add("area__card-list__item-wrapper");

        const numberImg = document.createElement("img");
        numberImg.classList.add("area__card-list__item-number__img");
        numberImg.src = `resources/assets/icons/area/${item.number}.svg`;
        numberImg.alt = item.number;

        const content = document.createElement("div");

        const title = document.createElement("p");
        title.classList.add("area__card-list__item-title");
        title.textContent = item.title;

        const subtitle = document.createElement("p");
        subtitle.classList.add("area__card-list__item-subtitle");
        subtitle.innerHTML = item.subtitle.replace('\n', '<br>');;

        const image = document.createElement("img");
        image.src = item.imageSrc;
        image.alt = item.title;

        content.appendChild(title);
        content.appendChild(subtitle);
        itemWrapper.appendChild(numberImg);
        itemWrapper.appendChild(content);
        itemWrapper.appendChild(image);
        listItem.appendChild(itemWrapper);
        cardList.appendChild(listItem);
    });
})