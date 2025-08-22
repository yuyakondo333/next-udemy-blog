import { prisma } from "@/app/lib/prisma";

export async function getPosts() {
  return await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: {
          name: true
        }
      }
    },
    orderBy: {
      createdAt: 'desc'
    }
  })
}
