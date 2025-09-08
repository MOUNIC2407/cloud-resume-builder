// Lightweight wrapper for html2pdf.js using dynamic import (UMD, no types)

export type PdfOptions = {
  filename?: string
  margin?: number | number[]
  image?: { type?: string; quality?: number }
  html2canvas?: { scale?: number; useCORS?: boolean; backgroundColor?: string | null }
  jsPDF?: { unit?: string; format?: string | number[]; orientation?: 'portrait' | 'landscape' }
}

export async function exportElementToPdf(element: HTMLElement, opts: PdfOptions = {}) {
  const html2pdfModule = await import('html2pdf.js')
  const html2pdf: any = (html2pdfModule as any).default || (html2pdfModule as any)
  const options: PdfOptions = {
    filename: 'resume.pdf',
    margin: 12,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2.2, useCORS: true, backgroundColor: '#ffffff' },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    ...opts,
  }

  return html2pdf().set(options).from(element).save()
}
