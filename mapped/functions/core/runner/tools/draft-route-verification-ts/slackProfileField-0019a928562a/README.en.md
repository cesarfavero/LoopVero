# `slackProfileField`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-route-verification.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-route-verification-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:735139-735144](../../../../../../../reference/runtime/host-main.cjs#L735139-L735144) | `FunctionDeclaration` | no | `resultText, field` |
| [evaluation:540713-540718](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540713-L540718) | `FunctionDeclaration` | no | `resultText, field` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:735139-735144](../../../../../../../reference/runtime/host-main.cjs#L735139-L735144) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:540713-540718](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540713-L540718) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:735139

Calls written directly in this body: `[computed].trim`, `field.exec`, `parseDraftConnectorRecord`.

SHA-256 of the source span: `10b99430fb35739fa1097cad2d29576976c69f5bee432aebd82cbfa2827bf78e`.

### evaluation:540713

Calls written directly in this body: `[computed].trim`, `field.exec`, `parseDraftConnectorRecord`.

SHA-256 of the source span: `10b99430fb35739fa1097cad2d29576976c69f5bee432aebd82cbfa2827bf78e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
