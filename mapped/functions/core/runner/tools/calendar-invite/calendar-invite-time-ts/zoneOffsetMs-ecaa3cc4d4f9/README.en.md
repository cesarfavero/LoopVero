# `zoneOffsetMs`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/calendar-invite/calendar-invite-time.ts` · [Module README](../../../../../../../modules/core/runner/tools/calendar-invite/calendar-invite-time-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:764007-764011](../../../../../../../../reference/runtime/host-main.cjs#L764007-L764011) | `FunctionDeclaration` | no | `instantMs, timeZone` |
| [evaluation:557381-557385](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L557381-L557385) | `FunctionDeclaration` | no | `instantMs, timeZone` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:764007-764011](../../../../../../../../reference/runtime/host-main.cjs#L764007-L764011) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:557381-557385](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L557381-L557385) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:764007

Calls written directly in this body: `Date.UTC`, `Math.floor`, `wallClockOfInstant`.

SHA-256 of the source span: `4f33bc985c8caa0a94de966ef498e14e63b5b6357e4623a6143a0c3ce64baa55`.

### evaluation:557381

Calls written directly in this body: `Date.UTC`, `Math.floor`, `wallClockOfInstant`.

SHA-256 of the source span: `fecf317f7a3c4da8cbe1955487feac10b250db34e85f8f96601431c6b196f05e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
