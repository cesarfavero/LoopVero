# `BoxLifecycleService.recreateInBox`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-lifecycle/box-lifecycle-service.ts` · [README do módulo](../../../../../../modules/host/extensions/box-lifecycle/box-lifecycle-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:506325-506331](../../../../../../../reference/runtime/host-main.cjs#L506325-L506331) | `method` | sim | `options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:506325-506331](../../../../../../../reference/runtime/host-main.cjs#L506325-L506331) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:506325

Chamadas escritas diretamente neste corpo: `this.client.recreateSandBox`.

SHA-256 do trecho: `245f4eca1ec548118d03a1594dbaa31af097de63b0db59a676b5474796bc4d62`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
