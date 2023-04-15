import $ from "jquery";
import DataTable from "datatables.net-dt";
import "datatables.net-dt/css/jquery.dataTables.min.css";

class Currency {
  constructor(code, name, type, active) {
    this.code = code;
    this.name = name;
    this.type = type;
    this.active = active;
  }
}

let table = new DataTable("#myTable", {
  data: [
    new Currency("AUD", "Australian dollar", "fiat", true),
    new Currency("CAD", "Canadian dollar", "fiat", true),
    new Currency("BTC", "Bitcoin", "crypto", false),
    new Currency("BNB", "Binance Coin", "crypto", true),
    new Currency("USD", "United States dollar", "fiat", true),
    new Currency("UAH", "Ukrainian hryvnia", "fiat", true),
    new Currency("DOGE", "Dogecoin", "crypto", false),
    new Currency("GBP", "Pound sterling", "fiat", true),
    new Currency("EUR", "Euro", "fiat", true),
    new Currency("BRL", "Brazilian real", "fiat", true),
    new Currency("PLN", "Polish złoty", "fiat", true),
  ],
  columns: [
    { title: "Currency code", data: "code" },
    { title: "Currency name", data: "name" },
    { title: "Currency type", data: "type" },
    { title: "Is active ?", data: "active" },
  ],
});
