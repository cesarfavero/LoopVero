# `collectMentionedSkills`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/skills/README.md).

**Módulo:** `shared/skills/skill-model.ts` · [README do módulo](../../../../../modules/shared/skills/skill-model-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:683176-683227](../../../../../../reference/runtime/host-main.cjs#L683176-L683227) | `FunctionDeclaration` | não | `prompt, skills` |
| [evaluation:534212-534263](../../../../../../reference/runtime/sand-eval-runner.cjs#L534212-L534263) | `FunctionDeclaration` | não | `prompt, skills` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:683176-683227](../../../../../../reference/runtime/host-main.cjs#L683176-L683227) | 4 | 8 | 0 | 2 | 0 | 0 |
| [evaluation:534212-534263](../../../../../../reference/runtime/sand-eval-runner.cjs#L534212-L534263) | 4 | 8 | 0 | 2 | 0 | 0 |

### host:683176

Chamadas escritas diretamente neste corpo: `byId.has`, `byId.set`, `claimedPositions.add`, `claimedPositions.has`, `found.add`, `handles.push`, `handles.sort`, `isMentionWordChar`, `lower.indexOf`, `match2[computed].toLowerCase`, `new Map`, `new Set`, `prompt.matchAll`, `prompt.toLowerCase`, `skill.id.toLowerCase`, `skillMentionHandles`, `skills.filter`.

Alvos de atribuição ou incremento: `index`, `overlaps`, `position`.

SHA-256 do trecho: `997503c5f782b49262832c8f3a68698074856181c81b5dad447b785879272443`.

### evaluation:534212

Chamadas escritas diretamente neste corpo: `byId.has`, `byId.set`, `claimedPositions.add`, `claimedPositions.has`, `found.add`, `handles.push`, `handles.sort`, `isMentionWordChar`, `lower.indexOf`, `match2[computed].toLowerCase`, `new Map`, `new Set`, `prompt.matchAll`, `prompt.toLowerCase`, `skill.id.toLowerCase`, `skillMentionHandles`, `skills.filter`.

Alvos de atribuição ou incremento: `index`, `overlaps`, `position`.

SHA-256 do trecho: `997503c5f782b49262832c8f3a68698074856181c81b5dad447b785879272443`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
