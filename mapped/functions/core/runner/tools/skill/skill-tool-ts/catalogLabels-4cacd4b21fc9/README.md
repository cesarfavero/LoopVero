# `catalogLabels`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/skills/README.md).

**Módulo:** `core/runner/tools/skill/skill-tool.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/skill/skill-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:565716-565731](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L565716-L565731) | `FunctionDeclaration` | não | `skills` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:565716-565731](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L565716-L565731) | 0 | 1 | 0 | 1 | 0 | 0 |

### evaluation:565716

Chamadas escritas diretamente neste corpo: `nameCounts.get`, `nameCounts.set`, `new Map`, `skillToolName`, `skills.map`.

SHA-256 do trecho: `fd6c4331033f9294ab83aca21d8dde3119cd54996b5fd8cb5b0b185c1d3ff065`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
