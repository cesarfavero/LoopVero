# `SandWebhookCredentialService.mintAndPersist`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/automations/README.md).

**Módulo:** `host/extensions/automations/webhook-credential-service.ts` · [README do módulo](../../../../../../modules/host/extensions/automations/webhook-credential-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:505864-505885](../../../../../../../reference/runtime/host-main.cjs#L505864-L505885) | `method` | sim | `automationId, keys` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:505864-505885](../../../../../../../reference/runtime/host-main.cjs#L505864-L505885) | 0 | 0 | 2 | 3 | 0 | 2 |

### host:505864

Chamadas escritas diretamente neste corpo: `errorLogTag`, `new CreateAutomationWebhookApiKeyRequest`, `this.deps.client.createAutomationWebhookApiKey`, `this.log`, `this.writes.enqueue`.

Alvos de atribuição ou incremento: `key`.

SHA-256 do trecho: `92489b779d2cea6e8ee6c5896ba50b2e040ed8eb61fbec29e83d80430d50f5c8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
