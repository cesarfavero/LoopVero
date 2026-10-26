# `skillPools`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/skills/README.md).

**Módulo:** `core/runner/tools/skill/skill-tool.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/skill/skill-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:565968-565977](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L565968-L565977) | `FunctionDeclaration` | não | `listedSkills, loadableSkills` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:565968-565977](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L565968-L565977) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:565968

Chamadas escritas diretamente neste corpo: `.filter`, `distinctSkills`, `listed.map`, `modelInvocableSkills`, `new Set`.

SHA-256 do trecho: `455e3e889d7a6740340eddf4dbeab211a4e7fbc6a05dd0b1a5a5d4c7cca6d319`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
