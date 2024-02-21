const sql = require('better-sqlite3');
const db = sql('photos.db');

const dummyPhotos = [
  {
    title: 'Seagulls',
    slug: 'seagulls',
    image: '/images/bird-1.jpg',
    summary:
      'Seagulls flying over the Arno, Florence.',
    creator: 'John Doe',
    country: 'Italy',
    climate: 'urban',
    creator_email: 'johndoe@example.com'
  },
  {
    title: 'Sparrow in Water',
    slug: 'sparrow-in-water',
    image: '/images/bird-2.jpg',
    country: 'Iran',
    climate: 'arid',
    summary:
      'A small bird. I think its a sparrow?',
    creator: 'John Doe',
    creator_email: 'johndoe@example.com'
  },
  {
    title: '2 Owls',
    slug: 'two-owls',
    image: '/images/bird-3.jpg',
    country: 'Canada',
    climate: 'farmland',
    summary:
      '2 small owls',
    creator: 'John Doe',
    creator_email: 'johndoe@example.com'
  },
  {
    title: 'Blue Jay',
    slug: 'blue-jay',
    image: '/images/bird-4.jpg',
    country: 'Canada',
    climate: 'Woodland',
    summary:
      'Look at this blue jay I saw',
    creator: 'John Doe',
    creator_email: 'johndoe@example.com'
  }
]

db.prepare(`
   CREATE TABLE IF NOT EXISTS photos (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       slug TEXT NOT NULL UNIQUE,
       title TEXT NOT NULL,
       image TEXT NOT NULL,
       summary TEXT NOT NULL,
       country TEXT NOT NULL,
       climate TEXT NOT NULL,
       creator TEXT NOT NULL,
       creator_email TEXT NOT NULL
    )
`).run();

async function initData() {
    const stmt = db.prepare(`
    INSERT INTO photos VALUES(
    null,
    @slug,
    @title,
    @image,
    @summary,
    @country,
    @climate,
    @creator,
    @creator_email)`);

    for (const photo of dummyPhotos) {
        stmt.run(photo);
    }
}
 
initData();