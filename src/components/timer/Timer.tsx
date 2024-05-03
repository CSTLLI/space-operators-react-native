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
      const interval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer === undefined || prevTimer <= 0) {
            clearInterval(interval);
            return 0;
          }
          return prevTimer - 1;
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [value]);

  return <Text style={styles.label}>{timer}</Text>;
};
