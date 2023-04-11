import Welcome from "../components/steps/Welcome";
import PhoneStep from "@/components/steps/PhoneStep";
import Register from "@/components/steps/Register";
import TwitterStep from "@/components/steps/TwitterStep";
import CongratStep from "@/components/steps/CongratStep";

export default function Home() {
  return (
    <div>
      <Welcome />
      <Register />
      <TwitterStep />
      <CongratStep />
      <PhoneStep /> 

      <style global jsx>{`
        html,
        body,
        body > div:first-child,
        div#__next,
        div#__next > div {
          height: 100%;
        }
      `}</style>
    </div>
  );
}
