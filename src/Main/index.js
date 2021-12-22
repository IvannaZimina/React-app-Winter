// Route создает подключение
import style from './style.module.css'
import { Routes, Route } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';

import AboutPage from '../containers/AboutPage';
import WinterTreePage from '../containers/WinterTreePage';
import NaturePage from '../containers/NaturePage';
import NotFoundPage from '../containers/NotFoundPage';

function Main() {
    return (
      <>
        <div class={style.mainPage}>
          <Header />

          {/* Routes вместо Switch = работает одна из ссылок*/}
          {/* element вместо component - отображает тело запроса */}
          {/* exac указывает на точное совпадение url*/}
          {/* path='*' = все остальные url*/}

          <div class={style.bodyContainer}>
            <Routes>
              {/* для пути path='/aboutPage' соответствует компонент element={<AboutPage />}*/}
              <Route exac path='/about' element={<AboutPage />} />
              <Route exac path='/winterTree' element={<WinterTreePage />} />
              <Route exac path='/nature' element={<NaturePage />} />
              <Route path='*' element={<NotFoundPage />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </>
    );
  }
  
  export default Main;