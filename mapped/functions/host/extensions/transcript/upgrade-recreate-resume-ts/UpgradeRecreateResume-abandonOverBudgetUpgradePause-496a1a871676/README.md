# `UpgradeRecreateResume.abandonOverBudgetUpgradePause`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/upgrade-recreate-resume.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/upgrade-recreate-resume-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:740491-740503](../../../../../../../reference/runtime/host-main.cjs#L740491-L740503) | `method` | não | `options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:740491-740503](../../../../../../../reference/runtime/host-main.cjs#L740491-L740503) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:740491

Chamadas escritas diretamente neste corpo: `refuseSwapRunningTurns`, `this.releasePauseState`, `this.runningTurns`, `this.tm.clock.now`.

Alvos de atribuição ou incremento: `this.upgradeRetryNotBeforeMs`.

SHA-256 do trecho: `5b2645a3fcdcdde3853210eba3ddc502889952b11ce60e33a40f0a3fce065132`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
