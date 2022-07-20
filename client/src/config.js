const isWeb = process.env.TARGET === 'web';
const isProduction = process.env.NODE_ENV === 'production';

let config = {
  // Сервис с методами API
  api: {
    default: {
      // Обычно хост на апи относительный и используется прокси для устранения CORS
      baseURL: isWeb ? '' : 'http://example.front.ylab.io',
      //headers: {},
      //auth:{} base auth
    },
    // Настройки для конкретных модулей api по их названиям
    endpoints:{
      users: {

      },
    }
  },

  // Сервис состояний и действий (redux)
  store: {
    log: isWeb && !isProduction, // false,
    preloadState: {},
    // Настройки для конкретных модулей состояния по их названиям
    states: {
      session: {
        tokenHeader: 'X-Token'
      },
      articles: {},
    }
  },

  // Сервис навигации
  navigation: {
    basename: '/', // если фронт доступен по вложенному пути
    type: isWeb ? 'browser' : 'memory',
  },

  // HTTP сервер при разработки (локальный для горячего обновления фронта)
  devServer: {
    port: 8031,
    // Прокси на апи, если режим разработки
    proxy: {
      '/api/**': {
        target: 'http://example.front.ylab.io',
        secure: false,
        changeOrigin: true,
      },
    },
  },
};

module.exports = config;
