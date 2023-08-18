import React from "react";
import "../styles/UserDetails.css";
import { User } from "../user";

interface UserDetailsProps {
  user: User;
  onGoBack: () => void;
}

const UserDetails: React.FC<UserDetailsProps> = ({ user, onGoBack }) => (
  <article className="user-details">
    <h3>{user.name}</h3>
    <dl className="user-info-list">
      <section>
        <div className="user-info-item">
          <dt>Username:</dt>
          <dd>
            <em>{user.username ? user.username : "Not Available"}</em>
          </dd>
        </div>
        <div className="user-info-item">
          <dt>Email:</dt>
          <dd>
            <em>{user.email ? user.email : "Not Available"}</em>
          </dd>
        </div>
      </section>
      <section>
        <div className="user-info-item">
          <dt>Street:</dt>
          <dd>
            <em>
              {user.address.street ? user.address.street : "Not Available"}
            </em>
          </dd>
        </div>
        <div className="user-info-item">
          <dt>Suite:</dt>
          <dd>
            <em>{user.address.suite ? user.address.suite : "Not Available"}</em>
          </dd>
        </div>
        <div className="user-info-item">
          <dt>City:</dt>
          <dd>
            <em>{user.address.city ? user.address.city : "Not Available"}</em>
          </dd>
        </div>
        <div className="user-info-item">
          <dt>ZipCode:</dt>
          <dd>
            <em>
              {user.address.zipcode ? user.address.zipcode : "Not Available"}
            </em>
          </dd>
        </div>
        <div className="user-info-item">
          <dt>Lat:</dt>
          <dd>
            <em>
              {user.address.geo.lat ? user.address.geo.lat : "Not Available"}
            </em>
          </dd>
        </div>
        <div className="user-info-item">
          <dt>Lng:</dt>
          <dd>
            <em>
              {user.address.geo.lng ? user.address.geo.lng : "Not Available"}
            </em>
          </dd>
        </div>
        <div className="user-info-item">
          <dt>Phone:</dt>
          <dd>
            <em>{user.phone ? user.phone : "Not Available"}</em>
          </dd>
        </div>
        <div className="user-info-item">
          <dt>Website:</dt>
          <dd>
            <em>{user.website ? user.website : "Not Available"}</em>
          </dd>
        </div>
      </section>
      <section>
        <div className="user-info-item">
          <dt>Company:</dt>
          <dd>
            <em>{user.company.name ? user.company.name : "Not Available"}</em>
          </dd>
        </div>
        <div className="user-info-item">
          <dt>Catch Phrase:</dt>
          <dd>
            <em>
              {user.company.catchPhrase
                ? user.company.catchPhrase
                : "Not Available"}
            </em>
          </dd>
        </div>
        <div className="user-info-item">
          <dt>BS:</dt>
          <dd>
            <em>{user.company.bs ? user.company.bs : "Not Available"}</em>
          </dd>
        </div>
      </section>
    </dl>
    <button onClick={onGoBack} aria-label="Go Back">
      Go Back
    </button>
  </article>
);

export default UserDetails;
