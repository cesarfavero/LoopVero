# `sandMaxBlockUntilMs`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/runner/tools/mcp-meta-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/mcp-meta-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:761838-761843](../../../../../../../reference/runtime/host-main.cjs#L761838-L761843) | `FunctionDeclaration` | não | `isComputerUseSubagent` |
| [evaluation:554104-554109](../../../../../../../reference/runtime/sand-eval-runner.cjs#L554104-L554109) | `FunctionDeclaration` | não | `isComputerUseSubagent` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:761838-761843](../../../../../../../reference/runtime/host-main.cjs#L761838-L761843) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:554104-554109](../../../../../../../reference/runtime/sand-eval-runner.cjs#L554104-L554109) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:761838

Chamadas escritas diretamente neste corpo: `Math.min`, `sandToolCallExecutionTimeoutMs`.

SHA-256 do trecho: `e808144fd84945c47ef6bd3ece99051c54d7da6b0729f8af24bb288c2c651a42`.

### evaluation:554104

Chamadas escritas diretamente neste corpo: `Math.min`, `sandToolCallExecutionTimeoutMs`.

SHA-256 do trecho: `e808144fd84945c47ef6bd3ece99051c54d7da6b0729f8af24bb288c2c651a42`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
