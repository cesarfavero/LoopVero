# `streamedDynamicToolTarget`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/subagents/subagent-launch-prefetch.ts` · [README do módulo](../../../../../../modules/core/runner/subagents/subagent-launch-prefetch-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:556491-556495](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556491-L556495) | `FunctionDeclaration` | não | `envelope` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:556491-556495](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556491-L556495) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:556491

Chamadas escritas diretamente neste corpo: `/"namespace"\s*:\s*"([^"\\]*)"/.exec`, `/"toolName"\s*:\s*"([^"\\]*)"/.exec`.

SHA-256 do trecho: `9a5323dc31bdf9a19fe6411ccc07478f089b12a3e5ef20ed496b3ccf9e480f17`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
