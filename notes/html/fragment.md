## Fragment


#### 一、 什么是fragment

DocumentFragment，文档片段接口，表示一个没有父对象的最小文档对象。

它被作为一个轻量版的 Document 使用，就像标准的 document 一样，存储由节点（nodes）组成的文档结构。与 document 相比，最大的区别是它不是真实 DOM 树的一部分，它的变化不会触发 DOM 树的重新渲染，且不会对性能产生影响。

* 优点

1. 脱离于文档流，操作不会对Dom树产生影响

2. 在每一次生成临时Element时候就可以将该Element对象的引用保存下来，而不需要多次用选择器再次获取。

* vue & react等主流框架虽然没有直接使用原生fragment接口，但都使用虚拟dom实现了类似的效果

#### 二、创建一个fragment

可以使用 document.createDocumentFragment 方法或者构造函数来创建一个空的 DocumentFragment。
fragment 是一个指向空DocumentFragment对象的引用。

```js
var fragment = document.createDocumentFragment();

```

#### 三、方法

* DocumentFragment.append() 
    在文档片段的最后一个子对象后插入一组 Node 或字符串对象。

* DocumentFragment.prepend() 
    在文档片段的第一个元素前插入一组 Node 或字符串对象。

* DocumentFragment.querySelector()
    返回在 DocumentFragment 中以文档顺序排列的第一个符合指定选择器的 Element 节点。

* DocumentFragment.querySelectorAll()
    返回在 DocumentFragment 中所有的符合指定选择器的 Element 节点组成的 NodeList 数组。

* DocumentFragment.getElementById() 
    返回在 DocumentFragment 中以文档顺序排列的第一个符合指定 ID 选择器的 Element 节点。与 Document.getElementById() 作用相同。


#### 四、使用方法

最常用的方法是使用 DocumentFragment 创建并组成一个 DOM 子树，然后使用 Node 接口方法（如：appendChild() 或 insertBefore()）将其插入到 DOM 中。这种情况下会插入片段的所有子节点，并留下一个空的 DocumentFragment。因为所有的节点会被一次插入到文档中，所以仅会发生一个重渲染的操作，而不是每个节点分别被插入到文档中从而发生多次重渲染的操作。

:::code-group


```js
const list = document.querySelector("#list");
const fruits = ["Apple", "Orange", "Banana", "Melon"];

const fragment = new DocumentFragment();

fruits.forEach((fruit) => {
  const li = document.createElement("li");
  li.textContent = fruit;
  fragment.appendChild(li);
});

list.appendChild(fragment);

```

```html

<ul id="list"></ul>

```

:::



