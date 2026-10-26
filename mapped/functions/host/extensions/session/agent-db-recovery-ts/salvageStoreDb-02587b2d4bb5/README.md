# `salvageStoreDb`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/agent-db-recovery.ts` · [README do módulo](../../../../../../modules/host/extensions/session/agent-db-recovery-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:717923-717965](../../../../../../../reference/runtime/host-main.cjs#L717923-L717965) | `FunctionDeclaration` | não | `sourcePath2, freshDb, log5` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:717923-717965](../../../../../../../reference/runtime/host-main.cjs#L717923-L717965) | 1 | 0 | 0 | 2 | 0 | 1 |

### host:717923

Chamadas escritas diretamente neste corpo: `copySalvageableSqliteRows`, `freshDb.prepare`, `openSqliteForSalvage`, `source.close`.

Alvos de atribuição ou incremento: `counts.automationCompletions`, `counts.blobs`, `counts.kv`, `counts.transcript`.

SHA-256 do trecho: `d7111668d722fb7fbcd7fce9490e2dbc13b0210cb5dbaa2601d805c969976fa8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
