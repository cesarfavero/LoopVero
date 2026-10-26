# `registrableDomainOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/send-message-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/send-message-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:760835-760841](../../../../../../../reference/runtime/host-main.cjs#L760835-L760841) | `FunctionDeclaration` | no | `path33, url2` |
| [evaluation:551650-551656](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551650-L551656) | `FunctionDeclaration` | no | `path33, url2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:760835-760841](../../../../../../../reference/runtime/host-main.cjs#L760835-L760841) | 1 | 0 | 0 | 1 | 1 | 0 |
| [evaluation:551650-551656](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551650-L551656) | 1 | 0 | 0 | 1 | 1 | 0 |

### host:760835

Calls written directly in this body: `JSON.stringify`, `new SandToolInputError`, `parseSecureValueHttpsUrl`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `b99c2f9af745bd6ca19edf7e52f0660bea1dd4bc38c880c7b0e2a9a2850e2af3`.

### evaluation:551650

Calls written directly in this body: `JSON.stringify`, `new SandToolInputError`, `parseSecureValueHttpsUrl`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `b99c2f9af745bd6ca19edf7e52f0660bea1dd4bc38c880c7b0e2a9a2850e2af3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
