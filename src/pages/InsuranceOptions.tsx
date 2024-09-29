
const InsuranceOptions = ({insurancePolicy, cancellationPolicy}) => {

  return (
    <div className="w-fullp-4">
      <h1 className="text-xl font-bold mb-4">Insurance Policy</h1>
      <div className="flex justify-between space-x-4">
      <div dangerouslySetInnerHTML={{ __html: insurancePolicy }} />
      </div>
      <h1 className="text-xl font-bold mb-4">Cancellation Policy</h1>
      <div className="flex justify-between space-x-4">
      <div dangerouslySetInnerHTML={{ __html: cancellationPolicy }} />
      </div>
    </div>
  );
};

export default InsuranceOptions;
