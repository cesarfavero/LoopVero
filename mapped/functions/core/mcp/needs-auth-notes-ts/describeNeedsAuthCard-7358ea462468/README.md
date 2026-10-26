# `describeNeedsAuthCard`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/mcp/needs-auth-notes.ts` · [README do módulo](../../../../../modules/core/mcp/needs-auth-notes-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:584892-584910](../../../../../../reference/runtime/sand-eval-runner.cjs#L584892-L584910) | `FunctionDeclaration` | não | `slot, surfaced, resumesOnSignIn, followUp` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:584892-584910](../../../../../../reference/runtime/sand-eval-runner.cjs#L584892-L584910) | 5 | 0 | 0 | 4 | 0 | 0 |

### evaluation:584892

Chamadas escritas diretamente neste corpo: `describeCardFollowUp`, `describeConnectCardFollowUp`, `describeStdioSignInWait`, `describeTailnetHoldCard`, `formatMcpAccountDisplayName`, `legacyInAppFollowUp`.

SHA-256 do trecho: `1ee9ba1a01c9cbf18301a0fe1206f55164781cfd89ecedf08db279194650df6e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
