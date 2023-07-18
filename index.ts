import { decode, encode } from "blurhash";
import { Canvas, ExportFormat, RenderOptions, loadImage } from "skia-canvas";

type BlurData = {
  blurHash: string;
  blueDataURL: string;
};

type EncodingOptions = {
  mimeType: ExportFormat;
  options?: RenderOptions;
};

export default async function generateBlurhash(
  imageUrl: string,
  encodingOptions?: EncodingOptions
): Promise<BlurData> {
  // Load image from path or url
  const image = await loadImage(imageUrl);
  // Create canvas
  const canvas = new Canvas(image.width, image.height);
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
  const blurDataURL: string = encodingOptions
    ? encodingOptions.options
      ? await canvas.toDataURL(
          encodingOptions.mimeType,
          encodingOptions.options
        )
      : await canvas.toDataURL(encodingOptions.mimeType)
    : await canvas.toDataURL("png"); // defaults to png
  const blurData: BlurData = {
    blurHash: encodedBlurhash,
    blueDataURL: blurDataURL,
  };
  return blurData;
}
