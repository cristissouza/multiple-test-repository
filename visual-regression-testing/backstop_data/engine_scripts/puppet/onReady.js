module.exports = async (page, scenario, vp) => {
  await require('./loadCookies')(page, scenario);


  const acceptCookie = ('#cookie-dismisser.gus-close-button');
  const explore = ('.button button-orange.right');
  const profileInfo = ('.pokemon-stats-info.active');
  const buttonMore = ('a.button.button-orange.right');

  if(scenario=='Bulbasaur_profile_img'){
    await page.waitForNavigation();
    await page.waitFor(5000);
    await page.waitForSelector(acceptCookie);
    await page.click(acceptCookie);
    await page.waitFor(5000);
    // await page.waitFor(() => !!document.querySelector(acceptCookie));
    await page.waitForSelector(acceptCookie, { reverse: true })
    await page.waitFor(explore);
  }

  if(scenario=='Venusaur_profile_information'){
    await page.waitForNavigation();
    await page.waitFor(5000);
    await page.waitForSelector(acceptCookie);
    await page.waitFor(() => !!document.querySelector(acceptCookie));
    await page.click(acceptCookie);
    await page.waitFor(explore);
  }
  // if(scenario=='explore_button'){
  //   await page.waitForNavigation();
  // }
}