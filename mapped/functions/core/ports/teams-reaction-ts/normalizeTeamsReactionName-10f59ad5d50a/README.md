# `normalizeTeamsReactionName`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/ports/teams-reaction.ts` · [README do módulo](../../../../../modules/core/ports/teams-reaction-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:768291-768298](../../../../../../reference/runtime/host-main.cjs#L768291-L768298) | `FunctionDeclaration` | não | `raw` |
| [evaluation:563807-563814](../../../../../../reference/runtime/sand-eval-runner.cjs#L563807-L563814) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768291-768298](../../../../../../reference/runtime/host-main.cjs#L768291-L768298) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:563807-563814](../../../../../../reference/runtime/sand-eval-runner.cjs#L563807-L563814) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:768291

Chamadas escritas diretamente neste corpo: `TEAMS_REACTION_NAMES.find`, `lowered.endsWith`, `lowered.slice`, `lowered.startsWith`, `raw.trim`, `trimmed.toLowerCase`.

SHA-256 do trecho: `2251952fe86de185b9c12fe8ad6170b85f759cef4cf3087ba26ebf3f0f1a1377`.

### evaluation:563807

Chamadas escritas diretamente neste corpo: `TEAMS_REACTION_NAMES.find`, `lowered.endsWith`, `lowered.slice`, `lowered.startsWith`, `raw.trim`, `trimmed.toLowerCase`.

SHA-256 do trecho: `2251952fe86de185b9c12fe8ad6170b85f759cef4cf3087ba26ebf3f0f1a1377`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
