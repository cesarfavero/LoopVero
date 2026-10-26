# `unlinkIgnoringMissing`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/sand-data-files.ts` · [README do módulo](../../../../modules/host/sand-data-files-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:454022-454028](../../../../../reference/runtime/host-main.cjs#L454022-L454028) | `FunctionDeclaration` | não | `entry` |
| [evaluation:627622-627628](../../../../../reference/runtime/sand-eval-runner.cjs#L627622-L627628) | `FunctionDeclaration` | não | `entry` |
| [state-worker:623-629](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L623-L629) | `FunctionDeclaration` | não | `entry` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:454022-454028](../../../../../reference/runtime/host-main.cjs#L454022-L454028) | 1 | 0 | 0 | 0 | 1 | 1 |
| [evaluation:627622-627628](../../../../../reference/runtime/sand-eval-runner.cjs#L627622-L627628) | 1 | 0 | 0 | 0 | 1 | 1 |
| [state-worker:623-629](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L623-L629) | 1 | 0 | 0 | 0 | 1 | 1 |

### host:454022

Chamadas escritas diretamente neste corpo: `findSystemErrno`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `368f70ca176127ab98fbf7e9fbb70725adcecc9d1f1e5551e39d2d57916aef61`.

### evaluation:627622

Chamadas escritas diretamente neste corpo: `findSystemErrno`.

Alvos de lançamento explícito: `error63`.

SHA-256 do trecho: `73cf7c8093a90229d36856c15990292a5dfb8689c1284f94d6c42fdc2381f8a9`.

### state-worker:623

Chamadas escritas diretamente neste corpo: `findSystemErrno`.

Alvos de lançamento explícito: `error`.

SHA-256 do trecho: `8aa0c3b1d082ec89f7166d07485b752dcddbb13be13a5727b1e53aa379f47f56`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
