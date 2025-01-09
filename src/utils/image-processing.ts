import type { BodyPix } from "@tensorflow-models/body-pix";

interface ProcessImageProps {
  model: BodyPix;
  imageElement: HTMLImageElement;
  canvas: HTMLCanvasElement;
}

export const processImageWithBodyPix = async ({
  model,
  imageElement,
  canvas,
}: ProcessImageProps): Promise<string> => {
  // Get segmentation mask
  const segmentation = await model.segmentPerson(imageElement);

  // Set up canvas
  canvas.width = imageElement.width;
  canvas.height = imageElement.height;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Could not get canvas context");

  // Draw original image
  ctx.drawImage(imageElement, 0, 0);

  // Get image data
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const pixels = imageData.data;

  // Apply mask
  for (let i = 0; i < segmentation.data.length; i++) {
    const isBackground = !segmentation.data[i];
    if (isBackground) {
      pixels[i * 4 + 3] = 0; // Set alpha to 0 for background
    }
  }

  // Put processed image back
  ctx.putImageData(imageData, 0, 0);

  // Return the processed image URL
  return canvas.toDataURL("image/png");
};
