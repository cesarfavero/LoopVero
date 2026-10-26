# `CannotTruncatePromptError.constructor`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-summarization/error-handling.js` · [README do módulo](../../../../modules/agent-summarization/error-handling-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:620202-620209](../../../../../reference/runtime/host-main.cjs#L620202-L620209) | `method` | não | `message, details` |
| [evaluation:304556-304563](../../../../../reference/runtime/sand-eval-runner.cjs#L304556-L304563) | `method` | não | `message, details` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:620202-620209](../../../../../reference/runtime/host-main.cjs#L620202-L620209) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:304556-304563](../../../../../reference/runtime/sand-eval-runner.cjs#L304556-L304563) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:620202

Chamadas escritas diretamente neste corpo: `Object.setPrototypeOf`, `super`.

Alvos de atribuição ou incremento: `this.budgetChars`, `this.name`, `this.originalChars`, `this.totalMessages`.

SHA-256 do trecho: `39a2e8766587e7b9c9e53f167419c82de6b676fc0edd1bf8d12fde61a348fd06`.

### evaluation:304556

Chamadas escritas diretamente neste corpo: `Object.setPrototypeOf`, `super`.

Alvos de atribuição ou incremento: `this.budgetChars`, `this.name`, `this.originalChars`, `this.totalMessages`.

SHA-256 do trecho: `39a2e8766587e7b9c9e53f167419c82de6b676fc0edd1bf8d12fde61a348fd06`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
