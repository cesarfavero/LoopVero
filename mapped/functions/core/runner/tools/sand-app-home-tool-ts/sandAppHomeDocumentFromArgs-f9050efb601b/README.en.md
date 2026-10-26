# `sandAppHomeDocumentFromArgs`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-app-home-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-app-home-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:771025-771035](../../../../../../../reference/runtime/host-main.cjs#L771025-L771035) | `FunctionDeclaration` | no | `args` |
| [evaluation:570131-570141](../../../../../../../reference/runtime/sand-eval-runner.cjs#L570131-L570141) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:771025-771035](../../../../../../../reference/runtime/host-main.cjs#L771025-L771035) | 3 | 0 | 0 | 1 | 1 | 0 |
| [evaluation:570131-570141](../../../../../../../reference/runtime/sand-eval-runner.cjs#L570131-L570141) | 3 | 0 | 0 | 1 | 1 | 0 |

### host:771025

Calls written directly in this body: `new SandToolInputError`, `parseSandAppHomeDocument`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `f28648f80a01c21c6766068a2e54ce0692946a61e30f0b669798c653e2ffbc6d`.

### evaluation:570131

Calls written directly in this body: `new SandToolInputError`, `parseSandAppHomeDocument`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `0f30524aed47fddd69217c4b61647964b0cc8a2240c2c27dd1a9a1ee9bb31996`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
