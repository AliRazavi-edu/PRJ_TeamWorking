<?php
/**
 * Created by PhpStorm.
 * User: s.bahador
 * Date: 7/23/2019
 * Time: 6:10 PM
 */

namespace App\Helpers;

class PriceHelper
{

    /** @var bool $isArray */
    protected $isArray = false;

    /** @var array|int $price */
    protected $price;

    /** @var string $lang */
    protected $lang;

    /** @var string $priceUnit */
    protected $priceUnit = 'toman';

    /** @var bool $needConvert */
    private $needConvert = false;

    /** @var bool */
    private $needFormat = false;

    /** @var bool */
    private $needRound = false;

    /** @var bool */
    private $needHumanization = false;

    /** @var bool */
    private $onlyNumberHumanization = false;

    /** @var string $humanizedUnit */
    private $humanizedUnit;

    /** @var bool */
    private $conversionExecuted = false;

    protected function __construct($price)
    {
        $this->setLang(config('app.locale'));

        if (empty($price) && $price !== 0)
            $price = null;
        elseif (is_array($price)) {
            if (count($price) > 1)
                $this->isArray = true;
            else
                $price = current($price);
        }

        $this->price = $price;
    }

    /**
     * @param mixed|int|string $price
     * @return PriceHelper
     */
    public static function init($price): PriceHelper
    {
        return new static($price);
    }

    /**
     * @return bool
     */
    private function hasPrice()
    {
        return !empty($this->price);
    }

    /**
     * @param string $lang
     * @return PriceHelper
     */
    public function setLang(?string $lang): PriceHelper
    {
        $this->lang = $lang;

        return $this;
    }

    /**
     * return min price
     *
     * filters null values
     *
     */
    public function getMinPrice()
    {
        if (!$this->hasPrice() || !$this->isArray)
            return $this->price;

        $this->price = array_filter($this->price, function ($value) {
            return $value !== null;
        });

        if (count($this->price) > 0)
            return $this->price = min($this->price);

        return null;
    }


    /**
     * @return $this
     */
    public function roundPrice()
    {
        $this->needRound = true;

        return $this;

    }


    /**
     * @param float|int $price
     * @return float|int
     */
    protected function roundSingle($price)
    {
        if ($this->lang != 'fa')
            $rounded = round($price, 1, PHP_ROUND_HALF_DOWN);
        else {
            $rounded = round($price / 100, 0, PHP_ROUND_HALF_DOWN) * 100;

            $roundedBreak = $this->numberBreakdown($rounded);

            if ($roundedBreak['decimal'] == 0)
                return $roundedBreak['floor'];
        }


        return $rounded;
    }

    /**
     * converts number from latin numbers to persian numbers and vice versa
     *
     *
     * @param null $lang
     * @return $this
     */
    public function convert($lang = null)
    {
        if (!is_null($lang))
            $this->setlang($lang);

        $this->needConvert = true;

        return $this;
    }


    /**
     * @param bool $humanReadable
     * @return array|int
     */
    public function getPrice($humanReadable = false)
    {
        if ($humanReadable)
            $this->humanize();

        if (!$this->conversionExecuted)
            $this->runConversions();

        return $this->price;
    }

    /**
     * this method converts 10000 to '10 hezar toman'
     *
     * @param bool $needHumanization
     * @param bool $numberOnly
     * @return $this
     */
    public function humanize($needHumanization = true, $numberOnly = false)
    {
        $this->onlyNumberHumanization = $numberOnly;
        $this->needHumanization = $needHumanization;

        return $this;
    }

    /**
     * @param $price
     * @return array
     */
    protected function humanizeSingle($price): array
    {
        $number = $this->numberBreakdown($price);

        $text = '';

        switch ($price) {
            case ($price >= 1000 && $price < 1000000) :
                $price = ($number['floor'] / 1000);

                $text = ' ' . $this->translate('thousand');
                break;
            case ($price >= 1000000 && $price < 1000000000) :
                $price = ($number['floor'] / 1000000);
                $text = ' ' . $this->translate('million');
                break;
            case ($price >= 1000000000 && $price < 1000000000000) :
                $price = ($number['floor'] / 1000000);
                $text = ' ' . $this->translate('billion');
                break;
        }

        $text .= ' ' . $this->translate($this->priceUnit);

        $this->humanizedUnit = $text;

        if ($this->onlyNumberHumanization)
            $text = '';

        return [
            'price'      => $price,
            'price_unit' => $text
        ];
    }

    /**
     * breaks number into int part adn decimal part
     *
     * @param $number
     * @param bool $returnUnsigned
     * @return array
     */
    public function numberBreakdown($number, $returnUnsigned = true)
    {
        $negative = 1;
        if ($number < 0) {
            $negative = -1;
            $number *= -1;
        }

        $numberFloor = (int)floor($number);
        $numberDecimal = ($number - $numberFloor);

        if (!$returnUnsigned) {
            $numberFloor = $numberFloor * $negative;
            $numberDecimal = $numberDecimal * $negative;
        }

        return [
            'floor'   => $numberFloor,
            'decimal' => $numberDecimal
        ];
    }

