# `createSubagentRuntime/wasAborted`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/subagent-runtime.ts` · [README do módulo](../../../../../modules/core/runner/subagent-runtime-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:535629-535629](../../../../../../reference/runtime/sand-eval-runner.cjs#L535629-L535629) | `ArrowFunctionExpression` | não | `subagentAgentId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:535629-535629](../../../../../../reference/runtime/sand-eval-runner.cjs#L535629-L535629) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:535629 usa retorno implícito de arrow function.

### evaluation:535629

Chamadas escritas diretamente neste corpo: `abortingSubagents.has`, `subagentRegistry.get`.

SHA-256 do trecho: `ec364aa525587deb1ff2bf8b48e880c9cfbcea938b5a47ae6d70fa0c7436f43e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
