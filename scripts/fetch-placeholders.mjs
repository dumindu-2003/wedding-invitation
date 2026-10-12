import fs from "fs";
import https from "https";
import path from "path";

const images = [
  ["story-meeting.jpg", "photo-1522673607200-164d1b6ce486"],
  ["story-journey.jpg", "photo-1529634597503-139d3726fed5"],
  ["story-promise.jpg", "photo-1591604466107-ec97de577aff"],
  ["gallery-1.jpg", "photo-1519741497674-611481863552"],
  ["gallery-2.jpg", "photo-1465495976277-4387d4b0b4c6"],
  ["gallery-3.jpg", "photo-1583939003579-730e3918a45a"],
  ["gallery-4.jpg", "photo-1511285560929-80b456fea0bc"],
  ["gallery-5.jpg", "photo-1460978812857-470ed1c77af0"],
  ["gallery-6.jpg", "photo-1519225421980-715cb0215aed"],
  ["venue.jpg", "photo-1464366400600-7168b8af9bc3"],
];

function get(url) {
  return new Promise((resolve, reject) => {
    const req = https.get(
      url,
      { headers: { "User-Agent": "EternalMoments/1.0", Accept: "image/jpeg,image/*" } },
      (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          res.resume();
          const next = res.headers.location.startsWith("http")
            ? res.headers.location
            : new URL(res.headers.location, url).href;
          return resolve(get(next));
        }
        if (res.statusCode !== 200) {
          res.resume();
          return reject(new Error(`${res.statusCode} for ${url}`));
        }
        const chunks = [];
        res.on("data", (c) => chunks.push(c));
        res.on("end", () => resolve(Buffer.concat(chunks)));
      },
    );
    req.on("error", reject);
  });
}

const dir = path.resolve("public/images");
fs.mkdirSync(dir, { recursive: true });

for (const [name, id] of images) {
  const url = `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=74`;
  process.stdout.write(`fetch ${name}... `);
  const buf = await get(url);
  if (buf[0] !== 0xff || buf[1] !== 0xd8) {
    throw new Error(`${name} was not a JPEG`);
  }
  fs.writeFileSync(path.join(dir, name), buf);
  process.stdout.write(`${Math.round(buf.length / 1024)}kb\n`);
}