    /**
     * this method converts 10000 to 10'000
     *
     * formats price based on lang
     * fa => thousand separator : `'` , decimal : `/`
     * en => thousand separator : `,` , decimal : `.`
     *
     * @return PriceHelper
     */
    public function formatPrice()
    {
        $this->needFormat = true;

        return $this;
    }

    /**
     * @return string
     */
    protected function getThousandSeparator()
    {
        return ',';
    }

    /**
     * @return string
     */
    protected function getDecimalPoint()
    {
        return '.';
    }

    protected function formatSingle($price)
    {
        $thousand_separator = $this->getThousandSeparator();
        $dec_point = $this->getDecimalPoint();

        if (strpos((string)$price, ".") !== false)
            return number_format($price, 2, $dec_point, $thousand_separator);
        else
            return number_format($price, 0, $dec_point, $thousand_separator);
    }

    /**
     * @param null $lang fa|en
     * @param bool $convert
     * @return $this
     */
    public function shapePrice($lang = null, $convert = false)
    {
        $this->roundPrice()
            ->formatPrice();

        if ($convert)
            $this->convert($lang);

        return $this;
    }

    /**
     * @param string $priceUnit
     * @return PriceHelper
     */
    public function setPriceUnit(string $priceUnit): PriceHelper
    {
        $this->priceUnit = $priceUnit;

        return $this;
    }


    /**
     * here we round the price
     */
    private function roundAction()
    {
        if ($this->isArray) {
            foreach ($this->price as $index => $price) {
                $this->price[$index] = $this->roundSingle($price);
            }
        } else {
            $this->price = $this->roundSingle($this->price);
        }
    }

    /**
     * here we format the price
     */
    private function priceFormatAction()
    {
        if ($this->isArray)
            foreach ($this->price as $index => $price) {
                $this->price[$index] = $this->formatSingle($price);
            }
        else
            $this->price = $this->formatSingle($this->price);

    }

    /**
     * humanize is the action that removes zeros and add words instead of zeros -> like 10000 : 10 thousand
     *
     * @return void
     */
    private function humanizeAction()
    {
        if ($this->isArray) {

            foreach ($this->price as $index => $price) {
                $result = $this->humanizeSingle($price);

                $this->price[$index] = $result['price'] . $result['price_unit'];
            }

        } else {
            $result = $this->humanizeSingle($this->price);

            $this->price = $result['price'] . $result['price_unit'];
        }
    }

    /**
     * @return void
     */
    private function numberConvertAction()
    {
        if ($this->isArray) {
            foreach ($this->price as $index => $price) {
                $this->price[$index] = $this->convertNumber($price, $this->lang);
            }
        } else {
            $this->price = $this->convertNumber($this->price, $this->lang);
        }
    }

    /**
     * @return $this
     */
    public function runConversions(): PriceHelper
    {
        if (!$this->hasPrice())
            return $this;

        if ($this->needRound)
            $this->roundAction();

        if ($this->needHumanization && $this->needFormat) {
            $this->formatAndHumanizeAction();
        } elseif ($this->needHumanization && !$this->needFormat) {
            $this->humanizeAction();
        } elseif (!$this->needHumanization && $this->needFormat) {
            $this->priceFormatAction();
        }

        if ($this->needConvert)
            $this->numberConvertAction();

        $this->conversionExecuted = true;

        return $this;
    }

    private function formatAndHumanizeAction()
    {
        if ($this->isArray) {
            foreach ($this->price as $index => $price) {
                $result = $this->humanizeSingle($price);

                $this->price[$index] = $this->formatSingle($result['price']) . $result['price_unit'];
            }
        } else {
            $result = $this->humanizeSingle($this->price);

            $this->price = $this->formatSingle($result['price']) . $result['price_unit'];
        }
    }

    public function getHumanizedUnit()
    {
        $this->runConversions();

        return $this->humanizedUnit ?? $this->translate($this->priceUnit);
    }


    protected function translate($key)
    {
        $trans = [
            'thousand'               => 'هزار',
            'million'                => 'میلیون',
            'billion'                => 'میلیارد',
            'toman'                  => 'تومان',
        ];

        if (empty($trans[$key]))
            return $key;

        return $trans[$key];
    }

    /**
     * Convert eng numbers to persian and vise versa
     * @param        $string
     * @param string $to => 'fa' or 'en'
     * @return string
     */
    protected function convertNumber($string, $to = 'fa')
    {
        $engNumbers = ['0',
                       '1',
                       '2',
                       '3',
                       '4',
                       '5',
                       '6',
                       '7',
                       '8',
                       '9'];

        $persianNumbers = ['۰',
                           '۱',
                           '۲',
                           '۳',
                           '۴',
                           '۵',
                           '۶',
                           '۷',
                           '۸',
                           '۹'];

        if (!is_string($string)) {
            $string = (string)$string;
        }
        if (!is_null($string)) {
            if ($to == 'fa')
                $string = str_replace($engNumbers, $persianNumbers, $string);
            elseif ($to == 'en')
                $string = str_replace($persianNumbers, $engNumbers, $string);
        }

        return $string;
    }
}
