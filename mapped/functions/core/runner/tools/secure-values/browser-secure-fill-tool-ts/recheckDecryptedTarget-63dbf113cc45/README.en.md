# `recheckDecryptedTarget`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/secure-values/browser-secure-fill-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/secure-values/browser-secure-fill-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:767148-767168](../../../../../../../../reference/runtime/host-main.cjs#L767148-L767168) | `FunctionDeclaration` | yes | `ctx, decrypted, target, anySite` |
| [evaluation:562667-562687](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562667-L562687) | `FunctionDeclaration` | yes | `ctx, decrypted, target, anySite` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:767148-767168](../../../../../../../../reference/runtime/host-main.cjs#L767148-L767168) | 3 | 0 | 2 | 2 | 0 | 0 |
| [evaluation:562667-562687](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562667-L562687) | 3 | 0 | 2 | 2 | 0 | 0 |

### host:767148

Calls written directly in this body: `traced`.

SHA-256 of the source span: `e8dde7dda23d230c9a140b394dfc0a5e90a936feb24ed0f78fffe010e4686e9a`.

### evaluation:562667

Calls written directly in this body: `traced`.

SHA-256 of the source span: `e8dde7dda23d230c9a140b394dfc0a5e90a936feb24ed0f78fffe010e4686e9a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
