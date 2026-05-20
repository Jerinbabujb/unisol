// import * as faceapi from '@vladmandic/face-api/dist/face-api.js';
// import '@tensorflow/tfjs-core';
// import '@tensorflow/tfjs-converter';
// import { Canvas, Image, ImageData, loadImage } from 'canvas';
// import path from 'path';

// faceapi.env.monkeyPatch({ Canvas, Image, ImageData });

// let isInitialized = false;

// export const initFaceApi = async () => {
//     if (isInitialized) return;
//     try {
//         const modelPath = path.join(process.cwd(), 'models');
//         await faceapi.nets.ssdMobilenetv1.loadFromDisk(modelPath);
//         await faceapi.nets.faceLandmark68Net.loadFromDisk(modelPath);
//         await faceapi.nets.faceRecognitionNet.loadFromDisk(modelPath);

//         isInitialized = true;
//         console.log("✅ Face-API Engine initialized successfully");
//     } catch (error) {
//         console.error("❌ Failed to initialize Face-API Engine:", error);
//     }
// };
// /**
//  * Computes face verification metrics between an avatar and a live verification selfie
//  */
// export const crossCheckFaces = async (profileImg, selfieImg) => {
//     try {
//         await initFaceApi();

//         const img1 = await loadImage(profileImg);
//         const img2 = await loadImage(selfieImg);

//         const detection1 = await faceapi.detectSingleFace(img1).withFaceLandmarks().withFaceDescriptor();
//         const detection2 = await faceapi.detectSingleFace(img2).withFaceLandmarks().withFaceDescriptor();

//         if (!detection1) {
//             return { success: false, message: "Could not find a clear face in your uploaded profile image." };
//         }
//         if (!detection2) {
//             return { success: false, message: "Could not find a clear face in your verification selfie. Ensure good lighting." };
//         }

//         const distance = faceapi.euclideanDistance(detection1.descriptor, detection2.descriptor);
//         console.log(`↔️ Biometric Distance: ${distance.toFixed(4)}`);

//         const ACCURACY_THRESHOLD = 0.55;

//         if (distance > ACCURACY_THRESHOLD) {
//             return {
//                 success: false,
//                 message: "Identity check mismatch. The verification selfie does not match your profile picture."
//             };
//         }

//         return {
//             success: true,
//             message: "Identity verified successfully.",
//             descriptor: Array.from(detection1.descriptor)
//         };

//     } catch (err) {
//         console.error("Biometric Cross-Check Error:", err);
//         return { success: false, message: "Internal server error processing facial biometrics." };
//     }
// };