module.exports = async (page, scenario, vp) => {
  await require('./loadCookies')(page, scenario);


  const acceptCookie = ('div#cookie-dismisser.gus-close-button');

  

  if(scenario=='Bulbasaur_evolution'){
    page.waitForSelector(acceptCookie);
    const [response] = await Promisse.all([
      page.waitForNavigation(),
      page.waitForSelector(acceptCookie),
      page.click(acceptCookie),
      page.waitFor(() => !!document.querySelector(acceptCookie));
      page.waitForSelector(acceptCookie, { reverse: true })
      page.waitFor(3000),

  }
};

