# `listApps`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/cloud-agents/cloud-agents-service.ts` · [README do módulo](../../../../../../modules/host/extensions/cloud-agents/cloud-agents-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:538428-538431](../../../../../../../reference/runtime/host-main.cjs#L538428-L538431) | `ArrowFunctionExpression` | sim | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:538428-538431](../../../../../../../reference/runtime/host-main.cjs#L538428-L538431) | 1 | 0 | 1 | 2 | 0 | 0 |

### host:538428

Chamadas escritas diretamente neste corpo: `readCloudAgentPublishedApps`, `this.getAppPublishClient`, `this.options.isPublishConfirmCardEnabled`.

SHA-256 do trecho: `11fcb6027ced621d50286fb2bf1032be33eddc93e3e1ffb818b856fec7e71f18`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
