import java.io.File;
import java.util.ArrayList;
import java.util.List;

import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Marshaller;
import javax.xml.bind.Unmarshaller;

import student.Student;
import student.Students;

public class Main {

	public static void main(String[] args) throws JAXBException {
		
		marshlingExample();

		/*try {

			File file = new File("xml/students.xml");
			JAXBContext jaxbContext = JAXBContext.newInstance(Students.class);

			Unmarshaller jaxbUnmarshaller = jaxbContext.createUnmarshaller();
			Students students = (Students) jaxbUnmarshaller.unmarshal(file);

			for (Student s : students.getStudents()) {
				System.out.println(
						s.getName() + " " + s.getSurname() + " " + s.getId());
			}

		} catch (JAXBException e) {
			e.printStackTrace();
		}*/

	}

	public static void marshlingExample() throws JAXBException {
		JAXBContext jaxbContext = JAXBContext.newInstance(Students.class);
		Marshaller jaxbMarshaller = jaxbContext.createMarshaller();

		jaxbMarshaller.setProperty(Marshaller.JAXB_FORMATTED_OUTPUT, true);

		Students students = new Students();
		List<Student> ls = new ArrayList<Student>();
		Student s1 = new Student();
		s1.setId(1);
		s1.setName("Pepe");
		s1.setSurname("Rodolfo Suarez");
		
		Student s2 = new Student();
		s2.setId(2);
		s2.setName("Laura");
		s2.setSurname("Martinez Villanueva");
		
		ls.add(s1);
		ls.add(s2);
		students.setStudents(ls);
		
		// Marshal the employees list in console
		jaxbMarshaller.marshal(students, System.out);
	}

}
