# `actionTerm`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/sand-ui-map/actions.ts` · [Module README](../../../../../../modules/core/runner/sand-ui-map/actions-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:557972-557980](../../../../../../../reference/runtime/host-main.cjs#L557972-L557980) | `FunctionDeclaration` | no | `action` |
| [evaluation:550780-550788](../../../../../../../reference/runtime/sand-eval-runner.cjs#L550780-L550788) | `FunctionDeclaration` | no | `action` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:557972-557980](../../../../../../../reference/runtime/host-main.cjs#L557972-L557980) | 4 | 0 | 0 | 5 | 0 | 0 |
| [evaluation:550780-550788](../../../../../../../reference/runtime/sand-eval-runner.cjs#L550780-L550788) | 4 | 0 | 0 | 5 | 0 | 0 |

### host:557972

Calls written directly in this body: `.join`, `action.values.map`.

SHA-256 of the source span: `4b32cb071f60635e288f9f012a9f9b787fc8ef6eb5c8aafc97732a412abf0525`.

### evaluation:550780

Calls written directly in this body: `.join`, `action.values.map`.

SHA-256 of the source span: `4b32cb071f60635e288f9f012a9f9b787fc8ef6eb5c8aafc97732a412abf0525`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
