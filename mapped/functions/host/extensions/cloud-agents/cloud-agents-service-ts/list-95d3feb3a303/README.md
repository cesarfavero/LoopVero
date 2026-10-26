# `list`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/cloud-agents/cloud-agents-service.ts` · [README do módulo](../../../../../../modules/host/extensions/cloud-agents/cloud-agents-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:538424-538427](../../../../../../../reference/runtime/host-main.cjs#L538424-L538427) | `ArrowFunctionExpression` | sim | `bcId` |
| [host:538450-538453](../../../../../../../reference/runtime/host-main.cjs#L538450-L538453) | `ArrowFunctionExpression` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:538424-538427](../../../../../../../reference/runtime/host-main.cjs#L538424-L538427) | 1 | 0 | 1 | 2 | 0 | 0 |
| [host:538450-538453](../../../../../../../reference/runtime/host-main.cjs#L538450-L538453) | 1 | 0 | 1 | 2 | 0 | 0 |

### host:538424

Chamadas escritas diretamente neste corpo: `readCloudAgentPublishProposals`, `this.getAppPublishClient`, `this.options.isPublishConfirmCardEnabled`.

SHA-256 do trecho: `22a8d6b3c0915f01d24b1184e11349d9ca59d95941b0ec371e7e99ec4306885f`.

### host:538450

Chamadas escritas diretamente neste corpo: `readCloudAgentAppSecrets`, `this.getAppPublishClient`, `this.options.isPublishConfirmCardEnabled`.

SHA-256 do trecho: `c4265b23acc862c1bb23ecf82a507bea837b0d453b4f072c40bd3cd24fd2e5c3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
