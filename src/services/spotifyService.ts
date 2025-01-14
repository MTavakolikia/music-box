import { apiClient } from "./api";

// تابع برای دریافت لینک دانلود آهنگ از SoundCloud
export const downloadTrack = async (track: string, quality: string = 'sq') => {
    try {
        const response = await apiClient.get('/track/download/soundcloud', {
            params: {
                track: track,
                quality: quality,
            },
        });
        return response.data;
    } catch (error) {
        console.error("خطا در دریافت لینک دانلود:", error);
        throw error;
    }
};