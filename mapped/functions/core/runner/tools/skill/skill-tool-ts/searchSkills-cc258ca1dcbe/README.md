# `searchSkills`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/skills/README.md).

**Módulo:** `core/runner/tools/skill/skill-tool.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/skill/skill-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:566013-566051](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L566013-L566051) | `FunctionDeclaration` | sim | `ctx, search, pools, request3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:566013-566051](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L566013-L566051) | 4 | 0 | 1 | 1 | 0 | 0 |

### evaluation:566013

Chamadas escritas diretamente neste corpo: `boundSkillSearch`, `createSkillsVirtualMount`, `hits.flatMap`, `hits.map`, `renderSkillSearch`, `results.map`, `search.agentId`, `search.onSearch`, `skillSearchLines`, `skillToolSearches.increment`, `virtualMount.search`.

SHA-256 do trecho: `eed89fcec3d0df0eaa369d2a70d496026b3b64be87b229826ca8610abf6965aa`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
