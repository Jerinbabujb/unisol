// preload.js
import { TextEncoder, TextDecoder } from 'util';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

console.log("⚓ Global TextEncoder/Decoder polyfills injected successfully.");