import {
    type NavBarConfig,
    type NavBarLink,
    type NavBarSearchConfig,
    NavBarSearchMethod,
} from "../types/navBarConfig";

// ============================================================================
// 导航栏配置 - 精简后仅保留核心功能 + 站长后台
// ============================================================================
const getDynamicNavBarConfig = (): NavBarConfig => {
    const links: NavBarLink[] = [];

    // 1. 主页
    links.push(LinkPresets.Home);

    // 2. 文章菜单（保留分类/归档/标签/系列）
    links.push({
        name: "文章",
        url: "#",
        icon: "material-symbols:article",
        children: [
            LinkPresets.Archive,
            LinkPresets.Categories,
            LinkPresets.Tags,
            LinkPresets.Series,
        ],
    });

    // 3. 我的（精简：仅保留书签导航）
    links.push({
        name: "我的",
        url: "#",
        icon: "material-symbols:person",
        children: [
            LinkPresets.Booknav,
        ],
    });

    // 4. 关于菜单（加入关于页面与管理后台入口）
    links.push({
        name: "关于",
        url: "#",
        icon: "material-symbols:info",
        children: [
            LinkPresets.About,
            LinkPresets.Admin, // 站长后台管理入口
        ],
    });

    // 5. 常用外链
    links.push({
        name: "链接",
        url: "#",
        icon: "material-symbols:link",
        children: [
            {
                name: "GitHub",
                url: "https://github.com/supermanlan",
                external: true,
                icon: "fa7-brands:github",
            },
        ],
    });

    return { links } as NavBarConfig;
};

// 导航搜索配置
export const navBarSearchConfig: NavBarSearchConfig = {
    method: NavBarSearchMethod.PageFind,
};

// ============================================================================
// 链接预设
// ============================================================================
export const LinkPresets: Record<string, NavBarLink> = {
    Home: {
        name: "主页",
        url: "/",
        icon: "material-symbols:home",
    },
    Archive: {
        name: "归档",
        url: "/archive/",
        icon: "material-symbols:archive",
    },
    Categories: {
        name: "分类",
        url: "/categories/",
        icon: "material-symbols:folder-open-rounded",
    },
    Tags: {
        name: "标签",
        url: "/tags/",
        icon: "material-symbols:tag-rounded",
    },
    Series: {
        name: "系列",
        url: "/series/",
        icon: "material-symbols:layers",
    },
    Booknav: {
        name: "书签导航",
        url: "/booknav/",
        icon: "material-symbols:bookmarks",
        pageKey: "booknav",
    },
    About: {
        name: "关于我",
        url: "/about/",
        icon: "material-symbols:person",
    },
    // 新增：站长后台入口 preset
    Admin: {
        name: "管理后台",
        url: "/admin/", // 注意匹配尾部斜杠，防止 404
        icon: "material-symbols:admin-panel-settings-outline",
    },
};

export const navBarConfig: NavBarConfig = getDynamicNavBarConfig();