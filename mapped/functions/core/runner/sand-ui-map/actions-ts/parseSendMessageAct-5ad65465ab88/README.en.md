# `parseSendMessageAct`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/sand-ui-map/actions.ts` · [Module README](../../../../../../modules/core/runner/sand-ui-map/actions-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:557923-557928](../../../../../../../reference/runtime/host-main.cjs#L557923-L557928) | `FunctionDeclaration` | no | `raw` |
| [evaluation:550731-550736](../../../../../../../reference/runtime/sand-eval-runner.cjs#L550731-L550736) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:557923-557928](../../../../../../../reference/runtime/host-main.cjs#L557923-L557928) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:550731-550736](../../../../../../../reference/runtime/sand-eval-runner.cjs#L550731-L550736) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:557923

Calls written directly in this body: `.trim`, `raw.indexOf`, `raw.slice`, `raw.trim`.

SHA-256 of the source span: `449bdf5af6a0a65ddacb64640d4bde9f197eaa066e26e15368ee8e48d47d1e71`.

### evaluation:550731

Calls written directly in this body: `.trim`, `raw.indexOf`, `raw.slice`, `raw.trim`.

SHA-256 of the source span: `449bdf5af6a0a65ddacb64640d4bde9f197eaa066e26e15368ee8e48d47d1e71`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
