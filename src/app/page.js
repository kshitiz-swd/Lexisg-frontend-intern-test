'use client'

import { useState } from "react";
import Input from "./components/Input";
import Response from "./components/Response";
import PdfModal from "./components/PdfModal";

export default function Home() {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [submittedQuery, setSubmittedQuery] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleInput = () => {
    setLoading(true);
    setSubmittedQuery(query);
    setQuery('');

    const res = {
      answer: "Yes, under Section 166 of the Motor Vehicles Act, 1988, the claimants are entitled to an addition for future prospects even when the deceased was self-employed and aged 54–55 years at the time of the accident. In Dani Devi v. Pritam Singh, the Court held that 10% of the deceased’s annual income should be added as future prospects.",
      citations: [
        {
          text: "as the age of the deceased at the time of accident was held to be about 54-55 years by the learned Tribunal, being self-employed, as such, 10% of annual income should have been awarded on account of future prospects.” (Para 7 of the document)",
          source: "Dani_Devi_v_Pritam_Singh.pdf",
          link: "#"
        }
      ]
    };

    setTimeout(() => {
      setResponse(res);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col justify-end items-center min-h-screen px-4 pt-4 pb-32">
      {submittedQuery && response && (
        <div className="w-full max-w-3xl mb-6">
          <Response 
            response={response} 
            querySubmitted={submittedQuery}
            onCitationClick={() => setShowModal(true)}
          />
        </div>
      )}

      <PdfModal isOpen={showModal} onClose={() => setShowModal(false)} />

      <div className="w-full max-w-3xl fixed bottom-0 left-1/2 -translate-x-1/2 px-4">
        <Input 
          onSubmit={handleInput} 
          loading={loading} 
          query={query} 
          setQuery={setQuery} 
        />
      </div>
    </div>
  );
}
