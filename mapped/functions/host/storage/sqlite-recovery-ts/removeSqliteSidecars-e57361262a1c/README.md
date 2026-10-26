# `removeSqliteSidecars`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `host/storage/sqlite-recovery.ts` · [README do módulo](../../../../../modules/host/storage/sqlite-recovery-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:717341-717348](../../../../../../reference/runtime/host-main.cjs#L717341-L717348) | `FunctionDeclaration` | não | `dbPath` |
| [state-worker:749-756](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L749-L756) | `FunctionDeclaration` | não | `dbPath` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:717341-717348](../../../../../../reference/runtime/host-main.cjs#L717341-L717348) | 0 | 1 | 0 | 0 | 0 | 1 |
| [state-worker:749-756](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L749-L756) | 0 | 1 | 0 | 0 | 0 | 1 |

### host:717341

Chamadas escritas diretamente neste corpo: `removeSandDataTreeSync`.

SHA-256 do trecho: `795a320a0764669c9ed4f1a4f559e508aee12574b852683dc541eb6619879db1`.

### state-worker:749

Chamadas escritas diretamente neste corpo: `removeSandDataTreeSync`.

SHA-256 do trecho: `795a320a0764669c9ed4f1a4f559e508aee12574b852683dc541eb6619879db1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
