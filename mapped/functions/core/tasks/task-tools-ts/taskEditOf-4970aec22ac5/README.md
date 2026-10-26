# `taskEditOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/tasks/README.md).

**Módulo:** `core/tasks/task-tools.ts` · [README do módulo](../../../../../modules/core/tasks/task-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:739484-739503](../../../../../../reference/runtime/host-main.cjs#L739484-L739503) | `FunctionDeclaration` | não | `args` |
| [evaluation:538787-538806](../../../../../../reference/runtime/sand-eval-runner.cjs#L538787-L538806) | `FunctionDeclaration` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:739484-739503](../../../../../../reference/runtime/host-main.cjs#L739484-L739503) | 8 | 0 | 0 | 3 | 1 | 0 |
| [evaluation:538787-538806](../../../../../../reference/runtime/sand-eval-runner.cjs#L538787-L538806) | 8 | 0 | 0 | 3 | 1 | 0 |

### host:739484

Chamadas escritas diretamente neste corpo: `.filter`, `Object.keys`, `new SandToolInputError`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `c02c1c5d589787e801c863223aeba072116c60b8179b16b1c8c4fc3b86e4566a`.

### evaluation:538787

Chamadas escritas diretamente neste corpo: `.filter`, `Object.keys`, `new SandToolInputError`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `c02c1c5d589787e801c863223aeba072116c60b8179b16b1c8c4fc3b86e4566a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
