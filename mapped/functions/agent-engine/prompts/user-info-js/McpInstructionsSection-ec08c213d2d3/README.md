# `McpInstructionsSection`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/user-info.js` · [README do módulo](../../../../../modules/agent-engine/prompts/user-info-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:640430-640433](../../../../../../reference/runtime/host-main.cjs#L640430-L640433) | `FunctionDeclaration` | não | `{ mcpEntries }` |
| [evaluation:431044-431047](../../../../../../reference/runtime/sand-eval-runner.cjs#L431044-L431047) | `FunctionDeclaration` | não | `{ mcpEntries }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:640430-640433](../../../../../../reference/runtime/host-main.cjs#L640430-L640433) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:431044-431047](../../../../../../reference/runtime/sand-eval-runner.cjs#L431044-L431047) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:640430

Chamadas escritas diretamente neste corpo: `.join`, `jsx`, `mcpEntries.map`.

SHA-256 do trecho: `72c4c132f343db663288b5972ed135c244533260684c3c9bd25c9c3f39d3b859`.

### evaluation:431044

Chamadas escritas diretamente neste corpo: `.join`, `jsx`, `mcpEntries.map`.

SHA-256 do trecho: `72c4c132f343db663288b5972ed135c244533260684c3c9bd25c9c3f39d3b859`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
