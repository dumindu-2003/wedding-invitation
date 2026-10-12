import fs from "fs";
import path from "path";

const sampleRate = 22050;
const duration = 12;
const total = sampleRate * duration;
const samples = new Int16Array(total);

for (let i = 0; i < total; i += 1) {
  const t = i / sampleRate;
  const fade = Math.min(1, i / (sampleRate * 2.2), (total - i) / (sampleRate * 2.2));
  const swell = 0.72 + 0.28 * Math.sin(2 * Math.PI * 0.16 * t);
  const tone =
    Math.sin(2 * Math.PI * 196 * t) * 0.34 +
    Math.sin(2 * Math.PI * 246.94 * t) * 0.22 +
    Math.sin(2 * Math.PI * 293.66 * t) * 0.16 +
    Math.sin(2 * Math.PI * 392 * t) * 0.05;
  const value = Math.max(-1, Math.min(1, tone * swell * fade * 0.22));
  samples[i] = value * 32767;
}

const dataSize = total * 2;
const buffer = Buffer.alloc(44 + dataSize);
buffer.write("RIFF", 0);
buffer.writeUInt32LE(36 + dataSize, 4);
buffer.write("WAVE", 8);
buffer.write("fmt ", 12);
buffer.writeUInt32LE(16, 16);
buffer.writeUInt16LE(1, 20);
buffer.writeUInt16LE(1, 22);
buffer.writeUInt32LE(sampleRate, 24);
buffer.writeUInt32LE(sampleRate * 2, 28);
buffer.writeUInt16LE(2, 32);
buffer.writeUInt16LE(16, 34);
buffer.write("data", 36);
buffer.writeUInt32LE(dataSize, 40);
Buffer.from(samples.buffer).copy(buffer, 44);

const dest = path.resolve("public/audio/background.wav");
fs.mkdirSync(path.dirname(dest), { recursive: true });
fs.writeFileSync(dest, buffer);
console.log(`wrote ${dest} (${Math.round(buffer.length / 1024)}kb)`);
