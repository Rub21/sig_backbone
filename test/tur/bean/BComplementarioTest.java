/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package tur.bean;

import java.util.ArrayList;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import static org.junit.Assert.*;

/**
 *
 * @author ruben
 */
public class BComplementarioTest {
    
    public BComplementarioTest() {
    }
    
    @BeforeClass
    public static void setUpClass() {
        
    }
    
    @AfterClass
    public static void tearDownClass() {
    }
    
    @Before
    public void setUp() {
    }
    
    @After
    public void tearDown() {
    }

    /**
     * Test of getIdcomplementario method, of class BComplementario.
     */
    @Test
    public void testGetIdcomplementario() {
        System.out.println("getIdcomplementario");
        BComplementario instance = new BComplementario();
        String expResult = "1p";
        String result = instance.getIdcomplementario();
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of setIdcomplementario method, of class BComplementario.
     */
    @Test
    public void testSetIdcomplementario() {
        System.out.println("setIdcomplementario");
        String idcomplementario = "1pc";
        BComplementario instance = new BComplementario();
        instance.setIdcomplementario(idcomplementario);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of getTipo method, of class BComplementario.
     */
    @Test
    public void testGetTipo() {
        System.out.println("getTipo");
        BComplementario instance = new BComplementario();
        String expResult = "Complementario";
        String result = instance.getTipo();
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of setTipo method, of class BComplementario.
     */
    @Test
    public void testSetTipo() {
        System.out.println("setTipo");
        String tipo = "Complementario";
        BComplementario instance = new BComplementario();
        instance.setTipo(tipo);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of getDescripcion method, of class BComplementario.
     */
    @Test
    public void testGetDescripcion() {
        System.out.println("getDescripcion");
        BComplementario instance = new BComplementario();
        String expResult = "";
        String result = instance.getDescripcion();
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of setDescripcion method, of class BComplementario.
     */
    @Test
    public void testSetDescripcion() {
        System.out.println("setDescripcion");
        String descripcion = "";
        BComplementario instance = new BComplementario();
        instance.setDescripcion(descripcion);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of getDireccion method, of class BComplementario.
     */
    @Test
    public void testGetDireccion() {
        System.out.println("getDireccion");
        BComplementario instance = new BComplementario();
        String expResult = "";
        String result = instance.getDireccion();
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of setDireccion method, of class BComplementario.
     */
    @Test
    public void testSetDireccion() {
        System.out.println("setDireccion");
        String direccion = "";
        BComplementario instance = new BComplementario();
        instance.setDireccion(direccion);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of getTelefono method, of class BComplementario.
     */
    @Test
    public void testGetTelefono() {
        System.out.println("getTelefono");
        BComplementario instance = new BComplementario();
        String expResult = "";
        String result = instance.getTelefono();
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of setTelefono method, of class BComplementario.
     */
    @Test
    public void testSetTelefono() {
        System.out.println("setTelefono");
        String telefono = "";
        BComplementario instance = new BComplementario();
        instance.setTelefono(telefono);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of getSitio method, of class BComplementario.
     */
    @Test
    public void testGetSitio() {
        System.out.println("getSitio");
        BComplementario instance = new BComplementario();
        String expResult = "";
        String result = instance.getSitio_web();
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of setSitio method, of class BComplementario.
     */
    @Test
    public void testSetSitio() {
        System.out.println("setSitio");
        String sitio = "";
        BComplementario instance = new BComplementario();
        instance.setSitio_web(sitio);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of getHora_aten method, of class BComplementario.
     */
    @Test
    public void testGetHora_aten() {
        System.out.println("getHora_aten");
        BComplementario instance = new BComplementario();
        String expResult = "";
        String result = instance.getHorario_de_atencion();
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of setHora_aten method, of class BComplementario.
     */
    @Test
    public void testSetHora_aten() {
        System.out.println("setHora_aten");
        String hora_aten = "";
        BComplementario instance = new BComplementario();
        instance.setHorario_de_atencion(hora_aten);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of getGeometry method, of class BComplementario.
     */
    @Test
    public void testGetGeometry() {
        System.out.println("getGeometry");
        BComplementario instance = new BComplementario();
        BGeometry expResult = null;
        BGeometry result = instance.getGeometry();
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of setGeometry method, of class BComplementario.
     */
    @Test
    public void testSetGeometry() {
        System.out.println("setGeometry");
        BGeometry geometry = null;
        BComplementario instance = new BComplementario();
        instance.setGeometry(geometry);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of getImagenes method, of class BComplementario.
     */
    @Test
    public void testGetImagenes() {
        System.out.println("getImagenes");
        BComplementario instance = new BComplementario();
        ArrayList expResult = null;
        ArrayList result = instance.getImagenes();
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of setImagenes method, of class BComplementario.
     */
    @Test
    public void testSetImagenes() {
        System.out.println("setImagenes");
        ArrayList<BImagen> imagenes = null;
        BComplementario instance = new BComplementario();
        instance.setImagenes(imagenes);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }
}