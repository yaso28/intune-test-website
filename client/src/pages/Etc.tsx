import axios from "axios";
import { useState } from "react";

export default function Etc() {
  const [extData, setExtData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null)

  const fetchExt = async (): Promise<void> => {    
    try {
      setExtData(null)

      const response: Response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const jsonData = await response.json();
      setExtData(jsonData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error occurred');
    }
  };

  const axiosExt = async (): Promise<void> => {    
    try {
      setExtData(null)

      const res = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
      const jsonData = res.data;
      setExtData(jsonData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error occurred');
    }
  };

  return (
    <div>
      <h1>Etc</h1>

      <p>
        <a href="/api/download">download</a>
      </p>

      <div>
        <h2>External</h2>
        <button onClick={fetchExt}>fetch</button>
        <button onClick={axiosExt}>axios</button>

        {error && <p style={{ color: 'crimson', marginTop: 12 }}>エラー: {error}</p>}
        {extData && (
        <pre style={{ 
          background: '#f5f5f5', 
          padding: '16px', 
          borderRadius: '4px',
          overflow: 'auto'
        }}>
          {JSON.stringify(extData, null, 2)}
        </pre>
      )}
      </div>
    </div>
  )
}
