export interface UpdatePostDto {
  id: number;
  title: string;
  body: string;
  likes: number;
  date?: string;
  author?: string;
}
