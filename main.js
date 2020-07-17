"use strict";
var Role;
(function (Role) {
    Role[Role["DEVELOPER"] = 0] = "DEVELOPER";
    Role[Role["DEVOPS"] = 1] = "DEVOPS";
    Role[Role["QA"] = 2] = "QA";
    Role[Role["HR"] = 3] = "HR";
})(Role || (Role = {}));
class emprecord {
    constructor() {
        let d = document.getElementById("deletemul");
        d.addEventListener("click", this.deletemultiple);
        let c = document.getElementById("confirm");
        c.addEventListener("click", this.deletemultiple);
        let a = document.getElementById("addrow");
        a.addEventListener("click", this.addrow);
        this.checkarr = [];
        this.temparr = [];
        this.checkcount = 0;
        this.delete_temp = 0;
        this.loaddata();
    }
    loaddata() {
        let tbody = document.getElementById("table-body");
        this.array = [
            {
                fname: "Adish",
                mname: "",
                lname: "Aggarwal",
                email: "adish.aggarwal@sourcefuse.com",
                phoneno: "8195068777",
                address: "Jalandhar",
                role: 0,
                id: "SF1"
            },
            {
                fname: "Samarpan",
                mname: "",
                lname: "B",
                email: "samarpan@sourcefuse.com",
                phoneno: "9999999999",
                address: "Delhi",
                role: 1,
                id: "SF2"
            },
            {
                fname: "Harsh",
                mname: "Deep",
                lname: "Singh",
                email: "harsh.singh@sourcefuse.com",
                phoneno: "8795812365",
                address: "Nangal",
                role: 2,
                id: "SF3"
            },
            {
                fname: "Aman",
                mname: "Deep",
                lname: "Kaur",
                email: "aman.kaur@sourcefuse.com",
                phoneno: "8795812378",
                address: "Mohali",
                role: 3,
                id: "SF4"
            }
        ];
        for (let i = 0; i < this.array.length; i++) {
            let newrow = tbody.insertRow(-1);
            newrow.setAttribute("id", "row" + this.array[i].id);
            newrow.innerHTML = `<td><input class="deletechecked" value="${this.array[i].id}" onchange="obj.getvalue(this.value)" type="checkbox" disabled id="check${this.array[i].id}"></td>
                              <td><input type="text" placeholder="${this.array[i].fname}" disabled></td>
                              <td><input type="text" placeholder="${this.array[i].mname}" disabled></td>
                              <td><input type="text" placeholder="${this.array[i].lname}" disabled></td>
                              <td><input type="text" placeholder="${this.array[i].email}" disabled></td>
                              <td><input type="text" placeholder="${this.array[i].phoneno}" disabled></td>
                              <td><input type="text" placeholder="${this.array[i].address}" disabled></td>
                              <td><select name="roles" id="roles${this.array[i].id}">
                              <option id="opt${Role[0]}" value="${Role[0]}">${Role[0]}</option>
                              <option id="opt${Role[1]}" value="${Role[1]}">${Role[1]}</option>
                              <option id="opt${Role[2]}" value="${Role[2]}">${Role[2]}</option>
                              <option id="opt${Role[3]}" value="${Role[3]}">${Role[3]}</option>
                            </select></td>
                            <td><button class="btn btn-primary" id="${this.array[i].id}">EDIT</button></td>
                            <td><button class="btn btn-danger" id="${this.array[i].id}${this.array[i].id}">DELETE</button></td>
                            `;
            document.getElementById("roles" + this.array[i].id).selectedIndex = `${this.array[i].role}`;
            document.getElementById("roles" + this.array[i].id).disabled = true;
            let d = document.getElementById("" + this.array[i].id + "" + this.array[i].id);
            d.addEventListener("click", this.deleterow);
            let e = document.getElementById("" + this.array[i].id);
            e.addEventListener("click", this.editrow);
            let error_row = tbody.insertRow(-1);
            error_row.setAttribute("id", "error" + this.array[i].id);
            error_row.innerHTML = `<td></td>
                                              <td><p id="1error${this.array[i].id}">PLEASE FILL IN THE CORRECT NAME</p></td>
                                              <td><p id="2error${this.array[i].id}">PLEASE FILL IN THE  MIDDLENAME</p></td>
                                              <td><p id="3error${this.array[i].id}">PLEASE FILL IN THE CORRECT LASTNAME</p></td>
                                              <td><p id="4error${this.array[i].id}">PLEASE FILL IN CORRECT EMAIL</p></td>
                                              <td><p id="5error${this.array[i].id}">PLEASE FILL IN CORRECT PHONE NO</p></td>
                                              <td><p id="6error${this.array[i].id}">PLEASE FILL IN THE ADDRESS</p></td>
                                            `;
            for (let j = 1; j <= 6; j++) {
                document.getElementById("" + j + "error" + this.array[i].id).style.display = "none";
            }
        }
    }
    addrow() {
        let tbody = document.getElementById("table-body");
        let newrow = tbody.insertRow(-1);
        let len = obj.array.length + 1;
        let newid = "SF" + len;
        newrow.setAttribute("id", "row" + newid);
        newrow.innerHTML = `<td><input class="deletechecked" value="${newid}" onchange="obj.getvalue(this.value)" type="checkbox" disabled id="check${newid}"></td>
                              <td><input type="text" placeholder=""></td>
                              <td><input type="text" placeholder=""></td>
                              <td><input type="text" placeholder=""></td>
                              <td><input type="text" placeholder=""></td>
                              <td><input type="text" placeholder=""></td>
                              <td><input type="text" placeholder=""></td>
                              <td><select name="roles" id="roles${newid}">
                              <option id="opt${Role[0]}" value="${Role[0]}">${Role[0]}</option>
                              <option id="opt${Role[1]}" value="${Role[1]}">${Role[1]}</option>
                              <option id="opt${Role[2]}" value="${Role[2]}">${Role[2]}</option>
                              <option id="opt${Role[3]}" value="${Role[3]}">${Role[3]}</option>
                            </select></td>
                            <td><button class="btn btn-primary" id="${newid}">SAVE</button></td>
                            <td><button class="btn btn-danger" id="${newid}${newid}">DELETE</button></td>
                            `;
        let d = document.getElementById("" + newid + "" + newid);
        d.addEventListener("click", obj.deleterow);
        let e = document.getElementById("" + newid);
        e.addEventListener("click", obj.editrow);
        obj.array[len] = {
            fname: "",
            mname: "",
            lname: "",
            email: "",
            phoneno: "",
            address: "",
            role: 3,
            id: newid
        };
        let error_row = tbody.insertRow(-1);
        error_row.setAttribute("id", "error" + newid);
        error_row.innerHTML = `<td></td>
                                              <td><p id="1error${newid}">PLEASE FILL IN THE CORRECT NAME</p></td>
                                              <td><p id="2error${newid}">PLEASE FILL IN THE  MIDDLENAME</p></td>
                                              <td><p id="3error${newid}">PLEASE FILL IN THE CORRECT LASTNAME</p></td>
                                              <td><p id="4error${newid}">PLEASE FILL IN CORRECT EMAIL</p></td>
                                              <td><p id="5error${newid}">PLEASE FILL IN CORRECT PHONE NO</p></td>
                                              <td><p id="6error${newid}">PLEASE FILL IN THE ADDRESS</p></td>
                                            `;
        for (let j = 1; j <= 6; j++) {
            document.getElementById("" + j + "error" + newid).style.display = "none";
        }
        obj.delete_temp = 1;
        obj.onlyedit(newid);
        document.getElementById("addrow").style.display = "none";
    }
    deleterow() {
        let btnid = this.id;
        let len = btnid.length;
        var res = btnid.slice(0, len / 2);
        // index = obj.array.findIndex(x => x.id ===res);
        if (document.getElementById("" + this.id).innerHTML == "CANCEL") {
            let inptags = document.getElementById("row" + res).getElementsByTagName("input");
            let c = 0;
            for (let i = 1; i <= 6; i++) {
                inptags[i].value = obj.temparr[c];
                inptags[i].disabled = true;
                c++;
            }
            obj.temparr = [];
            obj.disable(res);
        }
        else {
            let rid = document.getElementById("row" + res);
            let errorid = document.getElementById("error" + res);
            var CarId = res;
            if (obj.delete_temp == 1) {
                obj.delete_temp = 0;
                document.getElementById("addrow").style.display = "inline";
                obj.disable(res);
            }
            var carIndex = obj.array.map(function (x) { return x.id; }).indexOf(CarId);
            delete obj.array[carIndex];
            rid.remove();
            errorid.remove();
        }
    }
    getvalue(delid) {
        if (document.getElementById("check" + delid).checked) {
            obj.checkarr[obj.checkarr.length] = delid;
            obj.checkcount++;
        }
        else {
            var a = obj.checkarr.indexOf("" + delid);
            delete obj.checkarr[a];
            obj.checkcount--;
        }
    }
    deletemultiple() {
        if (this.id == "confirm") {
            if (obj.checkcount) {
                obj.checkcount = 0;
                for (let i = 0; i < obj.checkarr.length; i++) {
                    if (obj.checkarr[i]) {
                        let del = document.getElementById("row" + obj.checkarr[i]);
                        del.remove();
                        let delerror = document.getElementById("error" + obj.checkarr[i]);
                        delerror.remove();
                        var CarId = obj.checkarr[i];
                        var carIndex = obj.array.map(function (x) { return x.id; }).indexOf(CarId);
                        delete obj.array[carIndex];
                    }
                }
            }
            let boxes = document.getElementsByClassName("deletechecked");
            let confirm = document.getElementById("confirm");
            confirm.style.display = "none";
            for (let i = 0; i < boxes.length; i++) {
                boxes[i].disabled = true;
            }
        }
        else {
            let boxes = document.getElementsByClassName("deletechecked");
            let confirm = document.getElementById("confirm");
            confirm.style.display = "block";
            for (let i = 0; i < boxes.length; i++) {
                boxes[i].disabled = false;
            }
        }
    }
    editrow() {
        if (document.getElementById("" + this.id).innerHTML == "SAVE") {
            let flag = obj.checkvalidation(this.id);
            if (flag == 0) {
                obj.disable(this.id);
                if (obj.delete_temp == 1) {
                    obj.delete_temp = 0;
                    document.getElementById("addrow").style.display = "inline";
                }
            }
        }
        else {
            obj.onlyedit(this.id);
        }
    }
    onlyedit(id) {
        if (obj.delete_temp != 1) {
            let inptags = document.getElementById("row" + id).getElementsByTagName("input");
            document.getElementById("roles" + id).disabled = false;
            let count = 0;
            for (let i = 1; i <= 6; i++) {
                inptags[i].disabled = false;
                inptags[i].value = inptags[i].placeholder;
                obj.temparr[count] = inptags[i].placeholder;
                count++;
            }
            document.getElementById(id).innerHTML = "SAVE";
            document.getElementById("" + id + "" + id).innerHTML = "CANCEL";
        }
        for (let i = 0; i < obj.array.length; i++) {
            if (obj.array[i]) {
                if (obj.array[i].id != id) {
                    document.getElementById("" + obj.array[i].id).style.display = "none";
                    document.getElementById("" + obj.array[i].id + "" + obj.array[i].id).style.display = "none";
                }
            }
        }
    }
    disable(id) {
        document.getElementById("roles" + id).disabled = true;
        for (let i = 0; i < obj.array.length; i++) {
            if (obj.array[i]) {
                if (obj.array[i].id != id) {
                    document.getElementById("" + obj.array[i].id).style.display = "block";
                    document.getElementById("" + obj.array[i].id + "" + obj.array[i].id).style.display = "block";
                }
            }
        }
        document.getElementById(id).innerHTML = "EDIT";
        document.getElementById("" + id + "" + id).innerHTML = "DELETE";
        /*  for(let q=1;q<=6;q++)
          {
                  document.getElementById(""+q+"error"+id)!.style.display="none";
          }
          */
    }
    checkvalidation(id) {
        let inptags = document.getElementById("row" + id).getElementsByTagName("input");
        var flag = 0;
        for (let i = 1; i <= 6; i++) {
            let x = obj.validate(i, inptags[i].value, id);
            if (!x) {
                inptags[i].placeholder = inptags[i].value;
                document.getElementById("" + i + "error" + id).style.display = "none";
            }
            else {
                document.getElementById(x).style.display = "block";
                flag = 1;
            }
            if (flag == 0) {
                inptags[i].disabled = true;
            }
        }
        return flag;
    }
    validate(n, val, id) {
        if (n == 1 || n == 3 || n == 6) {
            var pattern = /[A-Za-z\s\'-]/;
            let bool = val.match(pattern);
            if (!bool) {
                let ret;
                if (n == 1) {
                    ret = "1error" + id;
                }
                else if (n == 3) {
                    ret = "3error" + id;
                }
                else {
                    ret = "6error" + id;
                }
                return ret;
            }
            else {
                return "";
            }
        }
        if (n == 4) {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val)) {
                return "";
            }
            else {
                let ret = "4error" + id;
                return ret;
            }
        }
        if (n == 5) {
            var phoneNum = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
            if (val.match(phoneNum)) {
                return "";
            }
            else {
                let ret = "5error" + id;
                return ret;
            }
        }
        else {
            return "";
        }
    }
}
let obj = new emprecord;
