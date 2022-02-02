import React from "react";
import Article from "./Article";

function ArticleList({posts}) {
    console.log(posts)

    const renderArticle = ({title, date, preview}) => <Article title={title} date={date} preview={preview} />

    const articleArray = posts.map(renderArticle) 

    return (
        <main>
            {articleArray}
        </main>
    )
}

export default ArticleList;