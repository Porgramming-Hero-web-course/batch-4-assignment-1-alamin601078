

## Union and Intersection types are very powerful concepts in TypeScript that help reduce code complexity and increase type safety.

## Why Should You Use Them?

To create new types by combining properties from multiple interfaces or types.
To make type checking stricter.
To improve code readability.

## Why Are Types Important?

Type Safety: Helps catch errors in the code and reduces the possibility of runtime errors.
Code Readability: Makes the meaning of the code clearer and easier to understand for others.
Code Refactoring: Makes it easier to restructure the code when needed.
Library and Framework Development: Helps in creating flexible and reusable APIs.

   --------->  Documentation  <------------
   
## Discriminating Unions
A common technique for working with unions is to have a single field which uses literal types which you can use to let TypeScript narrow down the possible current type. For example, we’re going to create a union of three types which have a single shared field.


## Intersection Types
Intersection types are closely related to union types, but they are used very differently. An intersection type combines multiple types into one. This allows you to add together existing types to get a single type that has all the features you need. For example, Person & Serializable & Loggable is a type which is all of Person and Serializable and Loggable. That means an object of this type will have all members of all three types.

For example, if you had networking requests with consistent error handling then you could separate out the error handling into its own type which is merged with types which correspond to a single response type.