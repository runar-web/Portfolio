$(document).ready(function() {


  //slide2id - плавная прокрутка по ссылкам внутри страницы
  $("nav a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({
    highlightSelector: "nav a"

  });

  // $("#resume").on("click", "a"function(event) {
  //     event.preventDefault();
  //   }


  // MixItUp - фильтрация работ в портфолио
  $('#portfolio-projects').mixItUp();


  // FancyBox - galery
  $(".fancybox").fancybox({
    // Default - with fix from scroll to top
    helpers: {
      overlay: {
        locked: false
      }
    }
  });
  // End of FancyBox - galery


  // jQuery Validate JS
  $("#contact-form").validate({
    rules: {
      name: { required: true },
      email: { required: true, email: true },
      // skype:  { required: true },
      // phone:  { required: true },
      message: { required: true }
    },

    messages: {
      name: "Пожалуйста, введите свое имя",
      email: {
        required: "Пожалуйста, введите свой email",
        email: "Email адрес должен быть в формате name@domain.com . Возможно вы ввели email с ошибкой."
      },
      message: "Пожалуйста, введите текст сообщения"
    },


    submitHandler: function(form) {
      ajaxFormSubmit();
    }
  })


  // Функция AJAX запрса на сервер
  function ajaxFormSubmit() {
    var string = $("#contact-form").serialize(); // Соханяем данные введенные в форму в строку. 

    // Формируем ajax запрос
    $.ajax({
      type: "POST", // Тип запроса - POST
      url: "php/mail.php", // Куда отправляем запрос
      data: string, // Какие даные отправляем, в данном случае отправляем переменную string

      // Функция если все прошло успешно
      success: function(html) {
        $("#contact-form").slideUp(800);
        $('#answer').html(html);
      }
    });

    // Чтобы по Submit больше ничего не выполнялось - делаем возврат false чтобы прервать цепчку срабатывания остальных функций
    return false;
  }

  $("#owl-example").owlCarousel({

    // Most important owl features
    items: 1,
    itemsDesktop: [1199, 1],
    itemsDesktopSmall: [980, 1],
    itemsTablet: [768, 1],
    itemsTabletSmall: true,
    itemsMobile: [479, 1],
    singleItem: true,

    //Basic Speeds
    slideSpeed: 200,
    paginationSpeed: 800,
    rewindSpeed: 1000,

    //Autoplay
    autoPlay: false,
    stopOnHover: false,

    // Navigation
    navigation: true,
    navigationText: ["<img src=\"img/arrow_left.png\"> ", "<img src=\"img/arrow_right.png\">"],
    rewindNav: true,
    scrollPerPage: false,

    //Pagination
    pagination: true,
    paginationNumbers: false,

    // Responsive 
    responsive: true,
    responsiveRefreshRate: 200,
    responsiveBaseWidth: window,

    // CSS Styles
    baseClass: "owl-carousel",
    theme: "owl-theme",

    //Lazy load
    lazyLoad: false,
    lazyFollow: true,

    //Auto height
    autoHeight: false,

    //JSON 
    jsonPath: false,
    jsonSuccess: false,

    //Mouse Events
    mouseDrag: true,
    touchDrag: true,

    //Transitions
    transitionStyle: "backSlide"

  });

});