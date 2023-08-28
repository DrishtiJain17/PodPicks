// Example data for categories and threads
const categories = [
    { id: 1, name: 'General Discussion' },
    { id: 2, name: 'Help and Support' },
    { id: 3, name: 'Off-Topic' }
  ];
  
  const threads = [
    { id: 1, categoryId: 1, title: 'Welcome to the forum!', content: 'This is the first thread.' },
    { id: 2, categoryId: 1, title: 'Introduce Yourself', content: 'Tell us about yourself.' },
    { id: 3, categoryId: 2, title: 'Need help with CSS', content: 'I am having trouble with CSS.' }
  ];
  
  // Function to populate categories
  function populateCategories() {
    const categoriesElement = document.getElementById('categories');
    categoriesElement.innerHTML = '';
  
    categories.forEach(category => {
      const li = document.createElement('li');
      li.textContent = category.name;
      categoriesElement.appendChild(li);
    });
  }
  
  // Function to populate threads
  function populateThreads(categoryId) {
    const threadsElement = document.getElementById('threads');
    threadsElement.innerHTML = '';
  
    const filteredThreads = threads.filter(thread => thread.categoryId === categoryId);
  
    filteredThreads.forEach(thread => {
      const li = document.createElement('li');
      const title = document.createElement('h3');
      const content = document.createElement('p');
  
      title.textContent = thread.title;
      content.textContent = thread.content;
  
      li.appendChild(title);
      li.appendChild(content);
      threadsElement.appendChild(li);
    });
  }
  
  // Event listener for category selection
  document.getElementById('categories').addEventListener('click', function(event)
  { const selectedCategoryId = event.target.dataset.categoryId;
    if (selectedCategoryId) {
      populateThreads(parseInt(selectedCategoryId));
    }
    event.preventDefault();
  });
  
  // Event listener for create thread form submission
  document.getElementById('create-thread-form').addEventListener('submit', function(event) {
    const threadTitle = document.getElementById('thread-title').value;
    const threadContent = document.getElementById('thread-content').value;
    if (threadTitle && threadContent) {
        const newThreadId = threads.length + 1;
        const newThread = {
          id: newThreadId,
          categoryId: 1, // Assuming the category ID is 1 for now
          title: threadTitle,
          content: threadContent
        };
        threads.push(newThread);
        populateThreads(1); // Assuming the category ID is 1 for now
    
        document.getElementById('thread-title').value = '';
        document.getElementById('thread-content').value = '';
      }
    
      event.preventDefault();
    });
    
    // Initial population of categories and threads
    populateCategories();
    populateThreads(1); // Assuming the category ID is 1 for now
    
    
    // Function to save threads to local storage
function saveThreadsToLocalStorage() {
    localStorage.setItem('threads', JSON.stringify(threads));
  }
  
  // Function to retrieve threads from local storage
  function retrieveThreadsFromLocalStorage() {
    const threadsData = localStorage.getItem('threads');
    if (threadsData) {
      threads = JSON.parse(threadsData);
    }
  }
  
  // Function to add a new thread
  function addThread(categoryId, title, content) {
    const newThreadId = threads.length + 1;
    const newThread = {
      id: newThreadId,
      categoryId: categoryId,
      title: title,
      content: content
    };
    threads.push(newThread);
    saveThreadsToLocalStorage();
    populateThreads(categoryId);
  }
  
  // Event listener for create thread form submission
  document.getElementById('create-thread-form').addEventListener('submit', function(event) {
    const threadTitle = document.getElementById('thread-title').value;
    const threadContent = document.getElementById('thread-content').value;
  
    if (threadTitle && threadContent) {
      const categoryId = 1; // Assuming the category ID is 1 for now
      addThread(categoryId, threadTitle, threadContent);
  
      document.getElementById('thread-title').value = '';
      document.getElementById('thread-content').value = '';
    }
  
    event.preventDefault();
  });
  
  // Initial retrieval of threads from local storage
  retrieveThreadsFromLocalStorage();
  populateThreads(1); // Assuming the category ID is 1 for now
    