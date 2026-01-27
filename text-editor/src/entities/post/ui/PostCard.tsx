type PostCardProps = {
  thumbnail: string;
  title: string;
  createdAt: Date;
  updatedAt: Date;
  likes: number;
  comments: number;
};

export default function PostCard({
  thumbnail,
  title,
  createdAt,
  updatedAt,
  likes,
  comments,
}: PostCardProps) {
  return <div className="">{title}</div>;
}
