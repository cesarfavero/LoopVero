# `softenInlineImageMarkers`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/email-tool-format.ts` · [Module README](../../../../../../modules/core/runner/tools/email-tool-format-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:764166-764168](../../../../../../../reference/runtime/host-main.cjs#L764166-L764168) | `FunctionDeclaration` | no | `snippet2` |
| [evaluation:557537-557539](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557537-L557539) | `FunctionDeclaration` | no | `snippet2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:764166-764168](../../../../../../../reference/runtime/host-main.cjs#L764166-L764168) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:557537-557539](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557537-L557539) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:764166

Calls written directly in this body: `snippet2.replace`.

SHA-256 of the source span: `0e64eee584ae73cd69d56afec3fc9bb1b852111fb67974d75c631c5cf45aa26f`.

### evaluation:557537

Calls written directly in this body: `snippet2.replace`.

SHA-256 of the source span: `0e64eee584ae73cd69d56afec3fc9bb1b852111fb67974d75c631c5cf45aa26f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
