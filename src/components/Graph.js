import React from 'react';
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';

const fireData = {
  1970: 6,
  1977: 1,
  1978: 1,
  1980: 4,
  1982: 1,
  1985: 8,
  1987: 1,
  1988: 5,
  1990: 4,
  1991: 1,
  1992: 3,
  1993: 6,
  1996: 4,
  1999: 10,
  2002: 14,
  2003: 23,
  2004: 22,
  2005: 9,
  2006: 9,
  2007: 32,
  2008: 38,
  2009: 11,
  2010: 6,
  2011: 4,
  2012: 5,
  2013: 10,
  2014: 17,
  2015: 12,
  2016: 14,
  2017: 45,
  2018: 29,
  2019: 11,
  2020: 65,
};

const carbonData = {
  1970: 0.294366786246815e3,
  1971: 0.305827812157877e3,
  1972: 0.312715430838954e3,
  1973: 0.329277422861309e3,
  1974: 0.304462224501294e3,
  1975: 0.311476523032414e3,
  1976: 0.326893420251635e3,
  1977: 0.354474826262985e3,
  1978: 0.345235195851785e3,
  1979: 0.362058591643913e3,
  1980: 0.344404740578401e3,
  1981: 0.334211782570823e3,
  1982: 0.298773725482472e3,
  1983: 0.293476994651634e3,
  1984: 0.315497208150315e3,
  1985: 0.32062034396533e3,
  1986: 0.30667379834086e3,
  1987: 0.335833933236465e3,
  1988: 0.344564247596511e3,
  1989: 0.359384424358288e3,
  1990: 0.360198082008864e3,
  1991: 0.348766244296767e3,
  1992: 0.352930699538884e3,
  1993: 0.342287922696416e3,
  1994: 0.359306524348291e3,
  1995: 0.348747120038504e3,
  1996: 0.349802927476136e3,
  1997: 0.35266560018736e3,
  1998: 0.362665775640316e3,
  1999: 0.366095497956336e3,
  2000: 0.382283109437842e3,
  2001: 0.385555774931225e3,
  2002: 0.384418438297919e3,
  2003: 0.374630567772194e3,
  2004: 0.392684998366311e3,
  2005: 0.38957452648497e3,
  2006: 0.397784683013835e3,
  2007: 0.402552357755831e3,
  2008: 0.383998201548439e3,
  2009: 0.370354624815673e3,
  2010: 0.356588090069992e3,
  2011: 0.342651287900006e3,
  2012: 0.348745643912077e3,
  2013: 0.349706025253861e3,
  2014: 0.345376602158833e3,
  2015: 0.351408516045485e3,
  2016: 0.353356131917475e3,
  2017: 0.356516547617712e3,
  2018: 0.358594717758653e3,
  2019: 0.358164373299367e3,
  2020: 0.303406714159634e3,
};

const Graph = (props) => {
  return (
    <Line
      datasetIdKey='disasters'
      data={{
        datasets: [
          {
            label: 'carbon emissions',
            yAxisID: 'emissions',
            data: carbonData,
          },
          {
            label: `${props.disaster}`,
            yAxisID: 'occurences',
            data: fireData,
          },
        ],
      }}
      options={{
        scales: {
          occurences: {
            title: {
              display: true,
              text: `${props.disaster}s per year`,
            },
            type: 'linear',
            position: 'left',
          },
          emissions: {
            title: {
              display: true,
              text: 'carbon emissions',
            },
            type: 'linear',
            position: 'right',
          },
        },
      }}
    />
  );
};

export default Graph;
