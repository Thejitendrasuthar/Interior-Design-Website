// src/lib/cloudinary.ts
export function cl(url: string, width: number): string {
  if (!url) return url;
  if (!url.includes("res.cloudinary.com")) return url;
  if (url.includes("/upload/f_auto")) return url;
  return url.replace("/upload/", `/upload/f_auto,q_auto,w_${width},c_limit/`);
}
