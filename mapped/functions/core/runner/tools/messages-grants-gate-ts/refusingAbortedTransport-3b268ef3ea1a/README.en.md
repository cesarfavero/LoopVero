# `refusingAbortedTransport`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/messages-grants-gate.ts` · [Module README](../../../../../../modules/core/runner/tools/messages-grants-gate-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:777834-777843](../../../../../../../reference/runtime/host-main.cjs#L777834-L777843) | `FunctionDeclaration` | yes | `ctx, run` |
| [evaluation:577569-577578](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577569-L577578) | `FunctionDeclaration` | yes | `ctx, run` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777834-777843](../../../../../../../reference/runtime/host-main.cjs#L777834-L777843) | 1 | 0 | 1 | 1 | 2 | 1 |
| [evaluation:577569-577578](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577569-L577578) | 1 | 0 | 1 | 1 | 2 | 1 |

### host:777834

Calls written directly in this body: `new SandLocalToolPermissionDeniedError`, `run`.

Explicit throw targets: `SandLocalToolPermissionDeniedError`, `error64`.

SHA-256 of the source span: `51317620c30a4393acc079be93a02a382ff9e1a5a51cc414fd1e11d67fedaa79`.

### evaluation:577569

Calls written directly in this body: `new SandLocalToolPermissionDeniedError`, `run`.

Explicit throw targets: `SandLocalToolPermissionDeniedError`, `error63`.

SHA-256 of the source span: `6885892b1259e368d24e72169bdc0f199aafa4a4ac9b61c30106248e49e0fe19`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
