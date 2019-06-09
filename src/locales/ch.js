import numeral from 'numeral';

numeral.register('locale', 'ch', {
  delimiters: {
    thousands: '\'',
    decimal: '.'
  },
  abbreviations: {
    thousand: 'k',
    million: 'm',
    billion: 'b',
    trillion: 't'
  },
  ordinal: number => number === 1 ? 'er' : 'ème',
  currency: {
    symbol: 'CHF'
  }
});

numeral.locale('ch');

export default numeral;