# `createSubagentRuntime/logSubagentLifecycle`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/subagent-runtime.ts` · [README do módulo](../../../../../modules/core/runner/subagent-runtime-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:535509-535514](../../../../../../reference/runtime/sand-eval-runner.cjs#L535509-L535514) | `FunctionDeclaration` | não | `phase, subagentAgentId, status` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:535509-535514](../../../../../../reference/runtime/sand-eval-runner.cjs#L535509-L535514) | 2 | 0 | 0 | 0 | 0 | 0 |

### evaluation:535509

Chamadas escritas diretamente neste corpo: `console.log`, `subagentRegistry.get`.

SHA-256 do trecho: `2ab4f7144dd819b8c611d39d0a2641d8bec16e62011d6e940e6b3c0934b025f4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
