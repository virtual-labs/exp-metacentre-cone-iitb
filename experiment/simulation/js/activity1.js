var chart;
let maindiv = document.getElementById('pannelcreate');
function activity1() {
    let text = `
    <div class='divide'>
        <div style='margin-top: 2vw;'>
            <br>
            <h4 class="center-text fs-20px fw-600">Fluid Mechanics: Buoyancy and Floatation</h4>

            <div class="fs-16px">
            <p style="text-align: center">Metacentre and stability of cone</p>
            </div>

            <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
        </div>
    </div>
    `;
    maindiv.innerHTML = text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
//for starting first activity
function start_act1() {
    let temp_btn = document.getElementById('temp-btn-1');
    if (temp_btn) {
        temp_btn.remove();
    }
    calculation();
    //draw_plot();
    let btn_text = get_collapse_btn_text("Activity 1", "tb1-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-box'>
        <p style="font-weight: 400; font-size: 18px;">
            A solid cone having specific gravity 0.8 floats in water with apex down. Find the  metacentre and stability of the cone. Diameter of the cone is 1 m and height of the cone is ${H} m.
        </p>
        <br>

        <p style="text-align:center"><img src="images/ConeDia.png" style="width:30%"></p>
        <br>
        
        <div class="row">
            <p style="font-weight: 500; font-size: 18px;">Radius of the cone</p>
            <div class="col-2"></div>
            <div class="col-4">
                <p style="font-weight: 400; font-size: 18px;">
                    $$ r = \\frac{D}{2} \\quad m $$
                </p>
            </div>
            <div class="col-6"></div>
        </div>
        <div class="row">
            <div class="col-2"></div>
            <div class="col-4">
                <p style="text-align: center; font-weight: 400; font-size: 18px;"><span style="display: inline-block">$$ r = $$ </span>
                <input type='text' class='form-control' style='display: inline-block !important; width: 100px;' id='radius-inp'><span id='radius-val-sp'></span> m
                <button class='btn btn-info' style='position: relative; left: 4vw; color:#fff;' onclick='verify_radius();' id='temp-btn-radius' >Verify</button>
                 </p>
            </div>
            <div class="col-1"></div> <br>
        </div>
        
        <div id="tantheta-div" style="display: none">
            <div class="row">
                <div class="col-2"></div>
                <div class="col-4">
                    <p style="font-weight: 400; font-size: 18px;">
                        $$ tan\\theta = \\frac{r}{H} $$
                    </p>
                </div>
                <div class="col-6"></div>
            </div>
            <div class="row">
                <div class="col-2"></div>
                <div class="col-5">
                    <p style="text-align: center; font-weight: 400; font-size: 18px;"><span style="display: inline-block">$$ tan\\theta = $$ </span>
                    <input type='text' class='form-control' style='display: inline-block !important; width: 100px;' id='tan-inp'><span id='tan-val-sp'></span>
                    <button class='btn btn-info' style='position: relative; left: 3vw; color:#fff;' onclick='verify_tan();' id='temp-btn-tan' >Verify</button>
                    </p>
                </div>
                <div class="col-1"></div>
            </div> <br>
        </div>
        
        <div id="theta-div" style="display: none">
            <div class="row">
                <div class="col-2"></div>
                <div class="col-4">
                    <p style="font-weight: 400; font-size: 18px;">
                        $$ \\theta = tan^{-1}(r) $$
                    </p>
                </div>
                <div class="col-6"></div>
            </div>
            <div class="row">
                <div class="col-2"></div>
                <div class="col-5">
                    <p style="text-align: center; font-weight: 400; font-size: 18px;"><span style="display: inline-block">$$ \\theta = $$ </span>
                    <input type='text' class='form-control' style='display: inline-block !important; width: 100px;' id='theta-inp'><span id='theta-val-sp'></span><sup>o</sup>
                    <button class='btn btn-info' style='position: relative; left: 3vw; color:#fff;' onclick='verify_theta();' id='temp-btn-theta' >Verify</button>
                    </p>
                </div>
                <div class="col-1"></div>
            </div> <br>
        </div>
        
        <div id="coneweight-div" style="display: none">
            <p style="font-weight: 500; font-size: 18px;">Weight of the cone</p>
            <div class="row">
                <div class="col-2"></div>
                <div class="col-4">
                    <p style="font-weight: 400; font-size: 18px;">
                        $$ weight\\ of\\ cone (y) = \\rho_c * g * \\frac{1}{3} \\pi * r^2 * H $$
                    </p>
                </div>
                <div class="col-6"></div>
            </div>
            <div class="row">
                <div class="col-2"></div>
                <div class="col-6">
                    <p style="text-align: center; font-weight: 400; font-size: 18px;"><span style="display: inline-block">$$ weight\\ of\\ cone (y) = $$ </span>
                    <input type='text' class='form-control' style='display: inline-block !important; width: 100px;' id='coneweight-inp'><span id='coneweight-val-sp'></span>
                    <button class='btn btn-info' style='position: relative; left: 3vw; color:#fff;' onclick='verify_coneweight();' id='temp-btn-coneweight' >Verify</button>
                    </p>
                </div>
                <div class="col-1"></div>
            </div> <br>
        </div>
        
        <div id="waterdisplaced-div" style="display: none">
            <p style="font-weight: 500; font-size: 18px;">Weight of the water displaced</p>
            <div class="row">
                <div class="col-2"></div>
                <div class="col-4">
                    <p style="font-weight: 400; font-size: 18px;">
                        $$ z = \\rho_w * g * \\frac{1}{3} \\pi (h\\ tan\\theta)^2 $$
                        $$ weight\\ of\\ water\\ displaced = z * h^3 \\quad N $$
                    </p>
                </div>
                <div class="col-6"></div>
            </div>
            <div class="row">
                <div class="col-2"></div>
                <div class="col-8">
                    <p style="text-align: center; font-weight: 400; font-size: 18px;"><span style="display: inline-block">$$ weight\\ of\\ water\\ displaced = $$ </span>
                    <input type='text' class='form-control' style='display: inline-block !important; width: 100px;' id='waterdisplaced-inp'><span id='waterdisplaced-val-sp'></span> h<sup>3</sup> &nbsp;&nbsp; N
                    <button class='btn btn-info' style='position: relative; left: 3vw; color:#fff;' onclick='verify_waterdisplaced();' id='temp-btn-waterdisplaced'>Verify</button>
                    </p>
                </div>
                <div class="col-1"></div>
            </div> <br>
        </div>

        <div id="h-div" style="display: none">
            <p style="font-weight: 500; font-size: 18px;">For equilibrium</p>
            <div class="row">
                <div class="col-2"></div>
                <div class="col-4">
                    <p style="font-weight: 400; font-size: 18px;">
                        $$ height\\ of\\ cone = weight\\ of\\ water\\ displaced $$
                        $$ y = z * h^3 $$
                    </p>
                </div>
                <div class="col-6"></div>
            </div>
            <div class="row">
                <div class="col-2"></div>
                <div class="col-8">
                    <p style="text-align: center; font-weight: 400; font-size: 18px;"><span style="display: inline-block">$$ h = $$ </span>
                    <input type='text' class='form-control' style='display: inline-block !important; width: 100px;' id='h-inp'><span id='h-val-sp'></span> m
                    <button class='btn btn-info' style='position: relative; left: 3vw; color:#fff;' onclick='verify_h();' id='temp-btn-h'>Verify</button>
                    </p>
                </div>
                <div class="col-1"></div>
            </div> <br>
        </div>

        <div id="ag-div" style="display: none">
            <div class="row">
                <div class="col-2"></div>
                <div class="col-4">
                    <p style="font-weight: 400; font-size: 18px;">
                        $$ AG = \\frac{3}{4} H $$
                    </p>
                </div>
                <div class="col-6"></div>
            </div>
            <div class="row">
                <div class="col-2"></div>
                <div class="col-8">
                    <p style="text-align: center; font-weight: 400; font-size: 18px;"><span style="display: inline-block">$$ AG = $$ </span>
                    <input type='text' class='form-control' style='display: inline-block !important; width: 100px;' id='ag-inp'><span id='ag-val-sp'></span> m
                    <button class='btn btn-info' style='position: relative; left: 3vw; color:#fff;' onclick='verify_ag();' id='temp-btn-ag'>Verify</button>
                    </p>
                </div>
                <div class="col-1"></div>
            </div> <br>
        </div>

        <div id="ab-div" style="display: none">
            <div class="row">
                <div class="col-2"></div>
                <div class="col-4">
                    <p style="font-weight: 400; font-size: 18px;">
                        $$ AB = \\frac{3}{4} h $$
                    </p>
                </div>
                <div class="col-6"></div>
            </div>
            <div class="row">
                <div class="col-2"></div>
                <div class="col-8">
                    <p style="text-align: center; font-weight: 400; font-size: 18px;"><span style="display: inline-block">$$ AB = $$ </span>
                    <input type='text' class='form-control' style='display: inline-block !important; width: 100px;' id='ab-inp'><span id='ab-val-sp'></span> m
                    <button class='btn btn-info' style='position: relative; left: 3vw; color:#fff;' onclick='verify_ab();' id='temp-btn-ab'>Verify</button>
                    </p>
                </div>
                <div class="col-1"></div>
            </div> <br>
        </div>

        <div id="bg-div" style="display: none">
            <div class="row">
                <div class="col-2"></div>
                <div class="col-4">
                    <p style="font-weight: 400; font-size: 18px;">
                        $$ BG = AG - AB $$
                    </p>
                </div>
                <div class="col-6"></div>
            </div>
            <div class="row">
                <div class="col-2"></div>
                <div class="col-8">
                    <p style="text-align: center; font-weight: 400; font-size: 18px;"><span style="display: inline-block">$$ BG = $$ </span>
                    <input type='text' class='form-control' style='display: inline-block !important; width: 100px;' id='bg-inp'><span id='bg-val-sp'></span> m
                    <button class='btn btn-info' style='position: relative; left: 3vw; color:#fff;' onclick='verify_bg();' id='temp-btn-bg'>Verify</button>
                    </p>
                </div>
                <div class="col-1"></div>
            </div>
            <br>
        </div>

        <div id="i-div" style="display: none">
            <p>Moment of inertia of cone at water line</p>
            <div class="row">
                <div class="col-2"></div>
                <div class="col-4">
                    <p style="font-weight: 400; font-size: 18px;">
                        $$ d = h * tan\\theta $$
                        $$ I =\\frac{\\pi}{64} d^4 $$
                    </p>
                </div>
                <div class="col-6"></div>
            </div>
            <div class="row">
                <div class="col-2"></div>
                <div class="col-8">
                    <p style="text-align: center; font-weight: 400; font-size: 18px;"><span style="display: inline-block">$$ I = $$ </span>
                    <input type='text' class='form-control' style='display: inline-block !important; width: 100px;' id='i-inp'><span id='i-val-sp'></span> m<sup>4</sup>
                    <button class='btn btn-info' style='position: relative; left: 3vw; color:#fff;' onclick='verify_i();' id='temp-btn-i'>Verify</button>
                    </p>
                </div>
                <div class="col-1"></div>
            </div>
            <br>
        </div>

        <div id="volume-div" style="display: none">
            <div class="row">
                <div class="col-2"></div>
                <div class="col-4">
                    <p style="font-weight: 400; font-size: 18px;">
                        $$ volume =\\frac{\\pi}{4} (h\\ tan\\theta)^2 *h \\quad m^2 $$
                    </p>
                </div>
                <div class="col-6"></div>
            </div>
            <div class="row">
                <div class="col-2"></div>
                <div class="col-8">
                    <p style="text-align: center; font-weight: 400; font-size: 18px;"><span style="display: inline-block">$$ volume = $$ </span>
                    <input type='text' class='form-control' style='display: inline-block !important; width: 100px;' id='volume-inp'><span id='volume-val-sp'></span> m<sup>2</sup>
                    <button class='btn btn-info' style='position: relative; left: 3vw; color:#fff;' onclick='verify_volume();' id='temp-btn-volume'>Verify</button>
                    </p>
                </div>
                <div class="col-1"></div>
            </div>
            <br>
        </div>

        <div id="gm-div" style="display: none">
            <div class="row">
                <div class="col-2"></div>
                <div class="col-4">
                    <p style="font-weight: 400; font-size: 18px;">
                        $$ GM =\\frac{I}{volume} - BG \\quad m $$
                    </p>
                </div>
                <div class="col-6"></div>
            </div>
            <div class="row">
                <div class="col-2"></div>
                <div class="col-8">
                    <p style="text-align: center; font-weight: 400; font-size: 18px;"><span style="display: inline-block">$$ GM = $$ </span>
                    <input type='text' class='form-control' style='display: inline-block !important; width: 100px;' id='gm-inp'><span id='gm-val-sp'></span> m
                    <button class='btn btn-info' style='position: relative; left: 3vw; color:#fff;' onclick='verify_gm();' id='temp-btn-gm'>Verify</button>
                    </p>
                </div>
                <div class="col-1"></div>
            </div>
        </div>
        <canvas id="myChart" style="display: none"></canvas>
        <br>
        <div id="met-hg-div" style="display: none">
            <div class="row">
                <div class="col-6">
                    <p style="text-align: right; font-weight: 500">What is the height of the cone at neutral condition?</p>
                </div>
                <div class="col-2">
                    <input type='text' class='form-control' style='display: inline-block !important; width: 100px;' id='met-hg-inp'><span id='met-hg-val-sp'></span> m
                </div>
                <div class="col-1">
                    <button class='btn btn-info' style='position: relative; left: 3vw; color:#fff;' onclick='verify_met_hg();' id='temp-btn-met-hg'>Verify</button>
                </div>
            </div>
        </div>
    </div>`;
    maindiv.innerHTML += text;
    draw_plot();
    hide_all_steps();
    setTimeout(() => { show_step('tb1-box'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function calculation() {
    // block_rho = Math.floor(Math.random() * (100+1)) + 600;
    // console.log("rho of block= ", block_rho);
    H = (Math.random() * 2) + 1;
    H = parseFloat(H.toFixed(1));
    console.log("H= ", H);
    // calculate radius
    r = diameter / 2;
    console.log("r= ", r);
    // calculate tan theta
    tantheta_val = r / H;
    console.log("tan theta= ", tantheta_val);
    // calculate theta
    theta_val = Math.atan2(r, H) * (180 / Math.PI);
    theta_val = parseFloat(theta_val.toFixed(1));
    console.log("theta= ", theta_val);
    // calculate weight of the cone
    weight_cone = rho_cone * 1000 * gravity * (Math.PI / 3) * (Math.pow(r, 2)) * H;
    console.log("weight of cone (y)= ", weight_cone);
    // calculate weight of water displaced
    z = rho_water * gravity * (Math.PI / 3) * Math.pow((Math.tan((Math.PI * theta_val) / 180)), 2);
    console.log("z= ", z);
    // calculate h
    h = Math.pow((weight_cone / z), (1 / 3.0));
    console.log("h= ", h);
    // calculate AG
    AG = (3 / 4) * H;
    console.log("AG= ", AG);
    // calculate AB
    AB = (3 / 4) * h;
    console.log("AB= ", AB);
    // calculate BG
    BG = AG - AB;
    console.log("BG= ", BG);
    // calculate I
    let dia = 2 * h * Math.tan(Math.PI * theta_val / 180);
    I = (Math.PI / 64) * Math.pow(dia, 4);
    console.log("I= ", I);
    // calculate volume
    volume = (Math.PI / 3) * Math.pow((h * Math.tan((Math.PI * theta_val) / 180)), 2) * h;
    console.log("volume= ", volume);
    // calculate GM
    GM = (I / volume) - BG;
    console.log("GM= ", GM);
}
function graph_calculation() {
    for (let i = 1; i <= 3; i += 0.02) {
        g_H = i;
        g_r = g_diameter / 2;
        g_tantheta_val = g_r / g_H;
        g_theta_val = Math.atan2(g_r, g_H) * (180 / Math.PI);
        //g_theta_val = parseFloat(g_theta_val.toFixed(1));
        //console.log("theta= ",g_theta_val);
        g_weight_cone = g_rho_cone * 1000 * g_gravity * (Math.PI / 3) * (Math.pow(g_r, 2)) * g_H;
        g_z = g_rho_water * g_gravity * (Math.PI / 3) * Math.pow((Math.tan((Math.PI * g_theta_val) / 180)), 2);
        g_h = Math.pow((g_weight_cone / g_z), (1 / 3.0));
        g_AG = (3 / 4) * g_H;
        g_AB = (3 / 4) * g_h;
        g_BG = g_AG - g_AB;
        let g_dia = 2 * g_h * Math.tan(Math.PI * g_theta_val / 180);
        g_I = (Math.PI / 64) * Math.pow(g_dia, 4);
        g_volume = (Math.PI / 3) * Math.pow((g_h * Math.tan((Math.PI * g_theta_val) / 180)), 2) * g_h;
        g_GM = (g_I / g_volume) - g_BG;
        g_Hval.push(parseFloat(i.toFixed(2)));
        g_Mval.push(parseFloat(g_GM.toFixed(4)));
        g_Mval_abs.push(Math.abs(parseFloat(g_GM.toFixed(4))));
    }
    console.log(g_Hval);
    console.log(g_Mval);
    console.log(g_Mval_abs);
    mat_cen_hg = g_Hval[g_Mval_abs.indexOf(Math.min(...g_Mval_abs))];
    console.log(mat_cen_hg);
}
function draw_plot() {
    var ctx = document.getElementById('myChart');
    ctx.style.backgroundColor = 'white';
    // ctx.style.marginTop = '5px';
    // ctx.style.marginLeft = '10%';
    ctx.style.padding = '10px';
    ctx.style.borderRadius = '8px';
    if (typeof chart != 'undefined') {
        chart.destroy();
    }
    chart = new Chart(ctx, {
        type: 'scatter',
        data: {
            labels: g_Hval,
            datasets: [
                {
                    label: 'M',
                    data: g_Mval,
                    fill: false,
                    borderColor: 'blue',
                    tension: 0.5,
                    showLine: true,
                },
            ],
        },
        options: {
            maintainAspectRatio: true,
            scales: {
                y: {
                    title: {
                        display: true,
                        text: 'Meta-centric height in meters',
                        font: { size: 14, weight: 'bold' },
                    },
                    ticks: {
                        format: {
                            maximumFractionDigits: 4,
                            minimumFractionDigits: 4,
                        },
                    },
                },
                x: {
                    title: {
                        display: true,
                        text: 'Height in meters',
                        font: { size: 14, weight: 'bold' },
                    },
                },
            },
            plugins: {
                title: {
                    display: true,
                    text: `Meta Centre vs Height of Cone`,
                    font: { size: 18 },
                },
                legend: { labels: { font: { size: 14, weight: 'bold' } } },
            },
        },
    });
}
function verify_radius() {
    let btn = document.getElementById('temp-btn-radius');
    let radius_inp = document.getElementById('radius-inp');
    let sp1 = document.getElementById('radius-val-sp');
    if (!verify_values(parseFloat(parseFloat(radius_inp.value).toFixed(2)), parseFloat(r.toFixed(2)))) {
        alert(`incorrect value of radius`);
        return;
    }
    radius_inp.remove();
    sp1.innerText = `${parseFloat(r.toFixed(2))}`;
    //btn.remove();
    if (btn) {
        btn.remove();
    }
    let div = (document.getElementById('tantheta-div'));
    div.style.display = 'block';
}
function verify_tan() {
    let btn = document.getElementById('temp-btn-tan');
    let tan_inp = document.getElementById('tan-inp');
    let sp2 = document.getElementById('tan-val-sp');
    if (!verify_values(parseFloat(parseFloat(tan_inp.value).toFixed(2)), parseFloat(tantheta_val.toFixed(2)))) {
        alert(`incorrect value of height of tan theta`);
        return;
    }
    tan_inp.remove();
    sp2.innerText = `${parseFloat(tantheta_val.toFixed(2))}`;
    //btn.remove();
    if (btn) {
        btn.remove();
    }
    let div = (document.getElementById('theta-div'));
    div.style.display = 'block';
}
function verify_theta() {
    let btn = document.getElementById('temp-btn-theta');
    let theta_inp = document.getElementById('theta-inp');
    let sp3 = document.getElementById('theta-val-sp');
    if (!verify_values(parseFloat(parseFloat(theta_inp.value).toFixed(2)), parseFloat(theta_val.toFixed(2)))) {
        alert(`incorrect value of theta`);
        return;
    }
    theta_inp.remove();
    sp3.innerText = `${parseFloat(theta_val.toFixed(2))}`;
    //btn.remove();
    if (btn) {
        btn.remove();
    }
    let div = (document.getElementById('coneweight-div'));
    div.style.display = 'block';
}
function verify_coneweight() {
    let btn = document.getElementById('temp-btn-coneweight');
    let coneweight_inp = document.getElementById('coneweight-inp');
    let sp4 = document.getElementById('coneweight-val-sp');
    if (!verify_values(parseFloat(parseFloat(coneweight_inp.value).toFixed(2)), parseFloat(weight_cone.toFixed(2)))) {
        alert(`incorrect value of weight of the cone`);
        return;
    }
    coneweight_inp.remove();
    sp4.innerText = `${parseFloat(weight_cone.toFixed(2))}`;
    //btn.remove();
    if (btn) {
        btn.remove();
    }
    let div = (document.getElementById('waterdisplaced-div'));
    div.style.display = 'block';
}
function verify_waterdisplaced() {
    let btn = document.getElementById('temp-btn-waterdisplaced');
    let waterdisplaced_inp = document.getElementById('waterdisplaced-inp');
    let sp5 = document.getElementById('waterdisplaced-val-sp');
    if (!verify_values(parseFloat(parseFloat(waterdisplaced_inp.value).toFixed(2)), parseFloat(z.toFixed(2)))) {
        alert(`incorrect value of weight of water displaced`);
        return;
    }
    waterdisplaced_inp.remove();
    sp5.innerText = `${parseFloat(z.toFixed(2))}`;
    //btn.remove();
    if (btn) {
        btn.remove();
    }
    let div = (document.getElementById('h-div'));
    div.style.display = 'block';
}
function verify_h() {
    let btn = document.getElementById('temp-btn-h');
    let h_inp = document.getElementById('h-inp');
    let sp6 = document.getElementById('h-val-sp');
    if (!verify_values(parseFloat(parseFloat(h_inp.value).toFixed(2)), parseFloat(h.toFixed(2)))) {
        alert(`incorrect value of h`);
        return;
    }
    h_inp.remove();
    sp6.innerText = `${parseFloat(h.toFixed(2))}`;
    //btn.remove();
    if (btn) {
        btn.remove();
    }
    let div = (document.getElementById('ag-div'));
    div.style.display = 'block';
}
function verify_ag() {
    let btn = document.getElementById('temp-btn-ag');
    let ag_inp = document.getElementById('ag-inp');
    let sp7 = document.getElementById('ag-val-sp');
    if (!verify_values(parseFloat(parseFloat(ag_inp.value).toFixed(2)), parseFloat(AG.toFixed(2)))) {
        alert(`incorrect value of AG`);
        return;
    }
    ag_inp.remove();
    sp7.innerText = `${parseFloat(AG.toFixed(2))}`;
    //btn.remove();
    if (btn) {
        btn.remove();
    }
    let div = (document.getElementById('ab-div'));
    div.style.display = 'block';
}
function verify_ab() {
    let btn = document.getElementById('temp-btn-ab');
    let ab_inp = document.getElementById('ab-inp');
    let sp8 = document.getElementById('ab-val-sp');
    if (!verify_values(parseFloat(parseFloat(ab_inp.value).toFixed(2)), parseFloat(AB.toFixed(2)))) {
        alert(`incorrect value of AB`);
        return;
    }
    ab_inp.remove();
    sp8.innerText = `${parseFloat(AB.toFixed(2))}`;
    //btn.remove();
    if (btn) {
        btn.remove();
    }
    let div = (document.getElementById('bg-div'));
    div.style.display = 'block';
}
function verify_bg() {
    let btn = document.getElementById('temp-btn-bg');
    let bg_inp = document.getElementById('bg-inp');
    let sp9 = document.getElementById('bg-val-sp');
    if (!verify_values(parseFloat(parseFloat(bg_inp.value).toFixed(2)), parseFloat(BG.toFixed(2)))) {
        alert(`incorrect value of BG`);
        return;
    }
    bg_inp.remove();
    sp9.innerText = `${parseFloat(BG.toFixed(2))}`;
    //btn.remove();
    if (btn) {
        btn.remove();
    }
    let div = (document.getElementById('i-div'));
    div.style.display = 'block';
}
function verify_i() {
    let btn = document.getElementById('temp-btn-i');
    let i_inp = document.getElementById('i-inp');
    let sp10 = document.getElementById('i-val-sp');
    if (!verify_values(parseFloat(parseFloat(i_inp.value).toFixed(2)), parseFloat(I.toFixed(2)))) {
        alert(`incorrect value of I`);
        return;
    }
    i_inp.remove();
    sp10.innerText = `${parseFloat(I.toFixed(2))}`;
    //btn.remove();
    if (btn) {
        btn.remove();
    }
    let div = (document.getElementById('volume-div'));
    div.style.display = 'block';
}
function verify_volume() {
    let btn = document.getElementById('temp-btn-volume');
    let volume_inp = document.getElementById('volume-inp');
    let sp11 = document.getElementById('volume-val-sp');
    if (!verify_values(parseFloat(parseFloat(volume_inp.value).toFixed(2)), parseFloat(volume.toFixed(2)))) {
        alert(`incorrect value of volume`);
        return;
    }
    volume_inp.remove();
    sp11.innerText = `${parseFloat(volume.toFixed(2))}`;
    //btn.remove();
    if (btn) {
        btn.remove();
    }
    let div = (document.getElementById('gm-div'));
    div.style.display = 'block';
}
function verify_gm() {
    let btn = document.getElementById('temp-btn-gm');
    let gm_inp = document.getElementById('gm-inp');
    let sp12 = document.getElementById('gm-val-sp');
    if (!verify_values(parseFloat(parseFloat(gm_inp.value).toFixed(2)), parseFloat(GM.toFixed(2)))) {
        alert(`incorrect value of GM`);
        return;
    }
    gm_inp.remove();
    sp12.innerText = `${parseFloat(GM.toFixed(2))}`;
    //btn.remove();
    if (btn) {
        btn.remove();
    }
    load_question();
    graph_calculation();
}
function verify_met_hg() {
    let btn = document.getElementById('temp-btn-met-hg');
    let met_hg_inp = document.getElementById('met-hg-inp');
    let sp13 = document.getElementById('met-hg-val-sp');
    if (!verify_values(parseFloat(parseFloat(met_hg_inp.value).toFixed(2)), parseFloat(mat_cen_hg.toFixed(2)))) {
        alert(`incorrect value of GM`);
        return;
    }
    met_hg_inp.remove();
    sp13.innerText = `${parseFloat(mat_cen_hg.toFixed(2))}`;
    //btn.remove();
    if (btn) {
        btn.remove();
    }
    exp_complete();
}
function load_question() {
    // let btn: HTMLButtonElement = <HTMLButtonElement>(
    // 	document.getElementById('act1-btn6')
    // );
    // btn && btn.remove();
    let div = (document.getElementById('tb1-box'));
    div.innerHTML += `
   <br>
   <div id="act1-q-box-div">
   
   </div>
   `;
    let ques = `Please comment on the stability.`;
    let opt = ['Stable', 'Unstable'];
    ans_a1 = GM < 0 ? '2' : '1';
    let box = (document.getElementById('act1-q-box-div'));
    let question = new Question_Options(ques, opt, ans_a1, box, 'act1-q-box', move_to_act2);
    question.load_question();
    let que = (document.querySelector('#act1-q-box-question-div h5'));
    que.classList.remove('fs-16px');
}
function move_to_act2() {
    let div = (document.getElementById('tb1-box'));
    let text = ans_a1 === '1' ? 'stable' : 'unstable';
    alert(`You are correct, it is ${text}.`);
    show_graph();
    let div1 = (document.getElementById('act1-q-box-div'));
    div1.style.display = 'none';
    let div2 = (document.getElementById('met-hg-div'));
    div2.style.display = 'block';
    // 	div.innerHTML += `
    //    <button class='btn btn-info btn-sm std-btn' id="act1-btn8" onclick='draw_plot();'>Next</button>
    //    `;
}
function show_graph() {
    draw_plot();
    let div = (document.getElementById('myChart'));
    div.style.display = 'block';
}
function exp_complete() {
    let btn = (document.getElementById('temp-btn-act2-gm'));
    btn && btn.remove();
    alert('Experiment completed');
}
activity1();
// Find the height of the cone at neutral condition
// Math.min(...g_Mval_abs)
// g_Hval[40]
//# sourceMappingURL=activity1.js.map