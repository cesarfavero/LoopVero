# `turnMessageToString`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-summarization/summarization-handler.js` · [README do módulo](../../../../modules/agent-summarization/summarization-handler-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:620792-620825](../../../../../reference/runtime/host-main.cjs#L620792-L620825) | `FunctionDeclaration` | não | `redactedMessage, enablePromptSizeGuards` |
| [evaluation:305146-305179](../../../../../reference/runtime/sand-eval-runner.cjs#L305146-L305179) | `FunctionDeclaration` | não | `redactedMessage, enablePromptSizeGuards` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:620792-620825](../../../../../reference/runtime/host-main.cjs#L620792-L620825) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:305146-305179](../../../../../reference/runtime/sand-eval-runner.cjs#L305146-L305179) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:620792

Chamadas escritas diretamente neste corpo: `.join`, `Array.isArray`, `content.map`, `fromRedactedCoreMessage`.

SHA-256 do trecho: `6afcfabde460e6b8f9dce4ae1536bfdca71e59b452d5d7df4822d92fcd3df2ea`.

### evaluation:305146

Chamadas escritas diretamente neste corpo: `.join`, `Array.isArray`, `content.map`, `fromRedactedCoreMessage`.

SHA-256 do trecho: `6afcfabde460e6b8f9dce4ae1536bfdca71e59b452d5d7df4822d92fcd3df2ea`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
