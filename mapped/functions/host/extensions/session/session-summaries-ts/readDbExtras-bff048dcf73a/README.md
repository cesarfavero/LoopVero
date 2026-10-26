# `readDbExtras`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/context-compaction/README.md).

**Módulo:** `host/extensions/session/session-summaries.ts` · [README do módulo](../../../../../../modules/host/extensions/session/session-summaries-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:722555-722583](../../../../../../../reference/runtime/host-main.cjs#L722555-L722583) | `FunctionDeclaration` | não | `db, dirName, dbStats` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:722555-722583](../../../../../../../reference/runtime/host-main.cjs#L722555-L722583) | 0 | 0 | 0 | 2 | 0 | 1 |

### host:722555

Chamadas escritas diretamente neste corpo: `db.get`, `db.getAgentOrigin`, `db.getAgentPurpose`, `db.getAwaitingUserResponse`, `db.getLastTurnSettlement`, `db.getSandProfile`, `db.getUnreadState`, `deriveTranscriptExtras`, `getDefaultAgentMetadata`, `getSummaryUpdatedAt`, `parseAgentId`, `seedActivityFromMtime`.

SHA-256 do trecho: `288ae360b0c95eeeddf4c3dbc931f4f154c7114eaeddc69229530e3196b7b25a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
