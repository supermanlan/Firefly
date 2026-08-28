import type { CommentConfig } from "../types/commentConfig";

export const commentConfig: CommentConfig = {
    // 1. 开启 Giscus 评论系统
    type: "giscus",

    // twikoo / waline / artalk / disqus 等未使用项保持默认即可...
    twikoo: {
        envId: "https://twikoo.vercel.app",
        lang: "zh-CN",
        visitorCount: true,
        jsUrl: "https://cdn.jsdelivr.net/npm/twikoo@1.7.14/dist/twikoo.min.js",
        cssUrl: "/assets/css/twikoo-custom.css",
    },
    waline: {
        serverURL: "https://waline.vercel.app",
        lang: "zh-CN",
        emoji: [
            "https://unpkg.com/@waline/emojis@1.4.0/weibo",
            "https://unpkg.com/@waline/emojis@1.4.0/bilibili",
            "https://unpkg.com/@waline/emojis@1.4.0/bmoji",
        ],
        login: "enable",
        visitorCount: true,
    },
    artalk: {
        server: "https://artalk.example.com/",
        locale: "zh-CN",
        visitorCount: true,
    },

    // 2. 核心：Giscus 详细配置（请务必替换为你自己的仓库参数）
    giscus: {
        // 你的 GitHub 用户名/仓库名 (例: "yourname/my-blog")
        repo: "supermanlan/Firefly", 
        
        // 你的仓库 ID (通过 giscus.app 自动获取)
        repoId: "R_kgDOUHfW6g", 
        
        // Discussions 的分类名称 (推荐在 GitHub Discussions 里建一个叫 "Announcements" 或 "General" 的分类)
        category: "General", 
        
        // 分类 ID (通过 giscus.app 自动获取，以 DIC_ 开头)
        categoryId: "DIC_kwDOUHfW6s4DEaF9", 
        
        // 文章与 Discussion 的映射关系，title 表示按文章标题映射
        mapping: "title", 
        strict: "0",
        
        // 开启点赞/表情互动功能 (1 为开启)
        reactionsEnabled: "1", 
        emitMetadata: "1",
        inputPosition: "top",
        lang: "zh-CN",
        loading: "lazy",
    },

    disqus: {
        shortname: "firefly",
    },
};