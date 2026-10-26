# `ComputerUseInstructionsSection`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/shared.js` · [README do módulo](../../../../../modules/agent-engine/prompts/shared-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:636163-636167](../../../../../../reference/runtime/host-main.cjs#L636163-L636167) | `FunctionDeclaration` | não | `{ props }` |
| [evaluation:424219-424223](../../../../../../reference/runtime/sand-eval-runner.cjs#L424219-L424223) | `FunctionDeclaration` | não | `{ props }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:636163-636167](../../../../../../reference/runtime/host-main.cjs#L636163-L636167) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:424219-424223](../../../../../../reference/runtime/sand-eval-runner.cjs#L424219-L424223) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:636163

Chamadas escritas diretamente neste corpo: `getRequiredToolName`, `jsx`, `jsxs`.

SHA-256 do trecho: `a32adb89af41c2fb2c3ced1a8ea9dcc48d65a566766fe4e47a3345057a365550`.

### evaluation:424219

Chamadas escritas diretamente neste corpo: `getRequiredToolName`, `jsx`, `jsxs`.

SHA-256 do trecho: `a32adb89af41c2fb2c3ced1a8ea9dcc48d65a566766fe4e47a3345057a365550`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
