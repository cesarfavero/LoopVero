# `SandAgentDb.recoverInPlace`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/agent-db.ts` · [README do módulo](../../../../../../modules/host/extensions/session/agent-db-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:718374-718407](../../../../../../../reference/runtime/host-main.cjs#L718374-L718407) | `method` | não | `cause` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:718374-718407](../../../../../../../reference/runtime/host-main.cjs#L718374-L718407) | 3 | 0 | 0 | 3 | 0 | 1 |

### host:718374

Chamadas escritas diretamente neste corpo: `boundedConnectErrorClassOf`, `liveDbHandleCount`, `prepareStatements`, `recoverCorruptStoreDb`, `releaseLiveDbHandle`, `reportHostDiagnostic`, `reportSessionDiagnostic`, `this.db.close`, `this.options.onFailure`, `this.seedDefaultMetadataIfMissing`.

Alvos de atribuição ou incremento: `this.db`, `this.handleRegistered`, `this.hasRecoveredFromCorruption`, `this.isClosed`, `this.statements`.

SHA-256 do trecho: `4e45ee014884a51a12dbc0ac4e0b3313a5800cf9b82e1b98d2dcc57000ce6904`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
