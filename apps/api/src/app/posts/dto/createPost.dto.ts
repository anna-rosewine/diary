export interface CreatePostDto {
  title: string;
  body: string;
  likes: number;
  author?: string;
}
