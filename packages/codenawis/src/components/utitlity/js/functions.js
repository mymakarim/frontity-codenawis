import {categoryWidgets} from '../config/homepageSections'

// export const getCategoriesIds = categories => Object.keys(categories)
// export const getCategoriesValues = categories => Object.keys(categories)

export const getPostsGroupedByCategory = source =>  {

  return categoryWidgets.map(categoryWidget=>{
    if(13 === categoryWidget.id){
      console.log("News", getPostsFromCategory(source, categoryWidget.id).reverse());
    }
    const posts = getPostsFromCategory(source, categoryWidget.id).reverse().slice(0,categoryWidget.length)
    const category = source.category[categoryWidget.id]
    return {order: categoryWidget.order, posts, category}
  });
  
}

export const getPostsFromCategory = ({ post }, categoryId) =>
  Object.keys(post)
    .map(postID => post[postID])
    .filter(({categories}) => categories.includes(+categoryId) )

export const createMarkupObject = renderedHtml => ({__html: renderedHtml})

export const getRandomColor = () =>
  '#' + new Array(6).fill(0).map(digit => '0123456789ABCDEF'[Math.floor(Math.random() * 16)]).join('')  