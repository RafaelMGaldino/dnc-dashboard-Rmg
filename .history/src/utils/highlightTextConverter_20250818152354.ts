/**
 * Convert text from highlight api
 * @param text - Text to be converted
 * @returns Converted text
 */

export function highlightTextConverter(text: string): string {
  switch (text) {
    case 'alert':
        return '*  Meta longe de ser batida!';
    case 'warning':
        return '*  Falta pouco, vamos lá!';

    case 'success':
    
        return '* Meta batida!  Parabéns!!!';

    default:
        return 'Sem dados no momento';
    }

}