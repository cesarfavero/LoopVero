# `withGmailAttachmentGuard/execute`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/mcp/gmail-attachment-guard.ts` · [README do módulo](../../../../../modules/core/mcp/gmail-attachment-guard-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:584371-584383](../../../../../../reference/runtime/sand-eval-runner.cjs#L584371-L584383) | `FunctionExpression` | sim | `ctx, args, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:584371-584383](../../../../../../reference/runtime/sand-eval-runner.cjs#L584371-L584383) | 3 | 0 | 0 | 4 | 0 | 0 |

### evaluation:584371

Chamadas escritas diretamente neste corpo: `.toLowerCase`, `attachmentsOf`, `composeToolName`, `executor.execute`, `firstVerdict`, `gmailAttachmentRefusal`, `record3`, `recordMcpExecRefusedBeforeDispatch`, `refusalResult`, `resolveServerHost`, `uploadFileOffered`.

SHA-256 do trecho: `59c8d85c76739161f5be98d23a41b174b2a5a6ed590504c7015ba144822301bd`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
