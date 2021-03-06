// Model for Tbpregunta entity
/**
 * 
 */
define(
		[
		// librerias javascript
		'underscore', 'backbone' ],
		function(_, Backbonel) {

			var preguntaModel = Backbone.Model
					.extend({// se extienden todos los métodos y atributos de
						// la clase Backbone.Model en el modelo actual.

						// valores predeterminados del modelo actual
						urlRoot : "http://localhost:9080/PQRsWEB/webresources/edu.poli.proyecto.test.tbpregunta",// direccion
						// url
						// de
						// cada
						// modelo
						// y
						// coleccion
						idAttribute : 'idpregunta',
						defaults : {
							pregunta : ""
						},
						toViewJson : function() {// contiene métodos para la
							// creación y manipulación
							// de objetos JSON como
							// cadenas, objeto valor,
							var result = this.toJSON(); // displayName property
							// is used to render
							// item in the list
							result.displayName = this.get('idpregunta');// Objeto
							// valor
							// es
							// una
							// cadena,
							// número,
							// booleano,
							// nulo,
							// objeto
							// o
							// arreglo
							// devuelve un arreglo cuyos elementos
							// correspondientes
							// a las propiedades enumerables que seencuentran
							// directamente en el object result.
							return result;
						},

						sync : function(method, model, options) {// código de
							// manejo de
							// errores,configurados
							// en el
							// servidor
							// REST.
							options || (options = {});
							var errorHandler = {
								error : function(jqXHR, textStatus, errorThrown) {
									// TODO: put your error handling code here
									// If you use the JS client from the
									// different domain
									// (f.e. locally) then Cross-origin resource
									// sharing
									// headers has to be set on the REST server
									// side.
									// Otherwise the JS client has to be copied
									// into the
									// some (f.e. the same) Web project on the
									// same domain
									alert('Unable to fulfil the request');
								}
							}

							if (method == 'create') {
								options.url = 'http://localhost:9080/PQRsWEB/webresources/edu.poli.proyecto.test.tbpregunta';
							}
							var result = Backbone.sync(method, model, _.extend(
									options, errorHandler));
							return result;
						}

					}); // se añade
			return preguntaModel;
		});