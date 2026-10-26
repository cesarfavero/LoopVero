# `SandSourceMap.setMode`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/source-map/source-map-service.ts` · [README do módulo](../../../../../../modules/host/extensions/source-map/source-map-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:454409-454419](../../../../../../../reference/runtime/host-main.cjs#L454409-L454419) | `method` | sim | `agentId, mode` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:454409-454419](../../../../../../../reference/runtime/host-main.cjs#L454409-L454419) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:454409

Chamadas escritas diretamente neste corpo: `crypto.randomUUID`, `this.load`, `this.save`.

Alvos de atribuição ou incremento: `map4[computed]`.

SHA-256 do trecho: `755d839e066f06d5a005e3e9eee0ce0515609f115ee603f38185158bee03a548`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
