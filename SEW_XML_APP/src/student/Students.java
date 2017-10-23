package student;

import java.util.List;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name = "students")
@XmlAccessorType (XmlAccessType.FIELD)
public class Students {
	
	@XmlElement(name = "student")
    private List<Student> students;

    @XmlAttribute
    public void setStudents(List<Student> students) {
    		this.students = students;
    }
	
	public List<Student> getStudents() {
		return this.students;
	}
}
