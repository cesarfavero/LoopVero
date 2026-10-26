# `legacyInAppLinksGuidance`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/sand-ui-map/legacy-guidance.ts` · [README do módulo](../../../../../../modules/core/runner/sand-ui-map/legacy-guidance-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:555266-555277](../../../../../../../reference/runtime/host-main.cjs#L555266-L555277) | `FunctionDeclaration` | não | `visibility = {}, options2 = {}` |
| [evaluation:544198-544209](../../../../../../../reference/runtime/sand-eval-runner.cjs#L544198-L544209) | `FunctionDeclaration` | não | `visibility = {}, options2 = {}` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:555266-555277](../../../../../../../reference/runtime/host-main.cjs#L555266-L555277) | 3 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:544198-544209](../../../../../../../reference/runtime/sand-eval-runner.cjs#L544198-L544209) | 3 | 0 | 0 | 1 | 0 | 0 |

### host:555266

Chamadas escritas diretamente neste corpo: `.filter`, `.join`, `LEADING_ROUTES.map`, `TRAILING_ROUTES.map`, `conciseRouteGuidance`, `legacyTaughtSettingsAnchorIds`, `routeGuidance`, `taughtOverviewTabIds`.

SHA-256 do trecho: `98e6319d3d895ca937d50df7aecb7d05acba1e2fbc91dfad0dfb8e9ead84a87b`.

### evaluation:544198

Chamadas escritas diretamente neste corpo: `.filter`, `.join`, `LEADING_ROUTES.map`, `TRAILING_ROUTES.map`, `conciseRouteGuidance`, `legacyTaughtSettingsAnchorIds`, `routeGuidance`, `taughtOverviewTabIds`.

SHA-256 do trecho: `eb6c1285f95ffd421bc65cbd0abd9891a491c39544155da304f8a0b74f2d2d9b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
