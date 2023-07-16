import { decode, encode } from "blurhash";
import { createCanvas, loadImage } from "canvas";

type BlurData = {
  blurHash: string;
  blueDataURL: string;
};

type jpegOptions = {
  mimeType: "image/jpeg";
  quality?: number;
};

export default async function generateBlurhash(
  imageUrl: string,
  encoderOptions?: jpegOptions
): Promise<BlurData> {
  // Load image from path or url
  const image = await loadImage(imageUrl, { crossOrigin: "anonymous" });
  // Create canvas
  const canvas = createCanvas(image.width, image.height);
  // Create canvas context
  const context = canvas.getContext("2d");
  // Draw the image on canvas
  context.drawImage(image, 0, 0);
  // Get the image data
  const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
  // Encode image to blurhash
  const encodedBlurhash = encode(
    imageData.data,
    imageData.width,
    imageData.height,
    4,
    4
  );
  // Decode blurhash to pixels
  const decodedBlurhash = decode(
    encodedBlurhash,
    imageData.width,
    imageData.height,
    1
  );
  // Draw blurhash image on the canvas
  imageData.data.set(decodedBlurhash);
  context.putImageData(imageData, 0, 0);
  // Generate blurDataURL
  const blurDataURL: string = encoderOptions
    ? canvas.toDataURL(
        encoderOptions.mimeType,
        encoderOptions.quality ? encoderOptions.quality : 0.75
      )
    : canvas.toDataURL(); // defaults to png
  const blurData: BlurData = {
    blurHash: encodedBlurhash,
    blueDataURL: blurDataURL,
  };
  return blurData;
}
