# `createPromptCollectorGlue/resolveMcpCustomInstructions`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/prompt-collector-glue.ts` · [README do módulo](../../../../../modules/core/runner/prompt-collector-glue-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:533757-533766](../../../../../../reference/runtime/sand-eval-runner.cjs#L533757-L533766) | `FunctionDeclaration` | sim | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:533757-533766](../../../../../../reference/runtime/sand-eval-runner.cjs#L533757-L533766) | 1 | 0 | 1 | 3 | 0 | 1 |

### evaluation:533757

Chamadas escritas diretamente neste corpo: `host.mcp.getCustomInstructions`, `new Map`.

SHA-256 do trecho: `ff2dc62a2576aa3ece7cbd0e33d6f61d2cea367e70dec35e26db34d63b912bd3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
