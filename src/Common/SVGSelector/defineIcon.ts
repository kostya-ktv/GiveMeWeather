export const defineIcon = (id: number) => {
   switch (true) {
      case (id >= 200 && id <= 232): return 'storm'
      case (id >= 300 && id <= 321): return 'drizzle'
      case (id >= 500 && id <= 531): return 'rain'
      case (id >= 600 && id <= 622): return 'snow'
      case (id >= 701 && id <= 781): return 'mist'
      case (id === 800): return 'sun'
      case (id >= 801 && id <= 804): return 'clear'
      default: return 'sun'
   }

}