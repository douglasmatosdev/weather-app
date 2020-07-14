const size = {
  
  mobileUltraSmall: '180px',
  mobileSmall: '320px',
  mobileMedium: '375px',
  mobileLarge: '475px',
  tablet: '768px',
  laptop: '1024px',
  laptopLarge: '1440px',
  desktop: '2560px'
}

const device = {
  mobileUltraSmall: `(min-width: ${size.mobileUltraSmall})`,
  mobileSmall: `(min-width: ${size.mobileSmall})`,
  mobileMedium: `(min-width: ${size.mobileMedium})`,
  mobileLarge: `(min-width: ${size.mobileLarge})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopLarge: `(min-width: ${size.laptopLarge})`,
  desktop: `(min-width: ${size.desktop})`
}

export default device;