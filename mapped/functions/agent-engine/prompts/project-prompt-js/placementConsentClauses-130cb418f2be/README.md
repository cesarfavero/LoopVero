# `placementConsentClauses`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/project-prompt.js` · [README do módulo](../../../../../modules/agent-engine/prompts/project-prompt-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:641051-641067](../../../../../../reference/runtime/host-main.cjs#L641051-L641067) | `FunctionDeclaration` | não | `{ placementConsentEnabled, crossEnvironmentPlacementEnabled, repoPlacementEnabled }` |
| [evaluation:431664-431680](../../../../../../reference/runtime/sand-eval-runner.cjs#L431664-L431680) | `FunctionDeclaration` | não | `{ placementConsentEnabled, crossEnvironmentPlacementEnabled, repoPlacementEnabled }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:641051-641067](../../../../../../reference/runtime/host-main.cjs#L641051-L641067) | 9 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:431664-431680](../../../../../../reference/runtime/sand-eval-runner.cjs#L431664-L431680) | 9 | 0 | 0 | 2 | 0 | 0 |

### host:641051

Chamadas escritas diretamente neste corpo: `.join`, `rows.join`.

SHA-256 do trecho: `53f0a053d54a604ac1ede36149704bc56566f734366bfda2d27a5020599b003d`.

### evaluation:431664

Chamadas escritas diretamente neste corpo: `.join`, `rows.join`.

SHA-256 do trecho: `53f0a053d54a604ac1ede36149704bc56566f734366bfda2d27a5020599b003d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
