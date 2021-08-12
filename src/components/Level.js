export default function Level(currentLevel, timeCount) {
  let timePreviousLevels = 0;
  let currentLevelTime = timeCount - timePreviousLevels;
  let level = currentLevel;

  for (let i = 0; i < currentLevel; i++) {
    if (i < 5) {
      timePreviousLevels = timePreviousLevels + (i + 1) * 60;
    }
    if (i > 4 && i < 10) {
      timePreviousLevels = timePreviousLevels + 5 * 60;
    }
  }

  while (true) {
    if (level < 5) {
      const requiredTime = (level + 1) * 60;
      if (currentLevelTime >= requiredTime) {
        currentLevelTime = currentLevelTime - requiredTime;
        level = level + 1;
      } else {
        break;
      }
    }
    if (level > 4 && level < 10) {
      const requiredTime = 5 * 60;
      if (currentLevelTime >= requiredTime) {
        currentLevelTime = currentLevelTime - requiredTime;
        level = level + 1;
      } else {
        break;
      }
    }
  }
  return level;
}
