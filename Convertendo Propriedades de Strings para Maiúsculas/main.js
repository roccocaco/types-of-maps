import { data } from "./data.js";

const songs = data.map(user => user.song.toUpperCase());

console.log(songs);