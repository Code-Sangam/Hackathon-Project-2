import Image from 'next/image';

const GptIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="44"
    height="49"
    viewBox="0 0 44 49"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M43.0199 21.51C43.0199 9.624 33.3959 0 21.5099 0C9.62391 0 0.0000305176 9.624 0.0000305176 21.51C0.0000305176 32.82 8.52991 42.57 19.6199 43.01V28.32C19.6199 28.32 14.4399 28.02 14.4399 34.897C14.4399 41.774 9.11991 43.02 9.11991 43.02C8.65591 44.41 8.65591 46.471 9.11991 47.991L14.4399 46.051C17.2399 45.091 19.6199 42.731 21.0179 39.951L22.9579 34.631C23.4219 33.241 25.4839 33.241 25.9479 34.631L27.8879 39.951C28.8479 42.751 31.2079 45.111 34.0079 46.071L39.3279 47.991C40.7179 47.527 40.7179 45.466 39.3279 44.992L34.0079 43.052C28.8279 41.792 27.5779 34.897 27.5779 34.897V22.4C38.6699 21.07 43.0199 11.886 43.0199 21.51ZM8.55991 21.51C8.55991 14.367 14.3769 8.55 21.5199 8.55C28.6629 8.55 34.4799 14.367 34.4799 21.51C34.4799 28.653 28.6629 34.47 21.5199 34.47C14.3769 34.47 8.55991 28.653 8.55991 21.51Z"
      fill="white"
    />
  </svg>
);

const NotionIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="44"
    height="45"
    viewBox="0 0 44 45"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M29.6133 5.074L0.00134277 44.918H9.38134L32.1123 19.83L29.6123 16.03L7.43134 40.33V38.02L25.9313 17.775L23.7083 14.69L4.01034 40.23V37.9L29.6113 5.074H29.6133ZM43.8623 5.518V44.908H35.7823V5.518H43.8623ZM0.00134277 5.518H8.28534V44.908H0.00134277V5.518ZM52.1903 44.908V5.518H44.1113V44.908H52.1903C49.7603 44.908 47.5903 44.248 46.0003 42.888L44.0803 41.318L52.1903 44.908Z"
      fill="white"
    />
  </svg>
);

const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="45"
    height="42"
    viewBox="0 0 45 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M41.761 41.761H2.431V14.123H41.761V41.761ZM6.535 18.067V37.817H37.655V18.067H6.535ZM15.66 22.262H21.47V24.922C22.291 23.644 24.325 21.892 27.566 21.892C33.921 21.892 35.091 26.075 35.091 31.516V42.712H29.281V32.416C29.281 30.086 29.235 27.089 26.036 27.089C22.788 27.089 22.288 29.627 22.288 32.249V42.712H16.478L15.66 22.262ZM9.487 15.706C9.487 17.606 7.949 19.146 6.046 19.146C4.143 19.146 2.606 17.606 2.606 15.706C2.606 13.803 4.143 12.266 6.046 12.266C7.949 12.266 9.487 13.803 9.487 15.706ZM11.39 37.817H4.5V22.262H11.39V37.817Z"
      fill="white"
    />
  </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="32"
    height="45"
    viewBox="0 0 32 45"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16.892 27.636L29.242 44.226H25.06L15.115 29.58L6.58 44.226H2.19L15.29 25.334L2.43 0H6.656L18.376 15.63L29.215 0H33.605L16.892 27.636ZM13.76 24.505L12.52 22.8L3.37 9.76H6.55L14.46 21.03L15.7 22.79L25.59 36.76H22.41L13.76 24.505Z"
      fill="white"
    />
  </svg>
);


const integrationsData = [
  {
    icon: GptIcon,
    text: "GPT models to generate content and build intelligent agents.",
  },
  {
    icon: NotionIcon,
    text: "Summarize tasks, and organize info using Notion’s powerful AI assistant.",
  },
  {
    icon: LinkedInIcon,
    text: "Connect with Linked In and with dozens of other tools in it",
  },
  {
    icon: TwitterIcon,
    text: "Connect with Twitter and with dozens of other tools in it without code",
  },
];

export default function Integrations() {
  return (
    <section className="py-30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <div className="inline-block rounded-full bg-[rgba(99,102,241,0.1)] px-3 py-1">
            <p className="text-sm font-medium text-[#A5B4FC]">INTEGRATIONS</p>
          </div>
          <h2 className="mt-6 text-[48px] font-semibold leading-tight text-white">
            Seamless Integrations
          </h2>
          <p className="mt-6 max-w-xl text-xl text-muted-foreground">
            Connect with your favorite tools to streamline workflows
          </p>
        </div>

        <div className="relative mt-20">
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px bg-white/10" aria-hidden="true"></div>
          <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-px bg-white/10 hidden md:block" aria-hidden="true"></div>

          <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
            <div className="flex h-[88px] w-[88px] items-center justify-center rounded-2xl border border-white/10 bg-[rgba(63,63,114,0.2)] backdrop-blur-[20px]">
              <Image
                src="https://framerusercontent.com/images/FbO4dnbdmZd5UO3ULm6CTPenvIo.png"
                alt="Sangam Logo"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
          </div>
          
          <div className="relative grid grid-cols-1 gap-y-20 gap-x-[100px] md:grid-cols-2">
            {integrationsData.map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-6">
                <div className="flex h-20 w-20 items-center justify-center rounded-xl border border-white/10 bg-[rgba(63,63,114,0.2)]">
                  <item.icon className="h-auto w-11" />
                </div>
                <p className="max-w-[340px] text-center text-lg text-muted-foreground">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}