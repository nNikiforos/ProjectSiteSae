function changeTab(tabId) {
  const activeTabClassName = "activeTab";

  const clickedTab = document.getElementById(tabId);
  const activeTab = document.getElementsByClassName(activeTabClassName);

  for (const tab of activeTab) {
    tab.classList.remove(activeTabClassName);
  }

  clickedTab.classList.add(activeTabClassName);
}
