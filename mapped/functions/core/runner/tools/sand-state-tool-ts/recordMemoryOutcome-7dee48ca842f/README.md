# `recordMemoryOutcome`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-state-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-state-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:762945-762954](../../../../../../../reference/runtime/host-main.cjs#L762945-L762954) | `FunctionDeclaration` | não | `ctx, args, deps, outcome` |
| [evaluation:555555-555564](../../../../../../../reference/runtime/sand-eval-runner.cjs#L555555-L555564) | `FunctionDeclaration` | não | `ctx, args, deps, outcome` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:762945-762954](../../../../../../../reference/runtime/host-main.cjs#L762945-L762954) | 3 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:555555-555564](../../../../../../../reference/runtime/sand-eval-runner.cjs#L555555-L555564) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:762945

Chamadas escritas diretamente neste corpo: `recordMemoryWrite`, `sandMemoryWriteReport`.

SHA-256 do trecho: `cfa58fa3dfbbf73e142d06f608a3cece6216b113d846ec3fc8679b86928b534e`.

### evaluation:555555

Chamadas escritas diretamente neste corpo: `recordMemoryWrite`, `sandMemoryWriteReport`.

SHA-256 do trecho: `cfa58fa3dfbbf73e142d06f608a3cece6216b113d846ec3fc8679b86928b534e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
