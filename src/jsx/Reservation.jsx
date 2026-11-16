const Reservation = () => {
    return(
        <div className="reserv-information">
            
            <div className="header-reserv">

                <div className="header-reserv-left">
                    <div className="header-button">
                        <button className="membership-reserv">
                            ثبت نام
                        </button>
                        <div className="user-reserv">
                            <svg className="svg-user-reserv" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"> <path fill="rgb(0, 0, 0)" d="M240 192C240 147.8 275.8 112 320 112C364.2 112 400 147.8 400 192C400 236.2 364.2 272 320 272C275.8 272 240 236.2 240 192zM448 192C448 121.3 390.7 64 320 64C249.3 64 192 121.3 192 192C192 262.7 249.3 320 320 320C390.7 320 448 262.7 448 192zM144 544C144 473.3 201.3 416 272 416L368 416C438.7 416 496 473.3 496 544L496 552C496 565.3 506.7 576 520 576C533.3 576 544 565.3 544 552L544 544C544 446.8 465.2 368 368 368L272 368C174.8 368 96 446.8 96 544L96 552C96 565.3 106.7 576 120 576C133.3 576 144 565.3 144 552L144 544z"/> </svg>
                        </div>
                        
                        <div className="search-reserv">
                            <svg className="svg-search-reserv" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="rgb(0, 0, 0)" d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z"/> </svg>
                       </div>
                    </div>
                </div>

                <div className="header-reserv-right">
                    <img className="logo-pic-reserv" src="/images/Logo.webp"></img>
                </div>

                
            </div>


            <div className="reserv-road">
                <div className="reserv-road1">
                    <svg className="reserv-road1-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="rgb(255, 255, 255)" d="M320 496C342.1 496 360 513.9 360 536C360 558.1 342.1 576 320 576C297.9 576 280 558.1 280 536C280 513.9 297.9 496 320 496zM320 64C346.5 64 368 85.5 368 112C368 112.6 368 113.1 368 113.7L352 417.7C351.1 434.7 337 448 320 448C303 448 289 434.7 288 417.7L272 113.7C272 113.1 272 112.6 272 112C272 85.5 293.5 64 320 64z"/></svg>
                    <p className="reserv-road1-2" >اطلاعات رزرو</p>
                </div>

                <div className="road-line1">
                    <hr className="road-line1-1"></hr>
                </div>
                
                <div className="reserv-road2">
                    <svg className="reserv-road2-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="rgb(66, 66, 66)" d="M224 224C224 171 267 128 320 128C373 128 416 171 416 224C416 266.7 388.1 302.9 349.5 315.4C321.1 324.6 288 350.7 288 392L288 416C288 433.7 302.3 448 320 448C337.7 448 352 433.7 352 416L352 392C352 390.3 352.6 387.9 355.5 384.7C358.5 381.4 363.4 378.2 369.2 376.3C433.5 355.6 480 295.3 480 224C480 135.6 408.4 64 320 64C231.6 64 160 135.6 160 224C160 241.7 174.3 256 192 256C209.7 256 224 241.7 224 224zM320 576C342.1 576 360 558.1 360 536C360 513.9 342.1 496 320 496C297.9 496 280 513.9 280 536C280 558.1 297.9 576 320 576z"/></svg>
                    <p className="reserv-road2-2" > پراخت</p>
                </div>

                <div className="road-line2">
                    <hr className="road-line2-1"></hr>
                </div>

                <div className="reserv-road3">
                    <svg className="reserv-road3-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="rgb(66, 66, 66)" d="M224 224C224 171 267 128 320 128C373 128 416 171 416 224C416 266.7 388.1 302.9 349.5 315.4C321.1 324.6 288 350.7 288 392L288 416C288 433.7 302.3 448 320 448C337.7 448 352 433.7 352 416L352 392C352 390.3 352.6 387.9 355.5 384.7C358.5 381.4 363.4 378.2 369.2 376.3C433.5 355.6 480 295.3 480 224C480 135.6 408.4 64 320 64C231.6 64 160 135.6 160 224C160 241.7 174.3 256 192 256C209.7 256 224 241.7 224 224zM320 576C342.1 576 360 558.1 360 536C360 513.9 342.1 496 320 496C297.9 496 280 513.9 280 536C280 558.1 297.9 576 320 576z"/></svg>
                    <p className="reserv-road3-2" > تأیید شد</p>
                </div>
            </div>

            
            <div className="reserv-info">

                <div className="reserv-information-form">
                    <div className="reserv-information-form-pic">
                        <img className="reserv-form-pic" src="/images/Reserv-pic1.webp"></img>
                    </div>

                    <div className="reserv-information-form-text">
                        <p className="reserv-form-text1">
                            ویلا استخردار لوکس در شمال
                        </p>

                        <div className="reserv-location-svg">
                            <svg className="reserv-location-svg1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"> <path fill="rgb(0, 0, 0)" d="M128 252.6C128 148.4 214 64 320 64C426 64 512 148.4 512 252.6C512 371.9 391.8 514.9 341.6 569.4C329.8 582.2 310.1 582.2 298.3 569.4C248.1 514.9 127.9 371.9 127.9 252.6zM320 320C355.3 320 384 291.3 384 256C384 220.7 355.3 192 320 192C284.7 192 256 220.7 256 256C256 291.3 284.7 320 320 320z"/> </svg>
                            <p className="reserv-location-text">
                                مازنران - نمک ابرود
                            </p>
                        </div>

                        <div className="reserv-text-display">
                            <p className="date-of-arrival">
                                تاریخ ورود :
                            </p>
                            <p className="date-of-arrival1">
                                05 / 06 / 1406
                            </p>
                        </div>
                    
                        <div className="reserv-text-display">
                            <p className="date-of-exit">
                                تاریخ خروج :
                            </p>
                            <p className="date-of-exit1">
                                08 / 06 / 1406
                            </p>
                        </div>
                    
                        <div className="reserv-text-display">
                            <p className="count-of-reserv">
                                تعداد : 
                            </p>
                            <p className="count-of-reserv1">
                                8 نفر
                            </p>
                        </div>
                    
                        <div className="reserv-text-display">
                            <p className="price-of-reserv">
                                قیمت کل :
                            </p>
                            <p className="price-of-reserv1">
                                25,500,000 تومان 
                            </p>
                        </div>
                    
                    
                    </div>
                </div>


            

                <div className="reserv-input">

                    <p className="guest-info">
                        اطلاعات مهمان
                    </p>


                    <div className="reserv-input1">
                        <input className="reserv-input1-1" type="text" placeholder="نام و نام خانوادگی"></input>
                    </div>

                    <div className="reserv-input1">
                        <input className="reserv-input1-1" type="text" placeholder="شماره موبایل"></input>
                    </div>

                    <div className="reserv-input2">
                        <input className="reserv-input1-1" type="text" placeholder="ایمیل (اختیاری)"></input>
                    </div>
                </div>


            </div>

            <p className="payment">
                روش پرداخت
            </p>

            <div className="payment-method">

                <div className="payment-method1">
                    <input className="payment-method1-1" type="radio"></input>
                    <p className="payment-method1-2">
                        پرداخت از طریق درگاه بانکی
                    </p>
                    <svg className="payment-method1-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="rgb(15, 61, 46)" d="M512 176C520.8 176 528 183.2 528 192L528 224L112 224L112 192C112 183.2 119.2 176 128 176L512 176zM528 288L528 448C528 456.8 520.8 464 512 464L128 464C119.2 464 112 456.8 112 448L112 288L528 288zM128 128C92.7 128 64 156.7 64 192L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 192C576 156.7 547.3 128 512 128L128 128zM144 408C144 421.3 154.7 432 168 432L216 432C229.3 432 240 421.3 240 408C240 394.7 229.3 384 216 384L168 384C154.7 384 144 394.7 144 408zM288 408C288 421.3 298.7 432 312 432L376 432C389.3 432 400 421.3 400 408C400 394.7 389.3 384 376 384L312 384C298.7 384 288 394.7 288 408z"/></svg>
                </div>

                <div className="payment-method2">
                    <input className="payment-method2-1" type="radio"></input>
                    <p className="payment-method2-2">
                        پرداخت از کیف پول
                    </p>
                    <svg className="payment-method2-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="rgb(15, 61, 46)" d="M64 192L64 224L576 224L576 192C576 156.7 547.3 128 512 128L128 128C92.7 128 64 156.7 64 192zM64 272L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 272L64 272zM128 424C128 410.7 138.7 400 152 400L200 400C213.3 400 224 410.7 224 424C224 437.3 213.3 448 200 448L152 448C138.7 448 128 437.3 128 424zM272 424C272 410.7 282.7 400 296 400L360 400C373.3 400 384 410.7 384 424C384 437.3 373.3 448 360 448L296 448C282.7 448 272 437.3 272 424z"/></svg>
                </div>

                <div className="payment-method3">
                    <input className="payment-method3-1" type="radio"></input>
                    <p className="payment-method3-2">
                        پرداخت از  Wallet
                    </p>
                    <p className="payment-method3-3">( به زودی )</p>
                    <svg className="payment-method3-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="rgb(15, 61, 46)" d="M128 96C92.7 96 64 124.7 64 160L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 256C576 220.7 547.3 192 512 192L136 192C122.7 192 112 181.3 112 168C112 154.7 122.7 144 136 144L520 144C533.3 144 544 133.3 544 120C544 106.7 533.3 96 520 96L128 96zM480 320C497.7 320 512 334.3 512 352C512 369.7 497.7 384 480 384C462.3 384 448 369.7 448 352C448 334.3 462.3 320 480 320z"/></svg>
                </div>
            </div>

            <div className="pay-button">
                <button className="pay-button1">
                    پرداخت و ثبت نهایی
                </button>
            </div>



            
            
        </div>
    )
}

export default Reservation;