// functions/gemini.js

exports.handler = async function (event) {
  // Get the prompt from the request body
  const { prompt } = JSON.parse(event.body);

  // Get the secret API key from the environment variables
  const apiKey = process.env.GEMINI_API_KEY;
  console.log("Is the API key present?", !!apiKey);
  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;

  const payload = {
    contents: [{ parts: [{ text: prompt }] }],
    // We copy the generationConfig from our original frontend code
    generationConfig: {
        responseMimeType: "application/json",
        responseSchema: {
            type: "OBJECT",
            properties: {
                contactInfo: { type: "OBJECT", properties: { name: { type: "STRING" }, email: { type: "STRING" }, phone: { type: "STRING" }, linkedin: { type: "STRING" }, github: { type: "STRING" }, website: { type: "STRING" } } },
                summary: { type: "STRING" },
                workExperience: { type: "ARRAY", items: { type: "OBJECT", properties: { jobTitle: { type: "STRING" }, company: { type: "STRING" }, location: { type: "STRING" }, dates: { type: "STRING" }, description: { type: "STRING" } } } },
                education: { type: "ARRAY", items: { type: "OBJECT", properties: { degree: { type: "STRING" }, institution: { type: "STRING" }, location: { type: "STRING" }, graduationDate: { type: "STRING" } } } },
                skills: { type: "ARRAY", items: { type: "STRING" } },
                jobMatch: { type: "OBJECT", properties: { score: { type: "NUMBER" }, justification: { type: "STRING" } } },
                interviewQuestions: { type: "ARRAY", items: { type: "OBJECT", properties: { type: { type: "STRING" }, question: { type: "STRING" }, answer: { type: "STRING" } } } }
            }
        }
    }
  };

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const result = await response.json();
    
    return {
      statusCode: 200,
      body: JSON.stringify(result)
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error.message })
    };
  }

};
