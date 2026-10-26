# `createSubagentRuntime/isAborting`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/subagent-runtime.ts` · [README do módulo](../../../../../modules/core/runner/subagent-runtime-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:535628-535628](../../../../../../reference/runtime/sand-eval-runner.cjs#L535628-L535628) | `ArrowFunctionExpression` | não | `subagentAgentId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:535628-535628](../../../../../../reference/runtime/sand-eval-runner.cjs#L535628-L535628) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:535628 usa retorno implícito de arrow function.

### evaluation:535628

Chamadas escritas diretamente neste corpo: `abortingSubagents.has`.

SHA-256 do trecho: `b6f06f5d8b4148f22fd0b910269bcc0c1b732bce06196003dc1eb201611c780a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
