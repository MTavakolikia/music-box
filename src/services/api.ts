import axios from "axios";

// تعیین مقادیر پیش‌فرض برای URL و توکن
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://spotify-scraper.p.rapidapi.com/v1";
export const API_TOKEN = process.env.NEXT_PUBLIC_RAPID_API_KEY || "ddc43ce289msh9b548102823f020p1714bejsn3bc8e522ee70";

// ایجاد نمونه Axios با تنظیمات پایه‌ای
export const apiClient = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000, // زمان انتظار برای درخواست‌ها
    headers: {
        accept: "application/json",
        'x-rapidapi-key': API_TOKEN,
        'x-rapidapi-host': 'spotify-scraper.p.rapidapi.com'
    },
});