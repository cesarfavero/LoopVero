# `parseThreadParent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-route-verification.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-route-verification-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:735116-735123](../../../../../../../reference/runtime/host-main.cjs#L735116-L735123) | `FunctionDeclaration` | no | `resultText` |
| [evaluation:540690-540697](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540690-L540697) | `FunctionDeclaration` | no | `resultText` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:735116-735123](../../../../../../../reference/runtime/host-main.cjs#L735116-L735123) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:540690-540697](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540690-L540697) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:735116

Calls written directly in this body: `.find`, `.map`, `/^From:\s*([^<(\n]+)/m.exec`, `/^Message TS:[^\n]*\n([\s\S]*)/m.exec`, `[computed].trim`, `afterTs.split`, `capPreviewLine`, `slackReadMessages`.

SHA-256 of the source span: `205b6722608c7c9aa29b60a5424aa4ba6c271e1eb989142a1de3411af46b81ce`.

### evaluation:540690

Calls written directly in this body: `.find`, `.map`, `/^From:\s*([^<(\n]+)/m.exec`, `/^Message TS:[^\n]*\n([\s\S]*)/m.exec`, `[computed].trim`, `afterTs.split`, `capPreviewLine`, `slackReadMessages`.

SHA-256 of the source span: `56b821d26ad41a3fdc8a9022b645b237bc42a0933c3b07c3b51e1f84f71ed915`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
