# `sandAppUiReferenceDoc`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/box-reference-docs.ts` · [README do módulo](../../../../../modules/core/runner/box-reference-docs-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:558473-558503](../../../../../../reference/runtime/host-main.cjs#L558473-L558503) | `FunctionDeclaration` | não | `facts = {}` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:558473-558503](../../../../../../reference/runtime/host-main.cjs#L558473-L558503) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:558473

Chamadas escritas diretamente neste corpo: `.concat`, `.filter`, `.join`, `.map`, `MAP.settings.openers.join`, `MAP.settings.sections.flatMap`, `aQuoted`, `annotationsFor`, `detailsPaneLines`, `factRead`, `joinClauses`, `menuLine`, `pluginsLines`, `proseLines`, `quote`, `settingsTabsLine`, `shortcutsLine`, `sidebarTargetsLine`, `taughtOverviewTabIds2`.

SHA-256 do trecho: `58fded76d932966aa2ecde6a68f9f21d2be81a5ed2519e66baa4ca650f3a3368`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
