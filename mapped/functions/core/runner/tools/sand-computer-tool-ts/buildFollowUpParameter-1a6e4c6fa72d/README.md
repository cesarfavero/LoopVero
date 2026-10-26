# `buildFollowUpParameter`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/sand-computer-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-computer-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:777032-777043](../../../../../../../reference/runtime/host-main.cjs#L777032-L777043) | `FunctionDeclaration` | não | `autoReview` |
| [evaluation:576677-576688](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576677-L576688) | `FunctionDeclaration` | não | `autoReview` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777032-777043](../../../../../../../reference/runtime/host-main.cjs#L777032-L777043) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:576677-576688](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576677-L576688) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:777032

Chamadas escritas diretamente neste corpo: `.describe`, `.max`, `.min`, `.optional`, `.superRefine`, `allowed.join`, `buildComputerActionCoreSchema`, `external_exports2.array`, `isAutoReviewEnforcing`.

SHA-256 do trecho: `d6478ec7ae9f9ca8c7098771fc941842e136c5e230584ec311c37d1f69aa1684`.

### evaluation:576677

Chamadas escritas diretamente neste corpo: `.describe`, `.max`, `.min`, `.optional`, `.superRefine`, `allowed.join`, `buildComputerActionCoreSchema`, `external_exports3.array`, `isAutoReviewEnforcing`.

SHA-256 do trecho: `7b3a65732f1c7452f91ed6de8b5cb65a038dde5667f1f555b6d8ff758fec43e4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
