package student;

import java.util.Hashtable;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name = "student")
@XmlAccessorType (XmlAccessType.FIELD)
public class Student {
	
	private int id;
	private String name, surname;
	private Hashtable<String, Double> marks;
	
	public Student() { }

	public Student(int id, String name, String surname) {
		//this.setId(id).setName(name).setSurname(surname);
		marks = new Hashtable<String, Double>();
	}
	
	/**
	 * 
	 * @param id
	 * @return
	 */
	@XmlAttribute
	public void setId(int id) {
		this.id = id;
	}
	
	/***
	 * 
	 * @return
	 */
	public int getId() {
		return this.id;
	}
	
	/***
	 * 
	 * @param name
	 * @return
	 */
	@XmlElement
	public void setName(String name) {
		this.name = name;
		//return this;
	}
	
	/***
	 * 
	 * @return
	 */
	public String getName() {
		return this.name;
	}
	
	/***
	 * 
	 * @param surname
	 * @return
	 */
	@XmlElement
	public void setSurname(String surname) {
		this.surname = surname;
		//return this;
	}
	
	/***
	 * 
	 * @return
	 */
	public String getSurname() {
		return this.surname;
	}
	
	/**
	 * 
	 * @param subject
	 * @param mark
	 * @return
	 */
	public void addMark(String subject, Double mark) {
		this.marks.put(subject, mark);
		//return this;
	}
	
	/**
	 * 
	 * @return
	 */
	public double meanOfMarks() {
		double mean = 0.0;
		int n = 0;
		for (Double d : marks.values()) {
			mean = mean + d;
			n++;
		}
		return ((double)(mean/n));
	}
}
