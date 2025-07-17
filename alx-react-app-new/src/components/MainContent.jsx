function MainContent() {
    return (
        <main>
            <p>I love to visit New York, Paris, and Tokyo.</p>
        </main>
    );
}

export default MainContent;
Add MainContent componentimport React from 'react';
import UserProfile from './UserProfile';

function MainContent() {
  return (
    <main style={{ padding: '20px', backgroundColor: '#eef' }}>
      <UserProfile name="Alice" age={28} bio="Enjoys hiking and coding." />
      <UserProfile name="Bob" age={34} bio="Loves painting and music." />
    </main>
  );
}

export default MainContent;
style: style MainContent with inline CSS


