# `ambiguousWorkersNote`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agent-machine-target.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agent-machine-target-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:510092-510096](../../../../../../reference/runtime/host-main.cjs#L510092-L510096) | `FunctionDeclaration` | no | `matches` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:510092-510096](../../../../../../reference/runtime/host-main.cjs#L510092-L510096) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:510092

Calls written directly in this body: `.join`, `.map`, `matches.slice`.

SHA-256 of the source span: `b7e954c8f1b86ea2a25272747ba6010d7e3c13eeee21e2262889f0558e59117d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
