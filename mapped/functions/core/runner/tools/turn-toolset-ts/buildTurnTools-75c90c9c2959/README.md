# `buildTurnTools`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/turn-toolset.ts` · [README do módulo](../../../../../../modules/core/runner/tools/turn-toolset-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:582666-582733](../../../../../../../reference/runtime/sand-eval-runner.cjs#L582666-L582733) | `FunctionDeclaration` | não | `host, turn, props` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:582666-582733](../../../../../../../reference/runtime/sand-eval-runner.cjs#L582666-L582733) | 4 | 0 | 0 | 3 | 0 | 0 |

### evaluation:582666

Chamadas escritas diretamente neste corpo: `.map`, `contextHintedTools.map`, `createTurnToolContext`, `decisions.enforce`, `deviceToolsForTurn`, `dynamicToolPlacementFor`, `fencedToolSet`, `listedTools.map`, `phoneTools.map`, `resolveSandTurnToolDecisions`, `runTurnToolBuilders`, `sharePassSubagentTools`, `tools.push`, `withLegacyUpdateStateForwarding`, `withReadonlySubagentRefusals`.

SHA-256 do trecho: `25c27c3caeff669deeef1004bce17ff7364db94ad8208fd7f4f24ce71bf6f634`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
