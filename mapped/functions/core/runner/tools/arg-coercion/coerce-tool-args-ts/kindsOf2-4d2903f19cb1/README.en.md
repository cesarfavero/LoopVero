# `kindsOf2`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/arg-coercion/coerce-tool-args.ts` · [Module README](../../../../../../../modules/core/runner/tools/arg-coercion/coerce-tool-args-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:724863-724881](../../../../../../../../reference/runtime/host-main.cjs#L724863-L724881) | `FunctionDeclaration` | no | `schema3` |
| [evaluation:479826-479844](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L479826-L479844) | `FunctionDeclaration` | no | `schema3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:724863-724881](../../../../../../../../reference/runtime/host-main.cjs#L724863-L724881) | 9 | 0 | 0 | 9 | 0 | 0 |
| [evaluation:479826-479844](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L479826-L479844) | 9 | 0 | 0 | 9 | 0 | 0 |

### host:724863

Calls written directly in this body: `isPreprocess`, `kindsOf2`, `literalKind`, `new Set`, `options2.flatMap`, `unwrap`.

SHA-256 of the source span: `f3964cd90be25fbfae807a7d487105495e34ddba980d3dd80a7c849d10294d6a`.

### evaluation:479826

Calls written directly in this body: `isPreprocess`, `kindsOf2`, `literalKind`, `new Set`, `options2.flatMap`, `unwrap`.

SHA-256 of the source span: `28d69fff80575fa1bae1db6f2b9d6f06b1df6b3fe746f2fec109f4bc595b3ea0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
