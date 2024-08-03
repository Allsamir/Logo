const SubmitButton = ({ text }: { text: string }) => {
  return (
    <div className="text-center mt-6">
      <button
        className="bg-buttonBg py-4 px-20 rounded-xl text-base text-[#fff] font-semibold"
        type="submit"
      >
        {text}
      </button>
    </div>
  );
};

export default SubmitButton;
