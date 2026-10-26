# `inspectSandSecureFillTarget`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/sand-browser-fill.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-browser-fill-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:727535-727617](../../../../../../../reference/runtime/host-main.cjs#L727535-L727617) | `FunctionDeclaration` | yes | `ctx, runner, args` |
| [evaluation:561990-562072](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561990-L562072) | `FunctionDeclaration` | yes | `ctx, runner, args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:727535-727617](../../../../../../../reference/runtime/host-main.cjs#L727535-L727617) | 22 | 0 | 5 | 14 | 0 | 0 |
| [evaluation:561990-562072](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561990-L562072) | 22 | 0 | 5 | 14 | 0 | 0 |

### host:727535

Calls written directly in this body: `completeSecureFillControl`, `createConsentedHostBelt`, `fullSnapshot`, `gateOnPlaywrightCurrentTab`, `isStaleRefDriverError`, `labelDisambiguationFor`, `playwrightTargetOf`, `resolveRoleOrdinalRef`, `resolveTargetRef`, `runner.run`, `secureFillTargetNotFound`, `withSandDriverRefNamespace`.

Assignment or increment targets: `resolved`, `runner`.

SHA-256 of the source span: `48bc5f649270397bcaa2c010e2a26911ade6f8666caf4a4c6c986dea43866739`.

### evaluation:561990

Calls written directly in this body: `completeSecureFillControl`, `createConsentedHostBelt`, `fullSnapshot`, `gateOnPlaywrightCurrentTab`, `isStaleRefDriverError`, `labelDisambiguationFor`, `playwrightTargetOf`, `resolveRoleOrdinalRef`, `resolveTargetRef`, `runner.run`, `secureFillTargetNotFound`, `withSandDriverRefNamespace`.

Assignment or increment targets: `resolved`, `runner`.

SHA-256 of the source span: `c9bacce9a42c3e830690c7ea73b6c134d6ca5d26c4b2f76a7da1ea11084e572a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
