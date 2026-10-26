# `playwrightPhaseOutcome`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/mcp/playwright-telemetry.ts` · [Module README](../../../../../modules/core/mcp/playwright-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:700613-700618](../../../../../../reference/runtime/host-main.cjs#L700613-L700618) | `FunctionDeclaration` | no | `error64` |
| [evaluation:514405-514410](../../../../../../reference/runtime/sand-eval-runner.cjs#L514405-L514410) | `FunctionDeclaration` | no | `error63` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:700613-700618](../../../../../../reference/runtime/host-main.cjs#L700613-L700618) | 3 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:514405-514410](../../../../../../reference/runtime/sand-eval-runner.cjs#L514405-L514410) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:700613

Calls written directly in this body: `playwrightToolCallErrorClass`.

SHA-256 of the source span: `0f507837e87d547cfeb9fa253de805b62299d95f5b716eb1b372e7217ba361eb`.

### evaluation:514405

Calls written directly in this body: `playwrightToolCallErrorClass`.

SHA-256 of the source span: `406d63d95e5cab3de47965255d8fb4a8986eb6142fe7e00f2e17d4287c327cee`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
