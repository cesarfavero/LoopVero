# `start/getWebhookCredential`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/automations/README.md).

**Módulo:** `host/extensions/automations/extension.ts` · [README do módulo](../../../../../../modules/host/extensions/automations/extension-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:506002-506008](../../../../../../../reference/runtime/host-main.cjs#L506002-L506008) | `ArrowFunctionExpression` | sim | `{ agentId, localId }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:506002-506008](../../../../../../../reference/runtime/host-main.cjs#L506002-L506008) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:506002

Chamadas escritas diretamente neste corpo: `.find`, `assertWebhookCredentialTarget`, `credentialService.getCredential`, `transcript.getAgentAutomations`.

SHA-256 do trecho: `c18d14ba7286f528287a349e0a7b122bef1e78c1ae5e3e7baa26a3d752f23e10`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
