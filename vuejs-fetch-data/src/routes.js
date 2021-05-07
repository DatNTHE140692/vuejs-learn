import Blog from "./components/Blog.vue";
import About from "./components/About.vue";
import singlePost from './components/SinglePost'
export default [
  { path: "/", component: Blog },
  { path: "/about", component: About },
  { path: "/post/:id", component: singlePost }
];
