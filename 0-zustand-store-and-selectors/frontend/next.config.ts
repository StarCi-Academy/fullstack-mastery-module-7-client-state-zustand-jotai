import type { NextConfig } from "next"

/**
 * Cấu hình Next.js — App Router. Tắt reactStrictMode cho lesson Zustand vì dev
 * double-invocation làm sai render-counter trong test (lesson dạy selector granularity,
 * không liên quan strict mode). Production vẫn nên bật.
 * (EN: Next.js config — App Router. reactStrictMode disabled for the Zustand lesson
 * because dev double-invocation breaks the render-counter test (this lesson teaches
 * selector granularity, not strict mode). Re-enable for production.)
 */
const nextConfig: NextConfig = {
    reactStrictMode: false,
}

export default nextConfig
