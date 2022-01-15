import React from 'react';

const fetchedPlaylist = [
  {
    id: 0,
    title: '01 Bol Do Na Zara',
    author: '',
    url: 'https://ia600401.us.archive.org/2/items/TeriMeriKahaaniGabbarIsBack320KbpsSongspk.name_201605/01%20-%20Bol%20Do%20Na%20Zara%20%5BSongspk.LINK%5D.ogg',
    cover: 'https://c.saavncdn.com/709/Bol-Do-Na-Zara-Instrumental-Hindi-2018-20181221231527-500x500.jpg',
  },
  {
    id: 1,
    title: '02 Fitoor',
    author: 'The ADHD Drummer',
    url:' https://ia800401.us.archive.org/2/items/TeriMeriKahaaniGabbarIsBack320KbpsSongspk.name_201605/02-Fitoor-YehFitoorMerasongspk.link.ogg',
    cover: 'https://c.saavncdn.com/029/Fitoor-Hindi-2018-20210611191302-500x500.jpg',
  },
  {
    id: 2,
    title: '03 Lazy beat',
    author: 'Before Coffee Drummer',
    url: 'http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/explosion%2001.wavs',
    cover: 'https://via.placeholder.com/300/B6A2EB',
  },
  {
    id: 3,
    title: '04 Blasting beat',
    author: 'The ADHD Drummer',
    url: 'https://ia600401.us.archive.org/2/items/TeriMeriKahaaniGabbarIsBack320KbpsSongspk.name_201605/01%20-%20Bol%20Do%20Na%20Zara%20%5BSongspk.LINK%5D.ogg',
    cover: 'https://via.placeholder.com/300/9A8CBE',
  },
];

// mock api request
export const fetchPlaylist = () => {
  return new Promise((res, rej) => {
    setTimeout(() => res(fetchedPlaylist), 1000);
  });
};

export const PlaylistContext = React.createContext();
