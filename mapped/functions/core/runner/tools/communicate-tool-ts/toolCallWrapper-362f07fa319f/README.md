# `toolCallWrapper`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/communicate-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/communicate-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:724962-724973](../../../../../../../reference/runtime/host-main.cjs#L724962-L724973) | `FunctionDeclaration` | não | `payload` |
| [evaluation:479933-479944](../../../../../../../reference/runtime/sand-eval-runner.cjs#L479933-L479944) | `FunctionDeclaration` | não | `payload` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:724962-724973](../../../../../../../reference/runtime/host-main.cjs#L724962-L724973) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:479933-479944](../../../../../../../reference/runtime/sand-eval-runner.cjs#L479933-L479944) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:724962

Chamadas escritas diretamente neste corpo: `encodeSandStep`, `new CommunicateUpdateArgs`, `new CommunicateUpdateToolCall`, `new ToolCall`.

SHA-256 do trecho: `9c80cda0ff6572558080080a5008c7d78d9bb2c7c288f4e987ebee8faf2deb71`.

### evaluation:479933

Chamadas escritas diretamente neste corpo: `encodeSandStep`, `new CommunicateUpdateArgs`, `new CommunicateUpdateToolCall`, `new ToolCall`.

SHA-256 do trecho: `9c80cda0ff6572558080080a5008c7d78d9bb2c7c288f4e987ebee8faf2deb71`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
