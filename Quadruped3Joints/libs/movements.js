// ************************************************************************************************************
// Written by Alexander Agudelo <alex.agudelo@asurantech.com>, 2016
// Date: 29/May/2017
// Description: Holds default movements for the Quadruped 3 Joints block.
//
// ------
// Copyright (C) Asuran Technologies - All Rights Reserved
// Unauthorized copying of this file, via any medium is strictly prohibited
// Proprietary and confidential.
// ************************************************************************************************************

define(function(){
    var Records = {};

    Records.InitialPosition = function(){
        return [
            [10],
            _delay(500),
            [20],
            _delay(500),
            [30],
            _delay(500),
            [40],
            _delay(500),
        ]
    };


    function _delay(ms){
        return ms/15;
    }

    // returns an array with the correctly assigned numbers
    function formLeg(tip, base, shoulder){
        return [tip, base, shoulder];
    }
    return Records;
});