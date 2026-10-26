# `connectedWorkersNote`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agent-machine-target.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agent-machine-target-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:510080-510091](../../../../../../reference/runtime/host-main.cjs#L510080-L510091) | `FunctionDeclaration` | no | `workers` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:510080-510091](../../../../../../reference/runtime/host-main.cjs#L510080-L510091) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:510080

Calls written directly in this body: `.join`, `.map`, `workers.slice`.

SHA-256 of the source span: `b4accf7671877267606f3f6e6dbd57e9c7ac169936a439ed45c486e8523d1299`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
