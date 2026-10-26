# `assertWebhookCredentialTarget`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/automations/README.md).

**Módulo:** `host/extensions/automations/webhook-credential-service.ts` · [README do módulo](../../../../../../modules/host/extensions/automations/webhook-credential-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:505755-505762](../../../../../../../reference/runtime/host-main.cjs#L505755-L505762) | `FunctionDeclaration` | não | `automation, localId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:505755-505762](../../../../../../../reference/runtime/host-main.cjs#L505755-L505762) | 2 | 0 | 0 | 0 | 2 | 0 |

### host:505755

Chamadas escritas diretamente neste corpo: `.some`, `new SandWebhookCredentialTargetError`, `triggerList`.

Alvos de lançamento explícito: `SandWebhookCredentialTargetError`.

SHA-256 do trecho: `3d1bb7abd7d0708c2a5b36e94d492781430cf3c37c3488ee10003a96bf40dd89`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
