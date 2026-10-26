# `createTurnObservation/observeMcpCallSettled`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/turn-observation.ts` · [README do módulo](../../../../../modules/core/runner/turn-observation-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:588670-588684](../../../../../../reference/runtime/sand-eval-runner.cjs#L588670-L588684) | `FunctionDeclaration` | sim | `call` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:588670-588684](../../../../../../reference/runtime/sand-eval-runner.cjs#L588670-L588684) | 3 | 0 | 1 | 1 | 0 | 0 |

### evaluation:588670

Chamadas escritas diretamente neste corpo: `.catch`, `call.resolveRoute`, `mcpExecToolCallIds.delete`, `onToolCallDiagnostic`.

SHA-256 do trecho: `ca8d4874d05ed18d370b5f565821f9e24478e35ad1d3fe916362571f4fd21663`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
