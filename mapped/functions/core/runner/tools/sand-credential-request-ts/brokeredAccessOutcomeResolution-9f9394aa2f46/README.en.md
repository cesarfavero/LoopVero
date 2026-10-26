# `brokeredAccessOutcomeResolution`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-credential-request.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-credential-request-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:725544-725581](../../../../../../../reference/runtime/host-main.cjs#L725544-L725581) | `FunctionDeclaration` | no | `request5, outcome` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:725544-725581](../../../../../../../reference/runtime/host-main.cjs#L725544-L725581) | 7 | 0 | 0 | 5 | 0 | 0 |

### host:725544

Calls written directly in this body: `String`, `describe5`, `lines2.join`, `lines2.push`, `new Map`, `request5.entries.map`.

SHA-256 of the source span: `4500fefcfb0933a0297331bf017341bba577ea39d9bfd8e5ceca8720834d0b66`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
