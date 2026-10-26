# `resolveSkill`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/skills/README.md).

**Módulo:** `core/runner/tools/skill/skill-tool.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/skill/skill-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:565799-565816](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L565799-L565816) | `FunctionDeclaration` | não | `listed, requested, { unlisted = [] } = {}` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:565799-565816](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L565799-L565816) | 3 | 2 | 0 | 3 | 0 | 0 |

### evaluation:565799

Chamadas escritas diretamente neste corpo: `distinctSkills`, `looseKey2`, `pool.filter`, `query2.includes`, `requested.trim`.

SHA-256 do trecho: `773326965c01470abe5b7c7268887020defb5fdd34129005d09b945e60b9b4bd`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
