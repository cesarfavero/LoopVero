# `linkKey2`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/link-checks/sent-link-checks.ts` · [Module README](../../../../../../modules/core/runner/link-checks/sent-link-checks-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:583423-583427](../../../../../../../reference/runtime/sand-eval-runner.cjs#L583423-L583427) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:583423-583427](../../../../../../../reference/runtime/sand-eval-runner.cjs#L583423-L583427) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:583423

Calls written directly in this body: `parseHttpUrl2`, `url2.pathname.replace`.

SHA-256 of the source span: `84969496fd3f7c3948778d2f4ba44f55cba21b88f880e506c7f4f068b71cca5e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
