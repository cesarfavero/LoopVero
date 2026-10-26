# `playwrightToolCallErrorClass`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/mcp/playwright-telemetry.ts` · [Module README](../../../../../modules/core/mcp/playwright-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:700389-700408](../../../../../../reference/runtime/host-main.cjs#L700389-L700408) | `FunctionDeclaration` | no | `error64` |
| [evaluation:514178-514197](../../../../../../reference/runtime/sand-eval-runner.cjs#L514178-L514197) | `FunctionDeclaration` | no | `error63` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:700389-700408](../../../../../../reference/runtime/host-main.cjs#L700389-L700408) | 14 | 0 | 0 | 14 | 0 | 0 |
| [evaluation:514178-514197](../../../../../../reference/runtime/sand-eval-runner.cjs#L514178-L514197) | 14 | 0 | 0 | 14 | 0 | 0 |

### host:700389

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `91352021ea359a129efaac702a40650c353975c5cb859d7cb79bee4a9c37f37d`.

### evaluation:514178

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `272bb04d263ce714c4f18c20d0d85ea4094841e37e25885656f527055b0311f4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
