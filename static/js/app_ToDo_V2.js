$(document).ready(function(){
    
    $(".btnEdit").click(function(){
        $("#myModal").modal("show");
    })

    function checkDue()
    {
        var today_Due=new Date()
        var today_DMY=new Date(today_Due.getFullYear(),today_Due.getMonth(),today_Due.getDate())
        $('p.txtDate').each(function(){
        var dateStr=$(this).text()
        var date=dateStr.split("/")
        var date=new Date(date[2],date[1]-1,date[0])
        if (today_DMY.getTime()-date.getTime()>=0)
        {
            $(this).addClass("text-danger")
        }
    })
    }
    $('#saveButtonModel').on(checkDue)
    checkDue()
    function KtNewTask()
    {
        var textNewTask=$("#txtNewTask").val()
        if (textNewTask.trim()=="")
        {
            alert("Bạn chưa nhập công việc")
            return false
        }
        return true
    }

    function KtDate()
    {
        var today=new Date();
        var date=new Date($("#dateTask").val())
        if ($("#dateTask").val().trim()=="")
        {
            alert("Bạn chưa nhập ngày")
            return false
        }
        return true
    }

    function ThemTask()
    {
        var textNewTask=$("#txtNewTask").val()
        var date=new Date($("#dateTask").val())
        date.getDate()
        var dateTask=(date.getDate()<10?"0"+date.getDate():date.getDate())+"/"+((date.getMonth()+1)<10?"0"+(date.getMonth()+1):(date.getMonth()+1))+"/"+date.getFullYear()
        if (KtNewTask() && KtDate())
        {
        $("#listTask").append
        (
            `
            <div class="row">
                <div class="form-check col-6">
                    <input type="checkbox" name="" class="form-check-input cbComplete">
                    <label id="" for="cbComplete" class="lableTask form-check-label text-break">`+textNewTask+`</label>
                </div>
                <div class="col-3">
                    <div class="text-end text-muted">
                        <div class="d-inline d-flex small align-items-center">
                            <i class="fas fa-info-circle mr-2"></i>
                            <p class="mb-0 txtDate" data-mdb-toggle="tooltip" title="Due date">`+dateTask+`</p>
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <button class="btn text-info p-0 btnEdit" title="Edit todo"><i class="fas fa-pencil-alt mr-2"></i></button>
                    <button class="btn text-danger p-0" title="Delete todo" id="btnDelete"><i class="fas fa-trash-alt"></i></button>
                </div>
            </div>
            `
        )
        }
    }
    $("#btnAdd").click(ThemTask)

    // $("#listTask").on("click",".btnEdit",function(){
    //     $(".btnEdit").click(function(){
    //         $("#myModal").modal("show");
    //     })
    // })

    function XoaTask()
    {
        $(this).closest(".row").remove()
    }
    $(document).on("click","#btnDelete",XoaTask)

    var curr_date_lo="",curr_task_lo="";

    $('#saveButtonModel').click(function(){
        var name_task_edit=$('#taskName_edit').val()
        var date_task_edit=$('#dueDate_edit').val()
        if (name_task_edit.trim()=="")
        {
            alert("Bạn chưa nhập công việc")
            return false
        }
        if (date_task_edit.trim()=="")
        {
            alert("Bạn chưa nhập ngày")
            return false
        }
        var date_task_edit=date_task_edit.split("-")
        var date_task_edit=date_task_edit[2]+"/"+date_task_edit[1]+"/"+date_task_edit[0]
        $("label.lableTask:contains('"+curr_task_lo+"')").text(name_task_edit)
        $("p.txtDate:contains('"+curr_date_lo+"')").text(date_task_edit)
        
        var today=new Date()
        var today_DMY=new Date(today.getFullYear(),today.getMonth(),today.getDate())
        var date=date_task_edit.split("/")
        var date=new Date(date[2],date[1]-1,date[0])
        if (today_DMY.getTime()-date.getTime()>=0)
        {
            $("p.txtDate:contains('"+date_task_edit+"')").addClass("text-danger")
        }
        else
        {
            $("p.txtDate:contains('"+date_task_edit+"')").removeClass("text-danger")
        }

        $("#myModal").modal("hide");
    })

    function Edit_Task(){
        curr_task=$(this).closest(".row").find(".lableTask").text()
        curr_date=$(this).closest(".row").find(".txtDate").text()
        curr_date_lo=curr_date
        curr_task_lo=curr_task
        $('#taskName_edit').val(curr_task)
        par_date=curr_date.split("/")
        $('#dueDate_edit').val(par_date[2]+"-"+par_date[1]+"-"+par_date[0])
    }
    $('.btnEdit').click(Edit_Task)

    $(".cbComplete").change(function(){
        var dateStr=$(this).closest(".row").find(".txtDate").text()
        var dateParts=dateStr.split("/")
        var date=new Date(dateParts[2],dateParts[1]-1,dateParts[0])
        var today=new Date()
        var today_DMY=new Date(today.getFullYear(),today.getMonth(),today.getDate())

        if (this.checked)
        {
            $(this).next().addClass("strike")
            $(this).closest(".row").find(".txtDate").removeClass("text-danger")
            $(this).closest(".row").find(".txtDate").addClass("text-success")
        }
        else
        {
            $(this).next().removeClass("strike")
            $(this).closest(".row").find(".txtDate").removeClass("text-success")
            if (today_DMY.getTime()-date.getTime()>=0)
            {
                $(this).closest(".row").find(".txtDate").addClass("text-danger")
            }
        }
    })

})