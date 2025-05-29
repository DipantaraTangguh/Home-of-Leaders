export const NoProgramSelected = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center px-6 py-14">
      <img
        src="/images/Illustrations/no-programme-selected.png"
        alt="Belum pilih program"
        className="w-full max-w-xs md:max-w-md"
      />
      <p className="text-[#ADB5BD] text-base md:text-lg font-medium">
        Oops! sepertinya kamu belum pilih programnya nih.
        <br />
        Yuk, pilih program yang kamu incar!
      </p>
    </div>
  );
};
