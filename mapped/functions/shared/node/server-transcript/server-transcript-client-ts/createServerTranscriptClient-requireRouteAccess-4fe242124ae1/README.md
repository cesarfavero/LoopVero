# `createServerTranscriptClient/requireRouteAccess`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `shared/node/server-transcript/server-transcript-client.ts` · [README do módulo](../../../../../../modules/shared/node/server-transcript/server-transcript-client-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:712410-712417](../../../../../../../reference/runtime/host-main.cjs#L712410-L712417) | `ArrowFunctionExpression` | sim | `{ agentId }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:712410-712417](../../../../../../../reference/runtime/host-main.cjs#L712410-L712417) | 2 | 0 | 1 | 1 | 1 | 0 |

### host:712410

Chamadas escritas diretamente neste corpo: `deps.requiredAgents.has`, `new ServerTranscriptTailDisabledError`, `requireAccess`.

Alvos de lançamento explícito: `ServerTranscriptTailDisabledError`.

SHA-256 do trecho: `5e0316519d5b9333a4a2f9017f2594ac4f5ca422ec357a659140e4d4f2ba4385`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
