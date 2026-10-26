# `plainTextOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-summarization/prepare-messages.js` · [README do módulo](../../../../modules/agent-summarization/prepare-messages-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:620533-620539](../../../../../reference/runtime/host-main.cjs#L620533-L620539) | `FunctionDeclaration` | não | `value` |
| [evaluation:304887-304893](../../../../../reference/runtime/sand-eval-runner.cjs#L304887-L304893) | `FunctionDeclaration` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:620533-620539](../../../../../reference/runtime/host-main.cjs#L620533-L620539) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:304887-304893](../../../../../reference/runtime/sand-eval-runner.cjs#L304887-L304893) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:620533

Chamadas escritas diretamente neste corpo: `isRedactedString`, `value.unwrap`.

SHA-256 do trecho: `40fbf39f0be00ccfbf89a25142481cfd5cc8fcd23033b69de6db53e04104b021`.

### evaluation:304887

Chamadas escritas diretamente neste corpo: `isRedactedString`, `value.unwrap`.

SHA-256 do trecho: `40fbf39f0be00ccfbf89a25142481cfd5cc8fcd23033b69de6db53e04104b021`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
