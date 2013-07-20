/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package tur.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import tur.bean.BGeometry;
import tur.bean.BHotel;
import tur.bean.BImagen;
import tur.bean.BRestaurant;

/**
 *
 * @author ruben
 */
public class DAORestaurant {

    Connection conn = null;
    PreparedStatement pstmt = null;
    ResultSet rs = null;
    //imagen
    Connection conni = null;
    PreparedStatement pstmti = null;
    ResultSet rsi = null;
    //habitacion

    public DAORestaurant(Connection conn) {
        this.conn = conn;
        this.conni = conn;

    }

    public void registrarrestaurant(BRestaurant bRestaurant) {

        try {
            /*
         insert_restaurant(idproducto character(10),
				          nombre character(100),
				          clase character(50),
				          estado boolean,				          
					  idrestaurant varchar(10),
					  categoria character(20),
					  tipo character(40),
					  descripcion TEXT,
					  direccion character(100),   
					  telefono character(50),
					  sitio_web character(100),
					  horario_de_atencion character(100),  
					  especialidad character(100),
					  precio_promedio character(100),
					  formas_de_pago character(100),					
					  lat numeric,
					  lon numeric
				           )
             */
            String sql = "SELECT insert_restaurant('" 
                    + bRestaurant.getIdproducto() + "',"
                    + " '" + bRestaurant.getNombre() + "',"
                    + " '" + bRestaurant.getClase() + "', "
                    + bRestaurant.isEstado() + ", "
                    + "'" + bRestaurant.getIdrestaurant() + "' ,"
                    + " '" + bRestaurant.getCategoria() + "',"
                    + " '" + bRestaurant.getTipo()+ "',"
                    + " '" + bRestaurant.getDescripcion() + "', "
                    + "'" + bRestaurant.getDireccion() + "', "
                    + "'" + bRestaurant.getTelefono() + "',"
                    + "'" + bRestaurant.getSitio_web()+ "',"
                    + "'" + bRestaurant.getHorario_de_atencion()+ "',"
                    + "'" + bRestaurant.getEspecialidad() + "',"
                      + "'" + bRestaurant.getPrecio_promedio()+ "',"
                    + "'" + bRestaurant.getFormas_de_pago()+ "',"
                    + bRestaurant.getGeometry().getLatitud() + ", "
                    + bRestaurant.getGeometry().getLongitud() + ");";

            System.out.println(sql);
            String sql_img = "";
            for (int i = 0; i < bRestaurant.getImagenes().size(); i++) {

                sql_img += "INSERT INTO imagen(url,idproducto) "
                        + "VALUES ('" + bRestaurant.getImagenes().get(i).getUrl()
                        + "', '" + bRestaurant.getImagenes().get(i).getIdproducto() + "');";
            }



            sql = sql + sql_img;
            System.out.println("SQL==========: " + sql);
            pstmt = conn.prepareStatement(sql);
            pstmt.executeUpdate();
            /*pstmt.executeQuery();
             conn.commit();*/

        } catch (SQLException ex) {
            System.out.println("erorr en sql" + ex.toString());
            Logger.getLogger(DAOHotel.class.getName()).log(Level.SEVERE, null, ex);
        }

    }

    public List listarrestaurant() {
        List list = new LinkedList();
        try {
            String sql = "SELECT idproducto, nombre, clase, estado, idrestaurant, categoria, tipo, \n" +
"       descripcion, direccion, telefono, sitio_web, horario_de_atencion, \n" +
"       especialidad, precio_promedio, formas_de_pago, lat, lon\n" +
"  FROM select_restaurant;";
            //System.out.println("--:" + sql);
            pstmt = conn.prepareStatement(sql);
            rs = pstmt.executeQuery();
            while (rs.next()) {
                BRestaurant bRestaurant = new BRestaurant();
                BGeometry bGeometry = new BGeometry();
                //Producto                
                bRestaurant.setIdproducto(rs.getString("idproducto"));
                bRestaurant.setNombre(rs.getString("nombre"));
                bRestaurant.setClase(rs.getString("clase"));
                bRestaurant.setEstado(rs.getBoolean("estado"));
                //Restaurant
                bRestaurant.setIdrestaurant(rs.getString("idrestaurant"));
                bRestaurant.setCategoria(rs.getString("categoria"));
                bRestaurant.setDescripcion(rs.getString("descripcion"));
                bRestaurant.setDireccion(rs.getString("direccion"));
                bRestaurant.setTelefono(rs.getString("telefono"));
                bRestaurant.setSitio_web(rs.getString("sitio_web"));
                bRestaurant.setHorario_de_atencion(rs.getString("horario_de_atencion"));
                bRestaurant.setEspecialidad(rs.getString("especialidad"));
                bRestaurant.setPrecio_promedio(rs.getString("precio_promedio"));
                bRestaurant.setFormas_de_pago(rs.getString("formas_de_pago"));
                
                //Geometry
                bGeometry.setLatitud(rs.getDouble("lat"));
                bGeometry.setLongitud(rs.getDouble("lon"));
                bGeometry.setIdproducto(rs.getString("idproducto"));
                bGeometry.setCoordinates();
                bRestaurant.setGeometry(bGeometry);
                //Imagen
                bRestaurant.setImagenes(listarimagen(bRestaurant.getIdproducto()));
                list.add(bRestaurant);
            }
            pstmt.close();
            rs.close();
        } catch (SQLException ex) {
            System.out.println("Error en Listar Recurso: " + ex);
        }
        return list;
    }

    public ArrayList<BImagen> listarimagen(String id) {

        ArrayList<BImagen> list = new ArrayList<BImagen>();
        try {
            String sql = "SELECT url,  idproducto  FROM imagen where idproducto='" + id + "';";
            System.out.println("-----------SQL IMAGEN-----" + sql);
            pstmti = conni.prepareStatement(sql);
            rsi = pstmti.executeQuery();
            while (rsi.next()) {
                BImagen bImagen = new BImagen();
                bImagen.setUrl(rsi.getString("url"));     
                bImagen.setIdproducto(rsi.getString("idproducto"));
                list.add(bImagen);
            }
            pstmti.close();
            rsi.close();

        } catch (SQLException ex) {
            System.out.println("Error en Listar Imagen: " + ex);
        }
        return list;

    }
}
