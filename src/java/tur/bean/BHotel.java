/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package tur.bean;

import java.util.ArrayList;

/**
 *
 * @author ruben
 */
public class BHotel extends BProducto {

    private String idhotel;
    private String categoria;
    private String descripcion;
    private String direccion;
    private String telefono;
    private String sitio_web;
    private String correo_electronico;
    private String precio_de_habitacion;
    private String formas_de_pago;
    private BGeometry geometry;
    private ArrayList<BServiciosAdicional> bServiciosAdicional;
    private ArrayList<BImagen> imagenes;

    public String getIdhotel() {
        return idhotel;
    }

    public void setIdhotel(String idhotel) {
        this.idhotel = idhotel;
    }

    public String getCategoria() {
        return categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getSitio_web() {
        return sitio_web;
    }

    public void setSitio_web(String sitio_web) {
        this.sitio_web = sitio_web;
    }

    public String getCorreo_electronico() {
        return correo_electronico;
    }

    public void setCorreo_electronico(String correo_electronico) {
        this.correo_electronico = correo_electronico;
    }

    public String getPrecio_de_habitacion() {
        return precio_de_habitacion;
    }

    public void setPrecio_de_habitacion(String precio_de_habitacion) {
        this.precio_de_habitacion = precio_de_habitacion;
    }

    public String getFormas_de_pago() {
        return formas_de_pago;
    }

    public void setFormas_de_pago(String formas_de_pago) {
        this.formas_de_pago = formas_de_pago;
    }

    public BGeometry getGeometry() {
        return geometry;
    }

    public void setGeometry(BGeometry geometry) {
        this.geometry = geometry;
    }

    public ArrayList<BServiciosAdicional> getbServiciosAdicional() {
        return bServiciosAdicional;
    }

    public void setbServiciosAdicional(ArrayList<BServiciosAdicional> bServiciosAdicional) {
        this.bServiciosAdicional = bServiciosAdicional;
    }

    public ArrayList<BImagen> getImagenes() {
        return imagenes;
    }

    public void setImagenes(ArrayList<BImagen> imagenes) {
        this.imagenes = imagenes;
    }

    public void print() {

        System.out.println("idhotel :" + getIdhotel());
        System.out.println("categoria :" + getCategoria());
        System.out.println("direccion :" + getDireccion());
        System.out.println("telefono :" + getTelefono());
        System.out.println("sitio_web :" + getSitio_web());
        System.out.println("Correo Electronico :" + getCorreo_electronico());
        System.out.println("precio_hab :" + getPrecio_de_habitacion());
        System.out.println("formas de Pago :" + getFormas_de_pago());
        System.out.println("Latitud :" + getGeometry().getLatitud());
        System.out.println("Longitud :" + getGeometry().getLongitud());
        System.out.println("Servico Adicional:" + getbServiciosAdicional().size());
        System.out.println("Imagenes" + getImagenes().size());

    }
}
