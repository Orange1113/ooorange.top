// 定义一个函数用于渲染帖子
function renderPosts(posts) {
  const postContainer = document.getElementById("postContainer");
  posts.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.className = "post";

    // 计算相对日期
    const postTime = new Date(post.time);
    const now = new Date();
    const diff = now - postTime;
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);

    let relativeTime;
    if (years > 0) {
      relativeTime = `${postTime.getFullYear()}年${postTime.getMonth() + 1}月${postTime.getDate()}日`;
    } else if (months > 0 || days > 0) {
      relativeTime = `${postTime.getMonth() + 1}月${postTime.getDate()}日`;
    } else if (hours > 0) {
      relativeTime = `${postTime.getHours()}时${postTime.getMinutes()}分`;
    } else if (minutes > 0) {
      relativeTime = `${minutes}分钟前`;
    } else {
      relativeTime = "刚刚";
    }

    postElement.innerHTML = `
                    <div class="header">
                        <div class="user-info">
                            <img src="/img/image.png" alt="用户">
                            <div style='width: 100%;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;'>${post.username}<br><span style="font-size: 13px; color: #999;">${relativeTime}</div>
                        </div>
                        <button class="follow-btn">+关注</button>
                    </div>
                    <div class="text">${post.content}</div>
                    <div class="buttons">
                        <button>点赞</button>
                        <button>评论</button>
                        <button>转发</button>
                    </div>
                `;

    postContainer.appendChild(postElement);
  });
}

// 尝试从服务器获取 JSON 数据
fetch("https://example.com/api/posts") // 替换为你的实际 API 地址
  .then((response) => response.json())
  .then((data) => {
    // 如果成功获取到服务器数据，渲染服务器数据
    renderPosts(data);
  })
  .catch((error) => {
    // 如果获取数据出错，使用默认的静态数据并渲染
    console.error("获取数据时出错:", error);
    const posts = [
      {
        username: "吴景澄",
        time: "2024-07-10 12:30:00",
        content: "鸡对你大笑,<br>你干嘛,<br>哪里蹲,<br>我是谁？",
        avatar: "32.png",
      },
      {
        username: "小鹿",
        time: "2024-07-07 15:45:00",
        content: "用户分享内容到社交媒体或好友，不应该是一种粗暴的强制行为...",
        avatar: "32.png",
      },
      {
        username: "张三",
        time: "2024-06-20 09:15:00",
        content: "例子内容，可以随便填些文本...",
        avatar: "32.png",
      },
      {
        username: "李子君",
        time: "2023-05-21 18:20:00",
        content: "又一个例子内容来填充数据库...",
        avatar: "32.png",
      },
      {
        time: "2022-04-15 12:00:00",
        content: "例子内容，可以随便填些文本...",
        avatar: "32.png",
        username: "xxx",
      },
      {
        username: "吴景澄",
        time: "2024-07-10 12:30:00",
        content: "鸡对你大笑,<br>你干嘛,<br>哪里蹲,<br>我是谁？",
        avatar: "32.png",
      },
      {
        username: "小鹿",
        time: "2024-07-07 15:45:00",
        content: "用户分享内容到社交媒体或好友，不应该是一种粗暴的强制行为...",
        avatar: "32.png",
      },
      {
        username: "张三",
        time: "2024-06-20 09:15:00",
        content: "例子内容，可以随便填些文本...",
        avatar: "32.png",
      },
      {
        username: "李子君",
        time: "2023-05-21 18:20:00",
        content: "又一个例子内容来填充数据库...",
        avatar: "32.png",
      },
      {
        time: "2022-04-15 12:00:00",
        content: "例子内容，可以随便填些文本...",
        avatar: "32.png",
        username: "xxx",
      },
      {
        username: "吴景澄",
        time: "2024-07-10 12:30:00",
        content: "鸡对你大笑,<br>你干嘛,<br>哪里蹲,<br>我是谁？",
        avatar: "32.png",
      },
      {
        username: "小鹿",
        time: "2024-07-07 15:45:00",
        content: "用户分享内容到社交媒体或好友，不应该是一种粗暴的强制行为...",
        avatar: "32.png",
      },
      {
        username: "张三",
        time: "2024-06-20 09:15:00",
        content: "例子内容，可以随便填些文本...",
        avatar: "32.png",
      },
      {
        username: "李子君",
        time: "2023-05-21 18:20:00",
        content: "又一个例子内容来填充数据库...",
        avatar: "32.png",
      },
      {
        time: "2022-04-15 12:00:00",
        content: "例子内容，可以随便填些文本...",
        avatar: "32.png",
        username: "xxx",
      },
    ];
    renderPosts(posts);
  });
