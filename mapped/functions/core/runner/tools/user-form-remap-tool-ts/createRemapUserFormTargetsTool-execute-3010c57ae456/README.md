# `createRemapUserFormTargetsTool/execute`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/user-form-remap-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/user-form-remap-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:778433-778441](../../../../../../../reference/runtime/host-main.cjs#L778433-L778441) | `ArrowFunctionExpression` | sim | `_ctx, args, d` |
| [evaluation:578167-578175](../../../../../../../reference/runtime/sand-eval-runner.cjs#L578167-L578175) | `ArrowFunctionExpression` | sim | `_ctx, args, d` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:778433-778441](../../../../../../../reference/runtime/host-main.cjs#L778433-L778441) | 0 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:578167-578175](../../../../../../../reference/runtime/sand-eval-runner.cjs#L578167-L578175) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:778433

Chamadas escritas diretamente neste corpo: `buildUserFormRemapReceipt`, `d.getAgentId`, `d.remapTargets`, `invariant`, `normalizeUserFormRemapArgs`.

SHA-256 do trecho: `1a4275239ce661e2cdc6b4f8ab9834738335d7dc1fec339bb423813c8a0b34e6`.

### evaluation:578167

Chamadas escritas diretamente neste corpo: `buildUserFormRemapReceipt`, `d.getAgentId`, `d.remapTargets`, `invariant`, `normalizeUserFormRemapArgs`.

SHA-256 do trecho: `1a4275239ce661e2cdc6b4f8ab9834738335d7dc1fec339bb423813c8a0b34e6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
