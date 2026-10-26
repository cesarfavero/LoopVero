# `createMachineRoutedTool/execute`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/sand-user-computer-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-user-computer-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:778346-778375](../../../../../../../reference/runtime/host-main.cjs#L778346-L778375) | `ArrowFunctionExpression` | sim | `ctx, interactionHandler, argsStream, meta3` |
| [evaluation:578081-578110](../../../../../../../reference/runtime/sand-eval-runner.cjs#L578081-L578110) | `ArrowFunctionExpression` | sim | `ctx, interactionHandler, argsStream, meta3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:778346-778375](../../../../../../../reference/runtime/host-main.cjs#L778346-L778375) | 3 | 1 | 0 | 1 | 0 | 1 |
| [evaluation:578081-578110](../../../../../../../reference/runtime/sand-eval-runner.cjs#L578081-L578110) | 3 | 1 | 0 | 1 | 0 | 1 |

### host:778346

Chamadas escritas diretamente neste corpo: `.execute`, `Array.isArray`, `JSON.parse`, `resolveSandUserComputer`.

Alvos de atribuição ou incremento: `machineId`, `rawArgs`, `targetsUserComputer`.

SHA-256 do trecho: `53a31b28a1b3664fb8ab2a0b6b88d187cf83f0b52a65e015510dc39e2b310747`.

### evaluation:578081

Chamadas escritas diretamente neste corpo: `.execute`, `Array.isArray`, `JSON.parse`, `resolveSandUserComputer`.

Alvos de atribuição ou incremento: `machineId`, `rawArgs`, `targetsUserComputer`.

SHA-256 do trecho: `680ed570ded2ec219e461eaa44a8fd267410d0096a9c3ab0503419d96cad8b31`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
