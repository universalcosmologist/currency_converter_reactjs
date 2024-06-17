import React,{useId} from 'react'

function InputBox({
  label,
  className='',
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions=[],
  selectCurrency="usd",
  amountDisable= false,
  currencyDisable=false,
}){
   const amountInputId=useId();

    return(
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
          <div className="w-1/2">
            <label className="text-black/40 mb-2 inline-block"
            htmlFor={amountInputId}>
                {label}
            </label>
            <input
            id={amountInputId}
            value={amount}
            disabled={amountDisable}
            onChange={(e)=>onAmountChange&&
            onAmountChange(Number(e.target.value))}
            type="number"
            className="w-full bg-transparent outline-none mb-2 py-1"
            placeholder="Amount"
            />
          </div>
          <div className="w-1/2 flex flex-wrap justify-end text-right">
           <p className="text-black/40 mb-2 w-full">currency Type</p>
           <select
           className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
           value={selectCurrency}
           onChange={(e)=>onCurrencyChange&&
           onCurrencyChange(e.target.value)}
           disabled={currencyDisable}>
             {currencyOptions.map((currency)=>(
                <option value={currency} key={currency}>
                    {currency}
                </option>
             ))}
           </select>
          </div>
        </div>
    )
}

export default InputBox;