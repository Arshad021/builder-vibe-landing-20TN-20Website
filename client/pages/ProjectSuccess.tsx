import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const StrategyIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.33673 7.18716L1.51923 6.15782C1.43101 6.11127 1.36129 6.0441 1.31007 5.95633C1.25895 5.86866 1.2334 5.77277 1.2334 5.66866V3.58466C1.2334 3.48055 1.25895 3.38466 1.31007 3.29699C1.36129 3.20921 1.43101 3.14205 1.51923 3.09549L3.33673 2.07016C3.42151 2.02038 3.51457 1.99549 3.6159 1.99549C3.71723 1.99549 3.81206 2.02038 3.9004 2.07016L5.7219 3.09549C5.80745 3.14205 5.87651 3.20921 5.92907 3.29699C5.98151 3.38466 6.00773 3.48055 6.00773 3.58466V5.66866C6.00773 5.77277 5.98151 5.86866 5.92907 5.95633C5.87651 6.0441 5.80745 6.11127 5.7219 6.15782L3.9004 7.18716C3.81562 7.23694 3.72256 7.26183 3.62123 7.26183C3.5199 7.26183 3.42507 7.23694 3.33673 7.18716ZM3.61857 6.07949L4.90006 5.34483V3.90849L3.61857 3.17366L2.34107 3.90849V5.34483L3.61857 6.07949ZM10.9367 7.49799V6.22449L12.8689 7.35133C13.0486 7.45755 13.1881 7.59594 13.2876 7.76649C13.387 7.93705 13.4367 8.12183 13.4367 8.32083V11.7585C13.4367 11.9549 13.387 12.139 13.2876 12.3108C13.1881 12.4827 13.0486 12.6205 12.8689 12.7242L9.95256 14.4303C9.77212 14.5324 9.58068 14.5835 9.37823 14.5835C9.17568 14.5835 8.98601 14.5324 8.80923 14.4303L5.8929 12.7242C5.71323 12.6205 5.57434 12.4827 5.47623 12.3108C5.37812 12.139 5.32907 11.9549 5.32907 11.7585V8.32083C5.32907 8.12183 5.37812 7.93705 5.47623 7.76649C5.57434 7.59594 5.71323 7.45755 5.8929 7.35133L7.82906 6.22449V7.49799L6.43673 8.31766V11.7703L9.3809 13.476L12.3291 11.7703V8.31766L10.9367 7.49799ZM9.93673 5.00382V8.45199C9.93673 8.60699 9.88256 8.73771 9.77423 8.84416C9.66579 8.9506 9.53368 9.00383 9.3779 9.00383C9.22212 9.00383 9.09173 8.9506 8.98673 8.84416C8.88162 8.73771 8.82906 8.60699 8.82906 8.45199V1.80133C8.82906 1.64099 8.88362 1.5056 8.99273 1.39516C9.10184 1.28471 9.23656 1.22949 9.3969 1.22949H13.7259C13.9469 1.22949 14.1126 1.33099 14.2231 1.53399C14.3336 1.7371 14.3253 1.9326 14.1982 2.12049L13.7414 2.79549C13.6778 2.89105 13.6461 2.99777 13.6461 3.11566C13.6461 3.23366 13.6778 3.34238 13.7414 3.44183L14.1982 4.11283C14.3253 4.30338 14.3336 4.49955 14.2231 4.70133C14.1126 4.90299 13.9469 5.00382 13.7259 5.00382H9.93673Z"
      fill="#0C0801"
    />
  </svg>
);

const SelfImprovementIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.34989 13.3772C4.04678 13.3772 3.79705 13.279 3.60072 13.0824C3.40428 12.886 3.30605 12.6361 3.30605 12.3329C3.30605 12.1226 3.35872 11.9218 3.46405 11.7306C3.56939 11.5392 3.72078 11.4033 3.91822 11.3229L6.75605 10.2016V8.00123C6.09205 8.79101 5.42217 9.40684 4.74639 9.84873C4.07072 10.2905 3.32055 10.5507 2.49589 10.6294C2.35089 10.6543 2.22467 10.6116 2.11722 10.5012C2.00978 10.3909 1.95605 10.2579 1.95605 10.1022C1.95605 9.95623 2.00794 9.82912 2.11172 9.7209C2.21539 9.61256 2.34055 9.54595 2.48722 9.52106C3.13 9.44295 3.72005 9.23795 4.25739 8.90606C4.79461 8.57429 5.28017 8.1304 5.71406 7.5744L6.68072 6.48706C6.79561 6.3484 6.931 6.23395 7.08689 6.14373C7.24278 6.05351 7.41378 6.0084 7.59989 6.0084H8.39989C8.586 6.0084 8.75978 6.05418 8.92122 6.14573C9.08267 6.23729 9.22083 6.3524 9.33572 6.49107L10.3024 7.58223C10.7585 8.11612 11.2496 8.55318 11.7757 8.8934C12.3019 9.23373 12.8809 9.44295 13.5126 9.52106C13.6592 9.54595 13.7844 9.61256 13.8881 9.7209C13.9918 9.82912 14.0437 9.95623 14.0437 10.1022C14.0437 10.2579 13.99 10.3909 13.8826 10.5012C13.7751 10.6116 13.6489 10.6543 13.5039 10.6294C12.6792 10.5507 11.9291 10.2905 11.2534 9.84873C10.5776 9.40684 9.90772 8.79101 9.24372 8.00123V10.2016L12.0866 11.3229C12.2807 11.4033 12.4304 11.5391 12.5357 11.7302C12.6411 11.9215 12.6937 12.1221 12.6937 12.3322C12.6937 12.6352 12.5955 12.8851 12.3991 13.0819C12.2027 13.2788 11.953 13.3772 11.6499 13.3772H6.59989V13.1501C6.59989 12.8532 6.68944 12.6178 6.86856 12.4441C7.04767 12.2703 7.28033 12.1834 7.56656 12.1834H9.78322C9.87211 12.1834 9.94989 12.1501 10.0166 12.0834C10.0832 12.0167 10.1166 11.939 10.1166 11.8501C10.1166 11.7612 10.0832 11.6834 10.0166 11.6167C9.94989 11.5501 9.87211 11.5167 9.78322 11.5167H7.56656C7.08033 11.5167 6.69211 11.6667 6.40189 11.9667C6.11167 12.2667 5.96656 12.6612 5.96656 13.1501V13.3772H4.34989ZM8.00089 5.0084C7.65355 5.0084 7.3565 4.88479 7.10972 4.63756C6.86283 4.39045 6.73939 4.09257 6.73939 3.7439C6.73939 3.39634 6.8625 3.0994 7.10872 2.85306C7.35494 2.60662 7.65167 2.4834 7.99889 2.4834C8.34622 2.4834 8.64328 2.60679 8.89005 2.85357C9.13694 3.10034 9.26039 3.39773 9.26039 3.74573C9.26039 4.09384 9.13728 4.39129 8.89105 4.63807C8.64483 4.88495 8.34811 5.0084 8.00089 5.0084Z"
      fill="#0C0801"
    />
  </svg>
);

const AlignStartIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.80123 2.86899C1.6409 2.86899 1.50618 2.81416 1.39707 2.70449C1.28795 2.59483 1.2334 2.45944 1.2334 2.29832C1.2334 2.13721 1.28795 2.00216 1.39707 1.89316C1.50618 1.78405 1.6409 1.72949 1.80123 1.72949H14.1982C14.3586 1.72949 14.494 1.78499 14.6044 1.89599C14.7148 2.00699 14.7701 2.14305 14.7701 2.30416C14.7701 2.46527 14.7148 2.59971 14.6044 2.70749C14.494 2.81516 14.3586 2.86899 14.1982 2.86899H1.80123ZM5.33307 7.06766C5.17284 7.06766 5.03818 7.01305 4.92907 6.90383C4.81984 6.79471 4.76523 6.66005 4.76523 6.49983V5.83316C4.76523 5.67294 4.81984 5.53827 4.92907 5.42916C5.03818 5.31994 5.17284 5.26533 5.33307 5.26533H10.6664C10.8266 5.26533 10.9613 5.31994 11.0704 5.42916C11.1796 5.53827 11.2342 5.67294 11.2342 5.83316V6.49983C11.2342 6.66005 11.1796 6.79471 11.0704 6.90383C10.9613 7.01305 10.8266 7.06766 10.6664 7.06766H5.33307ZM5.33307 11.0677C5.17284 11.0677 5.03818 11.013 4.92907 10.9038C4.81984 10.7947 4.76523 10.66 4.76523 10.4998V9.83316C4.76523 9.67294 4.81984 9.53827 4.92907 9.42916C5.03818 9.31994 5.17284 9.26533 5.33307 9.26533H10.6664C10.8266 9.26533 10.9613 9.31994 11.0704 9.42916C11.1796 9.53827 11.2342 9.67294 11.2342 9.83316V10.4998C11.2342 10.66 11.1796 10.7947 11.0704 10.9038C10.9613 11.013 10.8266 11.0677 10.6664 11.0677H5.33307Z"
      fill="#0C0801"
    />
  </svg>
);

const FormatClearIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.56154 7.74658L7.18254 6.38441L7.58254 5.45108H6.61588C6.35087 5.47763 6.16288 5.4153 6.05188 5.26407C5.94088 5.11285 5.89865 4.93941 5.92521 4.74374C5.90399 4.50296 5.97093 4.27974 6.12604 4.07408C6.28104 3.8683 6.5176 3.76541 6.83571 3.76541H12.4999C12.7518 3.76541 12.9649 3.85263 13.1394 4.02708C13.3138 4.20152 13.401 4.41469 13.401 4.66658C13.401 4.91846 13.3138 5.13163 13.1394 5.30608C12.9649 5.48052 12.7518 5.56774 12.4999 5.56774H9.49221L8.56154 7.74658ZM13.0992 15.2326L7.69221 9.80891L6.44621 12.7304C6.37165 12.8965 6.26026 13.0274 6.11204 13.1229C5.96382 13.2185 5.79976 13.2662 5.61988 13.2662C5.29321 13.2662 5.0406 13.1319 4.86204 12.8632C4.68338 12.5947 4.65915 12.3096 4.78938 12.0079L6.30538 8.43474L1.26721 3.39657C1.16199 3.29402 1.10938 3.17341 1.10938 3.03474C1.10938 2.89608 1.16199 2.77408 1.26721 2.66874C1.37254 2.56341 1.49454 2.51074 1.63321 2.51074C1.77188 2.51074 1.89388 2.56341 1.99921 2.66874L13.831 14.5006C13.9364 14.6059 13.989 14.7279 13.989 14.8666C13.989 15.0052 13.9364 15.1272 13.831 15.2326C13.7257 15.3378 13.6037 15.3904 13.465 15.3904C13.3264 15.3904 13.2044 15.3378 13.0992 15.2326Z"
      fill="#0C0801"
    />
  </svg>
);

const PlannerReviewIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.4804 11.3895L5.25573 2.88402C5.28062 2.75391 5.34573 2.64452 5.45106 2.55585C5.5564 2.46718 5.67545 2.42285 5.80823 2.42285H6.05756C6.18778 2.42285 6.30617 2.46652 6.41273 2.55385C6.5194 2.64118 6.58517 2.74991 6.61006 2.88002L8.7329 12.7555L10.0431 6.99669C10.0653 6.86657 10.1325 6.75785 10.2447 6.67052C10.3568 6.58318 10.478 6.53952 10.6082 6.53952H10.8909C11.0211 6.53952 11.1395 6.58041 11.2461 6.66218C11.3527 6.74396 11.4241 6.84991 11.4601 6.98002L12.5354 11.3895H14.1829C14.3296 11.3895 14.4541 11.4407 14.5564 11.5432C14.6588 11.6455 14.7101 11.77 14.7101 11.9167C14.7101 12.0634 14.6588 12.1906 14.5564 12.2985C14.4541 12.4065 14.3296 12.4605 14.1829 12.4605H12.1362C11.998 12.4605 11.8778 12.4197 11.7757 12.3382C11.6735 12.2567 11.61 12.1525 11.5851 12.0254L10.7662 8.75402L9.36006 14.7994C9.33517 14.9295 9.27495 15.0305 9.1794 15.1025C9.08395 15.1745 8.97112 15.2105 8.8409 15.2105H8.59156C8.46134 15.2105 8.34851 15.1717 8.25306 15.0942C8.15751 15.0166 8.09862 14.9128 8.0764 14.7827L5.94956 4.94852L4.46406 12.0087C4.43917 12.1469 4.37562 12.2567 4.2734 12.3382C4.17128 12.4197 4.05112 12.4605 3.9129 12.4605H1.81623C1.66956 12.4605 1.54506 12.4065 1.44273 12.2985C1.34028 12.1906 1.28906 12.0634 1.28906 11.9167C1.28906 11.77 1.34306 11.6455 1.45106 11.5432C1.55895 11.4407 1.68623 11.3895 1.8329 11.3895H3.4804Z"
      fill="#0C0801"
    />
  </svg>
);

const ChevronRightIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.38672 6.67285C9.48754 6.67285 9.56452 6.70326 9.64258 6.78125L14.5869 11.7256C14.6408 11.7795 14.666 11.8215 14.6777 11.8496V11.8506C14.6925 11.8861 14.7012 11.9259 14.7012 11.9746C14.7012 12.0233 14.6925 12.0631 14.6777 12.0986V12.0996C14.666 12.1277 14.6408 12.1697 14.5869 12.2236L9.61816 17.1924C9.54039 17.2702 9.47325 17.292 9.39258 17.2891C9.29855 17.2856 9.21769 17.2537 9.13184 17.168C9.05371 17.0898 9.02246 17.013 9.02246 16.9121C9.02246 16.8112 9.05371 16.7344 9.13184 16.6562L13.8135 11.9746L9.10645 7.26758C9.02878 7.18988 9.00684 7.12357 9.00977 7.04297C9.01321 6.9487 9.04578 6.86731 9.13184 6.78125C9.20976 6.70344 9.28613 6.67293 9.38672 6.67285Z"
      fill="currentColor"
      stroke="currentColor"
    />
  </svg>
);

const StrategyIconLarge = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 49 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.3442 21.5625L4.89168 18.4745C4.62701 18.3348 4.41785 18.1333 4.26418 17.87C4.11085 17.607 4.03418 17.3193 4.03418 17.007V10.755C4.03418 10.4426 4.11085 10.155 4.26418 9.89195C4.41785 9.62862 4.62701 9.42712 4.89168 9.28745L10.3442 6.21145C10.5985 6.06212 10.8777 5.98745 11.1817 5.98745C11.4857 5.98745 11.7702 6.06212 12.0352 6.21145L17.4997 9.28745C17.7563 9.42712 17.9635 9.62862 18.1212 9.89195C18.2785 10.155 18.3572 10.4426 18.3572 10.755V17.007C18.3572 17.3193 18.2785 17.607 18.1212 17.87C17.9635 18.1333 17.7563 18.3348 17.4997 18.4745L12.0352 21.5625C11.7808 21.7118 11.5017 21.7864 11.1977 21.7864C10.8937 21.7864 10.6092 21.7118 10.3442 21.5625ZM11.1897 18.2395L15.0342 16.0355V11.7265L11.1897 9.52195L7.35718 11.7265V16.0355L11.1897 18.2395ZM33.1442 22.495V18.6744L38.9407 22.055C39.4797 22.3736 39.8983 22.7888 40.1967 23.3005C40.495 23.8121 40.6442 24.3665 40.6442 24.9635V35.2765C40.6442 35.8658 40.495 36.4181 40.1967 36.9335C39.8983 37.4491 39.4797 37.8624 38.9407 38.1735L30.1917 43.292C29.6503 43.5983 29.076 43.7514 28.4687 43.7514C27.861 43.7514 27.292 43.5983 26.7617 43.292L18.0127 38.1735C17.4737 37.8624 17.057 37.4491 16.7627 36.9335C16.4683 36.4181 16.3212 35.8658 16.3212 35.2765V24.9635C16.3212 24.3665 16.4683 23.8121 16.7627 23.3005C17.057 22.7888 17.4737 22.3736 18.0127 22.055L23.8212 18.6744V22.495L19.6442 24.954V35.3119L28.4767 40.429L37.3212 35.3119V24.954L33.1442 22.495ZM30.1442 15.0125V25.357C30.1442 25.822 29.9817 26.2141 29.6567 26.5335C29.3313 26.8528 28.935 27.0124 28.4677 27.0124C28.0003 27.0124 27.6092 26.8528 27.2942 26.5335C26.9788 26.2141 26.8212 25.822 26.8212 25.357V5.40495C26.8212 4.92395 26.9848 4.51778 27.3122 4.18645C27.6395 3.85512 28.0437 3.68945 28.5247 3.68945H41.5117C42.1747 3.68945 42.6718 3.99395 43.0032 4.60295C43.3348 5.21228 43.31 5.79878 42.9287 6.36245L41.5582 8.38745C41.3675 8.67412 41.2722 8.99429 41.2722 9.34795C41.2722 9.70195 41.3675 10.0281 41.5582 10.3265L42.9287 12.3395C43.31 12.9111 43.3348 13.4996 43.0032 14.105C42.6718 14.71 42.1747 15.0125 41.5117 15.0125H30.1442Z"
      fill="white"
    />
  </svg>
);

const TeamDashboardIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.10767 42.2994C8.17101 42.2994 7.36901 41.9659 6.70167 41.2989C6.03467 40.6316 5.70117 39.8296 5.70117 38.8929V9.10795C5.70117 8.16795 6.03467 7.36328 6.70167 6.69395C7.36901 6.02428 8.17101 5.68945 9.10767 5.68945H38.8927C39.8327 5.68945 40.6373 6.02428 41.3067 6.69395C41.9763 7.36328 42.3112 8.16795 42.3112 9.10795V38.8929C42.3112 39.8296 41.9763 40.6316 41.3067 41.2989C40.6373 41.9659 39.8327 42.2994 38.8927 42.2994H9.10767ZM20.5002 38.8929V25.5004H9.10767V38.8929H20.5002ZM23.5002 38.8929H38.8927V25.5004H23.5002V38.8929ZM9.10767 22.5005H38.8927V9.10795H9.10767V22.5005Z"
      fill="white"
    />
  </svg>
);

const SelfImprovementIconLarge = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 49 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.7157 40.1317C12.8063 40.1317 12.0572 39.8369 11.4682 39.2472C10.8788 38.6579 10.5842 37.9084 10.5842 36.9987C10.5842 36.3677 10.7422 35.7654 11.0582 35.1917C11.3742 34.6177 11.8283 34.21 12.4207 33.9687L20.9342 30.6047V24.0037C18.9422 26.373 16.9325 28.2205 14.9052 29.5462C12.8782 30.8715 10.6277 31.6522 8.15368 31.8882C7.71868 31.9629 7.34001 31.8347 7.01768 31.5037C6.69535 31.1727 6.53418 30.7737 6.53418 30.3067C6.53418 29.8687 6.68985 29.4874 7.00118 29.1627C7.31218 28.8377 7.68768 28.6379 8.12768 28.5632C10.056 28.3289 11.8262 27.7139 13.4382 26.7182C15.0498 25.7229 16.5065 24.3912 17.8082 22.7232L20.7082 19.4612C21.0528 19.0452 21.459 18.7019 21.9267 18.4312C22.3943 18.1605 22.9073 18.0252 23.4657 18.0252H25.8657C26.424 18.0252 26.9453 18.1625 27.4297 18.4372C27.914 18.7119 28.3285 19.0572 28.6732 19.4732L31.5732 22.7467C32.9415 24.3484 34.4148 25.6595 35.9932 26.6802C37.5718 27.7012 39.3087 28.3289 41.2037 28.5632C41.6437 28.6379 42.0192 28.8377 42.3302 29.1627C42.6415 29.4874 42.7972 29.8687 42.7972 30.3067C42.7972 30.7737 42.636 31.1727 42.3137 31.5037C41.9913 31.8347 41.6127 31.9629 41.1777 31.8882C38.7037 31.6522 36.4532 30.8715 34.4262 29.5462C32.3988 28.2205 30.3892 26.373 28.3972 24.0037V30.6047L36.9257 33.9687C37.508 34.21 37.9572 34.6174 38.2732 35.1907C38.5892 35.7644 38.7472 36.3664 38.7472 36.9967C38.7472 37.9057 38.4525 38.6554 37.8632 39.2457C37.2742 39.8364 36.525 40.1317 35.6157 40.1317H20.4657V39.4502C20.4657 38.5595 20.7343 37.8535 21.2717 37.3322C21.809 36.8109 22.507 36.5502 23.3657 36.5502H30.0157C30.2823 36.5502 30.5157 36.4502 30.7157 36.2502C30.9157 36.0502 31.0157 35.8169 31.0157 35.5502C31.0157 35.2835 30.9157 35.0502 30.7157 34.8502C30.5157 34.6502 30.2823 34.5502 30.0157 34.5502H23.3657C21.907 34.5502 20.7423 35.0002 19.8717 35.9002C19.001 36.8002 18.5657 37.9835 18.5657 39.4502V40.1317H13.7157ZM24.6687 15.0252C23.6267 15.0252 22.7355 14.6544 21.9952 13.9127C21.2545 13.1714 20.8842 12.2777 20.8842 11.2317C20.8842 10.189 21.2535 9.29819 21.9922 8.55919C22.7308 7.81986 23.621 7.4502 24.6627 7.4502C25.7047 7.4502 26.5958 7.82036 27.3362 8.5607C28.0768 9.30103 28.4472 10.1932 28.4472 11.2372C28.4472 12.2815 28.0778 13.1739 27.3392 13.9142C26.6005 14.6549 25.7103 15.0252 24.6687 15.0252Z"
      fill="white"
    />
  </svg>
);

