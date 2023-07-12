import React, { useState } from 'react';
import { Media } from '../../interfaces';
import MediaDisplay from '../MediaDisplay/MediaDisplay';

// interface ApprovalFormProps {
//   unapprovedMedia?: Media;
//   onApprove: () => void;
//   onFetchAnother: () => void;
//   loading: boolean;
//   setLoading: React.Dispatch<React.SetStateAction<boolean>>;
//   waitingOnApproval: boolean;
//   setWaitingOnApproval: React.Dispatch<React.SetStateAction<boolean>>;
// }

// const ApprovalForm: React.FC<ApprovalFormProps> = ({ unapprovedMedia, onApprove, onFetchAnother, loading, setLoading, waitingOnApproval, setWaitingOnApproval }) => {
//   const [approved, setApproved] = useState(false);


//   const handleApprove = () => {
//     setApproved(true);
//     setLoading(true);
//     onApprove();
//   };

//   const handleFetchAnother = () => {
//     setApproved(false);
//     setLoading(true);
//     onFetchAnother();
//   };

//   return (
//     <div className="approval-section">
//       {waitingOnApproval ? (
//         <div>
//           <h3 className="section-title">Approve Your Requested Media:</h3>
//           <div>
//             <MediaDisplay media={unapprovedMedia} />
//             <p>Torrent Approved!</p>
//           </div>
//         </div>
//       ) : (
//         <div>
//           <p>Details and information about your requested media will appear here for you to approve once you have sent a new request.</p>
//         </div>
//       )}
//       {loading ? (
//         <div>
//           <p>Sending new request to fetch different media for approval...</p>
//         </div>
//       ) : (
//         <div>
//           {waitingOnApproval && (
//             <div>
//               <button onClick={handleApprove}>Approve</button>
//               <button onClick={handleFetchAnother}>Fetch Another</button>
//             </div>
//           )}
//         </div>

//       )}
//     </div>
//   );
// };

// export default ApprovalForm;
