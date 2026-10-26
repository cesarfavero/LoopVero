# `FileAutomationStore.remove`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `host/automations/automation-store.ts` · [Module README](../../../../../modules/host/automations/automation-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:720783-720797](../../../../../../reference/runtime/host-main.cjs#L720783-L720797) | `method` | no | `id` |
| [evaluation:628134-628148](../../../../../../reference/runtime/sand-eval-runner.cjs#L628134-L628148) | `method` | no | `id` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:720783-720797](../../../../../../reference/runtime/host-main.cjs#L720783-L720797) | 2 | 0 | 0 | 4 | 0 | 1 |
| [evaluation:628134-628148](../../../../../../reference/runtime/sand-eval-runner.cjs#L628134-L628148) | 2 | 0 | 0 | 4 | 0 | 1 |

### host:720783

Calls written directly in this body: `.isDirectory`, `isSafeFolderId`, `removeSandDataTreeSync`, `reportFallbackUnlessAbsent`, `this.dir.scheduleNotify`.

Assignment or increment targets: `existed`.

SHA-256 of the source span: `85b50554cb199622ca05149818805035077d8d7a8842a0a8d2b7fa7ab4876778`.

### evaluation:628134

Calls written directly in this body: `.isDirectory`, `isSafeFolderId`, `removeSandDataTreeSync`, `reportFallbackUnlessAbsent`, `this.dir.scheduleNotify`.

Assignment or increment targets: `existed`.

SHA-256 of the source span: `c171041f44ce1048caba3866d541bcfe2f235e2c9def2e3c29fedecde8cbd9ce`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
