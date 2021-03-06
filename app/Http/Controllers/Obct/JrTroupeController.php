<?php

namespace App\Http\Controllers\Obct;

use App\Http\Controllers\Controller;
use App\Performance;
use App\troupeInfo;
use App\JrTroupeAbout;
use App\CurrentShow;

class JrTroupeController extends Controller
{
    /**
     * @var JrTroupeAbout
     */
    private $jrTroupeAbout;

    /**
     * @var CurrentShow
     */
    private $currentShow;

    /**
     * @var troupeInfo
     */
    private $troupeInfo;

    /**
     * @var Performance
     */
    private $performance;

    /**
     * @param JrTroupeAbout $jrTroupeInfo
     * @param CurrentShow $currentShow
     */
    public function __construct(JrTroupeAbout $jrTroupeInfo,
                                CurrentShow $currentShow,
                                troupeInfo $troupeInfo,
                                Performance $performance)
    {
        $this->jrTroupeAbout = $jrTroupeInfo;
        $this->currentShow   = $currentShow;
        $this->troupeInfo    = $troupeInfo;
        $this->performance   = $performance;
    }

    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function jrTroupe()
    {
        $jrTroupe = $this->jrTroupeAbout->all();

        $currentShow = CurrentShow::where('active', 1)
                                  ->get();

        $troupeInfo = $this->troupeInfo->all();

        $performance = $this->performance
                            ->where('active', 1)
                            ->get();

        return view('obct.jrtroupe',
                    [
                        'currentShow'  => $currentShow,
                        'jrTroupe'     => $jrTroupe,
                        'troupeInfo'   => $troupeInfo,
                        'performances' => $performance
                    ]
        );
    }
}
