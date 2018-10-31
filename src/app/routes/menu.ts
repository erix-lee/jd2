
export const adminMenu = [

    {
        text: '首页',
        link: '/admin/dashboard',

        icon: 'fa fa-home',
    },
    {
        text: '公告',
        heading: true
    },
    {
        text: '发布公告',
        link: '/notice/edit',
        icon: 'fa fa-bell',

    }, {
        text: '公告管理',
        link: '/notice/list',
        icon: 'fa fa-bell',

    },
    {
        text: '账号管理',
        heading: true
    },
    {
        text: '教师管理',
        link: '/admin/teachers',
        icon: 'icon-graduation',

    }, {
        text: '学生管理',
        link: '/admin/students',
        icon: 'icon-graduation',

    },
    {
        text: '组织机构',
        heading: true
    },
    {
        text: '教研室/课程组',
        link: '/admin/staff',
        icon: 'icon-graduation',

    },
    {
        text: '班级管理',
        link: '/admin/class-grade',
        icon: 'icon-graduation',

    },
    {
        text: '设置',
        heading: true
    },
    {
        text: '系统参数设置',
        link: '/admin/setting',
        icon: 'icon-graduation',

    }
];
export const directorMenu = [

    {
        text: '教研室概况',
        link: '/blog/dirhome',

        icon: 'icon-speedometer',
    },
    {
        text: '课程组',
        heading: true
    },
    {
        text: '欧洲文化渊源',
        link: '/extras/profile/1/teamviewer',
        icon: 'icon-graduation',

    }, {
        text: '高级人文英语',
        link: '/extras/profile/2/teamviewer',
        icon: 'icon-graduation',

    },
    {
        text: '商务英语',
        link: '/extras/profile/3/teamviewer',
        icon: 'icon-graduation',

    },
];
export const techerMenu = [
    {
        text: '最新动态',
        link: '/home',
        icon: 'fa fa-home',
    },
    {
        text: '教研室',
        heading: true
    },
    {
        text: '某某教研室',
        link: ['/trs', 1],
        icon: 'icon-graduation',

    },
    {
        text: '课程组课程',
        heading: true
    },
    {
        text: '欧洲文化渊源1',
        link: ['/course', 1],
        icon: 'icon-graduation',
        "alert": "组长",

    },

    {
        text: '新闻英语',
        link: ['/course', 2],
        icon: 'icon-graduation',


    },

    {
        text: '我的课程',
        heading: true
    },
    {
        text: '新闻英语',
        link: ['/course', 3],
        icon: 'icon-graduation',

    },
    {
        text: '我的班级',
        heading: true
    },
    /*{
        text: '花名册',
        link: '/class/roster',
        icon: 'icon-graduation',

    },*/
    {
        text: '花名册',
        link: '/extras/contactdetails',
        icon: 'icon-graduation',

    },
    {
        text: '成绩单',
        link: '/class/result',
        icon: 'icon-graduation',

    },
    {
        text: '成绩统计',
        link: '/class/achievement',
        icon: 'icon-graduation',

    },
    /*
    {
        text: '测验',
        link: '/exam/hold',
        icon: 'icon-graduation',

    },
    */
    {
        text: '测验',
        link: '/extras/exam',
        icon: 'icon-graduation',

    },
    {
        text: '作业',
        link: '/class/schoolwork',
        icon: 'icon-graduation',

    },
    
    {
        text: '教学互动',
        heading: true
    },
    {
        text: '调查问卷',
        link: '/poll',
        icon: 'icon-graduation',

    },
];
export const studentMenu = [
    {
        text: '首页',
        link: '/learn',
        icon: 'icon-home',
    },

    {
        text: '我的课程',
        heading: true
    },
    {
        text: '欧洲文化渊源',
        link: ['/course', 1],
        icon: 'icon-graduation'
    },

    {
        text: '欧洲文化渊源',
        link: ['/course', 2],
        icon: 'icon-graduation',
        "alert": "张老师",
    },
    {
        text: '我的测验',
        heading: true
    },
    {
        text: '成绩',
        link: '/exam/myreport',
        icon: 'icon-graduation',

    },
   
    {
        text: '参与考试',
        link: '/exam/incoming',
        icon: 'icon-graduation',
        "alert": "2",
    },
   
  
];
