import { api } from '../services/api';

export const getPosts = async () => {
  const { data } = await api.get('/posts');

  if(data) {
    return data;
  }

  return []
}

/*export const getAllPostIds = async () => {
  const { data } = await api.get('/posts');

  if (data) {
    return data.map(post => post.id);
  }

  return [];
}*/

/*export const getPostBySlug = async (id) => {
  const { data } = await api.get(`/posts?id=eq.${id}`);

  if (data && data.length > 0) {
    return data[0];
  }

  return null;
}*/

export const getPostBySlug = async (id) => {
  const { data } = await api.get(`/posts?id=eq.${id}`);

  if (data && data.length > 0) {
    return data[0];
  }

  return null;
}

export const getPreviousPostBySlug = async (currentId) => {
  const { data } = await api.get(`/posts?id=lt.${currentId}&order=id.desc&limit=1`);

  if (data && data.length > 0) {
    return data[0].id;
  }

  return null;
};

export const getNextPostBySlug = async (currentId) => {
  const { data } = await api.get(`/posts?id=gt.${currentId}&order=id.asc&limit=1`);

  if (data && data.length > 0) {
    return data[0].id;
  }

  return null;
};
