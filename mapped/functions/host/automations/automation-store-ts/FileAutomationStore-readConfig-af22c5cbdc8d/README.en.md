# `FileAutomationStore.readConfig`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `host/automations/automation-store.ts` · [Module README](../../../../../modules/host/automations/automation-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:720541-720563](../../../../../../reference/runtime/host-main.cjs#L720541-L720563) | `method` | no | `id` |
| [evaluation:627892-627914](../../../../../../reference/runtime/sand-eval-runner.cjs#L627892-L627914) | `method` | no | `id` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:720541-720563](../../../../../../reference/runtime/host-main.cjs#L720541-L720563) | 2 | 0 | 0 | 3 | 0 | 2 |
| [evaluation:627892-627914](../../../../../../reference/runtime/sand-eval-runner.cjs#L627892-L627914) | 2 | 0 | 0 | 3 | 0 | 2 |

### host:720541

Calls written directly in this body: `Date.now`, `Math.floor`, `migrateAutomationConfigToMinimumInterval`, `parseStoredConfig`, `readSandDataFileSync`, `reportFallbackUnlessAbsent`, `this.configPath`, `this.writeConfig`.

Assignment or increment targets: `fallbackCreatedAt`, `raw`.

SHA-256 of the source span: `f3d1481fec08183f048f404941801e8c5e7b4c45ba2aa1dea2849a84a86d00b5`.

### evaluation:627892

Calls written directly in this body: `Date.now`, `Math.floor`, `migrateAutomationConfigToMinimumInterval`, `parseStoredConfig`, `readSandDataFileSync`, `reportFallbackUnlessAbsent`, `this.configPath`, `this.writeConfig`.

Assignment or increment targets: `fallbackCreatedAt`, `raw`.

SHA-256 of the source span: `779786dd113f5a16d554a480c2410c6a79ea90d1167104a16c5f42f8113fa8e0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
