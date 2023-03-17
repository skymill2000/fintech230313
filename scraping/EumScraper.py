from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.select import Select
import time

driver = webdriver.Chrome('./chromedriver')
# 크롬을 통해서 스크래핑을 진행 크롬 드라이버 로딩
driver.get('http://www.eum.go.kr/web/am/amMain.jsp')

sido = Select(driver.find_element(By.XPATH, '//*[@id="selSido"]'))
sido.select_by_visible_text("서울특별시")
driver.implicitly_wait(2)


sigungu = Select(driver.find_element(By.XPATH, '//*[@id="selSgg"]'))
sigungu.select_by_visible_text("서대문구")
driver.implicitly_wait(2)


umd = Select(driver.find_element(By.XPATH, '//*[@id="selUmd"]'))
umd.select_by_visible_text("북가좌동")
driver.implicitly_wait(2)


type = Select(driver.find_element(By.XPATH, '//*[@id="landGbn"]'))
type.select_by_visible_text("일반")
driver.implicitly_wait(2)


bon = driver.find_element(By.XPATH, '//*[@id="bobn"]')
bon.send_keys("456")
driver.implicitly_wait(2)


bubun = driver.find_element(By.XPATH, '//*[@id="bubn"]')
bubun.send_keys("")
driver.implicitly_wait(2)

button = driver.find_element(By.XPATH, '//*[@id="frm"]/fieldset/div[3]/p/span/a')
button.click()
driver.implicitly_wait(10)

result = driver.find_element(By.XPATH, '//*[@id="present_mark2"]')
print(result.text)

time.sleep(30)