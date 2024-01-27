import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "../MaterialTailwind";

const QuizStarterCard = () => {
  return (
    <Card className="max-w-3xl lg:max-w-5xl px-5 pt-5 pb-10" placeholder="">
      <CardBody placeholder="">
        <div className="flex flex-col md:flex-row justify-between mb-4 items-center">
          <Typography
            variant="h5"
            color="blue-gray"
            className="mb-2 me-3"
            placeholder=""
          >
            Pro Guide Experience Survey
          </Typography>

          <div className="flex space-x-3">
            <button
              className="flex items-center gap-3 px-5 py-1 bg-[#f8f8f8] rounded-md cursor-default whitespace-nowrap"
              type="button"
            >
              <svg
                width="18"
                height="16"
                viewBox="0 0 18 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.00016 15.9166C8.01405 15.9166 7.09405 15.7291 6.24016 15.3541C5.38572 14.9791 4.63905 14.4721 4.00016 13.8333C3.36127 13.1944 2.85433 12.4477 2.47933 11.5933C2.10433 10.7394 1.91683 9.81936 1.91683 8.83325C1.91683 7.84714 2.10433 6.92714 2.47933 6.07325C2.85433 5.21881 3.36127 4.47214 4.00016 3.83325C4.63905 3.19436 5.38572 2.68742 6.24016 2.31242C7.09405 1.93742 8.01405 1.74992 9.00016 1.74992C9.98627 1.74992 10.9063 1.93742 11.7602 2.31242C12.6146 2.68742 13.3613 3.19436 14.0002 3.83325C14.6391 4.47214 15.146 5.21881 15.521 6.07325C15.896 6.92714 16.0835 7.84714 16.0835 8.83325C16.0835 9.81936 15.896 10.7394 15.521 11.5933C15.146 12.4477 14.6391 13.1944 14.0002 13.8333C13.3613 14.4721 12.6146 14.9791 11.7602 15.3541C10.9063 15.7291 9.98627 15.9166 9.00016 15.9166ZM8.37516 5.29159V8.77075C8.37516 8.86797 8.39239 8.96159 8.42683 9.05159C8.46183 9.14214 8.521 9.22909 8.60433 9.31242L11.0627 11.7708C11.1738 11.8819 11.3127 11.9374 11.4793 11.9374C11.646 11.9374 11.7918 11.8749 11.9168 11.7499C12.0418 11.6249 12.1043 11.4791 12.1043 11.3124C12.1043 11.1458 12.0418 10.9999 11.9168 10.8749L9.62516 8.58325V5.27075C9.62516 5.10409 9.56627 4.96159 9.4485 4.84325C9.33016 4.72547 9.18072 4.66659 9.00016 4.66659C8.81961 4.66659 8.67044 4.72547 8.55266 4.84325C8.43433 4.96159 8.37516 5.11103 8.37516 5.29159ZM1.87516 4.08325C1.75016 4.20825 1.60794 4.27075 1.4485 4.27075C1.2885 4.27075 1.146 4.20131 1.021 4.06242C0.895996 3.95131 0.833496 3.80881 0.833496 3.63492C0.833496 3.46159 0.895996 3.31242 1.021 3.18742L3.37516 0.833252C3.48627 0.708252 3.62516 0.645752 3.79183 0.645752C3.9585 0.645752 4.10433 0.715196 4.22933 0.854085C4.35433 0.965196 4.41683 1.1077 4.41683 1.28159C4.41683 1.45492 4.35433 1.60409 4.22933 1.72909L1.87516 4.08325ZM16.1043 4.06242L13.7502 1.70825C13.6252 1.58325 13.5627 1.44075 13.5627 1.28075C13.5627 1.12131 13.6321 0.979085 13.771 0.854085C13.8821 0.729085 14.0246 0.666585 14.1985 0.666585C14.3718 0.666585 14.521 0.729085 14.646 0.854085L17.0002 3.20825C17.1252 3.31936 17.1877 3.45825 17.1877 3.62492C17.1877 3.79159 17.1182 3.93742 16.9793 4.06242C16.8682 4.18742 16.7257 4.24992 16.5518 4.24992C16.3785 4.24992 16.2293 4.18742 16.1043 4.06242ZM9.00016 14.6666C10.6252 14.6666 12.0035 14.1005 13.1352 12.9683C14.2674 11.8366 14.8335 10.4583 14.8335 8.83325C14.8335 7.20825 14.2674 5.82964 13.1352 4.69742C12.0035 3.56575 10.6252 2.99992 9.00016 2.99992C7.37516 2.99992 5.99683 3.56575 4.86516 4.69742C3.73294 5.82964 3.16683 7.20825 3.16683 8.83325C3.16683 10.4583 3.73294 11.8366 4.86516 12.9683C5.99683 14.1005 7.37516 14.6666 9.00016 14.6666Z"
                  fill="#444444"
                ></path>
              </svg>
              ~15 min
            </button>

            <button
              data-ripple-light="true"
              data-dialog-target="dialog"
              className="flex items-center gap-3 px-8 py-1 whitespace-nowrapselect-none rounded-lg bg-gradient-to-tr from-blue-800 to-blue-700 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-900/10 transition-all hover:shadow-lg hover:shadow-blue-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.62516 6.02075V9.97908C6.62516 10.2846 6.75711 10.5069 7.021 10.6458C7.28488 10.7846 7.54183 10.7708 7.79183 10.6041L10.896 8.64575C11.1321 8.49297 11.2502 8.2777 11.2502 7.99992C11.2502 7.72214 11.1321 7.50686 10.896 7.35409L7.79183 5.39575C7.54183 5.22908 7.28488 5.2152 7.021 5.35408C6.75711 5.49297 6.62516 5.7152 6.62516 6.02075ZM8.50016 15.9166C7.40294 15.9166 6.37183 15.7083 5.40683 15.2916C4.44127 14.8749 3.60433 14.3124 2.896 13.6041C2.18766 12.8958 1.62516 12.0588 1.2085 11.0933C0.791829 10.1283 0.583496 9.09714 0.583496 7.99992C0.583496 6.9027 0.791829 5.87131 1.2085 4.90575C1.62516 3.94075 2.18766 3.10409 2.896 2.39575C3.60433 1.68742 4.44127 1.12492 5.40683 0.708252C6.37183 0.291585 7.40294 0.083252 8.50016 0.083252C9.59738 0.083252 10.6288 0.291585 11.5943 0.708252C12.5593 1.12492 13.396 1.68742 14.1043 2.39575C14.8127 3.10409 15.3752 3.94075 15.7918 4.90575C16.2085 5.87131 16.4168 6.9027 16.4168 7.99992C16.4168 9.09714 16.2085 10.1283 15.7918 11.0933C15.3752 12.0588 14.8127 12.8958 14.1043 13.6041C13.396 14.3124 12.5593 14.8749 11.5943 15.2916C10.6288 15.7083 9.59738 15.9166 8.50016 15.9166ZM8.50016 14.6666C10.3474 14.6666 11.9204 14.0174 13.2193 12.7191C14.5177 11.4202 15.1668 9.84714 15.1668 7.99992C15.1668 6.1527 14.5177 4.57964 13.2193 3.28075C11.9204 1.98242 10.3474 1.33325 8.50016 1.33325C6.65294 1.33325 5.08016 1.98242 3.78183 3.28075C2.48294 4.57964 1.8335 6.1527 1.8335 7.99992C1.8335 9.84714 2.48294 11.4202 3.78183 12.7191C5.08016 14.0174 6.65294 14.6666 8.50016 14.6666Z"
                  fill="white"
                ></path>
              </svg>
              Start Quiz
            </button>
            <div
              data-dialog-backdrop="dialog"
              data-dialog-backdrop-close="true"
              className="pointer-events-none fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 opacity-0 backdrop-blur-sm transition-opacity duration-300"
            >
              <div
                data-dialog="dialog"
                className="relative m-4 w-2/5 min-w-[40%] max-w-[40%] rounded-lg bg-white font-sans text-base font-light leading-relaxed text-blue-gray-500 antialiased shadow-2xl"
              >
                <div className="flex items-center p-4 font-sans text-2xl antialiased font-bold leading-snug shrink-0 text-blue-gray-900">
                  Pro Guide Experience Survey.
                </div>
                <div className="relative p-4 font-sans text-base antialiased font-light leading-relaxed border-t border-b border-t-blue-gray-100 border-b-blue-gray-100 text-blue-gray-500">
                  Complete Your Pro Guide Experience Survey to declare your
                  seniority level, past roles, and role preferences to let us
                  suggest you for the right jobs . Click &apos;Start
                  Survey&apos; to get started.
                </div>
                <div className="flex flex-wrap items-center justify-end p-4 shrink-0 text-blue-gray-500">
                  <button
                    className="flex items-center me-2 gap-3 px-5 py-3 bg-[#f8f8f8] rounded-md cursor-default whitespace-nowrap"
                    type="button"
                  >
                    <svg
                      width="18"
                      height="16"
                      viewBox="0 0 18 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.00016 15.9166C8.01405 15.9166 7.09405 15.7291 6.24016 15.3541C5.38572 14.9791 4.63905 14.4721 4.00016 13.8333C3.36127 13.1944 2.85433 12.4477 2.47933 11.5933C2.10433 10.7394 1.91683 9.81936 1.91683 8.83325C1.91683 7.84714 2.10433 6.92714 2.47933 6.07325C2.85433 5.21881 3.36127 4.47214 4.00016 3.83325C4.63905 3.19436 5.38572 2.68742 6.24016 2.31242C7.09405 1.93742 8.01405 1.74992 9.00016 1.74992C9.98627 1.74992 10.9063 1.93742 11.7602 2.31242C12.6146 2.68742 13.3613 3.19436 14.0002 3.83325C14.6391 4.47214 15.146 5.21881 15.521 6.07325C15.896 6.92714 16.0835 7.84714 16.0835 8.83325C16.0835 9.81936 15.896 10.7394 15.521 11.5933C15.146 12.4477 14.6391 13.1944 14.0002 13.8333C13.3613 14.4721 12.6146 14.9791 11.7602 15.3541C10.9063 15.7291 9.98627 15.9166 9.00016 15.9166ZM8.37516 5.29159V8.77075C8.37516 8.86797 8.39239 8.96159 8.42683 9.05159C8.46183 9.14214 8.521 9.22909 8.60433 9.31242L11.0627 11.7708C11.1738 11.8819 11.3127 11.9374 11.4793 11.9374C11.646 11.9374 11.7918 11.8749 11.9168 11.7499C12.0418 11.6249 12.1043 11.4791 12.1043 11.3124C12.1043 11.1458 12.0418 10.9999 11.9168 10.8749L9.62516 8.58325V5.27075C9.62516 5.10409 9.56627 4.96159 9.4485 4.84325C9.33016 4.72547 9.18072 4.66659 9.00016 4.66659C8.81961 4.66659 8.67044 4.72547 8.55266 4.84325C8.43433 4.96159 8.37516 5.11103 8.37516 5.29159ZM1.87516 4.08325C1.75016 4.20825 1.60794 4.27075 1.4485 4.27075C1.2885 4.27075 1.146 4.20131 1.021 4.06242C0.895996 3.95131 0.833496 3.80881 0.833496 3.63492C0.833496 3.46159 0.895996 3.31242 1.021 3.18742L3.37516 0.833252C3.48627 0.708252 3.62516 0.645752 3.79183 0.645752C3.9585 0.645752 4.10433 0.715196 4.22933 0.854085C4.35433 0.965196 4.41683 1.1077 4.41683 1.28159C4.41683 1.45492 4.35433 1.60409 4.22933 1.72909L1.87516 4.08325ZM16.1043 4.06242L13.7502 1.70825C13.6252 1.58325 13.5627 1.44075 13.5627 1.28075C13.5627 1.12131 13.6321 0.979085 13.771 0.854085C13.8821 0.729085 14.0246 0.666585 14.1985 0.666585C14.3718 0.666585 14.521 0.729085 14.646 0.854085L17.0002 3.20825C17.1252 3.31936 17.1877 3.45825 17.1877 3.62492C17.1877 3.79159 17.1182 3.93742 16.9793 4.06242C16.8682 4.18742 16.7257 4.24992 16.5518 4.24992C16.3785 4.24992 16.2293 4.18742 16.1043 4.06242ZM9.00016 14.6666C10.6252 14.6666 12.0035 14.1005 13.1352 12.9683C14.2674 11.8366 14.8335 10.4583 14.8335 8.83325C14.8335 7.20825 14.2674 5.82964 13.1352 4.69742C12.0035 3.56575 10.6252 2.99992 9.00016 2.99992C7.37516 2.99992 5.99683 3.56575 4.86516 4.69742C3.73294 5.82964 3.16683 7.20825 3.16683 8.83325C3.16683 10.4583 3.73294 11.8366 4.86516 12.9683C5.99683 14.1005 7.37516 14.6666 9.00016 14.6666Z"
                        fill="#444444"
                      ></path>
                    </svg>
                    Estimated Time 15 min
                  </button>
                  <button
                    data-ripple-light="true"
                    data-dialog-target="dialog"
                    className="flex items-center gap-3 px-8 py-2 whitespace-nowrapselect-none rounded-lg bg-gradient-to-tr from-blue-800 to-blue-700 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-900/10 transition-all hover:shadow-lg hover:shadow-blue-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  >
                    <svg
                      viewBox="0 0 1024 1024"
                      focusable="false"
                      data-icon="caret-right"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z"></path>
                    </svg>
                    Start Quiz
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ul className=" list-disc">
          <li className="mt-2">
            This is a multiple-choice survey to understand your work style and
            role in previous projects.
          </li>
          <li className="mt-2">
            The result of this survey will help us match you with the right
            jobs.
          </li>
          <li className="mt-2">
            It does not require any prior preparation and does not result in
            failure to move to the next step.
          </li>
        </ul>
      </CardBody>
    </Card>
  );
};

export default QuizStarterCard;
