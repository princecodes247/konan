export default function Grid(props): JSX.Element {
    let progressPercentage = props.currentAmount / props.targetAmount * 100
    return (
        
<div className="desc_progress my-4 ">
                  <div className="progress_bar bg-gray-300 w-full h-3 rounded overflow-hidden">
                    <div
                      className="progress_bar_inner bg-blue-500 h-3 rounded"
                      style={{ width: progressPercentage + "%" }}
                    />
                  </div>
                  <div className="progress_details flex justify-between items-center text-xs text-gray-500 mb-4">
                    <p>Raised: {props.currentAmount} ETH</p>
                    <p>Target: {props.targetAmount} ETH</p>
                  </div>
                </div>
    )
  }
  
