# `emitSummaryLifecycleAbandoned`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-engine/summarization-lifecycle.js` · [README do módulo](../../../../modules/agent-engine/summarization-lifecycle-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:647526-647528](../../../../../reference/runtime/host-main.cjs#L647526-L647528) | `FunctionDeclaration` | não | `ctx, source, reason` |
| [evaluation:439189-439191](../../../../../reference/runtime/sand-eval-runner.cjs#L439189-L439191) | `FunctionDeclaration` | não | `ctx, source, reason` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:647526-647528](../../../../../reference/runtime/host-main.cjs#L647526-L647528) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:439189-439191](../../../../../reference/runtime/sand-eval-runner.cjs#L439189-L439191) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:647526

Chamadas escritas diretamente neste corpo: `emitSummaryLifecycleTerminal`.

SHA-256 do trecho: `954df29f1a55ac1cc3dd2c27a2e63a5db70bca1a2bc0d783994388d56b6e127d`.

### evaluation:439189

Chamadas escritas diretamente neste corpo: `emitSummaryLifecycleTerminal`.

SHA-256 do trecho: `954df29f1a55ac1cc3dd2c27a2e63a5db70bca1a2bc0d783994388d56b6e127d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
