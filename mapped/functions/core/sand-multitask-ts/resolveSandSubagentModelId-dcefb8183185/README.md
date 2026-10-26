# `resolveSandSubagentModelId`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/tasks/README.md).

**Módulo:** `core/sand-multitask.ts` · [README do módulo](../../../../modules/core/sand-multitask-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:530219-530229](../../../../../reference/runtime/sand-eval-runner.cjs#L530219-L530229) | `FunctionDeclaration` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:530219-530229](../../../../../reference/runtime/sand-eval-runner.cjs#L530219-L530229) | 5 | 0 | 0 | 5 | 0 | 0 |

### evaluation:530219

Chamadas escritas diretamente neste corpo: `EXECUTOR_PROFILE_NAME_PATTERN.test`, `args.executorProfileNames.has`.

SHA-256 do trecho: `c424640596014149003bb642c006773b9d5b0470b24d2ca6d983d58fdc28c2e7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
