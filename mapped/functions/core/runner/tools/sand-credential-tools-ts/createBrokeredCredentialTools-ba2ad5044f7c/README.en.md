# `createBrokeredCredentialTools`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-credential-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-credential-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:751949-751980](../../../../../../../reference/runtime/host-main.cjs#L751949-L751980) | `FunctionDeclaration` | no | `access5, broker` |
| [evaluation:525015-525046](../../../../../../../reference/runtime/sand-eval-runner.cjs#L525015-L525046) | `FunctionDeclaration` | no | `access4, broker` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:751949-751980](../../../../../../../reference/runtime/host-main.cjs#L751949-L751980) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:525015-525046](../../../../../../../reference/runtime/sand-eval-runner.cjs#L525015-L525046) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:751949

Calls written directly in this body: `defineCommunicateTool`.

SHA-256 of the source span: `c71a404ac878897eaa2b3fce1cb3524753d70cffc92b891d578bebdcbe462b38`.

### evaluation:525015

Calls written directly in this body: `defineCommunicateTool`.

SHA-256 of the source span: `3ad7202f5cd33b60cb796c7df60d7301e55e470ae42f24b6421ec421b2cb18da`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
