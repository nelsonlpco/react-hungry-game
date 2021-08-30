export enum UserResponse {
  yes = 'yes',
  no = 'no',
}

class OptionNodeModel {
  private question: string;

  private right?: OptionNodeModel;

  private left?: OptionNodeModel;

  constructor(question: string) {
    this.question = question;
  }

  get Question(): string {
    return this.question;
  }

  set Question(question: string) {
    this.question = question;
  }

  get RightOption(): OptionNodeModel | undefined {
    return this.right;
  }

  set RightOption(option: OptionNodeModel | undefined) {
    this.right = option;
  }

  get LeftOption(): OptionNodeModel | undefined {
    return this.left;
  }

  set LeftOption(option: OptionNodeModel | undefined) {
    this.left = option;
  }

  hasChildren(): boolean {
    return !!this.right && !!this.left;
  }

  addQuestion(food: string, quality: string): void {
    this.right = new OptionNodeModel(this.question);
    this.question = quality;
    this.left = new OptionNodeModel(food);
  }
}

export default OptionNodeModel;
