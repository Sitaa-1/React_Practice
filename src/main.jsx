import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import { DataBinding } from './Component/DataBinding/databinding.jsx'
import { DataBindingMap } from './Component/DataBindingArrTypeWithMap/amazonNavMapMenu.jsx'
import { DataBindingObjType } from './Component/BindingObjectType/ProductDetail.jsx'
import { DataBindingArrOfObjType } from './Component/DataBindingArryOfObjType/DBArrayOfObj.jsx'
import { DateTypeDataBinding } from './Component/DataBindingDateType/dateTypeDB.jsx'
import { RegExpresionDb } from './Component/DBRegularExpresionType/RegularExpressionType.jsx'
import { JsAjxFlipkart } from './Component/JSAjaxTechniqDataFetch/filpkart.jsx'
import { Fakestore } from './Component/FakeStore/fakestore.jsx'
import { Inox } from './Component/UseAsioxInoxMoviPg/inox.jsx'
import { TwoWayBindingEx } from './Component/ReactTwoWayBinding/twoWayBindingEx.jsx'
import { MouseOverEx } from './Component/MouseOver/mouseOverEx.jsx'
import { MouseDownUpEvent } from './Component/MouseDown&Up/MouseAnimation.jsx'
import { MouseMove } from './Component/MouseMoveEvent/mouseMoveEvent.jsx'
import { KeyUpEvntWithIdPwd } from './Component/KeyEvent/keyUpEx.jsx'
import { ButtonDemo } from './Component/ButtonEvent/ButonEvntZomEfctClickEx.jsx'
import { EMICalculator } from './Component/ElementStateEvent/emi_Calculator.jsx'
import { ElementState } from './Component/ElementStateEvent/element_state.jsx'
import { DebounceDemo } from './Component/Debounce/debounceDemo.jsx'
import { ThrottleDemo } from './Component/Throttle/throttleDemo.jsx'
import { StopWatch } from './Component/Throttle/stopWatch.jsx'
import { CarouselDemo } from './Component/Throttle/carousel-demo.jsx'
import { FullComponentRendering } from './Component/Conditional Rendering/renderFullComponent.jsx'
import { RenderPartOfComponent } from './Component/Conditional Rendering/partOfComponentRender.jsx'
import { NavbarComponent } from './Component/ControlledComponent/navbar.jsx'
import { HomeComponent } from './Component/ControlledComponent/home.jsx'
import { ContextAPIDemo} from './Component/ContextAPI_WeatherApp/contextApiDemo.jsx'
import { WeatherApp } from './Component/ContextAPI_WeatherApp/WeatherApp/weatherApp.jsx'
import { ParentComponent } from './Component/ContextAPI_WeatherApp/parentComponent.jsx'
import { FormDemo } from './Component/ReactForms/formWithout3rdParty.jsx'
import { FormikForm } from './Component/ReactForms/formWithFormik.jsx'
import { FormYupDemo } from './Component/ReactForms/formWithYupvalidation.jsx'
import { FormikComponentDemo } from './Component/ReactForms/formwithformikcomponent.jsx'
import { OptionalChaing } from './Component/JSOptionalChainingEx/example.jsx'
import { ReactHookFormDemo } from './Component/ReactForms/ReactHookFromDemo.jsx'
import { TutorialIndex } from './Component/React-Routing/BasicExample/tutorial-index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TutorialIndex />
  </StrictMode>,
)