const CASE_STUDIES = [
  {
    title: "AlEktiar Portal Case Study",
    url: "https://cdn.builder.io/o/assets%2F7bb87cd5bb024b629afd2d6c4ad7eecb%2F2b089119417e4e4ba068ad1dcbfc83c5?alt=media&token=fdf54650-d8f4-479b-90e0-6a7e8fea6c62&apiKey=7bb87cd5bb024b629afd2d6c4ad7eecb",
  },
  {
    title: "Buy Geely Case Study",
    url: "https://cdn.builder.io/o/assets%2F7bb87cd5bb024b629afd2d6c4ad7eecb%2Fc9054eb80e0644af9c4e68bb6b4d8487?alt=media&token=cdf44fcf-9906-4ea9-8245-fc1c51011b11&apiKey=7bb87cd5bb024b629afd2d6c4ad7eecb",
  },
  {
    title: "Geely KSA Centralized Leads Dashboard Case Study",
    url: "https://cdn.builder.io/o/assets%2F7bb87cd5bb024b629afd2d6c4ad7eecb%2F3298ce12272344938a2f54c623a115b8?alt=media&token=baf3a83c-4ad0-45a6-9950-6d12039c0eeb&apiKey=7bb87cd5bb024b629afd2d6c4ad7eecb",
  },
  {
    title: "Hyudnai Click to Buy Case Study",
    url: "https://cdn.builder.io/o/assets%2F7bb87cd5bb024b629afd2d6c4ad7eecb%2Fad22c08847fe46f597c3276cf8daab55?alt=media&token=6d615fc2-0023-45fc-a596-5b7bcf0bf694&apiKey=7bb87cd5bb024b629afd2d6c4ad7eecb",
  },
  {
    title: "Renault Wallan – Digital Performance Dashboard Case Study",
    url: "https://cdn.builder.io/o/assets%2F7bb87cd5bb024b629afd2d6c4ad7eecb%2F08293aee31f348faacc1144b176f60a2?alt=media&token=eebb2e74-5614-469f-8712-26a3a5af97cb&apiKey=7bb87cd5bb024b629afd2d6c4ad7eecb",
  },
];

