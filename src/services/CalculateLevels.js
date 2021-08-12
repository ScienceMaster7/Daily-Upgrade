export default function calculateLevels(currentLevel, timeCount) {
  let timePreviousLevels = 0;
  let level = currentLevel;

  for (let i = 0; i < level; i++) {
    if (i < 5) {
      timePreviousLevels = timePreviousLevels + (i + 1) * 60;
    }
    if (i > 4 && i < 25) {
      timePreviousLevels = timePreviousLevels + 5 * 60;
    }
    if (i > 24 && i < 75) {
      timePreviousLevels = timePreviousLevels + 10 * 60;
    }
    if (i > 74 && i < 200) {
      timePreviousLevels = timePreviousLevels + 15 * 60;
    }
    if (i > 199 && i < 500) {
      timePreviousLevels = timePreviousLevels + 25 * 60;
    }
    if (i > 499 && i < 1000) {
      timePreviousLevels = timePreviousLevels + 10 * 60;
    }
  }
  let currentLevelTime = timeCount - timePreviousLevels;

  while (true) {
    if (level === 1000) {
      return level;
    }
    if (level < 5) {
      const requiredTime = (level + 1) * 60;
      if (currentLevelTime >= requiredTime) {
        currentLevelTime = currentLevelTime - requiredTime;
        level = level + 1;
      } else {
        break;
      }
    }
    if (level > 4 && level < 25) {
      const requiredTime = 5 * 60;
      if (currentLevelTime >= requiredTime) {
        currentLevelTime = currentLevelTime - requiredTime;
        level = level + 1;
      } else {
        break;
      }
    }
    if (level > 24 && level < 75) {
      const requiredTime = 10 * 60;
      if (currentLevelTime >= requiredTime) {
        currentLevelTime = currentLevelTime - requiredTime;
        level = level + 1;
      } else {
        break;
      }
    }
    if (level > 74 && level < 200) {
      const requiredTime = 15 * 60;
      if (currentLevelTime >= requiredTime) {
        currentLevelTime = currentLevelTime - requiredTime;
        level = level + 1;
      } else {
        break;
      }
    }
    if (level > 199 && level < 500) {
      const requiredTime = 25 * 60;
      if (currentLevelTime >= requiredTime) {
        currentLevelTime = currentLevelTime - requiredTime;
        level = level + 1;
      } else {
        break;
      }
    }
    if (level > 499 && level < 1000) {
      const requiredTime = 10 * 60;
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
