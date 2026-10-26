# `applyToolKeepList`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tool-policy/agent-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tool-policy/agent-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:542591-542608](../../../../../../../reference/runtime/sand-eval-runner.cjs#L542591-L542608) | `FunctionDeclaration` | não | `base, keepList` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:542591-542608](../../../../../../../reference/runtime/sand-eval-runner.cjs#L542591-L542608) | 2 | 1 | 0 | 1 | 0 | 0 |

### evaluation:542591

Chamadas escritas diretamente neste corpo: `agentTools`, `new Map`, `new Set`, `offered.delete`, `offered.has`, `omitted.set`, `toolsWithheldBy`.

SHA-256 do trecho: `ad3150677cfcbfa47ee62ee09f5fe0e6bcf6458e8cf19e260c5ee1a11c7d044a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
