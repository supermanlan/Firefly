import type { SiteConfig } from "@/types/siteConfig";
import { resolvePageToggles } from "../utils/page-toggle-utils";
import { resolveSiteLang } from "../utils/site-config-utils";

// 定义站点语言
const SITE_LANG = resolveSiteLang("zh_CN");

// 页面开关配置 - 仅保留必要的核心内容，其余关闭（设为 false 会返回 404 并隐藏导航）
const pages = resolvePageToggles({
    // ── 社交 (Social) ──────────────────────────────────
    friends: false,      // 关闭友链
    guestbook: false,    // 关闭留言板

    // ── 我的 (My) ──────────────────────────────────
    dynamic: false,      // 关闭动态
    gallery: false,      // 关闭相册
    booknav: true,       // 保留书签导航（适合存放常用工具/技术文档链接）
    bilibili: false,     // 关闭 B 站追番
    bangumi: false,      // 关闭番组计划
    vndb: false,         // 关闭 VNDB
    mal: false,          // 关闭 MyAnimeList

    // ── 关于 (About) ──────────────────────────────────
    sponsor: false,      // 关闭打赏
});

export const siteConfig: SiteConfig = {
    // 站点基础信息
    title: "superlan的博客",
    subtitle: "记录美好",
    site_url: "https://superlan.dpdns.org", // 替换为你自己的实际域名
    description: "专注于个人思考的静态博客。",

    // 站点关键词
    keywords: [
        "博客",
        "技术博客",
        "静态博客",
        "Astro",
    ],

    // 主题配色 (经典深蓝/青绿偏向)
    themeColor: {
        hue: 210, // 调整为偏深蓝的经典技术风格色调 (0-360)
        defaultMode: "system",
    },

    // 页面整体宽度
    pageWidth: 85, // 适当调小页面宽度，提升单列文字阅读时的舒适度

    // 卡片样式配置
    card: {
        border: true,       // 开启卡片边框，增强层次与微阴影质感
        followTheme: false,
    },

    // Favicon 配置
    favicon: [
        {
            src: "/favicon/firefly-32.png",
        },
    ],

    // 导航栏配置
    navbar: {
        logo: {
            type: "image",
            value: "assets/images/logo/firefly-light.png",
            valueDark: "assets/images/logo/firefly-dark.png",
            alt: "Logo",
        },
        title: "我的博客",
        widthFull: false,
        menuAlign: "center",
        followTheme: false,
        stickyNavbar: true,
    },

    // 站点建站日期
    siteStartDate: "2026-01-01",
    timezone: "Asia/Shanghai",

    // 分类与标签样式优化
    categoryBar: true,
    categoryStyle: "rectangle",
    tagStyle: "pill",
    foldArticle: true,

    // ── 文章列表布局优化 ──────────────────────────────────
    postListLayout: {
        defaultMode: "list",        // 默认列表模式，适合文字沉浸式阅读
        mobileDefaultMode: "list",
        coverPosition: "right",
        descriptionLines: 3,         // 保持 3 行摘要，方便快速浏览干货内容
        showStatsIcons: true,
        tagsPosition: "bottom",
        tagsBottomStyle: "chip",
        meta: {
            showPublished: true,
            showCategory: true,
            showTags: true,
            tagCount: 3,
            showWords: true,         // 开启字数显示
            showReadingTime: true,   // 开启预计阅读时间
        },
        stats: {
            showPublished: true,
            showWords: true,
            showReadingTime: true,
        },
        grid: {
            masonry: false,
            columnWidth: 320,
            coverFullWidth: false,
        },
    },

    // 分页配置
    pagination: {
        postsPerPage: 10,
    },

    // ── 文章内容页配置 ──────────────────────────────────
    post: {
        rehypeCallouts: {
            theme: "github",         // 保持 GitHub 风格高亮提示框
            enablePythonMarkdownAdmonitions: false,
        },
        showLastModified: true,      // 显示上次修改时间
        outdatedThreshold: 60,       // 延长至 60 天后提示文章可能过时
        sharePoster: false,          // 关闭海报分享，减少前端加载开销
        generateOgImages: false,     // 建议本地构建阶段关闭，大幅提升 build 编译速度
    },

    // ── 图像优化配置 ──────────────────────────────────
    imageOptimization: {
        formats: "webp",
        quality: 80,
        noReferrerDomains: [],
    },

    lang: SITE_LANG,
    pages,
};