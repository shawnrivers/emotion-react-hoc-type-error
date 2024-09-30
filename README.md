# Emotion React HOC Type Error

The repository to reproduce the type error of HOC when using `@emotion/react@11.13.3`.

## Reproduction

How to reproduce the error?

```sh
npm i
npm run type-check
```

Then you should see the following error message:

```
src/hoc.tsx:7:13 - error TS2322: Type 'P' is not assignable to type 'IntrinsicAttributes & LibraryManagedAttributes<FC<P>, P>'.
  Type 'Record<string, unknown>' is not assignable to type 'IntrinsicAttributes & LibraryManagedAttributes<FC<P>, P>'.
    Type 'Record<string, unknown>' is not assignable to type 'LibraryManagedAttributes<FC<P>, P>'.
      Type 'P' is not assignable to type 'LibraryManagedAttributes<FC<P>, P>'.
        Type 'Record<string, unknown>' is not assignable to type 'LibraryManagedAttributes<FC<P>, P>'.

7     return <C {...props} />;
              ~


Found 1 error in src/hoc.tsx:7
```
