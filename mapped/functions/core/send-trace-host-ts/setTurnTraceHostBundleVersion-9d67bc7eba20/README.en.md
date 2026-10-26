# `setTurnTraceHostBundleVersion`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `core/send-trace-host.ts` · [Module README](../../../../modules/core/send-trace-host-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:484146-484149](../../../../../reference/runtime/host-main.cjs#L484146-L484149) | `FunctionDeclaration` | no | `hostBundleVersion` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:484146-484149](../../../../../reference/runtime/host-main.cjs#L484146-L484149) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:484146

Calls written directly in this body: `hostBundleVersion.trim`.

Assignment or increment targets: `turnTraceHostBundleVersion`.

SHA-256 of the source span: `581b8811eaca9d24f10aae6b5802f51d54125fe464a7df2f5c13123ebb370250`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