export default function ProjectSuccess() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center min-h-[369px] px-16 py-28 bg-gradient-to-b from-black/50 to-black/50"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-[1280px] w-full">
          <div className="max-w-[768px] space-y-6">
            <h1 className="text-white font-alata text-7xl font-normal leading-[120%] tracking-[-0.72px]">
              Achieve Project Success
            </h1>
            <p className="text-white font-montserrat text-lg font-normal leading-[150%]">
              Unlock your potential with our tailored strategies for successful
              project execution and digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Empowering Projects Section */}
      <section className="py-28 px-16 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex items-center gap-20">
            <div className="flex-1 space-y-8">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="text-[#0C0801] font-montserrat text-base font-semibold leading-[150%]">
                    Success
                  </div>
                  <div className="space-y-6">
                    <h2 className="text-[#0C0801] font-alata text-5xl font-normal leading-[120%] tracking-[-0.52px]">
                      Empowering Projects for Lasting Success
                    </h2>
                    <p className="text-[#0C0801] font-montserrat text-lg font-normal leading-[150%]">
                      At TecNext, we believe that successful projects are built
                      on a foundation of clear communication and strategic
                      planning. Our tailored approach ensures that every project
                      aligns with your business goals and delivers measurable
                      results.
                    </p>
                  </div>
                </div>
                <div className="space-y-4 py-2">
                  <div className="flex items-center gap-4">
                    <StrategyIcon />
                    <div className="flex-1 text-[#0C0801] font-montserrat text-base font-normal leading-[150%]">
                      Strategic planning for optimal project outcomes.
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <StrategyIcon />
                    <div className="flex-1 text-[#0C0801] font-montserrat text-base font-normal leading-[150%]">
                      Collaborative approach to enhance team effectiveness.
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <SelfImprovementIcon />
                    <div className="flex-1 text-[#0C0801] font-montserrat text-base font-normal leading-[150%]">
                      Continuous improvement for sustained project success.
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <Button
                  variant="outline"
                  className="rounded-full border-[rgba(12,8,1,0.15)] text-[#0C0801] hover:bg-gray-50"
                >
                  Learn More
                </Button>
                <Button
                  variant="link"
                  className="text-[#0C0801] p-0 h-auto font-medium hover:no-underline group"
                  asChild
                >
                  <Link to="/contact" className="flex items-center gap-2">
                    Contact
                    <ChevronRightIcon className="w-6 h-6" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex-1">
              <img
                src="https://images.pexels.com/photos/7792818/pexels-photo-7792818.jpeg"
                alt="Team collaborating on project plan during a meeting"
                className="w-full h-[640px] object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="py-28 px-16 bg-[#173462]">
        <div className="max-w-[1280px] mx-auto space-y-20">
          <div className="max-w-[768px] mx-auto text-center space-y-4">
            <div className="text-white font-montserrat text-base font-semibold leading-[150%]">
              Enablement
            </div>
            <div className="space-y-6">
              <h2 className="text-white font-alata text-5xl font-normal leading-[120%] tracking-[-0.52px]">
                Achieve Project Success with Our Expertise
              </h2>
              <p className="text-white font-montserrat text-lg font-normal leading-[150%]">
                Our Project Success Enablement service ensures your projects are
                strategically planned and executed with precision. We focus on
                measurable outcomes that drive your business forward.
              </p>
            </div>
          </div>

          <div className="space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 min-h-[276px]">
              {/* Strategic Planning */}
              <div className="flex flex-col items-center gap-6 text-center">
                <StrategyIconLarge />
                <div className="space-y-6">
                  <h3 className="text-white font-alata text-4xl font-normal leading-[130%] tracking-[-0.36px]">
                    Strategic Planning for Your Projects
                  </h3>
                  <p className="text-white font-montserrat text-base font-normal leading-[150%]">
                    We develop tailored strategies that align with your business
                    goals.
                  </p>
                </div>
              </div>

              {/* Execution Excellence */}
              <div className="flex flex-col items-center gap-6 text-center">
                <TeamDashboardIcon />
                <div className="space-y-6">
                  <h3 className="text-white font-alata text-4xl font-normal leading-[130%] tracking-[-0.36px]">
                    Execution Excellence to Drive Results
                  </h3>
                  <p className="text-white font-montserrat text-base font-normal leading-[150%]">
                    Our team ensures flawless execution, minimizing risks.
                  </p>
                </div>
              </div>

              {/* Performance Measurement */}
              <div className="flex flex-col items-center gap-6 text-center">
                <SelfImprovementIconLarge />
                <div className="space-y-6">
                  <h3 className="text-white font-alata text-4xl font-normal leading-[130%] tracking-[-0.36px]">
                    Performance Measurement for Continuous Improvement
                  </h3>
                  <p className="text-white font-montserrat text-base font-normal leading-[150%]">
                    We provide insights that help refine project strategies.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-6">
            <Button
              variant="outline"
              className="rounded-full border-[rgba(12,8,1,0.15)] text-[#0C0801] bg-white hover:bg-gray-50"
            >
              Learn More
            </Button>
            <Button
              variant="link"
              className="text-white p-0 h-auto font-medium hover:no-underline group"
              asChild
            >
              <Link to="/contact" className="flex items-center gap-2">
                Get Started
                <ChevronRightIcon className="w-6 h-6 text-white" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Strategic Planning Details */}
      <section className="py-28 px-16 bg-[#F2F2F2]">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex items-center gap-20">
            <div className="flex-1 space-y-8">
              <div className="space-y-6">
                <h2 className="text-[#0C0801] font-alata text-4xl font-normal leading-[120%] tracking-[-0.44px]">
                  Strategic Planning: Defining Goals and Success Criteria for
                  Project Success
                </h2>
                <p className="text-[#0C0801] font-montserrat text-lg font-normal leading-[150%]">
                  At TecNext, we specialize in strategic planning that aligns
                  project goals with business objectives. Our approach ensures
                  clarity in scope and measurable success criteria, setting the
                  foundation for project excellence.
                </p>
              </div>
              <div className="space-y-4 py-2">
                <div className="flex items-center gap-4">
                  <AlignStartIcon />
                  <div className="flex-1 text-[#0C0801] font-montserrat text-base font-normal leading-[150%]">
                    Aligning project goals with your business objectives.
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <FormatClearIcon />
                  <div className="flex-1 text-[#0C0801] font-montserrat text-base font-normal leading-[150%]">
                    Defining clear success criteria for measurable outcomes.
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <PlannerReviewIcon />
                  <div className="flex-1 text-[#0C0801] font-montserrat text-base font-normal leading-[150%]">
                    Comprehensive planning for effective project execution.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <img
                src="https://images.pexels.com/photos/29521529/pexels-photo-29521529.jpeg"
                alt="Team mapping strategy with sticky notes on a whiteboard"
                className="w-full h-[640px] object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Execution Excellence Section */}
      <section className="py-28 px-16 bg-[#EBF2FE]">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex items-center gap-20">
            <div className="flex-1">
              <img
                src="https://images.pexels.com/photos/4623478/pexels-photo-4623478.jpeg"
                alt="Agile team collaborating during a sprint planning session"
                className="w-full h-[640px] object-cover rounded-2xl"
              />
            </div>
            <div className="flex-1 space-y-8">
              <div className="space-y-6">
                <h2 className="text-[#0C0801] font-alata text-4xl font-normal leading-[120%] tracking-[-0.44px]">
                  Achieving Project Success Through Proven Methodologies and
                  Best Practices
                </h2>
                <p className="text-[#0C0801] font-montserrat text-lg font-normal leading-[150%]">
                  At TecNext, we prioritize execution excellence to deliver
                  successful projects. Our methodologies ensure that every phase
                  is meticulously planned and executed.
                </p>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-6 py-2">
                  <div className="space-y-4">
                    <h3 className="text-[#0C0801] font-alata text-xl font-normal leading-[140%] tracking-[-0.22px]">
                      Agile Approach
                    </h3>
                    <p className="text-[#0C0801] font-montserrat text-base font-normal leading-[150%]">
                      We adapt quickly to changes, ensuring projects remain
                      aligned with client goals.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-[#0C0801] font-alata text-xl font-normal leading-[140%] tracking-[-0.22px]">
                      Quality Assurance
                    </h3>
                    <p className="text-[#0C0801] font-montserrat text-base font-normal leading-[150%]">
                      Our rigorous testing processes guarantee that deliverables
                      meet the highest standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Tracking Section */}
      <section className="py-28 px-16 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex items-center gap-20">
            <div className="flex-1 space-y-8">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="text-[#0C0801] font-montserrat text-base font-semibold leading-[150%]">
                    Measure
                  </div>
                  <div className="space-y-6">
                    <h2 className="text-[#0C0801] font-alata text-5xl font-normal leading-[120%] tracking-[-0.52px]">
                      Track Your Project Performance Effectively
                    </h2>
                    <p className="text-[#0C0801] font-montserrat text-lg font-normal leading-[150%]">
                      Utilize advanced tools and metrics to monitor project
                      performance. Ensure every initiative aligns with your
                      business objectives for maximum impact.
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-6 py-2">
                    <div className="space-y-2">
                      <div className="text-[#0C0801] font-alata text-5xl font-normal leading-[120%] tracking-[-0.52px]">
                        100%
                      </div>
                      <p className="text-[#0C0801] font-montserrat text-base font-normal leading-[150%]">
                        Achieve your goals with precise performance tracking.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="text-[#0C0801] font-alata text-5xl font-normal leading-[120%] tracking-[-0.52px]">
                        Align
                      </div>
                      <p className="text-[#0C0801] font-montserrat text-base font-normal leading-[150%]">
                        Stay on track with our expert guidance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <Button
                  variant="outline"
                  className="rounded-full border-[rgba(12,8,1,0.15)] text-[#0C0801] hover:bg-gray-50"
                >
                  Learn More
                </Button>
                <Button
                  variant="link"
                  className="text-[#0C0801] p-0 h-auto font-medium hover:no-underline group"
                  asChild
                >
                  <Link to="/contact" className="flex items-center gap-2">
                    Sign Up
                    <ChevronRightIcon className="w-6 h-6" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex-1">
              <img
                src="https://images.pexels.com/photos/34069/pexels-photo.jpg"
                alt="Analytics dashboard with charts and KPIs on laptop"
                className="w-full h-[640px] object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-28 px-16 bg-[#F2F2F2]">
        <div className="max-w-[1280px] mx-auto space-y-8">
          <div className="space-y-4">
            <div className="text-[#0C0801] font-montserrat text-base font-semibold leading-[150%]">
              Case Studies
            </div>
            <h2 className="text-[#0C0801] font-alata text-5xl font-normal leading-[120%] tracking-[-0.52px]">
              Project Success Stories
            </h2>
            <p className="text-[#0C0801] font-montserrat text-lg font-normal leading-[150%] max-w-[768px]">
              Explore detailed case studies showcasing measurable outcomes and
              successful project deliveries across industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CASE_STUDIES.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white border border-black/10 p-6 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <h3 className="text-[#0C0801] font-alata text-2xl font-normal leading-[130%] tracking-[-0.2px]">
                    {item.title}
                  </h3>
                  <p className="text-[#0C0801] font-montserrat text-sm font-normal leading-[150%]">
                    Download the full DOCX case study.
                  </p>
                </div>
                <div className="mt-6">
                  <Button asChild className="rounded-full">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Download ${item.title}`}
                    >
                      View Case Study
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-28 px-16 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <div className="max-w-[768px] mx-auto text-center space-y-8">
            <div className="w-30 h-12 mx-auto">
              <svg
                width="120"
                height="48"
                viewBox="0 0 120 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M33.0591 14.3564L23.1938 33.6423H13.9274L18.056 25.6494H17.8708C14.4647 30.071 9.38267 32.9817 2.1416 33.6423V25.76C2.1416 25.76 6.77389 25.4864 9.49708 22.6234H2.1416V14.3566H10.4084V21.1559L10.5939 21.1551L13.9721 14.3566H20.224V21.1128L20.4094 21.1125L23.9143 14.3564H33.0591Z"
                  fill="#0C0801"
                />
                <path
                  d="M86.856 31.5135H89.5184V16.2315H86.856V31.5135Z"
                  fill="#0C0801"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M72.1784 31.3575C72.757 31.598 73.3454 31.7183 73.9436 31.7183C74.9318 31.7183 75.816 31.4778 76.5962 30.9966C77.3764 30.5156 77.9811 29.8524 78.4102 29.0072C78.8393 28.1555 79.0538 27.1899 79.0538 26.1107C79.0538 25.0314 78.8328 24.066 78.3907 23.2142C77.9485 22.3625 77.3341 21.7026 76.5474 21.2345C75.7607 20.7599 74.8667 20.5258 73.8655 20.5323C73.2284 20.5323 72.6173 20.6559 72.032 20.9029C71.4469 21.15 70.9593 21.5011 70.5692 21.9562C70.5391 21.9908 70.5098 22.0258 70.4815 22.0612V16.2413H67.8093V31.5136H70.462L70.4566 30.0869C70.5252 30.171 70.5986 30.2532 70.6765 30.3335C71.099 30.7692 71.5997 31.1104 72.1784 31.3575ZM74.909 28.8902C74.4734 29.1568 73.976 29.29 73.4169 29.29C72.8642 29.29 72.3571 29.1534 71.8955 28.8804C71.4339 28.6008 71.0666 28.2205 70.7935 27.7394C70.5269 27.2583 70.3936 26.7121 70.3936 26.1009C70.3872 25.4898 70.5171 24.9437 70.7837 24.4626C71.0568 23.9749 71.4241 23.5978 71.8858 23.3313C72.3474 23.0582 72.8578 22.9249 73.4169 22.9314C73.976 22.9249 74.4734 23.055 74.909 23.3215C75.3511 23.5816 75.6892 23.9554 75.9233 24.443C76.1638 24.9242 76.2841 25.4768 76.2841 26.1009C76.2841 26.7251 76.1638 27.2778 75.9233 27.7589C75.6892 28.24 75.3511 28.6171 74.909 28.8902Z"
                  fill="#0C0801"
                />
                <path
                  d="M36.9161 17.158H39.9589L42.6808 27.0983L45.5763 17.158H48.112L51.2522 26.8988L53.8659 17.158H56.655L52.5396 31.5136H49.9161L46.7228 21.9975L43.7916 31.5136H41.139L36.9161 17.158Z"
                  fill="#0C0801"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M61.1487 31.767C60.0888 31.7736 59.1331 31.5395 58.2814 31.0649C57.4362 30.5838 56.7699 29.9173 56.2821 29.0656C55.8011 28.214 55.5605 27.242 55.5605 26.1496C55.5605 25.0899 55.8076 24.1309 56.3018 23.2727C56.7958 22.4145 57.4654 21.7448 58.3107 21.2637C59.1559 20.7826 60.0986 20.542 61.1388 20.542C62.3092 20.542 63.3331 20.8021 64.2109 21.3222C65.0951 21.8424 65.755 22.5803 66.1907 23.536C66.6327 24.4853 66.7921 25.5743 66.6685 26.8031H58.3149C58.3382 27.2926 58.4604 27.738 58.6813 28.1392C58.9284 28.5812 59.2729 28.9258 59.715 29.1729C60.1572 29.42 60.6512 29.5435 61.1975 29.5435C61.6135 29.537 62.0004 29.4655 62.3579 29.329C62.7156 29.186 63.0178 28.9942 63.2649 28.7535C63.5185 28.513 63.6973 28.24 63.8014 27.9344H66.5905C66.4214 28.6821 66.0834 29.3485 65.5763 29.9336C65.0691 30.5123 64.432 30.9641 63.6647 31.2892C62.8976 31.6143 62.0589 31.7736 61.1487 31.767ZM58.691 24.1212C58.5353 24.3929 58.4273 24.6854 58.3672 24.9989H63.9046C63.8645 24.6029 63.7422 24.2421 63.538 23.9164C63.3039 23.5328 62.9854 23.237 62.5823 23.0289C62.1792 22.8143 61.7241 22.7071 61.217 22.7071C60.6773 22.7071 60.1864 22.8306 59.7443 23.0777C59.3022 23.3247 58.9511 23.6726 58.691 24.1212Z"
                  fill="#0C0801"
                />
                <path
                  d="M81.0144 20.7664C81.0144 19.8952 81.2126 19.1215 81.6092 18.4453C82.0058 17.7626 82.5617 17.2327 83.2769 16.8556C83.9985 16.472 84.8406 16.2737 85.8027 16.2608V18.6306C85.3541 18.6371 84.9705 18.7314 84.652 18.9134C84.3399 19.089 84.0993 19.3458 83.9303 19.6838C83.7747 19.9951 83.6907 20.3559 83.6784 20.7664H85.7442V23.0192H83.6768V31.5136H81.0144V23.0192H79.2979V20.7664H81.0144Z"
                  fill="#0C0801"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M96.2862 31.7475C95.2004 31.7475 94.2284 31.5102 93.3702 31.0356C92.5185 30.5545 91.8489 29.8913 91.3612 29.0461C90.8801 28.1944 90.6395 27.2289 90.6395 26.1496C90.6395 25.0639 90.8801 24.0951 91.3612 23.2434C91.8489 22.3852 92.5185 21.7188 93.3702 21.2442C94.2284 20.7695 95.2004 20.5322 96.2862 20.5322C97.3784 20.5322 98.3537 20.7695 99.2119 21.2442C100.077 21.7188 100.75 22.3819 101.231 23.2337C101.712 24.0854 101.956 25.0574 101.962 26.1496C101.956 27.2289 101.712 28.1944 101.231 29.0461C100.756 29.8913 100.086 30.5545 99.2216 31.0356C98.3569 31.5102 97.3784 31.7475 96.2862 31.7475ZM96.2862 29.2997C96.8583 29.2997 97.3655 29.1696 97.8075 28.9096C98.2497 28.643 98.591 28.2724 98.8316 27.7978C99.0721 27.3167 99.1924 26.7673 99.1924 26.1496C99.1924 25.5255 99.0721 24.9728 98.8316 24.4917C98.591 24.0106 98.2497 23.64 97.8075 23.3799C97.3655 23.1134 96.8583 22.9801 96.2862 22.9801C95.7206 22.9801 95.2167 23.1134 94.7745 23.3799C94.339 23.64 94.0008 24.0106 93.7603 24.4917C93.5198 24.9728 93.4028 25.5255 93.4092 26.1496C93.4092 26.7673 93.5295 27.3167 93.77 27.7978C94.0171 28.2724 94.3552 28.643 94.7843 28.9096C95.2199 29.1696 95.7206 29.2997 96.2862 29.2997Z"
                  fill="#0C0801"
                />
                <path
                  d="M104.839 20.7663H101.874L105.083 31.5135H107.677L109.787 24.6493L112.065 31.5135H114.621L117.839 20.7663H115.157L113.332 27.4558L111.314 20.7663H108.721L106.713 27.6031L104.839 20.7663Z"
                  fill="#0C0801"
                />
              </svg>
            </div>
            <blockquote className="text-[#0C0801] font-alata text-3xl font-normal leading-[140%] tracking-[-0.28px]">
              "TecNext transformed our project management approach, leading to a
              30% increase in efficiency and on-time delivery."
            </blockquote>
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/25651531/pexels-photo-25651531.jpeg"
                  alt="Jane Doe portrait"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <div className="text-[#0C0801] font-montserrat text-base font-semibold leading-[150%]">
                  Jane Doe
                </div>
                <div className="text-[#0C0801] font-montserrat text-base font-normal leading-[150%]">
                  Project Manager, ABC Corp
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-28 px-16 relative"
        style={{
          backgroundImage:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url('https://images.pexels.com/photos/5256816/pexels-photo-5256816.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-[1280px] mx-auto">
          <div className="max-w-[768px] space-y-8">
            <div className="space-y-6">
              <h2 className="text-white font-alata text-5xl font-normal leading-[120%] tracking-[-0.52px]">
                Ready to Elevate Your Projects?
              </h2>
              <p className="text-white font-montserrat text-lg font-normal leading-[150%]">
                Schedule a consultation to explore how we can drive your project
                success together.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <Button
                className="rounded-full bg-white text-[#0C0801] border border-white hover:bg-gray-100"
                asChild
              >
                <Link to="/contact">Consult</Link>
              </Button>
              <Button
                variant="outline"
                className="rounded-full border-white/20 text-white hover:bg-white/10 bg-transparent"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
