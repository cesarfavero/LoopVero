# `missingSkillMessage`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/skills/README.md).

**Módulo:** `core/runner/tools/skill/skill-tool.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/skill/skill-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:565862-565868](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L565862-L565868) | `FunctionDeclaration` | não | `requested, skills` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:565862-565868](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L565862-L565868) | 2 | 0 | 0 | 2 | 0 | 0 |

### evaluation:565862

Chamadas escritas diretamente neste corpo: `.join`, `.sort`, `String`, `names3.slice`, `new Set`, `skills.map`.

SHA-256 do trecho: `f6de29051fca81366fde5037d29033acdee2ac28d740275f18e659dc8279a235`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
