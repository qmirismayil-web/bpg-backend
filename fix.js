const mongoose = require('mongoose');
const { Video } = require('./src/homeVideo/video.entity');
require('dotenv').config();

async function run() {
  try {
    await mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
    
    // Check how many videos exist
    const count = await Video.countDocuments();
    if (count < 2) {
      console.log('Eksik videolar elave edilir...');
      const dummyVideo1 = new Video({
        title: { AZ: 'Ana Səhifə Videosu', ENG: 'Home Video', RU: 'Главная Видео' },
        subTitle: { AZ: 'Məsləhət mərkəzi', ENG: 'Consulting Center', RU: 'Консалтинг' },
        description: { AZ: 'Açıqlama', ENG: 'Desc', RU: 'Desc' },
        pageType: 'home',
        showImage: false,
        youtubeLinkAz: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      });
      const dummyVideo2 = new Video({
        title: { AZ: 'Haqqımızda Videosu', ENG: 'About Video', RU: 'О нас Видео' },
        subTitle: { AZ: 'Komandamız', ENG: 'Our Team', RU: 'Наша Команда' },
        description: { AZ: 'Açıqlama', ENG: 'Desc', RU: 'Desc' },
        pageType: 'about',
        showImage: false,
        youtubeLinkAz: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      });
      await dummyVideo1.save();
      await dummyVideo2.save();
      console.log('Videolar ugurla yaradildi!');
    } else {
        console.log('Videolar artiq movcuddur!');
    }
    
    process.exit(0);
  } catch (err) {
    console.error('Xeta bas verdi:', err);
    process.exit(1);
  }
}

run();
