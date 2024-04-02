import sql from 'better-sqlite3';

const db = sql('photos.db');

export function getPhotos() {
    return db.prepare('SELECT * FROM photos').all();
}

export function getPhoto(slug) {
    return db.prepare('SELECT * FROM photos WHERE slug=?').get(slug);
}

export function getRandomBird() {
    return db.prepare('SELECT * FROM photos WHERE id IN (SELECT id FROM photos ORDER BY RANDOM() LIMIT 1)').get();
}