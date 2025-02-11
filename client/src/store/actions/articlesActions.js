import * as actionTypes from './actionTypes';

const options = (data) => {
    return {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('jwtToken'),
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        method: 'post',
        body: JSON.stringify(data)
    };
};

export const getAllArticles = () => {
    return dispatch => {
        fetch(`http://172.177.133.31/api/articles`)
        .then(res => res.json())
        .then(res => {
            localStorage.setItem('BasicMERNStackAppAllArticles', JSON.stringify(res.articles));
            dispatch({ type: actionTypes.GOT_ALL_ARTICLES, articles: res.articles })
        })
    };
};

export const getMyArticles = () => {
    return dispatch => {
        fetch(`http://172.177.133.31/api/articles/myarticles`, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('jwtToken'),
                'Content-Type': 'application/json'
            },
            method: 'GET'
        })
        .then(res => res.json())
        .then(res => {
            localStorage.setItem('BasicMERNStackAppMyArticles', JSON.stringify(res.articles));
            dispatch({ type: actionTypes.GOT_MY_ARTICLES, myArticles: res.articles })
        })
    };
};

export const getArticle = (articleId) => {
    return dispatch => {
        fetch('/api/articles/' + articleId)
        .then(res => res.json())
        .then(res => {
            dispatch({ type: actionTypes.GOT_SINGLE_ARTICLE, article: res.article })
        })
    };
};

export const submitNewArticle = (articleData) => {
    return dispatch => {
        return fetch(`http://172.177.133.31/api/articles/add`, options(articleData))
        .then(res => res.json())
    }
};

export const saveArticle = (articleId, articleData) => {
    return dispatch => {
        return fetch(`http://172.177.133.31/api/articles/edit/` + articleId, options(articleData))
        .then(res => res.json())
    }
}

export const deleteArticle = (articleId) => {
    return dispatch => {
        return fetch(`http://172.177.133.31/api/articles/delete/` + articleId, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('jwtToken'),
                'Content-Type': 'application/json'
            },
            method: 'delete'
        })
        .then(res => res.json())
    };
}
