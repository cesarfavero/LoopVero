# `scheduleConversationSizeMaintenance`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/conversation-size-limits.ts` · [README do módulo](../../../../../../modules/host/extensions/session/conversation-size-limits-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:719392-719418](../../../../../../../reference/runtime/host-main.cjs#L719392-L719418) | `FunctionDeclaration` | não | `host, dbPath, db` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:719392-719418](../../../../../../../reference/runtime/host-main.cjs#L719392-L719418) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:719392

Chamadas escritas diretamente neste corpo: `Date.now`, `blobDbPathFor`, `isConversationGcEnabled`, `softGcStateByBlobDbPath.get`, `softGcStateByBlobDbPath.set`.

Alvos de atribuição ou incremento: `state.inFlight`, `state.lastRunMs`.

SHA-256 do trecho: `a30b778db8ac63d6b4700db56aafe9bd6c1d6961a06bdf399e41963b0aa60f3b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
