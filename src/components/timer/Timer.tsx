import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import { styles } from "@/pages/Game/Game.style";

interface TimerProps {
  value?: number;
}

export const TimerComponent: React.FC<TimerProps> = ({ value }) => {
  const [timer, setTimer] = useState<number | undefined>(value);

  useEffect(() => {
    if (value !== undefined) {
      setTimer(value)
      const interval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer === undefined || prevTimer <= 0) {
            clearInterval(interval);
            return 0;
          }
          return parseFloat((prevTimer - 0.1).toFixed(1));
        });
      }, 100);

      return () => clearInterval(interval);
    }
  }, [value]);

  return <Text style={styles.label}>{timer}</Text>;
};
