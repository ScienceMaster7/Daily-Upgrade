export default function calculateLevels(currentLevel, timeCount) {
  let timePreviousLevels = 0;
  let level = currentLevel;
  let remainingTime;
  let progressPercentage; /* this value is needed to render the progess bar
  on the main page */
  let rank;

  /* Here I calculate the total time it has taken the user to reach the 
  current level. */
  for (let i = 0; i < level; i++) {
    /* This if statments are necesary because the Time needed to reach 
    the next Level increase on with every rank.*/
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
  /* Here I get time that was already spent on the current level plus 
  the time that has been recently submitted. */
  let currentLevelTime = timeCount - timePreviousLevels;
  /* In this loop I calculate if the time, that is stored in 
currentLevelTime, is enough to fullfill the requirement to reach a new Level.
The While loop is used to increase the Level as long as the time stored in
current Level time is greater then the requirement. */
  while (true) {
    if (level === 1000) {
      level = 1000;
      remainingTime = 0;
      progressPercentage = 0;
      rank = "Legend";
      break;
    }
    /* This if statements are necesary, because the requirement to 
    achive the next level increases with the rank. */
    if (level < 5) {
      const requiredTime = (level + 1) * 60;
      if (currentLevelTime >= requiredTime) {
        currentLevelTime = currentLevelTime - requiredTime;
        level = level + 1;
      } else {
        progressPercentage = currentLevelTime / requiredTime;
        remainingTime = requiredTime - currentLevelTime;
        rank = "Beginner";
        break;
      }
    }
    if (level > 4 && level < 25) {
      const requiredTime = 5 * 60;
      if (currentLevelTime >= requiredTime) {
        currentLevelTime = currentLevelTime - requiredTime;
        level = level + 1;
      } else {
        progressPercentage = currentLevelTime / requiredTime;
        remainingTime = requiredTime - currentLevelTime;
        if (level < 10) {
          rank = "Beginner";
        } else {
          rank = "Intermediate";
        }
        break;
      }
    }
    if (level > 24 && level < 75) {
      const requiredTime = 10 * 60;
      if (currentLevelTime >= requiredTime) {
        currentLevelTime = currentLevelTime - requiredTime;
        level = level + 1;
      } else {
        progressPercentage = currentLevelTime / requiredTime;
        remainingTime = requiredTime - currentLevelTime;
        rank = "Advanced";
        break;
      }
    }
    if (level > 74 && level < 200) {
      const requiredTime = 15 * 60;
      if (currentLevelTime >= requiredTime) {
        currentLevelTime = currentLevelTime - requiredTime;
        level = level + 1;
      } else {
        progressPercentage = currentLevelTime / requiredTime;
        remainingTime = requiredTime - currentLevelTime;
        rank = "Professional";
        break;
      }
    }
    if (level > 199 && level < 500) {
      const requiredTime = 25 * 60;
      if (currentLevelTime >= requiredTime) {
        currentLevelTime = currentLevelTime - requiredTime;
        level = level + 1;
      } else {
        progressPercentage = currentLevelTime / requiredTime;
        remainingTime = requiredTime - currentLevelTime;
        rank = "Master";
        break;
      }
    }
    if (level > 499 && level < 1000) {
      const requiredTime = 10 * 60;
      if (currentLevelTime >= requiredTime) {
        currentLevelTime = currentLevelTime - requiredTime;
        level = level + 1;
      } else {
        progressPercentage = currentLevelTime / requiredTime;
        remainingTime = requiredTime - currentLevelTime;
        rank = "Grand Master";
        break;
      }
    }
  }

  return [level, remainingTime, progressPercentage, rank];
}
