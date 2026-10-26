# `fillSandUserFormValues`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/sand-browser-fill.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-browser-fill-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:727646-727890](../../../../../../../reference/runtime/host-main.cjs#L727646-L727890) | `FunctionDeclaration` | sim | `ctx, runner, values, consentedHost, submitAfterFill, observeTiming, clock = realClock, playwright2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:727646-727890](../../../../../../../reference/runtime/host-main.cjs#L727646-L727890) | 48 | 3 | 9 | 6 | 0 | 0 |

### host:727646

Chamadas escritas diretamente neste corpo: `.filter`, `.find`, `.map`, `.reverse`, `.sort`, `Math.max`, `Object.fromEntries`, `RETRY_CANNOT_CURE.has`, `belt.okToWrite`, `belt.trustResult`, `cardAware`, `classifyFailedWrite`, `clock.monotonicNow`, `createConsentedHostBelt`, `driverUnavailableFillResult`, `failAllFills`, `failureKinds.delete`, `failureKinds.get`, `failureKinds.set`, `fillOpFor`, `fillableSnapshotRole`, `filledControls.set`, `finalOutcomes.filter`, `finalOutcomes.some`, `gateConsentedHostTab`, `gateOnPlaywrightCurrentTab`, `labelDisambiguationFor`, `new Map`, `observeTiming`, `op.args`, `outcomes.get`, `outcomes.set`, `readTrustedFreshSnapshot`, `resolveTargetRef`, `resolvesAsCardLabel`, `retryFillOnce`, `runner.run`, `scrubThenClampSoACutCanNeverSplitAValueBackIntoView`, `submitByEnterInLastFilledField`, `targeted.includes`, `userFormControlLooksLikeCardNumber`, `values.filter`, `values.map`, `values.some`, `withSandDriverRefNamespace`.

Alvos de atribuição ou incremento: `cardForm`, `failureKind`, `filled`, `healOutcome`, `lastFreshSnapshotForTheRemapOffer`, `pageMoved`, `refTargetsSuspectAfterTabSwitch`, `remap`, `runner`, `submit`, `tabSwitched`.

SHA-256 do trecho: `da9480f63db849de2fa3f74ba7cb651d7865e4775e197643fb9e0c1dece2613a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
