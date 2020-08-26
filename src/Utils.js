// 생년월일 조건
export const valDay = (value) => {
  if (value.length <= 10) {
    return true;
  } else if (value.length === 0) {
    return true;
  } else {
    return false;
  }
};

// 비밀번호 조건
export const valPassword = (value) => {
  if (value.length >= 8 && value.length <= 16) {
    return true;
  } else if (value.length === 0) {
    return true;
  } else {
    return false;
  }
};

// 비밀번호 확인 조건
export const valpasswordCheck = (passwordValue, value) => {
  if (passwordValue === value) {
    return true;
  }
};

// 핸드폰번호 조건
export const valPhone = (value) => {
  if (value.length <= 11 && !isNaN(value)) {
    return true;
  } else if (value.length === 0) {
    return true;
  } else {
    return false;
  }
};

// 이메일 조건
export const valEmail = (value) => {
  if (value.length >= 1 && value.includes("@")) {
    return true;
  } else if (value.length === 0) {
    return true;
  } else {
    return false;
  }
};