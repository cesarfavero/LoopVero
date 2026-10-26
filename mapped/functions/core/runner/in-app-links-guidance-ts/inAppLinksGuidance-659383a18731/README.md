# `inAppLinksGuidance`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/in-app-links-guidance.ts` · [README do módulo](../../../../../modules/core/runner/in-app-links-guidance-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:557769-557784](../../../../../../reference/runtime/host-main.cjs#L557769-L557784) | `FunctionDeclaration` | não | `visibility = {}, options2 = {}` |
| [evaluation:546205-546220](../../../../../../reference/runtime/sand-eval-runner.cjs#L546205-L546220) | `FunctionDeclaration` | não | `visibility = {}, options2 = {}` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:557769-557784](../../../../../../reference/runtime/host-main.cjs#L557769-L557784) | 3 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:546205-546220](../../../../../../reference/runtime/sand-eval-runner.cjs#L546205-L546220) | 3 | 0 | 0 | 1 | 0 | 0 |

### host:557769

Chamadas escritas diretamente neste corpo: `.filter`, `.join`, `LEADING_ROUTES2.map`, `TRAILING_ROUTES2.map`, `conciseRouteGuidance2`, `routeGuidance2`, `sandUiFactsForToolDescription`, `taughtOverviewTabIds2`, `taughtSettingsAnchorIds`.

SHA-256 do trecho: `6216d9e9b7abf31f0346382875239cb6351bc11dd9061b6537f346531c67d0cd`.

### evaluation:546205

Chamadas escritas diretamente neste corpo: `.filter`, `.join`, `LEADING_ROUTES2.map`, `TRAILING_ROUTES2.map`, `conciseRouteGuidance2`, `routeGuidance2`, `sandUiFactsForToolDescription`, `taughtOverviewTabIds2`, `taughtSettingsAnchorIds`.

SHA-256 do trecho: `18a351c3c0f51045e2de0c5d571be8cda2a957b8946e6204c12710345dbdcc0a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
