# `factHolds`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/in-app-links-guidance.ts` · [Module README](../../../../../modules/core/runner/in-app-links-guidance-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:557658-557660](../../../../../../reference/runtime/host-main.cjs#L557658-L557660) | `FunctionDeclaration` | no | `facts, fact` |
| [evaluation:546105-546107](../../../../../../reference/runtime/sand-eval-runner.cjs#L546105-L546107) | `FunctionDeclaration` | no | `facts, fact` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:557658-557660](../../../../../../reference/runtime/host-main.cjs#L557658-L557660) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:546105-546107](../../../../../../reference/runtime/sand-eval-runner.cjs#L546105-L546107) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:557658

Calls written directly in this body: `factRead`.

SHA-256 of the source span: `db206c146569f54acc52f7939d2a2aa412b71993e63f516e24b5626e4386982c`.

### evaluation:546105

Calls written directly in this body: `factRead`.

SHA-256 of the source span: `db206c146569f54acc52f7939d2a2aa412b71993e63f516e24b5626e4386982c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
