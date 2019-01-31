import React from "react";
import { NavLink } from "react-router-dom";
const Servicios = () =>  {
	var contenidoDiv = '<div class="contenedor-galerias row">';
    const galerias = [
        { src:'fiesta-anual-2018', photos:'192', name: 'Fiesta anual 2018'},
        { src:'fiesta-anual-mty-2018', photos:'29', name: 'Fiesta anual MTY 2018'},
        { src:'fiesta-anual-mx-2018', photos:'51', name: 'Fiesta anual CDMX 2018'},
        { src:'dia-muertos-2018', photos:'41', name: 'Día de muertos 2018'},
        { src:'paseo-anual-2018', photos:'105', name: 'Paseo Anual GDL 2018'},
        { src:'paseo-anual-mty-2018', photos:'30', name: 'Paseo Anual MTY 2018'}
        
    ];

    for(var key in galerias) {
        contenidoDiv+='<div  class="sembla col-xs-12 col-sm-12 col-md-6 col-lg-4"><div class="contenedorGaleria"><a href="#/galerias/'+ galerias[key]['src'] +'/' + galerias[key]['photos'] +'"><img class="logoesr" src="../images/'+galerias[key]['src']+'/1.jpg" alt="'+galerias[key]['name']+'" /><div class="filtro"></div><div class="texto"><div class="line1"></div><h3>'+galerias[key]['name']+'</h3><label> <i class="fa fa-plus" aria-hidden="true"></i></label><div class="line2"></div></div></a></div></div>';
    }
    
    contenidoDiv+= '</div>';
	return (
		<div className="Ers">
			<div className="SliderI">
				<div className="SliderI-header">
					<div className="demo carousel slide" data-ride="carousel">
						<div className="carousel-inner">
							<div className="carousel-item active">
								<img className="imgNosotros" src="../images/bg-responsabilidad.png" alt="Damsa te escucha" />

								<div className="carousel-caption d-md-block" >
									<h1  className="sliderh1">DAMSA  </h1>
									<p className="sliderP2">TE ESCUCHA</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="seccion2" >
				<div className="row justify-content-center">
					<div  className="sembla col-xs-12 col-sm-8 col-md-5 col-lg-6">
						<img className="logoesr" src="../images/grupos_interes.png" alt="Responsabilidad social" />
					</div>

					<div   className="sembla col-xs-12 col-sm-10 col-md-7 col-lg-6">
						<h1 className="title text-left"><b>RESPONSABILIDAD SOCIAL</b></h1>
						<p className="subtitle text-left"> te vas a querer quedar con nosotros </p>
						<div className="dark left"></div>

						<p className="text-left text-esr cont2"> En DAMSA entendemos que la Responsabilidad Social es la integración voluntaria de los intereses de la empresa con las preocupaciones sociales, laborales, medio ambientales y de respeto a los derechos humanos que surgen de la relación y el diálogo transparente con sus grupos de interés.</p>
						
						<div className="row text-left">
							<div className="" >
								<div className="decoration-none">  <h4 className="texto ers2" > Reporte de Responsabilidad Social</h4> </div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="seccion3">
				<div className="row">
					<div   className="sembla col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<h1 className="culturaTitulo" ><b>NUESTRA CULTURA <br/>INCLUYENTE</b></h1>
						<p className="culturaP"> Buscamos incidir en nuestro entorno laboral y social para facilitar la promoción, la capacitación y el empleo de las personas en situación vulnerable con el objetivo de favorecer su inclusión a la actividad productiva, su desarrollo y proyección laboral y el respeto pleno de sus derechos humanos, mediante el impulso de una Nueva Cultura Laboral Incluyente.</p>

						<div className="row justify-content-center">
							<div className="col-sm-12" >
								<div className="decoration-none">  <h4 className="texto ers2 center" > Reporte de identidad DAMSA</h4> </div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="seccion6" >
				<div className="row">
					<div   className="sembla col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<div className="title">NUESTRAS ACTIVIDADES</div>
						<p className="subtitle"> te vas a querer quedar con nosotros </p>
						<div className="dark"></div>	
					</div>
				</div>

				<div dangerouslySetInnerHTML={{__html:contenidoDiv}} ></div>
				
				<div className="row">
					<div className="btngaleria col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<div className="row justify-content-center">
							<div className="col-sm-12" >
								<NavLink to="/galeria"> 
									<h4 className=" ers2 center"  > GALERIAS</h4>
								</NavLink>
							</div>
						</div>
					</div>
				</div>
			</div>


			<div className="seccion1" >
				<div className="row">
					<div   className="sembla col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<div className="title">CAUSAS QUE APOYAMOS</div>
						<p className="subtitle"> te vas a querer quedar con nosotros </p>
						<div className="dark"></div>
					</div>
				</div>
				<div className="container-fluid">
					<div className="row">
						<div className="valoresh col-xs-12 col-sm-6 col-md-4 col-lg-4">
							<div className="borde" >
							<img className="logosapoyos" src="../images/esr-suenos.jpg" alt="Sueños y Esperanzas A.C." />

							<div className="contenedor1">
							<p className="cont1" >Trabajan para brindar una nueva oportunidad de vida a niños que han sufrido maltrato y abandono por parte de sus familias. </p>
							</div>
							<a href="http://www.suenosyesperanzas.org/" target="_blank" rel="noopener noreferrer"><p className="vermas"> Conoce más</p></a>
							</div>
						</div>

						<div className="valoresh col-xs-12 col-sm-6 col-md-4 col-lg-4">
							<div className="borde" >
							<img className="logosapoyos" src="../images/esr-pronatura.jpg" alt="ProNatura" />

							<div className="contenedor1">
							<p className="cont1"> Organización ambiental cuya misión es conservar la flora, la fauna y los ecosistemas prioritarios promoviendo un desarrollo de la sociedad en armonía con la naturaleza. </p>
							</div>
							<a href="http://www.pronatura.org.mx/" target="_blank" rel="noopener noreferrer"><p className="vermas"> Conoce más</p></a>
							</div>
						</div>

						<div className="valoresh col-xs-12 col-sm-6 col-md-4 col-lg-4">
							<div className="borde" >
							<img className="logosapoyos" src="../images/esr-lazos.jpg" alt="Lazos" />

							<div className="contenedor1">
							<p className="cont1"> Organización que busca la transformación de las comunidades escolares, impulsando una educación integral basada en valores.</p>

							
							</div>
							<a href="https://www.lazos.org.mx/" target="_blank" rel="noopener noreferrer"><p className="vermas"> Conoce más</p></a>
							</div>
						</div>

						<div className="valoresh col-xs-12 col-sm-6 col-md-4 col-lg-4">
							<div className="borde" >
							<img className="logosapoyos" src="../images/esr-fm4.jpg" alt="FM4 Paso Libre" />

							<div className="contenedor1">
							<p className="cont1"> Proyecto de intervención integral en la ZMG a través de la experiencia directa con la realidad de la migración en tránsito en otras zonas de la República.</p>

							
							</div>
							<a href="https://fm4pasolibre.org/" target="_blank" rel="noopener noreferrer"><p className="vermas"> Conoce más</p></a>
							</div>
						</div>

						<div className="valoresh col-xs-12 col-sm-6 col-md-4 col-lg-4">
							<div className="borde" >
							<img className="logosapoyos" src="../images/esr-taiyari.jpg" alt="Taiyari" />

							<div className="contenedor1">
							<p className="cont1"> Somos una asociación civil comprometida a apoyar a los niños de escasos recursos con enfermedades del corazón y a sus familias.</p>

							
							</div>
							<a href="https://www.taiyari.org/" target="_blank" rel="noopener noreferrer"><p className="vermas"> Conoce más</p></a>
							</div>
						</div>

						<div className="valoresh col-xs-12 col-sm-6 col-md-4 col-lg-4">
							<div className="borde" >
							<img className="logosapoyos" src="../images/esr-complices.jpg" alt="Complices A.C." />

							<div className="contenedor1">
							<p className="cont1"> Somos una asociación civil sin fines de lucro legalmente constituida y reconocida que apoya a toda persona que vive con cáncer en el estado de Jalisco.</p>

							
							</div>
							<a href="https://www.complicesac.org/" target="_blank" rel="noopener noreferrer"><p className="vermas"> Conoce más</p></a>
							</div>
						</div>

						<div className="valoresh -xs-12 col-sm-6 col-md-4 col-lg-4">
							<div className="borde" >
							<img className="logosapoyos" src="../images/esr-telocompro.jpg" alt="Te lo Compro" />

							<div className="contenedor1">
							<p className="cont1"> Buscamos evitar la deforestación en América Latina trabajando con empresas que sean agentes de cambio reconociendo que el reciclaje es importante, en las empresas.</p>

							
							</div>
							<a href="http://aquitelocompro.com/" target="_blank" rel="noopener noreferrer"><p className="vermas"> Conoce más</p></a>
							</div>
						</div>

						<div className="valoresh col-xs-12 col-sm-6 col-md-4 col-lg-4">
							<div className="borde" >
							<img className="logosapoyos" src="../images/esr-extra.png" alt="Extra" />

							<div className="contenedor1">
							<p className="cont1"> Promueve la conciencia ecológica a través de la donación de árboles, forestaciones y reforestaciones con el fin de mejorar la calidad del aire, del clima y del paisaje de la ZMG.</p>

							
							</div>
							<a href="https://bosqueurbanoextra.org.mx/" target="_blank" rel="noopener noreferrer"><p className="vermas"> Conoce más</p></a>
							</div>
						</div>
						
						<div className="valoresh col-xs-12 col-sm-6 col-md-4 col-lg-4">
							<div className="borde" >
							<img className="logosapoyos" src="../images/esr-kamami.jpg" alt="Kamami" />

							<div className="contenedor1">
							<p className="cont1"> Apoya el desarrollo de niñas víctimas de abuso y violencia intrafamiliar que no cuentan con ningún tipo de recursos para su recuperación.</p>

							
							</div>
							<a href="https://www.casakamami.org/index.html" target="_blank" rel="noopener noreferrer"><p className="vermas"> Conoce más</p></a>
							</div>
						</div>
					</div>
				</div>

			</div>













		</div>
	);
}

export default Servicios;
