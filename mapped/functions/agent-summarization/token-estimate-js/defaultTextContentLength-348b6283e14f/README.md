# `defaultTextContentLength`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-summarization/token-estimate.js` · [README do módulo](../../../../modules/agent-summarization/token-estimate-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:620657-620672](../../../../../reference/runtime/host-main.cjs#L620657-L620672) | `FunctionDeclaration` | não | `message` |
| [evaluation:305011-305026](../../../../../reference/runtime/sand-eval-runner.cjs#L305011-L305026) | `FunctionDeclaration` | não | `message` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:620657-620672](../../../../../reference/runtime/host-main.cjs#L620657-L620672) | 3 | 1 | 0 | 3 | 0 | 0 |
| [evaluation:305011-305026](../../../../../reference/runtime/sand-eval-runner.cjs#L305011-L305026) | 3 | 1 | 0 | 3 | 0 | 0 |

### host:620657

Chamadas escritas diretamente neste corpo: `Array.isArray`, `isRedactedString`, `safeLength`.

Alvos de atribuição ou incremento: `len`.

SHA-256 do trecho: `bb6115a66f8759dc06d9b770a778f9baa82c68db7b1c5d113b33fdc1155ed226`.

### evaluation:305011

Chamadas escritas diretamente neste corpo: `Array.isArray`, `isRedactedString`, `safeLength`.

Alvos de atribuição ou incremento: `len`.

SHA-256 do trecho: `bb6115a66f8759dc06d9b770a778f9baa82c68db7b1c5d113b33fdc1155ed226`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
