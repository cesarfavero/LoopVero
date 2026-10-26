# `hasToolInvocation`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-summarization/summarization-handler.js` · [README do módulo](../../../../modules/agent-summarization/summarization-handler-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:621295-621301](../../../../../reference/runtime/host-main.cjs#L621295-L621301) | `FunctionDeclaration` | não | `message` |
| [evaluation:305649-305655](../../../../../reference/runtime/sand-eval-runner.cjs#L305649-L305655) | `FunctionDeclaration` | não | `message` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:621295-621301](../../../../../reference/runtime/host-main.cjs#L621295-L621301) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:305649-305655](../../../../../reference/runtime/sand-eval-runner.cjs#L305649-L305655) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:621295

Chamadas escritas diretamente neste corpo: `Array.isArray`, `content.some`.

SHA-256 do trecho: `08122a84a0ffa6c33a3979c9fcef4095e925c9eb18be07d3e818250728adaf5b`.

### evaluation:305649

Chamadas escritas diretamente neste corpo: `Array.isArray`, `content.some`.

SHA-256 do trecho: `08122a84a0ffa6c33a3979c9fcef4095e925c9eb18be07d3e818250728adaf5b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
