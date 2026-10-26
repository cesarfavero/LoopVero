# `mintBrokeredCredentialRequestForAdmittedSend`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/send-message-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/send-message-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:761222-761254](../../../../../../../reference/runtime/host-main.cjs#L761222-L761254) | `FunctionDeclaration` | yes | `deps, credential` |
| [evaluation:552037-552069](../../../../../../../reference/runtime/sand-eval-runner.cjs#L552037-L552069) | `FunctionDeclaration` | yes | `deps, credential` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:761222-761254](../../../../../../../reference/runtime/host-main.cjs#L761222-L761254) | 4 | 0 | 1 | 2 | 2 | 0 |
| [evaluation:552037-552069](../../../../../../../reference/runtime/sand-eval-runner.cjs#L552037-L552069) | 4 | 0 | 1 | 2 | 2 | 0 |

### host:761222

Calls written directly in this body: `Date.now`, `credential.logins.map`, `deps.createBrokeredCredentialAccessRequest`, `describeAlreadyGranted`, `new SandToolInputError`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `4c05582d930b52104362e72e498c340ed32dbb6075d4d67d6a1123f263bbed1e`.

### evaluation:552037

Calls written directly in this body: `Date.now`, `credential.logins.map`, `deps.createBrokeredCredentialAccessRequest`, `describeAlreadyGranted`, `new SandToolInputError`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `4c05582d930b52104362e72e498c340ed32dbb6075d4d67d6a1123f263bbed1e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
