export type ModalInputType = ValueOrFunction<Renderable, Modal>;

export type ModalHandler = (
  node: ModalInputType,
  options?: Options
) => string | undefined;

export type Renderable = JSX.Element;

export type ValueFunction<TValue, TArg> = (arg: TArg) => TValue;

export type ValueOrFunction<TValue, TArg> =
  | TValue
  | ValueFunction<TValue, TArg>;

const isFunction = <TValue, TArg>(
  valOrFunction: ValueOrFunction<TValue, TArg>
): valOrFunction is ValueFunction<TValue, TArg> =>
  typeof valOrFunction === "function";

export const resolveValue = <TValue, TArg>(
  valOrFunction: ValueOrFunction<TValue, TArg>,
  arg: TArg
): TValue => (isFunction(valOrFunction) ? valOrFunction(arg) : valOrFunction);

export interface Modal {
  modal: ValueOrFunction<Renderable, Modal>;
  id?: string;
  animation?: true | false;
  customTrigger?: true | false;
}

export type Options = Partial<Pick<Modal, "animation" | "customTrigger">>;

export type ModalActionType = "add" | "remove";

export type CreateElementOutType = {
  modal: Renderable;
  key: string;
};
