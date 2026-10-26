# `slackVerificationFailure`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-route-verification.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-route-verification-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:735393-735396](../../../../../../../reference/runtime/host-main.cjs#L735393-L735396) | `FunctionDeclaration` | yes | `result, providerIdentifier, cache3` |
| [evaluation:540958-540961](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540958-L540961) | `FunctionDeclaration` | yes | `result, providerIdentifier, cache3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:735393-735396](../../../../../../../reference/runtime/host-main.cjs#L735393-L735396) | 1 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:540958-540961](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540958-L540961) | 1 | 0 | 1 | 1 | 0 | 0 |

### host:735393

Calls written directly in this body: `cache3.forget`, `verificationExecuteFailure`.

SHA-256 of the source span: `1f808d73e016ab535679e643dd564dce9bdac8e8bc4a19da8fcd05d5564bb832`.

### evaluation:540958

Calls written directly in this body: `cache3.forget`, `verificationExecuteFailure`.

SHA-256 of the source span: `1f808d73e016ab535679e643dd564dce9bdac8e8bc4a19da8fcd05d5564bb832`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
