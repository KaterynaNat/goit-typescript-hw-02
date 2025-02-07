export interface Image {
  id: string;
  urls: {
    regular: string;
    small: string;
  };
  user: {
    name: string;
  };
  likes: number;
  description?: string;
  alt_description?: string;
}
