/**
 * Extract a text excerpt from markdown content
 * @param {string} content - The markdown content
 * @param {number} wordLimit - Maximum number of words (default: 30)
 * @returns {string} The excerpt with "..." suffix
 */
export function extractExcerpt(content, wordLimit = 30) {
  if (!content) return '';
  
  // Remove markdown syntax and HTML tags
  const cleanContent = content
    // Remove markdown headers
    .replace(/^#{1,6}\s+/gm, '')
    // Remove HTML figure elements completely (including all content inside)
    .replace(/<figure[^>]*>[\s\S]*?<\/figure>/gi, '')
    // Remove markdown images with all possible variations (alt text, URLs, title attributes)
    .replace(/!\[([^\]]*)\]\(([^)]*?)(?:\s+"([^"]*)")?\s*\)/g, '')
    // Remove any remaining standalone markdown image references
    .replace(/!\[[^\]]*\]/g, '')
    // Clean up any remaining fragments that might have been left by the above replacements
    .replace(/^\s*[^a-zA-Z0-9\u00C0-\u024F\u1E00-\u1EFF]+/gm, '')
    .replace(/\s+\)\s*/g, ' ')
    .replace(/\s+"\s*/g, ' ')
    // Remove markdown links [text](url) but keep the text
    .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1')
    // Remove markdown bold/italic
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    // Remove all remaining HTML tags
    .replace(/<[^>]*>/g, '')
    // Replace multiple whitespace with single space
    .replace(/\s+/g, ' ')
    // Trim whitespace
    .trim();
  
  // Split into words and take the first N words
  const words = cleanContent.split(' ').filter(word => word.length > 0);
  
  if (words.length <= wordLimit) {
    return cleanContent;
  }
  
  return words.slice(0, wordLimit).join(' ') + '...';
}