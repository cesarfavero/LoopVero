# `userInfoMatchesAvailableSubagentTypes`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/user-info.js` · [README do módulo](../../../../../modules/agent-engine/prompts/user-info-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:640481-640486](../../../../../../reference/runtime/host-main.cjs#L640481-L640486) | `FunctionDeclaration` | não | `content, description9` |
| [evaluation:431095-431100](../../../../../../reference/runtime/sand-eval-runner.cjs#L431095-L431100) | `FunctionDeclaration` | não | `content, description9` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:640481-640486](../../../../../../reference/runtime/host-main.cjs#L640481-L640486) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:431095-431100](../../../../../../reference/runtime/sand-eval-runner.cjs#L431095-L431100) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:640481

Chamadas escritas diretamente neste corpo: `content.includes`, `renderAvailableSubagentTypesSection`.

SHA-256 do trecho: `5c89f6bc59c3ee36238818a24815dadbb4474b298955295437cd12becdca53c5`.

### evaluation:431095

Chamadas escritas diretamente neste corpo: `content.includes`, `renderAvailableSubagentTypesSection`.

SHA-256 do trecho: `5c89f6bc59c3ee36238818a24815dadbb4474b298955295437cd12becdca53c5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
