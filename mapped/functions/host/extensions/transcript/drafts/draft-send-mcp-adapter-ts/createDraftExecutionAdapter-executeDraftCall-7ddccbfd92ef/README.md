# `createDraftExecutionAdapter/executeDraftCall`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/drafts/draft-send-mcp-adapter.ts` · [README do módulo](../../../../../../../modules/host/extensions/transcript/drafts/draft-send-mcp-adapter-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:733049-733085](../../../../../../../../reference/runtime/host-main.cjs#L733049-L733085) | `FunctionExpression` | sim | `call` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:733049-733085](../../../../../../../../reference/runtime/host-main.cjs#L733049-L733085) | 5 | 0 | 2 | 4 | 0 | 1 |

### host:733049

Chamadas escritas diretamente neste corpo: `baseCtx.with`, `boundDraftCallError`, `describeDraftCallFailure`, `draftCallResultJsonText`, `draftSendDeadline.run`, `errorMessage`, `mcp.createExecutor`, `mcp.resolveNeedsAuthSlot`.

Alvos de atribuição ou incremento: `failure3`, `resultText`.

SHA-256 do trecho: `08e7ea419d6a654a168c94533fc03f9a0980c7fffd72ec5705eb72db721ea55a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
