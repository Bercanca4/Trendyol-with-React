import React from 'react'

function Suggestions() {
  return (
    <div className="items-center flex my-5 gap-x-4"> 
         <div className="rounded-xl hover:cursor-pointer">
            <a href="https://www.trendyol.com/sr?fl=sepettekiurunler">
            <img src="https://cdn.dsmcdn.com/mnresize/500/500/marketing/datascience/automation/2023/4/18/Sepet_202304181225.png" />
            </a>
         </div>

         <div className="rounded-xl hover:cursor-pointer">
         <a href="https://www.trendyol.com/sr?fl=encokonecikanurunler">
            <img src="https://cdn.dsmcdn.com/mnresize/500/500/marketing/datascience/automation/2023/4/18/Onecikan_202304181225.png" />
            </a> 
         </div>

         <div className="rounded-xl hover:cursor-pointer">
             <a href="https://www.trendyol.com/sr?tag=fs_6_12_2023_18_21">
            <img src="https://cdn.dsmcdn.com/mnresize/500/500/marketing/datascience/automation/2023/4/18/Flash_202304181225.png" />
              </a>
         </div>
      
    </div>
  )
}

export default Suggestions