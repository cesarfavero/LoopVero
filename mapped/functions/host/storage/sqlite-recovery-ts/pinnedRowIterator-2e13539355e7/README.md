# `pinnedRowIterator`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `host/storage/sqlite-recovery.ts` · [README do módulo](../../../../../modules/host/storage/sqlite-recovery-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:717502-717506](../../../../../../reference/runtime/host-main.cjs#L717502-L717506) | `FunctionDeclaration` | não | `statement` |
| [state-worker:910-914](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L910-L914) | `FunctionDeclaration` | não | `statement` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:717502-717506](../../../../../../reference/runtime/host-main.cjs#L717502-L717506) | 0 | 0 | 0 | 1 | 0 | 0 |
| [state-worker:910-914](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L910-L914) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:717502

Chamadas escritas diretamente neste corpo: `statement.iterate`, `statementByRowIterator.set`.

SHA-256 do trecho: `b62bf1ba42502e33864fb03b80d726711b8e638c1e1d2cdf41b1b2196f2002cd`.

### state-worker:910

Chamadas escritas diretamente neste corpo: `statement.iterate`, `statementByRowIterator.set`.

SHA-256 do trecho: `b62bf1ba42502e33864fb03b80d726711b8e638c1e1d2cdf41b1b2196f2002cd`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
