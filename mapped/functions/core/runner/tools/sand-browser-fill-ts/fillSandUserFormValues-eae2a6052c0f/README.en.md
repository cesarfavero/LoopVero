# `fillSandUserFormValues`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/sand-browser-fill.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-browser-fill-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:727646-727890](../../../../../../../reference/runtime/host-main.cjs#L727646-L727890) | `FunctionDeclaration` | yes | `ctx, runner, values, consentedHost, submitAfterFill, observeTiming, clock = realClock, playwright2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:727646-727890](../../../../../../../reference/runtime/host-main.cjs#L727646-L727890) | 48 | 3 | 9 | 6 | 0 | 0 |

### host:727646

Calls written directly in this body: `.filter`, `.find`, `.map`, `.reverse`, `.sort`, `Math.max`, `Object.fromEntries`, `RETRY_CANNOT_CURE.has`, `belt.okToWrite`, `belt.trustResult`, `cardAware`, `classifyFailedWrite`, `clock.monotonicNow`, `createConsentedHostBelt`, `driverUnavailableFillResult`, `failAllFills`, `failureKinds.delete`, `failureKinds.get`, `failureKinds.set`, `fillOpFor`, `fillableSnapshotRole`, `filledControls.set`, `finalOutcomes.filter`, `finalOutcomes.some`, `gateConsentedHostTab`, `gateOnPlaywrightCurrentTab`, `labelDisambiguationFor`, `new Map`, `observeTiming`, `op.args`, `outcomes.get`, `outcomes.set`, `readTrustedFreshSnapshot`, `resolveTargetRef`, `resolvesAsCardLabel`, `retryFillOnce`, `runner.run`, `scrubThenClampSoACutCanNeverSplitAValueBackIntoView`, `submitByEnterInLastFilledField`, `targeted.includes`, `userFormControlLooksLikeCardNumber`, `values.filter`, `values.map`, `values.some`, `withSandDriverRefNamespace`.

Assignment or increment targets: `cardForm`, `failureKind`, `filled`, `healOutcome`, `lastFreshSnapshotForTheRemapOffer`, `pageMoved`, `refTargetsSuspectAfterTabSwitch`, `remap`, `runner`, `submit`, `tabSwitched`.

SHA-256 of the source span: `da9480f63db849de2fa3f74ba7cb651d7865e4775e197643fb9e0c1dece2613a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
