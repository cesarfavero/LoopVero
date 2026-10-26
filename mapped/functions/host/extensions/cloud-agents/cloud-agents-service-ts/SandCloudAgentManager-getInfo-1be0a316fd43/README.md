# `SandCloudAgentManager.getInfo`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/cloud-agents/cloud-agents-service.ts` · [README do módulo](../../../../../../modules/host/extensions/cloud-agents/cloud-agents-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:538607-538609](../../../../../../../reference/runtime/host-main.cjs#L538607-L538609) | `method` | sim | `bcId, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:538607-538609](../../../../../../../reference/runtime/host-main.cjs#L538607-L538609) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:538607

Chamadas escritas diretamente neste corpo: `this.backend.getInfo`.

SHA-256 do trecho: `7e2ede6cc0ea05ac3dc457e2b9146b20cfdb3ab42cb9eadbe560b130ce2f5e5c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
