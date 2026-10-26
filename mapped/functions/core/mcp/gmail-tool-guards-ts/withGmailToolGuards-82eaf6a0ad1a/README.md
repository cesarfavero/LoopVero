# `withGmailToolGuards`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/mcp/gmail-tool-guards.ts` · [README do módulo](../../../../../modules/core/mcp/gmail-tool-guards-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:584680-584696](../../../../../../reference/runtime/sand-eval-runner.cjs#L584680-L584696) | `FunctionDeclaration` | não | `executor, resolveServerHost, options2 = { uploadFileOffered: () => false }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:584680-584696](../../../../../../reference/runtime/sand-eval-runner.cjs#L584680-L584696) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:584680

Chamadas escritas diretamente neste corpo: `withGmailAttachmentGuard`, `withGmailDraftSendGuard`, `withGmailIdNotFoundNote`, `withGmailSearchCoverageNote`, `withGmailSpamSearchNote`.

SHA-256 do trecho: `fe51f24f219352ad1764a615684b146e8d7d0f78d54b61c59f0d864ffd0ed30e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
