# `coerceValue`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/arg-coercion/coerce-tool-args.ts` · [Module README](../../../../../../../modules/core/runner/tools/arg-coercion/coerce-tool-args-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:724898-724946](../../../../../../../../reference/runtime/host-main.cjs#L724898-L724946) | `FunctionDeclaration` | no | `schema3, value` |
| [evaluation:479861-479909](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L479861-L479909) | `FunctionDeclaration` | no | `schema3, value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:724898-724946](../../../../../../../../reference/runtime/host-main.cjs#L724898-L724946) | 17 | 1 | 0 | 14 | 0 | 0 |
| [evaluation:479861-479909](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L479861-L479909) | 17 | 1 | 0 | 14 | 0 | 0 |

### host:724898

Calls written directly in this body: `Array.isArray`, `coerceEntries`, `coerceItems`, `coerceString`, `coerceValue`, `isUnknownRecord2`, `option.safeParse`, `s3.innerType`, `s3.optionsMap.get`, `unwrap`.

SHA-256 of the source span: `2bdb7cb32d38d8e9b448ca55f3dd33664880613f3078e54197b89b8d1b5d4f37`.

### evaluation:479861

Calls written directly in this body: `Array.isArray`, `coerceEntries`, `coerceItems`, `coerceString`, `coerceValue`, `isUnknownRecord2`, `option.safeParse`, `s3.innerType`, `s3.optionsMap.get`, `unwrap`.

SHA-256 of the source span: `b226caf7b9837d94a275cac3520ed3380519a129548c8900c443396431756fc6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
