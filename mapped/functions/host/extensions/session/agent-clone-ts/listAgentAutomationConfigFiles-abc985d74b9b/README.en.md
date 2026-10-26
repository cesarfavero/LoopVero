# `listAgentAutomationConfigFiles`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/agent-clone.ts` · [Module README](../../../../../../modules/host/extensions/session/agent-clone-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:716877-716893](../../../../../../../reference/runtime/host-main.cjs#L716877-L716893) | `FunctionDeclaration` | no | `automationsDir` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716877-716893](../../../../../../../reference/runtime/host-main.cjs#L716877-L716893) | 2 | 1 | 0 | 2 | 0 | 1 |

### host:716877

Calls written directly in this body: `configs.push`, `entry.isDirectory`, `reportFallbackUnlessAbsent`.

Assignment or increment targets: `entries`.

SHA-256 of the source span: `90b97ff8c8aad0f8ab3d578e1204c0a00f78af381343d587cddbb468e6367490`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
