export const changeWeatherRoute = route => {
    window.history.pushState('', {}, route.routeName )
    return {
      type: 'CHANGING_ROUTE',
      route
    }
  }