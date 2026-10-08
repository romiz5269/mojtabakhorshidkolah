import localFont from "next/font/local";

export const FontVazir = localFont({
  src: [
    {
      path: "../fonts/vazir/Vazirmatn-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../fonts/vazir/Vazirmatn-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../fonts/vazir/Vazirmatn-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/vazir/Vazirmatn-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/vazir/Vazirmatn-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/vazir/Vazirmatn-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/vazir/Vazirmatn-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/vazir/Vazirmatn-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-vazir", // اگر خواستی متغیر CSS بسازی برای Tailwind یا CSS مدول
  display: "swap", // بهترین گزینه برای نمایش فونت
});

// yekan bakh

export const FontYekanBakh = localFont({
  src: [
    {
      path: "../fonts/Yekan-Bakh/YEKANBAKHFANUM-THIN.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../fonts/Yekan-Bakh/YEKANBAKHFANUM-LIGHT.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/Yekan-Bakh/YEKANBAKHFANUM-REGULAR.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Yekan-Bakh/YEKANBAKHFANUM-MEDIUM.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Yekan-Bakh/YEKANBAKHFANUM-SEMIBOLD.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/Yekan-Bakh/YEKANBAKHFANUM-BOLD.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/Yekan-Bakh/YEKANBAKHFANUM-EXTRABOLD.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-ybkah", // اگر خواستی متغیر CSS بسازی برای Tailwind یا CSS مدول
  display: "swap", // بهترین گزینه برای نمایش فونت
});
