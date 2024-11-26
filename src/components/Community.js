import React, { useState } from 'react';
import './community.css';
import Header from './Header';
import Footer from './Footer';

// SupportGroupCard Component
function SupportGroupCard({ groupName, groupDetails, membersCount, location }) {
    const [alertMessage, setAlertMessage] = useState("");
  
    const handleJoinRequest = () => {
      setAlertMessage("Request to join the group sent successfully!");
      setTimeout(() => setAlertMessage(""), 3000); // Hide alert after 3 seconds
    };
  
    return (
      <div className="group-card">
        <h3 className="group-name">{groupName}</h3>
        <p className="group-details">{groupDetails}</p>
        <div className="group-stats">
          <span>Members: {membersCount}</span>
          <span>Location: {location}</span>
        </div>
        <button className="join-group-btn" onClick={handleJoinRequest}>Request to Join</button>
        {alertMessage && <div className="alert">{alertMessage}</div>}
      </div>
    );
  }
  
  // ProposalCard Component
  function ProposalCard({ proposalTitle, proposalDetails, currentVotes }) {
    const [alertMessage, setAlertMessage] = useState("");
  
    const handleVote = (voteType) => {
      setAlertMessage(`Your vote of ${voteType} has been recorded!`);
      setTimeout(() => setAlertMessage(""), 3000); // Hide alert after 3 seconds
    };
  
    return (
      <div className="proposal-card">
        <h3 className="proposal-title">{proposalTitle}</h3>
        <p className="proposal-details">{proposalDetails}</p>
        <div className="vote-count">Current Votes: {currentVotes}/200 needed</div>
        <div className="voting-buttons">
          <button className="vote-btn" onClick={() => handleVote('Favor')}>Vote in Favor</button>
          <button className="vote-btn" onClick={() => handleVote('Against')} style={{ background: 'linear-gradient(45deg, #6b21a8, #4a1578)' }}>Vote Against</button>
        </div>
        {alertMessage && <div className="alert">{alertMessage}</div>}
      </div>
    );
  }
  
  // Main App Component
  function Community() {
    return (
        
      <main>
        <Header/>
        <section className="support-groups">
          <h1 className="section-title">Support Groups</h1>
          <p className="section-description">
            Join our anonymous support groups to connect with others, share experiences, and find strength in community. 
            All members use pseudonyms to maintain privacy and safety.
          </p>
  
          <div className="groups-container">
            <SupportGroupCard
              groupName="Healing Circle"
              groupDetails="A safe space for sharing experiences and supporting each other through the healing journey."
              membersCount={45}
              location="Global"
            />
            <SupportGroupCard
              groupName="Local Support Network"
              groupDetails="Connect with others in your geographic area for local support and resources."
              membersCount={28}
              location="Regional"
            />
            <SupportGroupCard
              groupName="Survivors Unite"
              groupDetails="A community focused on empowerment, recovery, and moving forward together."
              membersCount={62}
              location="Global"
            />
          </div>
        </section>
  
        <section className="proposals-section">
          <h2 className="section-title">Community Proposals</h2>
          <p className="section-description">Vote on important community proposals to help shape our support network.</p>
          
          <div className="groups-container">
            <ProposalCard
              proposalTitle="Weekly Virtual Support Sessions"
              proposalDetails="Implement weekly virtual support sessions with professional counselors for all group members. Sessions would be conducted in small groups of 5-7 members."
              currentVotes={156}
            />
            <ProposalCard
              proposalTitle="Emergency Response Network"
              proposalDetails="Create a 24/7 emergency response network connecting members with local support services and verified volunteers in crisis situations."
              currentVotes={178}
            />
          </div>
        </section>
        <Footer/>
      </main>
    );
  }
  
  export default Community;