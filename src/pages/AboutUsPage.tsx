import { useEffect } from "react";
import MainLayout from "../components/layouts/MainLayout";
import { AboutUs } from "../components/ui/AboutUs";
import { useAppSelector } from "../redux/hook";
import { useNavigate } from "react-router-dom";

export default function AboutUsPage() {
  const { email } = useAppSelector(state => state.auth);
  const navigate = useNavigate()
  // useEffect(() => {
    if (!email) {
      navigate('/login')
    }
  // }, [email])
  return (
    <MainLayout>
      <AboutUs />
    </MainLayout>
  );
}
