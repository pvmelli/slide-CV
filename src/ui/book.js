let pages = document.getElementsByClassName('page');
for(let i = 0; i < pages.length; i++)
  {
    let page = pages[i];
    if (i % 2 === 0)
      {
        page.style.zIndex = (pages.length - i);
      }
  }


export function bookEffect() {
    for(let i = 0; i < pages.length; i++)
    {
      pages[i].pageNum = i + 1;

      const $pageButtons = document.querySelectorAll('.page-change');
      $pageButtons[i].onclick= (e) =>
        {
            const thisPage = e.target.parentElement;
          if (thisPage.pageNum % 2 === 0)
            {
                thisPage.classList.remove('flipped');
                thisPage.previousElementSibling.classList.remove('flipped');
            }
          else
            {
                thisPage.classList.add('flipped');
                thisPage.nextElementSibling.classList.add('flipped');
            }
         }
      }
}