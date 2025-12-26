
export interface Step {
  id: number;
  title: string;
  description: string;
}

export interface Benefit {
  id: number;
  text: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
