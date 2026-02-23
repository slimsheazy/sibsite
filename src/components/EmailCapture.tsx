import { useState } from 'react';

export default function EmailCapture() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Replace YOUR_FORM_ID after signing up at formspree.io
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    });
    
    setLoading(false);
    if (response.ok) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="text-center p-4 text-green-400">
        <p>You're in. Check your inbox.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email"
        required
        className="flex-1 px-4 py-3 bg-gray-900 border border-gray-700 rounded text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
      />
      <button 
        type="submit" 
        disabled={loading}
        className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded transition-colors disabled:opacity-50"
      >
        {loading ? 'Joining...' : 'Get the Guide'}
      </button>
    </form>
  );
}
