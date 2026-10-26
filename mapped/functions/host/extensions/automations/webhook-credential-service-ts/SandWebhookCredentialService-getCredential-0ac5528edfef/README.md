# `SandWebhookCredentialService.getCredential`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/automations/README.md).

**Módulo:** `host/extensions/automations/webhook-credential-service.ts` · [README do módulo](../../../../../../modules/host/extensions/automations/webhook-credential-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:505818-505827](../../../../../../../reference/runtime/host-main.cjs#L505818-L505827) | `method` | sim | `{     agentId,     localId   }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:505818-505827](../../../../../../../reference/runtime/host-main.cjs#L505818-L505827) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:505818

Chamadas escritas diretamente neste corpo: `stableAutomationId`, `this.ensureKey`, `this.webhookUrl`.

SHA-256 do trecho: `7d67c14778df84a24a6d980f0bddba89b76b5f560e52a6f81c524f0ca1590f3d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
