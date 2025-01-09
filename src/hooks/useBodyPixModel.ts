import * as bodyPix from "@tensorflow-models/body-pix";
import * as tf from "@tensorflow/tfjs";
import { useEffect, useState } from "react";

export const useBodyPixModel = () => {
  const [model, setModel] = useState<bodyPix.BodyPix | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isModelLoading, setIsModelLoading] = useState(true);

  useEffect(() => {
    const loadModel = async () => {
      try {
        setIsModelLoading(true);
        await tf.ready();
        await tf.setBackend("webgl");

        const loadedModel = await bodyPix.load({
          architecture: "MobileNetV1",
          outputStride: 16,
          multiplier: 0.75,
          quantBytes: 2,
        });
        setModel(loadedModel);
        setIsModelLoading(false);
      } catch (err) {
        setError("Failed to load AI model. Please try again later.");
        setIsModelLoading(false);
        console.error("Error loading model:", err);
      }
    };

    loadModel();

    return () => {
      if (model) {
        model.dispose();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { model, error, isModelLoading };
};
