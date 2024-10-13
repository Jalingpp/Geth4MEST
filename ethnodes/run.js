personal.newAccount("123456")
personal.newAccount("123456")
setTimeout(function() {
    console.log('6秒钟过去了');
    miner.setEtherbase(eth.accounts[0])
    setTimeout(function() {
        console.log('3秒钟过去了');
        miner.start()
        setTimeout(function() {
            console.log('60秒钟过去了');
            loadScript('loadRawTxs.js')
            setTimeout(function() {
                console.log('2秒钟过去了');
                loadScript('100W/loadTxs10000_1.js')
                loadScript('100W/loadTxs10000_2.js')
                loadScript('100W/loadTxs10000_3.js')
                loadScript('100W/loadTxs10000_4.js')
                loadScript('100W/loadTxs10000_5.js')
                loadScript('100W/loadTxs10000_6.js')
                loadScript('100W/loadTxs10000_7.js')
                loadScript('100W/loadTxs10000_8.js')
                loadScript('100W/loadTxs10000_9.js')
                loadScript('100W/loadTxs10000_10.js')
                loadScript('100W/loadTxs10000_11.js')
                loadScript('100W/loadTxs10000_12.js')
                loadScript('100W/loadTxs10000_13.js')
                loadScript('100W/loadTxs10000_14.js')
                loadScript('100W/loadTxs10000_15.js')
                loadScript('100W/loadTxs10000_16.js')
                loadScript('100W/loadTxs10000_17.js')
                loadScript('100W/loadTxs10000_18.js')
                loadScript('100W/loadTxs10000_19.js')
                loadScript('100W/loadTxs10000_20.js')
                loadScript('100W/loadTxs10000_21.js')
                loadScript('100W/loadTxs10000_22.js')
                loadScript('100W/loadTxs10000_23.js')
                loadScript('100W/loadTxs10000_24.js')
                loadScript('100W/loadTxs10000_25.js')
                loadScript('100W/loadTxs10000_26.js')
                loadScript('100W/loadTxs10000_27.js')
                loadScript('100W/loadTxs10000_28.js')
                loadScript('100W/loadTxs10000_29.js')
                loadScript('100W/loadTxs10000_30.js')
                loadScript('100W/loadTxs10000_31.js')
                loadScript('100W/loadTxs10000_32.js')
                loadScript('100W/loadTxs10000_33.js')
                loadScript('100W/loadTxs10000_34.js')
                loadScript('100W/loadTxs10000_35.js')
                loadScript('100W/loadTxs10000_36.js')
                loadScript('100W/loadTxs10000_37.js')
                loadScript('100W/loadTxs10000_38.js')
                loadScript('100W/loadTxs10000_39.js')
                loadScript('100W/loadTxs10000_40.js')
                loadScript('100W/loadTxs10000_41.js')
                loadScript('100W/loadTxs10000_42.js')
                loadScript('100W/loadTxs10000_43.js')
                loadScript('100W/loadTxs10000_44.js')
                loadScript('100W/loadTxs10000_45.js')
                loadScript('100W/loadTxs10000_46.js')
                loadScript('100W/loadTxs10000_47.js')
                loadScript('100W/loadTxs10000_48.js')
                loadScript('100W/loadTxs10000_49.js')
                loadScript('100W/loadTxs10000_50.js')
            }, 2000); // 2秒
        }, 60000); // 
    },3000);
},6000);



// miner.stop()