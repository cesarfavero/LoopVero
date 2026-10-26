# `RunLifecycle.endSessionRun`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/run-lifecycle.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/run-lifecycle-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:739990-740003](../../../../../../../reference/runtime/host-main.cjs#L739990-L740003) | `method` | não | `session` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:739990-740003](../../../../../../../reference/runtime/host-main.cjs#L739990-L740003) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:739990

Chamadas escritas diretamente neste corpo: `this.activeRequestSources.delete`, `this.inFlightRunCounts.delete`, `this.inFlightRunCounts.get`, `this.inFlightRunCounts.has`, `this.inFlightRunCounts.set`, `this.recordTurnCompleted`, `this.retireSession`, `this.tm.roster.emitAgentUpdate`.

SHA-256 do trecho: `2bf7a56e971e41c16b31d64dedfec8955f4b6d8ad65be5ddab415383a8a00117`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
