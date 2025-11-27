import prisma from "../database/prisma";
import { Post } from "../models/Post";

class PostsRepository {
  async getAll() {
    return prisma.post.findMany({
      orderBy: { id: "asc" },
    });
  }

  async getById(id: number) {
    return prisma.post.findUnique({
      where: { id },
    });
  }

  async create(data: Omit<Post, "id">) {
    return prisma.post.create({
      data,
    });
  }

  async update(id: number, data: Partial<Post>) {
    return prisma.post.update({
      where: { id },
      data,
    });
  }

  async delete(id: number) {
    return prisma.post.delete({
      where: { id },
    });
  }
}

export default new PostsRepository();
