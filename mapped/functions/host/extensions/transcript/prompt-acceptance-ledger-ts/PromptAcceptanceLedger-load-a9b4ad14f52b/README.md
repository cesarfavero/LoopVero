# `PromptAcceptanceLedger.load`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/prompt-acceptance-ledger.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/prompt-acceptance-ledger-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:733320-733359](../../../../../../../reference/runtime/host-main.cjs#L733320-L733359) | `method` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:733320-733359](../../../../../../../reference/runtime/host-main.cjs#L733320-L733359) | 5 | 0 | 0 | 2 | 0 | 2 |

### host:733320

Chamadas escritas diretamente neste corpo: `new Map`, `parseSendAcceptanceFile`, `parsed2.records.map`, `readSandDataFileIfPresentSync`, `reportFallbackUnlessAbsent`, `this.nowMs`, `this.persist`, `this.readDegradedMarker`, `withCorruptReset`, `withDegradedWindow`, `writeSandDataFileSync`.

Alvos de atribuição ou incremento: `gaps`, `raw`, `repairNeeded`, `this.loaded`, `this.markerMayExist`.

SHA-256 do trecho: `c3f88af678f0f59c41f05ebf70465b93724ba0752f1081f9eb6f96ffc04c5d1e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
