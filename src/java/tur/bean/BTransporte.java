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
public class BTransporte extends BProducto {

    private String idtransporte;
    private String descripcion;
    private String direccion;
    private String telefono;
    private String sitio_web;
    private String horario_de_atencion;
    private String horario_de_salida;
    private String destinos;
    private BGeometry geometry;
    private ArrayList<BImagen> imagenes;

    public String getIdtransporte() {
        return idtransporte;
    }

    public void setIdtransporte(String idtransporte) {
        this.idtransporte = idtransporte;
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

    public String getHorario_de_atencion() {
        return horario_de_atencion;
    }

    public void setHorario_de_atencion(String horario_de_atencion) {
        this.horario_de_atencion = horario_de_atencion;
    }

    public String getHorario_de_salida() {
        return horario_de_salida;
    }

    public void setHorario_de_salida(String horario_de_salida) {
        this.horario_de_salida = horario_de_salida;
    }

    public String getDestinos() {
        return destinos;
    }

    public void setDestinos(String destinos) {
        this.destinos = destinos;
    }

    public BGeometry getGeometry() {
        return geometry;
    }

    public void setGeometry(BGeometry geometry) {
        this.geometry = geometry;
    }

    public ArrayList<BImagen> getImagenes() {
        return imagenes;
    }

    public void setImagenes(ArrayList<BImagen> imagenes) {
        this.imagenes = imagenes;
    }

    public void print() {

        System.out.println("idhotel :" + getIdtransporte());
         System.out.println("Nombre :" + getNombre());
        System.out.println("Descripcion :" + getDescripcion());
        System.out.println("direccion :" + getDireccion());
        System.out.println("telefono :" + getTelefono());
        System.out.println("Sitio web"+getSitio_web());
        System.out.println("Horario de Atencion :" + getHorario_de_atencion());
        System.out.println("Horario de salida :" +getHorario_de_salida());
        System.out.println("Destinos :" + getDestinos());    
        System.out.println("Latitud :" + getGeometry().getLatitud());
        System.out.println("Longitud :" + getGeometry().getLongitud());
        System.out.println("Imagenes" + getImagenes().size());

    }
}
