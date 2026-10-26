# `inAppActionsGuidance`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/sand-ui-map/actions.ts` · [README do módulo](../../../../../../modules/core/runner/sand-ui-map/actions-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:557981-557993](../../../../../../../reference/runtime/host-main.cjs#L557981-L557993) | `FunctionDeclaration` | não | `visibility = {}` |
| [evaluation:550789-550801](../../../../../../../reference/runtime/sand-eval-runner.cjs#L550789-L550801) | `FunctionDeclaration` | não | `visibility = {}` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:557981-557993](../../../../../../../reference/runtime/host-main.cjs#L557981-L557993) | 1 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:550789-550801](../../../../../../../reference/runtime/sand-eval-runner.cjs#L550789-L550801) | 1 | 1 | 0 | 2 | 0 | 0 |

### host:557981

Chamadas escritas diretamente neste corpo: `.join`, `.map`, `actionTerm`, `byRisk.get`, `byRisk.set`, `new Map`, `sandUiFactsForToolDescription`, `taughtActions`, `terms.push`.

SHA-256 do trecho: `a58c2b1b729968af94b96a156b4f69a8016fce2ab5c551c88d6eb92f9848bd98`.

### evaluation:550789

Chamadas escritas diretamente neste corpo: `.join`, `.map`, `actionTerm`, `byRisk.get`, `byRisk.set`, `new Map`, `sandUiFactsForToolDescription`, `taughtActions`, `terms.push`.

SHA-256 do trecho: `a58c2b1b729968af94b96a156b4f69a8016fce2ab5c551c88d6eb92f9848bd98`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
