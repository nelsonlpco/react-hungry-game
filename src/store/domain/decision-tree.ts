import OptionNodeModel, { UserResponse } from './model/option-model';

class DecisionTree {
  private root: OptionNodeModel;

  private emptyOptions = false;

  constructor(
    qualityQuestion: string,
    qualityFoodQuestion: string,
    foodQuestion: string,
  ) {
    this.root = new OptionNodeModel(qualityQuestion);
    this.root.LeftOption = new OptionNodeModel(qualityFoodQuestion);
    this.root.RightOption = new OptionNodeModel(foodQuestion);
  }

  get isEnptyOptions(): boolean {
    return this.emptyOptions;
  }

  get Root(): OptionNodeModel {
    this.emptyOptions = false;
    return this.root;
  }

  // eslint-disable-next-line class-methods-use-this
  addFavoriteFood(
    currentQuestionNode: OptionNodeModel,
    food: string,
    quality: string,
  ): void {
    currentQuestionNode.addQuestion(food, quality);
  }

  runCases(
    userResponse: UserResponse,
    question?: OptionNodeModel,
  ): OptionNodeModel | undefined {
    const currentQuestion = question;

    if (currentQuestion?.hasChildren()) {
      if (userResponse === UserResponse.yes) {
        return this.runCases(userResponse, currentQuestion.LeftOption);
      }

      return this.runCases(userResponse, currentQuestion.RightOption);
    }

    this.emptyOptions = !currentQuestion?.hasChildren();

    return currentQuestion;
  }

  runCase(
    userResponse: UserResponse,
    question?: OptionNodeModel,
  ): OptionNodeModel | undefined {
    const currentQuestion = question;

    if (currentQuestion?.hasChildren()) {
      if (userResponse === UserResponse.yes) {
        return currentQuestion.LeftOption;
      }

      return currentQuestion.RightOption;
    }

    this.emptyOptions = !currentQuestion?.hasChildren();
    return currentQuestion;
  }
}

export default DecisionTree;
