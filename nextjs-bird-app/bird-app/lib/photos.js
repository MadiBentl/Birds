import sql from 'better-sqlite3';

const db = sql('photos.db');

export function getPhotos() {
    console.log("fn called");
    return db.prepare('SELECT * FROM photos').all();
}

export function getPhoto(slug) {
    return db.prepare('SELECT * FROM photos WHERE slug=?').get(slug);
}