document.addEventListener('DOMContentLoaded', function () {
    const cardList = document.getElementById('cardList');
    const tabOptions = document.querySelectorAll('.tariff__options .tariff-option');
    const tariffCards = document.querySelectorAll('.tariff__cards');
    const tariffOptions = document.getElementById('tariffOptions');
    const gradientSelect = document.getElementById('gradientSelect');

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

    const tariffs = [
        [
            {
                title: 'Пн–Чт',
                description: 'Игра на арене в компании',
                options: ['2-14 человек', '1 час игры'],
                imgSource: 'resources/assets/icons/tariff/weekday-tariff.svg',
                days: {
                    weekday: '10:00–14:00',
                    weekend: '14:00–22:00',
                },
                prices: {
                    weekdays: '1000 ₽',
                    weekends: '1100 ₽'
                },
            },

            {
                title: 'Выходной',
                description: 'Игра на арене в компании',
                options: ['2-14 человек', '1 час игры'],
                imgSource: 'resources/assets/icons/tariff/weekend-tariff.svg',
                days: {
                    weekday: '10:00–22:00',
                },
                prices: {
                    weekdays: '1200 ₽',
                }
            },
        ],

        [
            {
                title: 'Базовый',
                description: 'День рождения в VR',
                options: ['8 человек', '3 часа игры', '2 игры'],
                imgSource: 'resources/assets/icons/tariff/base-tariff.svg',
                days: {
                    weekday: 'Пн-Чт',
                    weekend: 'Пт-Вс',
                },
                prices: {
                    weekdays: '25 900 ₽',
                    weekends: '48 900 ₽'
                }
            },

            {
                title: 'Оптимальный',
                description: 'День рождения в VR',
                options: ['8 человек', '3 часа игры', '2 игры'],
                imgSource: 'resources/assets/icons/tariff/optimal-tariff.svg',
                days: {
                    weekday: 'Пн-Чт',
                    weekend: 'Пт-Вс',
                },
                prices: {
                    weekdays: '25 900 ₽',
                    weekends: '48 900 ₽'
                }
            },

            {
                title: 'Премиум',
                description: 'День рождения в VR',
                options: ['8 человек', '3 часа игры', '2 игры'],
                imgSource: 'resources/assets/icons/tariff/premium-tariff.svg',
                days: {
                    weekday: 'Пн-Чт',
                    weekend: 'Пт-Вс',
                },
                prices: {
                    weekdays: '25 900 ₽',
                    weekends: '48 900 ₽'
                }
            },

            {
                title: 'Максимальный',
                description: 'День рождения в VR',
                options: ['8 человек', '3 часа игры', '2 игры'],
                imgSource: 'resources/assets/icons/tariff/maximum-tariff.svg',
                days: {
                    weekday: 'Пн-Чт',
                    weekend: 'Пт-Вс',
                },
                prices: {
                    weekdays: '25 900 ₽',
                    weekends: '48 900 ₽'
                }
            },
        ],

        [
            {
                title: 'Базовый',
                description: 'День рождения в VR',
                options: ['8 человек', '3 часа игры', '2 игры'],
                imgSource: 'resources/assets/icons/tariff/base-tariff.svg',
                days: {
                    weekday: 'Пн-Чт',
                    weekend: 'Пт-Вс',
                },
                prices: {
                    weekdays: '25 900 ₽',
                    weekends: '48 900 ₽'
                }
            },

            {
                title: 'Оптимальный',
                description: 'День рождения в VR',
                options: ['8 человек', '3 часа игры', '2 игры'],
                imgSource: 'resources/assets/icons/tariff/optimal-tariff.svg',
                days: {
                    weekday: 'Пн-Чт',
                    weekend: 'Пт-Вс',
                },
                prices: {
                    weekdays: '25 900 ₽',
                    weekends: '48 900 ₽'
                }
            },

            {
                title: 'Премиум',
                description: 'День рождения в VR',
                options: ['8 человек', '3 часа игры', '2 игры'],
                imgSource: 'resources/assets/icons/tariff/premium-tariff.svg',
                days: {
                    weekday: 'Пн-Чт',
                    weekend: 'Пт-Вс',
                },
                prices: {
                    weekdays: '25 900 ₽',
                    weekends: '48 900 ₽'
                }
            },

            {
                title: 'Максимальный',
                description: 'День рождения в VR',
                options: ['8 человек', '3 часа игры', '2 игры'],
                imgSource: 'resources/assets/icons/tariff/maximum-tariff.svg',
                days: {
                    weekday: 'Пн-Чт',
                    weekend: 'Пт-Вс',
                },
                prices: {
                    weekdays: '25 900 ₽',
                    weekends: '48 900 ₽'
                }
            },
        ],

        [
            {
                title: 'Базовый',
                description: 'День рождения в VR',
                options: ['8 человек', '3 часа игры', '2 игры'],
                imgSource: 'resources/assets/icons/tariff/base-tariff.svg',
                days: {
                    weekday: 'Пн-Чт',
                    weekend: 'Пт-Вс',
                },
                prices: {
                    weekdays: '25 900 ₽',
                    weekends: '48 900 ₽'
                }
            },

            {
                title: 'Оптимальный',
                description: 'День рождения в VR',
                options: ['8 человек', '3 часа игры', '2 игры'],
                imgSource: 'resources/assets/icons/tariff/optimal-tariff.svg',
                days: {
                    weekday: 'Пн-Чт',
                    weekend: 'Пт-Вс',
                },
                prices: {
                    weekdays: '25 900 ₽',
                    weekends: '48 900 ₽'
                }
            },

            {
                title: 'Премиум',
                description: 'День рождения в VR',
                options: ['8 человек', '3 часа игры', '2 игры'],
                imgSource: 'resources/assets/icons/tariff/premium-tariff.svg',
                days: {
                    weekday: 'Пн-Чт',
                    weekend: 'Пт-Вс',
                },
                prices: {
                    weekdays: '25 900 ₽',
                    weekends: '48 900 ₽'
                }
            },

            {
                title: 'Максимальный',
                description: 'День рождения в VR',
                options: ['8 человек', '3 часа игры', '2 игры'],
                imgSource: 'resources/assets/icons/tariff/maximum-tariff.svg',
                days: {
                    weekday: 'Пн-Чт',
                    weekend: 'Пт-Вс',
                },
                prices: {
                    weekdays: '25 900 ₽',
                    weekends: '48 900 ₽'
                }
            },
        ],

        [
            {
                title: 'Базовый',
                description: 'День рождения в VR',
                options: ['8 человек', '3 часа игры', '2 игры'],
                imgSource: 'resources/assets/icons/tariff/base-tariff.svg',
                days: {
                    weekday: 'Пн-Чт',
                    weekend: 'Пт-Вс',
                },
                prices: {
                    weekdays: '25 900 ₽',
                    weekends: '48 900 ₽'
                }
            },

            {
                title: 'Оптимальный',
                description: 'День рождения в VR',
                options: ['8 человек', '3 часа игры', '2 игры'],
                imgSource: 'resources/assets/icons/tariff/optimal-tariff.svg',
                days: {
                    weekday: 'Пн-Чт',
                    weekend: 'Пт-Вс',
                },
                prices: {
                    weekdays: '25 900 ₽',
                    weekends: '48 900 ₽'
                }
            },

            {
                title: 'Премиум',
                description: 'День рождения в VR',
                options: ['8 человек', '3 часа игры', '2 игры'],
                imgSource: 'resources/assets/icons/tariff/premium-tariff.svg',
                days: {
                    weekday: 'Пн-Чт',
                    weekend: 'Пт-Вс',
                },
                prices: {
                    weekdays: '25 900 ₽',
                    weekends: '48 900 ₽'
                }
            },

            {
                title: 'Максимальный',
                description: 'День рождения в VR',
                options: ['8 человек', '3 часа игры', '2 игры'],
                imgSource: 'resources/assets/icons/tariff/maximum-tariff.svg',
                days: {
                    weekday: 'Пн-Чт',
                    weekend: 'Пт-Вс',
                },
                prices: {
                    weekdays: '25 900 ₽',
                    weekends: '48 900 ₽'
                }
            },
        ],

        [
            {
                title: 'Базовый',
                description: 'День рождения в VR',
                options: ['8 человек', '3 часа игры', '2 игры'],
                imgSource: 'resources/assets/icons/tariff/base-tariff.svg',
                days: {
                    weekday: 'Пн-Чт',
                    weekend: 'Пт-Вс',
                },
                prices: {
                    weekdays: '25 900 ₽',
                    weekends: '48 900 ₽'
                }
            },

            {
                title: 'Оптимальный',
                description: 'День рождения в VR',
                options: ['8 человек', '3 часа игры', '2 игры'],
                imgSource: 'resources/assets/icons/tariff/optimal-tariff.svg',
                days: {
                    weekday: 'Пн-Чт',
                    weekend: 'Пт-Вс',
                },
                prices: {
                    weekdays: '25 900 ₽',
                    weekends: '48 900 ₽'
                }
            },

            {
                title: 'Премиум',
                description: 'День рождения в VR',
                options: ['8 человек', '3 часа игры', '2 игры'],
                imgSource: 'resources/assets/icons/tariff/premium-tariff.svg',
                days: {
                    weekday: 'Пн-Чт',
                    weekend: 'Пт-Вс',
                },
                prices: {
                    weekdays: '25 900 ₽',
                    weekends: '48 900 ₽'
                }
            },

            {
                title: 'Максимальный',
                description: 'День рождения в VR',
                options: ['8 человек', '3 часа игры', '2 игры'],
                imgSource: 'resources/assets/icons/tariff/maximum-tariff.svg',
                days: {
                    weekday: 'Пн-Чт',
                    weekend: 'Пт-Вс',
                },
                prices: {
                    weekdays: '25 900 ₽',
                    weekends: '48 900 ₽'
                }
            },
        ],
    ];
    
    function createTariffCard(tariff) {
        const card = document.createElement('li');
        card.classList.add('tariff-card');
        card.classList.add('gradient-shadow');

        card.innerHTML = `
            <div class="tariff-card__wrapper gradient-shadow__inner">
                <div class="tariff-card__icon">
                    <img src="${tariff.imgSource}" alt="${tariff.title}" />
                </div>
                <h3 class="tariff__title">${tariff.title}</h3>
                <p class="tariff__descr">${tariff.description}</p>
                <ul class="tariff__game-options">
                    ${tariff.options.map(option => `<li class="tariff__game-option">${option}</li>`).join('')}
                </ul>
                <div class="tariff__content">
                    <div>
                        ${tariff.days.weekday
                            ? `<p class="tariff__content-day">${tariff.days.weekday}</p>
                            <div class="tariff__content-divider"></div>
                            <span class="tariff__content-price">${tariff.prices.weekdays}</span>`
                            : ''}
                    </div>
                    <div>
                        ${tariff.days.weekend
                            ? `<p class="tariff__content-day">${tariff.days.weekend}</p>
                            <div class="tariff__content-divider"></div>
                            <span class="tariff__content-price">${tariff.prices.weekends}</span>`
                            : ''}
                    </div>
                </div>
                <button class="button">
                    Забронировать игру
                    <div class="button__icon">
                        <img src="./resources/assets/icons/button/button-icon.svg" alt="стрелки">
                    </div>
                </button>
            </div>
           
        `;

        return card;
    }

    function appendTariffCards(containerId, tariffs) {
        const container = document.getElementById(containerId);
    
        tariffs.forEach((tariffArray, index) => {
            const ulElement = document.createElement('ul');
            ulElement.classList.add('tariff__cards');
            ulElement.id = `tariffCardsContainer_${index}`;
            container.appendChild(ulElement);
    
            tariffArray.forEach(tariffData => {
                const card = createTariffCard(tariffData);
                ulElement.appendChild(card);
            });
        });
    }

    tariffOptions.addEventListener('click', function (event) {
        if (event.target.classList.contains('tariff-option')) {
            tabOptions.forEach(tab => tab.classList.remove('tariff-option_active'));
            event.target.classList.add('tariff-option_active');
            const tabIndex = Array.from(tariffOptions.children).indexOf(event.target);
            showTariffCards(tabIndex);
        }
    });

    function showTariffCards(tabIndex) {
        Array.from(tariffCardsContainer.children).forEach(container => {
            container.style.display = 'none';
        });

        const selectedContainer = document.getElementById(`tariffCardsContainer_${tabIndex}`);
        if (selectedContainer) {
            selectedContainer.style.display = '';
        }
    }

    appendTariffCards('tariffCardsContainer', tariffs);
    showTariffCards(0);

    // areaCards.forEach((item) => {
    //     const listItem = document.createElement("li");
    //     listItem.classList.add("area__card-list__item");

    //     const itemWrapper = document.createElement("div");
    //     itemWrapper.classList.add("area__card-list__item-wrapper");

    //     const numberImg = document.createElement("img");
    //     numberImg.classList.add("area__card-list__item-number__img");
    //     numberImg.src = `resources/assets/icons/area/${item.number}.svg`;
    //     numberImg.alt = item.number;

    //     const content = document.createElement("div");

    //     const title = document.createElement("p");
    //     title.classList.add("area__card-list__item-title");
    //     title.textContent = item.title;

    //     const subtitle = document.createElement("p");
    //     subtitle.classList.add("area__card-list__item-subtitle");
    //     subtitle.innerHTML = item.subtitle.replace('\n', '<br>');;

    //     const image = document.createElement("img");
    //     image.src = item.imageSrc;
    //     image.alt = item.title;

    //     content.appendChild(title);
    //     content.appendChild(subtitle);
    //     itemWrapper.appendChild(numberImg);
    //     itemWrapper.appendChild(content);
    //     itemWrapper.appendChild(image);
    //     listItem.appendChild(itemWrapper);
    //     cardList.appendChild(listItem);
    // });
})