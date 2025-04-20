export class Student {
    /**
     * @param {Object} student
     * @param {number} [student.id]
     * @param {string} student.first_name
     * @param {string} student.last_name
     * @param {string} student.email
     * @param {string} student.phone
     * @param {string} student.status
     */
    constructor({ id, first_name, last_name, email, phone, status }) {
      this.id = id;
      this.first_name = first_name;
      this.last_name = last_name;
      this.email = email;
      this.phone = phone;
      this.status = status;
    }
  
    getFullName() {
      return `${this.first_name} ${this.last_name}`;
    }
  
    isActive() {
      return this.status.toLowerCase() === 'active';
    }
  }
  