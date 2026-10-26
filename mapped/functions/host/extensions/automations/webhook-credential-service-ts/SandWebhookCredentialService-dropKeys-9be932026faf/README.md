# `SandWebhookCredentialService.dropKeys`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/automations/README.md).

**Módulo:** `host/extensions/automations/webhook-credential-service.ts` · [README do módulo](../../../../../../modules/host/extensions/automations/webhook-credential-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:505795-505817](../../../../../../../reference/runtime/host-main.cjs#L505795-L505817) | `method` | sim | `automationIds` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:505795-505817](../../../../../../../reference/runtime/host-main.cjs#L505795-L505817) | 1 | 0 | 3 | 1 | 0 | 1 |

### host:505795

Chamadas escritas diretamente neste corpo: `Promise.all`, `automationIds.flatMap`, `automationIds.join`, `errorLogTag`, `this.loadKeys`, `this.log`, `this.writes.enqueue`.

SHA-256 do trecho: `e75ed1778b4b152d1d25a4e8c1bad46542e139496e43f6cd84d626c1d4613f0d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
