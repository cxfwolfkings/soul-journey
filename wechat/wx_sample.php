<?php
/**
 * wechat php test
 */
  
//define your token
define("TOKEN", "CharlesAndStar");
$wechatObj = new WechatCallbackapiTest();
//$wechatObj->valid();

if (!isset ($_GET["echostr"])) {
	$wechatObj->responseMsg();
} else {
	$wechatObj->valid();
}

class WechatCallbackapiTest {
	
	public function valid() {
		$this->write_log("Token验证");
		$echoStr = $_GET["echostr"];
		//valid signature, option
		if ($this->checkSignature()) {
			echo $echoStr;
			exit;
		}
	}

	public function responseMsg() {
		$this->write_log("响应消息");
		//get post data, May be due to the different environments
		$postStr = $GLOBALS["HTTP_RAW_POST_DATA"];
        $this->write_log($postStr);

		//extract post data
		if (!empty ($postStr)) {
			$postObj = simplexml_load_string($postStr, 'SimpleXMLElement', LIBXML_NOCDATA);
			$fromUsername = $postObj->FromUserName;
			$toUsername = $postObj->ToUserName;
			$keyword = trim($postObj->Content);
			$type = trim($postObj->Event);
			$time = time();
			$this->write_log("发信人：" . $fromUsername . "，收信人：" 
			    . $toUsername . "，" . "内容：" . $keyword . "，" . $type);
			
			$filename = "./Template2.xml";
            $handle = fopen($filename, "r");//读取二进制文件时，需要将第二个参数设置成'rb'
            //通过filesize获得文件大小，将整个文件一下子读到一个字符串中
            $textTpl = fread($handle, filesize ($filename));
            fclose($handle);
			
			$msgType = "text";
            $contentStr = "";
			if ($type == "subscribe") {
				$this->write_log("关注");
				$resultStr = sprintf($textTpl, $fromUsername, $toUsername, $time);
		        echo $resultStr;
		        exit;
			}
			if (!empty ($keyword)) {
				$this->write_log("有关键字");
				if (mb_substr($keyword, 0, 2, 'utf-8') == "天气") {
					$cityname = mb_substr($keyword, 2, 5, 'utf-8');
					$url = "http://v.juhe.cn/weather/index?format=2&cityname=" . $cityname . "&key=9b60ca79ae84f056ebafe2c07b5a17f3";
					$str = file_get_contents($url);
					$de_json = json_decode($str, true);
					$resultcode = $de_json['resultcode'];
					settype($resultcode, "integer");
					if ($resultcode == 200) {
						$contentStr = "城市:" . $cityname . "\n日期:" . $de_json['result']['today']['date_y'] . " " .
						    $de_json['result']['today']['week'] . "\n当前温度:" .
						    $de_json['result']['sk']['temp'] . "度\n今日天气:" .
						    $de_json['result']['today']['weather'] . "\n今日温度:" .
						    $de_json['result']['today']['temperature'] . "\n穿衣指数:" .
						    $de_json['result']['today']['dressing_index'] . "\n穿衣建议:" .
						    $de_json['result']['today']['dressing_advice'] . "\n紫外线强度:" .
						    $de_json['result']['today']['uv_index'] . "\n洗车指数:" .
						    $de_json['result']['today']['wash_index'] . "\n晨练指数:" .
						    $de_json['result']['today']['exercise_index'];
					} else {
						$contentStr = $de_json['reason'];
					}
				} else {
					$contentStr = "Welcome to Charles' world（欢迎来到星辰之间...）";
				}
			} else {
				$this->write_log("没有关键字");
				$contentStr = "Welcome to Charles' world（欢迎来到星辰之间...）";
			}
			$this->write_log("拼接结果字符串！");
		    $resultStr = sprintf($textTpl, $fromUsername, $toUsername, $time, $msgType, $contentStr);
		    $this->write_log($resultStr);
	        echo $resultStr;
		} else {
			echo "Welcome to Charles' world（欢迎来到星辰之间...）";
			exit;
		}
	}

	/**
	 * 开发者通过检验signature对请求进行校验。
	 * 若确认此次GET请求来自微信服务器，就原样返回echostr参数内容，则接入生效，成为开发者成功，否则接入失败。
	 * 1）将token、timestamp、nonce三个参数进行字典序排序
	 * 2）将三个参数字符串拼接成一个字符串进行sha1加密
	 * 3）开发者获得加密后的字符串可与signature对比，标识该请求来源于微信
	 */
	private function checkSignature() {
		$signature = $_GET["signature"];
		$timestamp = $_GET["timestamp"];
		$nonce = $_GET["nonce"];

		$token = TOKEN;
		$tmpArr = array (
			$token,
			$timestamp,
			$nonce
		);
		sort($tmpArr);
		$tmpStr = implode($tmpArr);
		$tmpStr = sha1($tmpStr);

		if ($tmpStr == $signature) {
			return true;
		} else {
			return false;
		}
	}
	
	public function write_log($str){
        file_put_contents('test.log', "\r\n". $str, FILE_APPEND);
    }
}
?>