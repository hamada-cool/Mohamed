export const contactEmail = 'mohamedali32947@gmail.com';

export function isMobileDevice({
  userAgent = navigator.userAgent || '',
  platform = navigator.platform,
  maxTouchPoints = navigator.maxTouchPoints,
  userAgentDataMobile = navigator.userAgentData?.mobile,
} = {}) {
  const isIPadOS = platform === 'MacIntel' && maxTouchPoints > 1;

  return userAgentDataMobile ?? (
    /Android|iPhone|iPad|iPod|IEMobile|Windows Phone|Mobile/i.test(userAgent) || isIPadOS
  );
}

export function getEmailUrl(email, mobileDevice) {
  return mobileDevice
    ? `mailto:${email}`
    : `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;
}
