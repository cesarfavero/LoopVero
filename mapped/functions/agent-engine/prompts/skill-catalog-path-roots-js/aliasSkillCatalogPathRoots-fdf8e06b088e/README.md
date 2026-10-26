# `aliasSkillCatalogPathRoots`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/skill-catalog-path-roots.js` · [README do módulo](../../../../../modules/agent-engine/prompts/skill-catalog-path-roots-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:639599-639654](../../../../../../reference/runtime/host-main.cjs#L639599-L639654) | `FunctionDeclaration` | não | `skills` |
| [evaluation:430213-430268](../../../../../../reference/runtime/sand-eval-runner.cjs#L430213-L430268) | `FunctionDeclaration` | não | `skills` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:639599-639654](../../../../../../reference/runtime/host-main.cjs#L639599-L639654) | 7 | 5 | 0 | 2 | 0 | 0 |
| [evaluation:430213-430268](../../../../../../reference/runtime/sand-eval-runner.cjs#L430213-L430268) | 7 | 5 | 0 | 2 | 0 | 0 |

### host:639599

Chamadas escritas diretamente neste corpo: `.reduce`, `.split`, `UNLISTABLE_PATH.test`, `assignRoots`, `createNode`, `members2.map`, `members2.push`, `membersByRoot.get`, `membersByRoot.set`, `membersByRoot.values`, `new Map`, `node2.children.get`, `node2.children.set`, `node2.skillIndexes.push`, `rootByIndex.get`, `roots.push`, `segments.slice`, `skill.fullPath.replace`, `skill.fullPath.slice`, `skills.entries`, `skills.keys`, `skills[computed].fullPath.slice`.

Alvos de atribuição ou incremento: `aliasedSkills[computed]`, `child`, `node2`, `nodeByIndex[computed]`, `savedLength`.

SHA-256 do trecho: `b0e996bce96b7b2a3b8e6fc3ed902527338dbd5a9d8f563d757fc3d0376652fc`.

### evaluation:430213

Chamadas escritas diretamente neste corpo: `.reduce`, `.split`, `UNLISTABLE_PATH.test`, `assignRoots`, `createNode`, `members2.map`, `members2.push`, `membersByRoot.get`, `membersByRoot.set`, `membersByRoot.values`, `new Map`, `node2.children.get`, `node2.children.set`, `node2.skillIndexes.push`, `rootByIndex.get`, `roots.push`, `segments.slice`, `skill.fullPath.replace`, `skill.fullPath.slice`, `skills.entries`, `skills.keys`, `skills[computed].fullPath.slice`.

Alvos de atribuição ou incremento: `aliasedSkills[computed]`, `child`, `node2`, `nodeByIndex[computed]`, `savedLength`.

SHA-256 do trecho: `b0e996bce96b7b2a3b8e6fc3ed902527338dbd5a9d8f563d757fc3d0376652fc`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
