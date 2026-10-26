# `SandAgentDb.constructor`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/agent-db.ts` · [README do módulo](../../../../../../modules/host/extensions/session/agent-db-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:718292-718310](../../../../../../../reference/runtime/host-main.cjs#L718292-L718310) | `method` | não | `dbPath, options2 = {}` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:718292-718310](../../../../../../../reference/runtime/host-main.cjs#L718292-L718310) | 0 | 0 | 0 | 0 | 1 | 1 |

### host:718292

Chamadas escritas diretamente neste corpo: `agentIdFromDbPath`, `ensureSandDataDirSync`, `liveDbHandleCount`, `openConfiguredDb`, `prepareStatements`, `registerLiveDbHandle`, `this.close`, `this.seedDefaultMetadataIfMissing`.

Alvos de atribuição ou incremento: `this.agentDirName`, `this.db`, `this.dbPath`, `this.handleRegistered`, `this.onBusyError`, `this.options`, `this.resolvedDbPath`, `this.statements`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `35ab9c789d6eb56f0e12516047e999c6efb0ead669916217d7bcfa0ccbb219fb`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
