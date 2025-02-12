export const formatPhoneNumber = (value: string): string => {
  if (!value) return '';
  
  const numbers = value.replace(/\D/g, '');
  const maxLength = 11;
  const cleaned = numbers.slice(0, maxLength);
  
  if (cleaned.length <= 2) {
    return cleaned;
  }
  if (cleaned.length <= 7) {
    return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2)}`;
  }
  return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(7)}`;
};
