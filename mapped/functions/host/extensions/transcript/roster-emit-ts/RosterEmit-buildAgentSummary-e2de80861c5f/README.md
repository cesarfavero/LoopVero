# `RosterEmit.buildAgentSummary`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/roster-emit.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/roster-emit-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:739042-739060](../../../../../../../reference/runtime/host-main.cjs#L739042-L739060) | `method` | sim | `agentId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:739042-739060](../../../../../../../reference/runtime/host-main.cjs#L739042-L739060) | 4 | 0 | 2 | 2 | 0 | 1 |

### host:739042

Chamadas escritas diretamente neste corpo: `reportFallback`, `this.tm.runLifecycle.withRunStates`, `this.tm.sessionStore.summarizeAgentById`, `this.tm.sessionStore.summarizeSession`, `this.tm.sessions.getAnnouncedActiveAgentId`, `this.tm.sessions.liveSessions.get`.

Alvos de atribuição ou incremento: `summary`.

SHA-256 do trecho: `ab6f34a87864960845968a1d580655f3d565eb1cbac18ddb65dc9abc36b257d9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
