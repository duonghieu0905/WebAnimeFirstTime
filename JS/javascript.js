$(document).ready(function () {
    function kiemtraten() {
        var ten = $("#name").val();
        var reg = /^([A-Z][a-zA-Z]+(\s[A-Z][a-zA-Z]+)+)$/;
        if (ten != "") {
            if (reg.test(ten) == false) {
                $("#erhoten").html("Sai định dạng Họ Tên");
                return false;
            }
            else {
                $("#erhoten").html("");
                return true;
            }
        }
        else {
            $("#erhoten").html("Bắt buộc nhập");
            return false;
        }
    }
    function kiemtratendn() {
        var tendn = $("#usr").val();
        var reg = /^[a-zA-Z0-9_-]{3,15}$/;
        if (tendn != "") {
            if (reg.test(tendn) == false) {
                $("#ertenDN").html("Sai định dạng tên đăng nhập");
                return false;
            }
            else {
                $("#ertenDN").html("");
                return true;
            }
        }
        else {
            $("#ertenDN").html("Bắt buộc nhập");
            return false;
        }
    }
    function kiemtraemail() {
        var email = $("#email").val();
        var reg = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;
        if (email != "") {
            if (reg.test(email) == false) {
                $("#eremail").html("Sai định dạng email");
                return false;
            }
            else {
                $("#eremail").html("");
                return true;
            }
        }
        else return true;

    }
    function kiemtrasdt() {
        var sdt = $("#sdt").val();
        var reg = /(0||84)+[0-9]{9,12}/;
        if (sdt != "") {
            if (reg.test(sdt) == false) {
                $("#ersdt").html("Sai định dạng số điện thoại");
                return false;
            }
            else {
                $("#ersdt").html("");
                return true;
            }
        }
        else return true;
    }
    function kiemtramatkhau() {
        var mk = $("#pwd1").val();
        var reg = /^([A-Z]){1}([\w_\.!@#$%^&*()]+){5,31}$/;
        if (mk != "") {
            if (reg.test(mk) == false) {
                $("#ermk1").html("Mật khẩu bắt đầu chữ hoa và có kí tự đặt biệt tối đa 15 tối thiểu 5");
                return false;
            }
            else {
                $("#ermk1").html("");
                return true;
            }
        }
        else {
            $("#ermk1").html("Bắt buộc nhập");
            return false;
        }
    }
    function kiemtramatkhaulai() {
        var mk1 = $("#pwd1").val();
        var mk2 = $("#pwdrepeat").val();
        if (mk2 != "") {
            if (mk2 != mk1) {
                $("#ermk2").html("Mật khẩu không trùng khớp");
                return false;

            }
            else {
                $("#ermk2").html("");
                return true;
            }
        }
        else {
            $("#ermk2").html("Bắt buộc nhập");
            return false;
        }
    }

    $("#usr").blur(function () {
        kiemtratendn();
    })
    $("#name").blur(function () {
        kiemtraten();
    })
    $("#email").blur(function () {
        kiemtraemail();
    })
    $("#sdt").blur(function () {
        kiemtrasdt();
    })
    $("#pwd1").blur(function () {
        kiemtramatkhau();
    })
    $("#pwdrepeat").blur(function () {
        kiemtramatkhaulai();
    })
    $("#dangky").click(function () {
        if (kiemtraemail && kiemtramatkhau && kiemtramatkhaulai && kiemtrasdt && kiemtraten && kiemtratendn)
            $("#Register").modal("toggle");
    })
    function kiemtramatkhau1() {
        var mk = $("#pwd2").val();
        var reg = /^([A-Z]){1}([\w_\.!@#$%^&*()]+){5,31}$/;
        if (mk != "") {
            if (reg.test(mk) == false) {
                $("#ermk3").html("Sai mật khẩu");
                return false;
            }
            else {
                $("#ermk3").html("");
                return true;
            }
        }
        else {
            return false;
        }
    }
    function kiemtratendn1() {
        var tendn = $("#usr1").val();
        var reg = /^[a-zA-Z0-9_-]{3,15}$/;
        if (tendn != "") {
            if (reg.test(tendn) == false) {
                $("#ertenDN1").html("Sai tên đăng nhập");
                return false;
            }
            else {
                $("#ertenDN1").html("");
                return true;
            }
        }
        else {
            return false;
        }

    }
    $("#pwd2").blur(function () {
        kiemtramatkhau1();
    })
    $("#usr1").blur(function () {
        kiemtratendn1();
    })
    $("#dangnhap").click(function () {
        if (kiemtramatkhau1 && kiemtratendn1)
            $("#Login").modal("toggle");
    })
});
// JavaScript source code
$(Document).ready(function () {
    $("#tap1").show("normal")
    $("#tap2,#tap3,#tap4,#tap5,#tap6,#tap7,#tap8,#tap9,#tap10,#tap11,#tap12").hide("normal")
    $("#1").click(function () {
        $("#tap1").show("normal")
        $("#tap2,#tap3,#tap4,#tap5,#tap6,#tap7,#tap8,#tap9,#tap10,#tap11,#tap12").hide("normal")
    })
    $("#2").click(function () {
        $("#tap2").show("normal")
        $("#tap1,#tap3,#tap4,#tap5,#tap6,#tap7,#tap8,#tap9,#tap10,#tap11,#tap12").hide("normal")
    })
    $("#3").click(function () {
        $("#tap3").show("normal")
        $("#tap2,#tap1,#tap4,#tap5,#tap6,#tap7,#tap8,#tap9,#tap10,#tap11,#tap12").hide("normal")
    })
    $("#4").click(function () {
        $("#tap4").show("normal")
        $("#tap2,#tap3,#tap1,#tap5,#tap6,#tap7,#tap8,#tap9,#tap10,#tap11,#tap12").hide("normal")
    })
    $("#5").click(function () {
        $("#tap5").show("normal")
        $("#tap2,#tap3,#tap4,#tap1,#tap6,#tap7,#tap8,#tap9,#tap10,#tap11,#tap12").hide("normal")
    })
    $("#6").click(function () {
        $("#tap6").show("normal")
        $("#tap2,#tap3,#tap4,#tap5,#tap1,#tap7,#tap8,#tap9,#tap10,#tap11,#tap12").hide("normal")
    })
    $("#7").click(function () {
        $("#tap7").show("normal")
        $("#tap2,#tap3,#tap4,#tap5,#tap6,#tap1,#tap8,#tap9,#tap10,#tap11,#tap12").hide("normal")
    })
    $("#8").click(function () {
        $("#tap8").show("normal")
        $("#tap2,#tap3,#tap4,#tap5,#tap6,#tap7,#tap1,#tap9,#tap10,#tap11,#tap12").hide("normal")
    })
    $("#9").click(function () {
        $("#tap9").show("normal")
        $("#tap2,#tap3,#tap4,#tap5,#tap6,#tap7,#tap8,#tap1,#tap10,#tap11,#tap12").hide("normal")
    })
    $("#10").click(function () {
        $("#tap10").show("normal")
        $("#tap2,#tap3,#tap4,#tap5,#tap6,#tap7,#tap8,#tap9,#tap1,#tap11,#tap12").hide("normal")
    })
    $("#11").click(function () {
        $("#tap11").show("normal")
        $("#tap2,#tap3,#tap4,#tap5,#tap6,#tap7,#tap8,#tap9,#tap10,#tap1,#tap12").hide("normal")
    })
    $("#12").click(function () {
        $("#tap12").show("normal")
        $("#tap2,#tap3,#tap4,#tap5,#tap6,#tap7,#tap8,#tap9,#tap10,#tap11,#tap1").hide("normal")
    })
    $("#btn-cmt").click(function()
    {
        var ten=$("#tbx-name").val();
        var cmt=$("#tbx-cmt").val();
        var s="<tr><td>"+ten+"</td><td>"+cmt+"</td></tr>";
        $("#tbl").append(s);
    })
});
