# `linkItemHref`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/link-items/link-items.ts` · [Module README](../../../../../../../modules/core/runner/tools/link-items/link-items-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:741085-741087](../../../../../../../../reference/runtime/host-main.cjs#L741085-L741087) | `FunctionDeclaration` | no | `url2` |
| [evaluation:482032-482034](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L482032-L482034) | `FunctionDeclaration` | no | `url2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:741085-741087](../../../../../../../../reference/runtime/host-main.cjs#L741085-L741087) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:482032-482034](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L482032-L482034) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:741085

Calls written directly in this body: `.href.replace`, `.replace`, `new URL`.

SHA-256 of the source span: `6928b27c22db2abd5d0abddb4e455f5987617efd4e575f61ecaabffd04502289`.

### evaluation:482032

Calls written directly in this body: `.href.replace`, `.replace`, `new URL`.

SHA-256 of the source span: `6928b27c22db2abd5d0abddb4e455f5987617efd4e575f61ecaabffd04502289`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
