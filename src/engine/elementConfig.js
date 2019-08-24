import {
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Form,
  FormItem,
  Input,
  InputNumber,
  Button,
  Header,
  Image,
  Dialog,
  Select,
  Option,
  Table,
  TableColumn,
  Pagination,
  Badge,
  Upload,
  Container,
  Aside,
  Menu,
  Submenu,
  MenuItemGroup,
  MenuItem,
  Main,
  Footer,
  TimePicker,
  Tree,
  DatePicker,
  Transfer,
  Cascader,
  Tag,
  CheckboxGroup,
  Checkbox,
  Popover,
  Tabs,
  TabPane,
  Radio,
  RadioGroup,
  MessageBox,
  Message,
  Slider,
  Breadcrumb,
  BreadcrumbItem,
  Tooltip,
  Loading,
  Row,
} from 'element-ui'

export default {
  install(V) {
    V.use(Dropdown)
    V.use(DropdownMenu)
    V.use(DropdownItem)
    V.use(Form)
    V.use(FormItem)
    V.use(Input)
    V.use(InputNumber)
    V.use(Button)
    V.use(Header)
    V.use(Image)
    V.use(Dialog)
    V.use(Select)
    V.use(Option)
    V.use(Table)
    V.use(TableColumn)
    V.use(Pagination)
    V.use(Badge)
    V.use(Upload)
    V.use(Container)
    V.use(Aside)
    V.use(Menu)
    V.use(Submenu)
    V.use(MenuItemGroup)
    V.use(MenuItem)
    V.use(Main)
    V.use(Footer)
    V.use(TimePicker)
    V.use(Tree)
    V.use(DatePicker)
    V.use(Transfer)
    V.use(Cascader)
    V.use(Tag)
    V.use(CheckboxGroup)
    V.use(Checkbox)
    V.use(Popover)
    V.use(Tabs)
    V.use(TabPane)
    V.use(Radio)
    V.use(RadioGroup)
    V.use(Slider)
    V.use(Breadcrumb)
    V.use(BreadcrumbItem)
    V.use(Tooltip)
    V.use(Loading.directive)
    V.use(Row)

    V.prototype.$loading = Loading.service
    V.prototype.$confirm = MessageBox.confirm
    V.prototype.$msgbox = MessageBox
    V.prototype.$message = Message
  }
}
