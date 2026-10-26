# `dayEventsOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/calendar-invite/draft-calendar-invite-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/calendar-invite/draft-calendar-invite-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:764104-764111](../../../../../../../../reference/runtime/host-main.cjs#L764104-L764111) | `FunctionDeclaration` | no | `day` |
| [evaluation:557478-557485](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L557478-L557485) | `FunctionDeclaration` | no | `day` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:764104-764111](../../../../../../../../reference/runtime/host-main.cjs#L764104-L764111) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:557478-557485](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L557478-L557485) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:764104

Calls written directly in this body: `day.events.map`.

SHA-256 of the source span: `60ebffca535610757420bfab960c4d6fe5ccaae1134fe1893f957cb985eeedc2`.

### evaluation:557478

Calls written directly in this body: `day.events.map`.

SHA-256 of the source span: `60ebffca535610757420bfab960c4d6fe5ccaae1134fe1893f957cb985eeedc2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
