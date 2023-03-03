import throttle from 'lodash.throttle';

import Player from "@vimeo/player";

const STORAGE_KEY = 'videoplayer-current-time';

//Під час перезавантаження сторінки скористайся методом setCurrentTime() з метою відновлення відтворення зі збереженої позиції.

const iframe = document.querySelector('iframe');
        const player = new Player(iframe);

        player.on('timeupdate', throttle(onPlay, 1000));
    
        function onPlay(data) {
           console.log(data);  
           localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        }

try {
const savedData = localStorage.getItem(STORAGE_KEY);
const parsedData = JSON.parse(savedData);
const time = parsedData.seconds;
    
    player.setCurrentTime(time);
    console.log('time',time);

} catch (error) {
  console.log(error.name); 
  console.log(error.message); 
}

