
chrome.runtime.onInstalled.addListener(function(){
  chrome.contextMenus.create({
    type:'normal',
    title:'使用加速器加速',
    id:'a'
  });

  chrome.contextMenus.create({
    type: 'normal',
    title: '加速1.5倍',
    id: 'b',
    parentId: 'a'
  });

  chrome.contextMenus.create({
    type: 'normal',
    title: '加速2倍',
    id: 'c',
    parentId: 'a'
  });

  chrome.contextMenus.create({
    type: 'normal',
    title: '加速3倍',
    id: 'd',
    parentId: 'a'
  });
});

chrome.contextMenus.onClicked.addListener(function(info, tab){
  if(info.menuItemId == 'b'){
    console.log(window)
    console.log('----')
    chrome.tabs.executeScript(tab.id, {file: 'js/content.js'}, function(results){
      if(results){
        //alert('成功')
        results.html5player.tech_.setPlaybackRate(1.5)
      }else{
        //alert('失败')
      }
    });
  }
  if(info.menuItemId == 'c'){
    chrome.tabs.executeScript(tab.id, {file: 'js/content.js'}, function(results){
      if(results){
        //alert('成功')
        results.html5player.tech_.setPlaybackRate(1.5)
      }else{
        //alert('失败')
      }
    });
  }
  if(info.menuItemId == 'd'){
    chrome.tabs.executeScript(tab.id, {file: 'js/content.js'}, function(results){
      if(results){
        //alert('成功')
        results.html5player.tech_.setPlaybackRate(1.5)
      }else{
        //alert('失败')
      }
    });
  }
});

