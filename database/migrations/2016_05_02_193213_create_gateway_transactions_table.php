<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;
use Larabookir\Gateway\PortAbstract;
use Larabookir\Gateway\GatewayResolver;
use Larabookir\Gateway\Enum;
use Illuminate\Support\Facades\Schema;

class CreateGatewayTransactionsTable extends Migration
{
	function getTable()
	{
		return config('gateway.table', 'gateway_transactions');
	}

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{

		Schema::create($this->getTable(), function (Blueprint $table) {
			$table->bigIncrements('id');
			$table->enum('port', (array) Enum::getIPGs());
			$table->decimal('price', 15, 2);
			$table->string('ref_id')->nullable();
			$table->string('tracking_code')->nullable();
			$table->string('card_number')->nullable();
			$table->enum('status', [
				Enum::TRANSACTION_INIT,
				Enum::TRANSACTION_SUCCEED,
				Enum::TRANSACTION_FAILED,
			])->default(Enum::TRANSACTION_INIT);
			$table->string('ip', 30)->nullable();
            $table->text('description')->nullable();
			$table->timestamp('payment_date')->nullable();
			$table->nullableTimestamps();
			$table->softDeletes();

		});

        try {
            DB::statement("update `" . $this->getTable() . "` set `payment_date`=null WHERE  `payment_date`=0;");
        } catch (Exception $e) {

        }
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop($this->getTable());
	}
}
