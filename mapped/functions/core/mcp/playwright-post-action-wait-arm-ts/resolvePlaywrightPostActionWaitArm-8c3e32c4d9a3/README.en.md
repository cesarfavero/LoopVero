# `resolvePlaywrightPostActionWaitArm`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/mcp/playwright-post-action-wait-arm.ts` · [Module README](../../../../../modules/core/mcp/playwright-post-action-wait-arm-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:700745-700747](../../../../../../reference/runtime/host-main.cjs#L700745-L700747) | `FunctionDeclaration` | no | `gates, options2` |
| [evaluation:514893-514895](../../../../../../reference/runtime/sand-eval-runner.cjs#L514893-L514895) | `FunctionDeclaration` | no | `gates, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:700745-700747](../../../../../../reference/runtime/host-main.cjs#L700745-L700747) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:514893-514895](../../../../../../reference/runtime/sand-eval-runner.cjs#L514893-L514895) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:700745

Calls written directly in this body: `gates.playwrightPostActionWaitQuiet`.

SHA-256 of the source span: `c831cdd6c7112faa5bad4fdfd9c7002abaad37e4c3967ccac1ee66e82def6cd5`.

### evaluation:514893

Calls written directly in this body: `gates.playwrightPostActionWaitQuiet`.

SHA-256 of the source span: `c831cdd6c7112faa5bad4fdfd9c7002abaad37e4c3967ccac1ee66e82def6cd5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
