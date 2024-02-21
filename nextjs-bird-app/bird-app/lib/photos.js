import sql from 'better-sqlite3';
import slugify from 'slugify';
import fs from 'node:fs';
import xss from 'xss';

const db = sql('photos.db');

export function getPhotos() {
    console.log("fn called");
    return db.prepare('SELECT * FROM photos').all();
}