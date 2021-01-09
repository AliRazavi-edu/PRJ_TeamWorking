<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Larabookir\Gateway\Gateway;
use Larabookir\Gateway\PortAbstract;
use Illuminate\Http\RedirectResponse;
use Larabookir\Gateway\PortInterface;
use Illuminate\Support\Facades\Validator;
use Larabookir\Gateway\Exceptions\RetryException;

class DonateController extends Controller
{
    /**
     * @return \Illuminate\Contracts\View\View
     */
    public function index()
    {
        return view('donate.index');
    }

    /**
     * @param $type
     * @param Request $request
     * @return \Illuminate\Contracts\View\View|void
     */
    public function result($type, Request $request)
    {
        $validator = Validator::make(['type' => $type], [
            'type' => 'required|string|in:success,fail'
        ]);

        if ($validator->fails())
            return abort(404);

        return view("donate.result.{$type}", ['message' => $request->input('message')]);
    }

    /**
     * @param Request $request
     * @return RedirectResponse|mixed
     * @throws \Exception
     */
    public function init(Request $request)
    {
        $this->validate($request,[
           'price' => 'required|numeric|in:10000,20000,30000'
        ]);

        try {

            $gateway = Gateway::make('zarinpal');
            $gateway->price($request->input('price')*10);
            $gateway->setCallback(route('donate.invoice'));

            $gateway->ready();

            return $gateway->redirect();

        } catch (\Exception $e) {
            return redirect()->route("donate.result", ['type' => 'fail', 'message' => $e->getMessage()]);
        }
    }

    /**
     * @param Request $request
     * @return RedirectResponse
     */
    public function invoice(Request $request)
    {
        try {
            /** @var PortInterface|PortAbstract $gateway */
            $gateway = Gateway::verify();

            $text = 'پرداخت با موفقیت انجام شد. کد رهگیری پرداخت : ';
            $text .= $gateway->trackingCode();

            return redirect()->route("donate.result", [
                'type'    => 'success',
                'message' => $text
            ]);

        } catch (RetryException $e) {

            return redirect()->route("donate.result", [
                'type'    => 'success',
                'message' => $e->getMessage()
            ]);
        } catch (\Exception $e) {

            return redirect()->route("donate.result", [
                'type'    => 'fail',
                'message' => $e->getMessage()
            ]);
        }
    }

}
