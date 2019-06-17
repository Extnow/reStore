export default class BookstoreService {
  getBooks() {
    return [
      {
        id: 1,
        title: 'Все лгут. Поисковики, Big Data и Интернет знают о вас всё',
        author: 'Cет Cтивенс-Давидовиц',
        price: '497',
        img:
          'https://knizhnik.org/covers/page-24890-vse-lgut-poiskoviki-big-data-i-internet-znajut-o-vas-vse.jpg'
      },
      {
        id: 2,
        title: 'Кровь, пот и пиксели',
        author: 'Джейсон Шрейер',
        price: '564',
        img: 'https://cdn.eksmo.ru/v2/ITD000000000898711/COVER/cover1__w600.jpg'
      }
    ];
  }
}
