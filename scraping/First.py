from selenium import webdriver
from selenium.webdriver.common.by import By

driver = webdriver.Chrome('./chromedriver')
# 크롬을 통해서 스크래핑을 진행 크롬 드라이버 로딩
driver.get('https://www.hankyung.com/finance/article/202303176639Y?utm_source=naver&utm_medium=naver_newsstandcast&utm_campaign=newsstandcast_naver_all')

title = driver.find_element(By.XPATH, '//*[@id="container"]/div/div/article/h1')
print(title.text)

# 소제목 스크래핑하기
