import { GetGen } from "../typegenTypeHelpers";
import { NexusTypes, BaseScalars } from "./_types";
import { GraphQLScalarType } from "graphql";
import { wrappedArg, Wrapped } from "./wrappedType";

export interface ScalarArgConfig {
  /**
   * Whether the field is required
   */
  required?: boolean;
  /**
   * Whether the argument is a list or not.
   *
   * null = not a list
   * true = list
   * array = nested list, where true/false decides
   * whether the list member can be nullable
   */
  list?: null | true | boolean[];
  /**
   * The description to annotate the GraphQL SDL
   */
  description?: string | null;
}

export interface ArgConfig<GenTypes = NexusGen> extends ScalarArgConfig {
  /**
   * The type of the argument, either the string name of the type,
   * or the concrete
   */
  type:
    | GetGen<GenTypes, "allInputTypes">
    | Wrapped<{ nexus: NexusTypes.Scalar }>
    | BaseScalars
    | GraphQLScalarType;
}

export type ArgDef = ReturnType<typeof arg>;

/**
 * Defines an argument that can be used in any object or interface type
 *
 * Takes the GraphQL type name and any options.
 *
 * The value returned from this argument can be used multiple times in any valid `args` object value
 *
 * @see https://graphql.github.io/learn/schema/#arguments
 */
export function arg<GenTypes = NexusGen>(options: ArgConfig<GenTypes>) {
  return wrappedArg({
    ...options,
    nexus: NexusTypes.Arg as NexusTypes.Arg,
  });
}
export function stringArg(options?: ScalarArgConfig) {
  return arg({ type: "String", ...options });
}
export function intArg(options?: ScalarArgConfig) {
  return arg({ type: "Int", ...options });
}
export function floatArg(options?: ScalarArgConfig) {
  return arg({ type: "Float", ...options });
}
export function idArg(options?: ScalarArgConfig) {
  return arg({ type: "ID", ...options });
}
export function booleanArg(options?: ScalarArgConfig) {
  return arg({ type: "Boolean", ...options });
}
