# `escapeXml`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/skills/README.md).

**Módulo:** `core/runner/tools/skill/skill-tool.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/skill/skill-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:565817-565819](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L565817-L565819) | `FunctionDeclaration` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:565817-565819](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L565817-L565819) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:565817

Chamadas escritas diretamente neste corpo: `.replaceAll`, `value.replaceAll`.

SHA-256 do trecho: `47782d6bef4ab0d8319cdd1fc7d117b86b4c6a0d6de6f83121b5f28a0f2709fa`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
