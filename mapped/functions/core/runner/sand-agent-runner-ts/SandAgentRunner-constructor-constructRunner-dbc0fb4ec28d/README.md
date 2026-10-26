# `_SandAgentRunner.constructor/constructRunner`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/sand-agent-runner.ts` · [README do módulo](../../../../../modules/core/runner/sand-agent-runner-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:593579-593655](../../../../../../reference/runtime/sand-eval-runner.cjs#L593579-L593655) | `ArrowFunctionExpression` | não | `childOptions` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:593579-593655](../../../../../../reference/runtime/sand-eval-runner.cjs#L593579-L593655) | 31 | 0 | 0 | 1 | 0 | 0 |

### evaluation:593579

Chamadas escritas diretamente neste corpo: `new _SandAgentRunner`, `parentHostOptionsForSubagent`, `resolveSandAgentKind`, `sandAgentKindReadsAgentEmail`, `secureValuesForChildRunner`, `subagentChannelPorts`.

Alvos de atribuição ou incremento: `inheritedOptions`.

SHA-256 do trecho: `fbf6626116d169c5340bf63b604a2d72236fca09afacca8494bc13d6c9f6345e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
