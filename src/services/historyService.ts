import { TimelineEvent, HistorySection } from '../types';
import { 
  timelineEvents, 
  northVietnamContent, 
  southVietnamContent, 
  metaphorContent 
} from '../data/historyData';

// ========================================
// HISTORY SERVICE
// ========================================

// Get all timeline events
export const getAllTimelineEvents = (): TimelineEvent[] => {
  return timelineEvents.sort((a, b) => {
    if (a.year !== b.year) return a.year - b.year;
    if (a.month && b.month) return a.month - b.month;
    return 0;
  });
};

// Get timeline events by year
export const getEventsByYear = (year: number): TimelineEvent[] => {
  return timelineEvents.filter(event => event.year === year);
};

// Get timeline events by category
export const getEventsByCategory = (category: 'north' | 'south' | 'general'): TimelineEvent[] => {
  return timelineEvents.filter(event => event.category === category);
};

// Get high importance events
export const getHighImportanceEvents = (): TimelineEvent[] => {
  return timelineEvents.filter(event => event.importance === 'high');
};

// Get North Vietnam content
export const getNorthVietnamContent = (): HistorySection[] => {
  return northVietnamContent;
};

// Get South Vietnam content
export const getSouthVietnamContent = (): HistorySection[] => {
  return southVietnamContent;
};

// Get content section by ID
export const getContentById = (id: string, region: 'north' | 'south'): HistorySection | undefined => {
  const content = region === 'north' ? northVietnamContent : southVietnamContent;
  return content.find(section => section.id === id);
};

// Get metaphor content
export const getMetaphorContent = () => {
  return metaphorContent;
};

// Format date for display
export const formatHistoricalDate = (event: TimelineEvent): string => {
  const parts: string[] = [];
  if (event.day) parts.push(`${event.day}`);
  if (event.month) parts.push(`tháng ${event.month}`);
  parts.push(`năm ${event.year}`);
  return parts.join('/');
};

// Get year range
export const getYearRange = (): { start: number; end: number } => {
  const years = timelineEvents.map(e => e.year);
  return {
    start: Math.min(...years),
    end: Math.max(...years)
  };
};

