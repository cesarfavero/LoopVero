# `stripNonPrintableCharacters`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-summarization/summarization-handler.js` · [README do módulo](../../../../modules/agent-summarization/summarization-handler-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:620941-620943](../../../../../reference/runtime/host-main.cjs#L620941-L620943) | `FunctionDeclaration` | não | `input2` |
| [evaluation:305295-305297](../../../../../reference/runtime/sand-eval-runner.cjs#L305295-L305297) | `FunctionDeclaration` | não | `input2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:620941-620943](../../../../../reference/runtime/host-main.cjs#L620941-L620943) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:305295-305297](../../../../../reference/runtime/sand-eval-runner.cjs#L305295-L305297) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:620941

Chamadas escritas diretamente neste corpo: `input2.replace`.

SHA-256 do trecho: `5cf6e553116f5a78f9da5ad4ff7aeede1dff0c51b2c878a3ad679c99630bc25e`.

### evaluation:305295

Chamadas escritas diretamente neste corpo: `input2.replace`.

SHA-256 do trecho: `5cf6e553116f5a78f9da5ad4ff7aeede1dff0c51b2c878a3ad679c99630bc25e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
