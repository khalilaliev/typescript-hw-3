class School {
  private _areas: string[] = [];
  private _lecturers: string[] = [];
  public name: string;
  public surname: string;
  public position: string;
  public company: string;
  public experience: number;
  public courses: string;
  public contacts: string;

  constructor(
    name: string,
    surname: string,
    position: string,
    company: string,
    experience: number,
    courses: string,
    contacts: string
  ) {
    this.name = name;
    this.surname = surname;
    this.position = position;
    this.company = company;
    this.experience = experience;
    this.courses = courses;
    this.contacts = contacts;
  }

  get areas(): string[] {
    return this._areas;
  }

  get lecturers(): string[] {
    return this._lecturers;
  }

  addArea(area: string): void {
    this._areas.push(area);
  }

  removeArea(): void {
    this._areas.pop();
  }
  addLecture(lecture: string): void {
    this._lecturers.push(lecture);
  }
  removeLecture(): void {
    this._lecturers.pop();
  }
}

/// ------------------------------------------ //

class Area {
  private _levels: string[] = [];
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  get levels(): string[] {
    return this._levels;
  }

  addLevels(level: string): void {
    this._levels.push(level);
  }

  removeLevels(): void {
    this._levels.pop();
  }
}

class Level {
  private _groups: string[] = [];
  private _name: string;
  private _description: string;

  constructor(name: string, description: string) {
    this._name = name;
    this._description = description;
  }

  get groups(): string[] {
    return this._groups;
  }

  get name(): string {
    return this._name;
  }

  get(): string {
    return this._description;
  }

  addGroup(group: string): void {
    this._groups.push(group);
  }
}

/// ------------------------------------------ //

interface IStudent {
  getPerformanceRating(): number;
}

class StudentPerformance implements IStudent {
  private studentPerformance: number;

  constructor(studentPerformance: number) {
    this.studentPerformance = studentPerformance;
  }

  getPerformanceRating(): number {
    return this.studentPerformance;
  }
}

class Group {
  private _area: string;
  private _status: string;
  private _students: IStudent[] = [];
  public directionName: string;
  public levelName: string;

  constructor(directionName: string, levelName: string) {
    this.directionName = directionName;
    this.levelName = levelName;
  }

  get area(): string {
    return this._area;
  }

  get students(): IStudent[] {
    return this._students;
  }

  get status(): string {
    return this._status;
  }

  set(value: string) {
    this._status = value;
  }

  addStudent(student: IStudent): void {
    this._students.push(student);
  }

  removeStudent(student: IStudent): void {
    this._students = this._students.filter((student) => student !== student);
  }

  showPerformance(): IStudent[] {
    const sortedStudents: IStudent[] = this._students.sort(
      (a, b) => b.getPerformanceRating() - a.getPerformanceRating()
    );
    return sortedStudents;
  }
}

class Student {
  private _firstName: string;
  private _lastName: string;
  private _birthYear: number;
  private _grades: number[] = [];
  private _visits: (boolean | string)[] = [];

  constructor(firstName: string, lastName: string, birthYear: number) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._birthYear = birthYear;
  }

  get fullName() {
    return `${this._lastName} ${this._firstName}`;
  }

  set fullName(value) {
    [this._lastName, this._firstName] = value.split(" ");
  }

  get age() {
    return new Date().getFullYear() - this._birthYear;
  }

  set grades(value: number[]) {
    this._grades = value;
  }

  set visits(value: boolean[]) {
    this._visits = value;
  }

  getPerformanceRating(): number {
    const gradeValues: number[] = Object.values(this._grades);

    if (!gradeValues.length) return 0;

    const averageGrade: number =
      gradeValues.reduce((sum, grade): number => sum + grade, 0) /
      gradeValues.length;
    const attendancePercentage: number =
      (this._visits.filter((present): boolean | string => present).length /
        this._visits.length) *
      100;

    return (averageGrade + attendancePercentage) / 2;
  }
}
