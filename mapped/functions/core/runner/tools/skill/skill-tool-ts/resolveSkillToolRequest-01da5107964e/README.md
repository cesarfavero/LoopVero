# `resolveSkillToolRequest`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/skills/README.md).

**Módulo:** `core/runner/tools/skill/skill-tool.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/skill/skill-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:565978-565984](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L565978-L565984) | `FunctionDeclaration` | não | `listedSkills, requested, loadableSkills` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:565978-565984](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L565978-L565984) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:565978

Chamadas escritas diretamente neste corpo: `modelInvocableSkills`, `resolveSkill`, `skillPools`.

SHA-256 do trecho: `42e6319395706ff5bfa71da861d23639556b1a24a72919166c5a3c24924b4f95`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
