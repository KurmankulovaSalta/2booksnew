import React from "react";
import "./AboutUs.css";
import Image from "./images(AboutUs)/library-centre.jpg";

const AboutUs = () => {
  return (
    <div id="AboutUs_main">
      <div id="AboutUs_content">
        <div>
          <img id="about_image" src={Image} alt="" />
        </div>
        <div>
          <h2 className="AboutUs_text">О нашей онлайн библиотеке</h2>
          <p className="AboutUs_text">
          Библиотека  “SalamatBook” в соответствии
           с миссией и целями университета для обеспечения 
           профессорско-преподавательского состава, студентов,
            исследователей и административных работников университета различными 
            необходимыми источниками информации, удовлетворения их потребностей
             в образовательной, научной, культурной и иной информации, создания 
             и эксплуатации соответствующей электронной системы, расширения 
             ассортимента и обогащения содержания необходимых информационных ресурсов, 
             предоставления образовательных услуг и для поддержки образовательных и исследовательских программ был открыт в 1998 году.
       В 2002 году был создан электронный каталог, в 2005 году построена автоматизированная библиотечная система «Йордам», 
       все библиотечные службы работают в автоматизированной системе. Электронный каталог стал доступен всему миру через интернет (http://yordam.salamatbook.edu.kg/). 
       С февраля 2016 года был запущен мобильный формат электронного каталога «Мобильная библиотека». В настоящее время наша библиотека на 410 мест, обеспечивающая более 90 тысячами книг, газетами, журналами и аудио-видео источниками информации,
        ежегодно принимает около 500 тысяч читателей, работает в 4-х местах, в каждой библиотеке установлена система электромагнитной защиты, созданы условия свободного доступа к фонду для читателей. Оснащенная современной техникой, 
        она обеспечивает доступ к около 60 электронным базам данных и источникам информации в год, 
        а также обеспечивает читателей электронными книгами и журналами в различных областях. Во всех библиотеках имеется высокоскоростной Wi-Fi, также есть 2 компьютерных зала на 27 мест, рекомендованных для использования читателями.
          </p>
          <hr />
          <p id="AboutUs_form">Форма обратной связи</p>
          <input className="AboutUs_input" type="text" placeholder="Name" />
          <br />
          <input className="AboutUs_input" type="text" placeholder="Email" />
          <br />
          <p>
            Пожалуйста оставьте ваше пожелание, мы обязательно свяжемся с вами!
          </p>
          <textarea
            className="AboutUs_input"
            id="AboutUs_input_message"
            maxLength="1000"
            placeholder="Поле для вашего текста"
          ></textarea>
          <br />
          <button id="AboutUs_button">Отправить</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
