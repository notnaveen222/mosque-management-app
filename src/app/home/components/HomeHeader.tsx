export default function HomeHeader({ amount }: { amount: number }) {
  return (
    <div className="w-full flex justify-between items-center py-12">
      <div className="flex flex-col">
        <div className="flex gap-x-0.5">
          <svg
            width="18"
            height="31"
            viewBox="0 0 18 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 8.68421L16.9347 11.9211C15.1866 11.7807 13.047 11.7105 10.5159 11.7105C5.217 11.7105 2.54932 12.1404 2.5129 13L2.73141 13.7368C2.87709 14.2982 3.14112 15.3684 3.52352 16.9474C4.41578 20.7368 4.86191 23.7719 4.86191 26.0526C4.86191 27.5088 4.31563 29.1579 3.22307 31C2.76783 26.1053 2.03945 21.8333 1.03794 18.1842C0.345979 15.5702 0 13.7895 0 12.8421C0 11.0702 0.573596 9.86842 1.72079 9.23684C2.33991 8.90351 3.77845 8.57895 6.03642 8.26316C8.74962 7.87719 10.3885 7.76316 10.953 7.92105L7.42944 4.10526L2.84067 6.42105L2.8953 4.97368C2.91351 4.53509 3.6692 3.59649 5.16237 2.15789C6.65554 0.719298 7.67527 0 8.22155 0C8.93172 0 10.0789 0.973684 11.6631 2.92105C13.6297 5.32456 14.7496 6.64035 15.0228 6.86842C15.7329 7.41228 16.7253 8.01754 18 8.68421Z"
              fill="#456EFF"
            />
          </svg>
          <div className="font-medium text-3xl">Meel</div>
        </div>
        <div className="text-neutral-500">Theiseer👋</div>
      </div>
      <div className="flex flex-col gap-y-0">
        <div className="text-blue-600 font-semibold text-3xl">₹{amount}</div>
        <div className="text-xs text-right">past 30 days</div>
      </div>
    </div>
  );
}
