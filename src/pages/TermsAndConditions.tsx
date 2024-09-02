import MainLayout from "../components/layouts/MainLayout";
const TermsAndConditions = () => {
  return (
    <MainLayout>
      <div className="px-10">
      
      </div>
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold mb-6">Terms and Conditions</h1>
        <p className="text-gray-700 mb-4">Last updated: 1/9/2000</p>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
          <p className="text-gray-600">
            Welcome to car rental service! These terms and conditions outline
            the rules and regulations for the use of car rental service's
            Website, located at [Your Website URL].
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            2. Intellectual Property Rights
          </h2>
          <p className="text-gray-600">
            Other than the content you own, under these Terms, car rental service and/or its licensors own all the intellectual property rights
            and materials contained in this Website.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">3. Restrictions</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>
              You are specifically restricted from publishing any Website
              material in any other media.
            </li>
            <li>
              You are restricted from selling, sublicensing, and/or otherwise
              commercializing any Website material.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">4. Your Content</h2>
          <p className="text-gray-600">
            In these Website Standard Terms and Conditions, “Your Content” shall
            mean any audio, video text, images, or other material you choose to
            display on this Website. By displaying Your Content, you grant car rental service a non-exclusive, worldwide irrevocable, sub-licensable
            license to use, reproduce, adapt, publish, translate, and distribute
            it in any and all media.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            5. Limitation of Liability
          </h2>
          <p className="text-gray-600">
            In no event shall car rental service, nor any of its officers,
            directors, and employees, be held liable for anything arising out of
            or in any way connected with your use of this Website.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">6. Indemnification</h2>
          <p className="text-gray-600">
            You hereby indemnify to the fullest extent car rental service from
            and against any and all liabilities, costs, demands, causes of
            action, damages, and expenses arising in any way related to your
            breach of any of the provisions of these Terms.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            7. Governing Law & Jurisdiction
          </h2>
          <p className="text-gray-600">
            These Terms will be governed by and interpreted in accordance with
            the laws of Bangladesh, and you submit to the
            non-exclusive jurisdiction of the state and federal courts located
            in Bangladesh for the resolution of any disputes.
          </p>
        </section>

        <p className="text-gray-600">
          If you have any questions about these Terms, please contact us at
          anikkumerroy7@gmail.com.
        </p>
      </div>
    </MainLayout>
  );
};

export default TermsAndConditions;
