# `toCodebase`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/codebase-telemetry/codebase-telemetry-adapter.ts` · [Module README](../../../../../../modules/host/extensions/codebase-telemetry/codebase-telemetry-adapter-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:540784-540798](../../../../../../../reference/runtime/host-main.cjs#L540784-L540798) | `FunctionDeclaration` | no | `authId, codebase` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:540784-540798](../../../../../../../reference/runtime/host-main.cjs#L540784-L540798) | 2 | 0 | 0 | 1 | 2 | 0 |

### host:540784

Calls written directly in this body: `isCodebaseEnvironment`, `isCodebaseKind`, `new CsnapsAdapterError`.

Explicit throw targets: `CsnapsAdapterError`.

SHA-256 of the source span: `434d5c09dd906dd70f9ad2575673ece375e7082aad84f235feb8569bf55b78a6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
