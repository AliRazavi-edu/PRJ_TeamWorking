<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property string $transaction_id
 * @property string $result_code
 * @property string $result_message
 * @property string $log_date
 * Class Payment
 * @package App\Models
 */
class TransactionLog extends Model
{
    protected $table = "gateway_transactions_logs";

    protected $fillable = [
        'transaction_id',
        'result_code',
        'result_message',
        'log_date',
    ];

    protected $dates = ['log_date'];

    public function transaction()
    {
        return $this->belongsTo(Transaction::class, 'transaction_id');
    }
}
