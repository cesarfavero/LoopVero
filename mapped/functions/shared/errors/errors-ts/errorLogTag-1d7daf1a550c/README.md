# `errorLogTag`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/errors/errors.ts` · [README do módulo](../../../../../modules/shared/errors/errors-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:805-810](../../../../../../reference/runtime/host-main.cjs#L805-L810) | `FunctionDeclaration` | não | `error64` |
| [evaluation:474693-474698](../../../../../../reference/runtime/sand-eval-runner.cjs#L474693-L474698) | `FunctionDeclaration` | não | `error63` |
| [state-worker:660-665](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L660-L665) | `FunctionDeclaration` | não | `error` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:805-810](../../../../../../reference/runtime/host-main.cjs#L805-L810) | 3 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:474693-474698](../../../../../../reference/runtime/sand-eval-runner.cjs#L474693-L474698) | 3 | 0 | 0 | 2 | 0 | 0 |
| [state-worker:660-665](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L660-L665) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:805

Chamadas escritas diretamente neste corpo: `findSystemErrno`.

SHA-256 do trecho: `9a3b6df10075b6d65cf5199e18b1b7dd109facb6bac2f3cb68825a70d39eca44`.

### evaluation:474693

Chamadas escritas diretamente neste corpo: `findSystemErrno`.

SHA-256 do trecho: `9339bdffc5c52e2c1291ba839fb34192ff103ae3707970c979784c39840bc144`.

### state-worker:660

Chamadas escritas diretamente neste corpo: `findSystemErrno`.

SHA-256 do trecho: `071a8ca5537c116c3483b89f7f99450d50c18426c91e5a012a9af9ecab2eba41`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
