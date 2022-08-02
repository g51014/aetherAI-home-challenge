export interface IUser {
  /**使用者id */
  uid: string;
  name: string;
  /**最後登入時間 */
  lastLoginDate: string;
  /**代辦清單 */
  todoList?: ITodo[];
}

export interface ITodo {
  id: string;
  completed: boolean;
  description?: string;
  /**YYYY-MM-DDTHH:mm:ss  */
  createDate: string;
  title: string;
}
