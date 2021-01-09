<?php

namespace App\Models;

use Carbon\Carbon;
use App\Helpers\PriceHelper;
use Larabookir\Gateway\Enum;
use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property string $port
 * @property string $price
 * @property string $ref_id
 * @property string $tracking_code
 * @property string $card_number
 * @property string $status
 * @property string $ip
 * @property string $description
 * @property Carbon $payment_date
 * @property Carbon $created_at
 * @property Carbon $updated_at
 * @property Carbon $deleted_at
 * @property string $jdate_created_at
 * @property string $jdate_payment_date
 * @property string $formatted_price
 * @property string $status_translation
 * @property string $result_message
 * @property string $result_code
 * Class Payment
 * @package App\Models
 */
class Transaction extends Model
{
    protected $table = "gateway_transactions";

    protected $fillable = [
        'port',
        'price',
        'ref_id',
        'tracking_code',
        'card_number',
        'status',
        'ip',
        'description',
        'payment_date',
        'created_at',
    ];

    protected $dates = ['payment_date'];

    public function transactionLog()
    {
        return $this->hasOne(TransactionLog::class, 'transaction_id');
    }

    //-------------scopes----------//

    public function scopeSuccessful($query)
    {
        return $query->where('status', Enum::TRANSACTION_SUCCEED);
    }

    public function scopeFailed($query)
    {
        return $query->where('status', Enum::TRANSACTION_FAILED);
    }

    public function scopeInitialized($query)
    {
        return $query->where('status', Enum::TRANSACTION_INIT);
    }

    //-------------attributes---------------//

    public function getFormattedPriceAttribute()
    {
        $price = (int)$this->price;

        return PriceHelper::init($price / 10)->formatPrice()->getPrice();
    }

    public function getJdateCreatedAtAttribute()
    {
        return jdate($this->created_at)->format('Y/m/d H:i:s');
    }

    public function getJdatePaymentDateAttribute()
    {
        if (!isset($this->payment_date))
            return null;

        return jdate($this->payment_date)->format('Y/m/d H:i:s');
    }

    public function getStatusTranslationAttribute()
    {
        switch ($this->status) {
            case Enum::TRANSACTION_FAILED:
                $typeText = 'ناموفق';
                break;
            case Enum::TRANSACTION_SUCCEED:
                $typeText = 'موفق';
                break;
            case Enum::TRANSACTION_INIT:
                $typeText = 'درگاه';
                break;
            default:
                $typeText = 'نامشخص';
                break;
        }

        return $typeText;
    }

    public function getResultMessageAttribute()
    {
        /** @var TransactionLog $log */
        $log = $this->transactionLog()->first();

        if (isset($log))
            return $log->result_message;

        return null;
    }

    public function getResultCodeAttribute()
    {
        /** @var TransactionLog $log */
        $log = $this->transactionLog()->first();

        if (isset($log))
            return $log->result_code;

        return null;
    }

    //-----------------methods-------------//

    public function isSuccessFull()
    {
        return $this->status == Enum::TRANSACTION_SUCCEED;
    }

    public function isFailed()
    {
        return $this->status == Enum::TRANSACTION_FAILED;
    }

    public function isInitialized()
    {
        return $this->status == Enum::TRANSACTION_INIT;
    }
}
