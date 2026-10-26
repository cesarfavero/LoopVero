# `planFilePath`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-summarization/durable-blocks.js` · [README do módulo](../../../../modules/agent-summarization/durable-blocks-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:619952-619956](../../../../../reference/runtime/host-main.cjs#L619952-L619956) | `FunctionDeclaration` | não | `plan` |
| [evaluation:304306-304310](../../../../../reference/runtime/sand-eval-runner.cjs#L304306-L304310) | `FunctionDeclaration` | não | `plan` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:619952-619956](../../../../../reference/runtime/host-main.cjs#L619952-L619956) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:304306-304310](../../../../../reference/runtime/sand-eval-runner.cjs#L304306-L304310) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:619952

Chamadas escritas diretamente neste corpo: `planName.endsWith`.

SHA-256 do trecho: `810324da626300e051b6da69b55dc3c552d778f21cb7ef334c85cf03096d66da`.

### evaluation:304306

Chamadas escritas diretamente neste corpo: `planName.endsWith`.

SHA-256 do trecho: `810324da626300e051b6da69b55dc3c552d778f21cb7ef334c85cf03096d66da`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
