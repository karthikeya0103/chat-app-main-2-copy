import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import RegisterPage from "../Chatpages/RegisterPage";
import CheckEmailPage from "../Chatpages/CheckEmailPage";
import CheckPasswordPage from "../Chatpages/CheckPasswordPage";
import Chathome from "../Chatpages/Chathome";
import MessagePage from "../Chatcomponents/MessagePage";
import AuthLayouts from "../layout";
import Forgotpassword from "../Chatpages/Forgotpassword";
import Mentor_home1 from "../Components/Mentor_home1";



import Choose from '../Choose';
import Privacy from '../Components/Privacy';
import TermandConditions from '../Components/TermandConditions';
import Faq from '../Components/Faq';
import Community from '../Components/Community';
import Services1 from '../Components/Services1';
import ChatwithMentor from '../Components/ChatwithMentor';
import Community_neet from '../Components/Community_neet';
import About6to10 from '../Pages/About6to10';
import AboutJee from '../Pages/AboutJee';
import AboutNeet from '../Pages/AboutNeet';
import Doubt_courses from '../Pages/Doubt_courses';
import DoubtSection from '../Pages/DoubtSection';
import Blogs from '../Components/Blogs';
import VideoPage from "../Pages/videopage/videopage";
import Waits from "../Pages/waits/Waits";
import JeePrice from "../Pages/jee price/jee_price";
import NeetPrice from "../Pages/neet price/neet_price";
import Class6befpay from "../Pages/class6-beforepay/class6_beforepay";
import AllCoursesPage from "../Components/CourdsesPages/CoursesPages";
import Class11 from "../Components/classes/class-11/class11";
import Class12 from "../Components/classes/class-12/class12";
import NEET from "../Components/classes/NeetCourses/NeetCourses";
import JEE from "../Components/classes/JEECourses/JeeCourses";
// class page before pay
import Class7befpay from "../Pages/class7-beforepay/class7_beforepay"
import Class8befpay from "../Pages/class8-beforepay/class8_beforepay";
import Class9befpay from "../Pages/class9-beforepay/class9_beforepay";
import Class10befpay from "../Pages/class10-beforepay/class10_beforepay";
import NeetTestSeries from "../Pages/Neet_Test_Series/NeettestSeries";
import JeeTestSeries from "../Pages/Jeet_Test_Series/JeetestSeries";
// All india test series
import NeetAllIndiaTestseries from "../Pages/NeetAllIndiaTestSeries/NeetAllIndiaTestseries";
import JeeAllIndiaTestSeries from "../Pages/JeeAllIndiaTestSeries/JeeAllIndiaTestSeries";

// import Chathome from "../Chatpages/Chathome";
import ResultsComponent from '../Components/ResultsComponent';


const router = createBrowserRouter([
{
    path : "/",
    element : <App/>,
    children : [
        {
            path: "mentorship",
            element: <AuthLayouts><Mentor_home1/></AuthLayouts>
        },
        {
            path : "register",
            element : <AuthLayouts><RegisterPage/></AuthLayouts>
        },
        {
            path: "careers",
            element: <ResultsComponent />
        },
        {
            path: "mentorservices",
            element: <Services1 />
        },
        {
            path: "why_writo",
            element: <Choose />
        },
        {
            path: "privacy",
            element: <Privacy />
        },
        {
            path: "terms",
            element: <TermandConditions />
        },
        {
            path: "faq",
            element: <Faq />
        },
        {
            path: "community",
            element: <Community />
        },
        {
            path: "chatwithmentors",
            element: <ChatwithMentor />
        },
        {
            path: "communityneet",
            element: <Community_neet />
        },
        {
            path: "about6to10",
            element: <About6to10 />
        },
        {
            path: "aboutjee",
            element: <AboutJee />
        },
        {
            path: "aboutneet",
            element: <AboutNeet />
        },
        {
            path: "doubtcourses",
            element: <Doubt_courses />
        },
        {
            path: "doubtsection",
            element: <DoubtSection />
        },
        {
            path: "blogs",
            element: <Blogs />
        },
        {
            path: "all",
            element: <AllCoursesPage />
        },
        {
            path: "class-6beforepay",
            element: <Class6befpay />
        },
        {
            path: "class-7beforepay",
            element: <Class7befpay />
        },
        {
            path: "class-8beforepay",
            element: <Class8befpay />
        },
        {
            path: "class-9beforepay",
            element: <Class9befpay />
        },
        {
            path: "class-10beforepay",
            element: <Class10befpay />
        },
        {
            path: "jee-test-series",
            element: <JeeTestSeries />
        },
        {
            path: "neet-test-series",
            element: <NeetTestSeries />
        },
        {
            path: "class-11",
            element: <Class11 />
        },
        {
            path: "class-12",
            element: <Class12 />
        },
        {
            path: "neet-courses",
            element: <NEET />
        },
        {
            path: "jee-courses",
            element: <JEE />
        },
        {
            path: "class-6/physics/video",
            element: <VideoPage />
        },
        {
            path: "waits",
            element: <Waits />
        },
        {
            path: "neet-price",
            element: <NeetPrice />
        },
        {
            path: "jee-price",
            element: <JeePrice />
        },
        {
            path: "neet-all-india-test-series",
            element: <NeetAllIndiaTestseries />
        },
        {
            path: "jee-all-india-test-series",
            element: <JeeAllIndiaTestSeries />
        },
        {
            path : 'email',
            element : <AuthLayouts><CheckEmailPage/></AuthLayouts>
        },
        {
            path : 'password',
            element : <AuthLayouts><CheckPasswordPage/></AuthLayouts>
        },
        {
            path : 'forgot-password',
            element : <AuthLayouts><Forgotpassword/></AuthLayouts>
        },
        {
            path : "chat-home",
            element : <Chathome/>,
            children : [
                {
                    path : ':userId',
                    element : <MessagePage/>
                }
            ]
        }
    ]
}
])

export default router