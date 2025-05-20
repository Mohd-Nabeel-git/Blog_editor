import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export async function POST(request) {
  const { title, content, author = "Anonymous", description = "" } = await request.json();
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

  const date = new Date().toISOString().split("T")[0];
  const mdContent = matter.stringify(content, {
    title,
    author,
    description,
    date,
  });

  const filePath = path.join(process.cwd(), "content", `${slug}.md`);
  fs.writeFileSync(filePath, mdContent);

  return NextResponse.json({ success: true, slug });
}