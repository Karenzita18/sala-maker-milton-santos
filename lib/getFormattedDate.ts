export default function getFormattedDate(dateString: string): string {
    const date = new Date(dateString);
  
    // Verifica se a data é inválida
    if (isNaN(date.getTime())) {
      return 'Invalid date';
    }
  
    return new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(date);
  }
  